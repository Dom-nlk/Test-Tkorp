"use client"

import { AnimalContext } from '@/app/context/animal-context';
import { PersonContext } from '@/app/context/person-context';
import { Animal } from '@/app/types/animal.model';
import { Person } from '@/app/types/person.model';
import React, { use } from 'react';

type Props = {}

export default function page({}: Props) {
    const {persons} = use(PersonContext)
    const {animals} = use(AnimalContext)

    const oldestAnimal = getOldestAnimal(animals);
    const mostCommonSpecies = getMostCommonSpecies(animals);
    const personMostAnimals = getPersonWithMostAnimals(animals, persons);
    const personMostCats = getPersonWithMostCats(animals, persons);
    const heaviestAnimal = getHeaviestAnimal(animals);
    const personHeaviestGroup = getPersonWithHeaviestGroup(animals, persons);

    return (
        <div className="form-container">
            <h2>Statistiques</h2>
            <ul>
                <li>
                <strong>Animal le plus vieux :</strong> {oldestAnimal?.name} (né le {oldestAnimal?.dateOfBirth})
                </li>
                <li>
                <strong>Espèce la plus représentée :</strong> {mostCommonSpecies}
                </li>
                <li>
                <strong>Personne avec le plus d'animaux :</strong> {personMostAnimals?.firstName} {personMostAnimals?.lastName}
                </li>
                <li>
                <strong>Personne avec le plus de chats :</strong> {personMostCats?.firstName} {personMostCats?.lastName}
                </li>
                <li>
                <strong>Animal le plus lourd :</strong> {heaviestAnimal?.name} ({heaviestAnimal?.weight} kg)
                </li>
                <li>
                <strong>Personne avec le groupe d'animaux le plus lourd :</strong> {personHeaviestGroup?.person.firstName} {personHeaviestGroup?.person.lastName} ({personHeaviestGroup?.totalWeight} kg)
                </li>
            </ul>
        </div>
    );
}


// 1. Trouver l'animal le plus vieux
function getOldestAnimal(animals: Animal[]): Animal | null {
  return animals.reduce((oldest, current) => {
    return new Date(current.dateOfBirth) < new Date(oldest.dateOfBirth) ? current : oldest;
  }, animals[0]);
}

// 2. Espèce la plus représentée
function getMostCommonSpecies(animals: Animal[]): string {
  const speciesCount: Record<string, number> = {};
  animals.forEach(animal => {
    speciesCount[animal.species] = (speciesCount[animal.species] || 0) + 1;
  });
  return Object.entries(speciesCount).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
}

// 3. Personne avec le plus d'animaux
function getPersonWithMostAnimals(animals: Animal[], persons: Person[]): Person | null {
  const count: Record<number, number> = {};
  animals.forEach(animal => {
    count[animal.personId] = (count[animal.personId] || 0) + 1;
  });
  const maxId = Object.entries(count).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
  return persons.find(p => p.id === Number(maxId)) || null;
}

// 4. Personne avec le plus de chats
function getPersonWithMostCats(animals: Animal[], persons: Person[]): Person | null {
  const cats = animals.filter(animal => animal.species.toLowerCase() === 'chat');
  if (cats.length === 0) return null;

  const count: Record<number, number> = {};
  cats.forEach(animal => {
    count[animal.personId] = (count[animal.personId] || 0) + 1;
  });

  const maxEntry = Object.entries(count).reduce(
    (a, b) => (b[1] > a[1] ? b : a),
    [null, 0] as [string | null, number]
  );

  const personId = maxEntry[0];
  return personId ? persons.find(p => p.id === Number(personId)) || null : null;
}


// 5. Animal le plus lourd
function getHeaviestAnimal(animals: Animal[]): Animal | null {
  return animals.reduce((heaviest, current) => (current.weight > heaviest.weight ? current : heaviest), animals[0]);
}

// 6. Personne avec le groupe d'animaux le plus lourd
function getPersonWithHeaviestGroup(animals: Animal[], persons: Person[]): { person: Person; totalWeight: number } | null {
  const weightMap: Record<number, number> = {};
  animals.forEach(animal => {
    weightMap[animal.personId] = (weightMap[animal.personId] || 0) + animal.weight;
  });
  const maxEntry = Object.entries(weightMap).reduce((a, b) => (b[1] > a[1] ? b : a));
  const person = persons.find(p => p.id === Number(maxEntry[0]));
  return person ? { person, totalWeight: maxEntry[1] } : null;
}
