import React from 'react';
import { Animal } from '../types/animal.model';
import Image from 'next/image';
import AnimalCardAction from './animal-card-action';

type Props = {
  animal: Animal;
};

export default function AnimalCard({ animal }: Props) {
    function getAnimalImage(species: string): string {
        const speciesKey = species.toLowerCase();
        const imageMap: { [key: string]: string } = {
            turtle: '/turtle.png',
            bird: '/bird.png',
            dog: '/dog.png',
            rabbit: '/rabbit.png',
            hamster: '/hamster.png',
            cat: '/cat.png',
        };
        return imageMap[speciesKey] || 'animal.png';
    }


  return (
    <div key={animal.id} className='flex mt-2 between card bg-card'>
      <Image
        src={getAnimalImage(animal.species)}
        width={70}
        height={70}
        alt={animal.name}
      />
      <div className='flex-1'>
        <h4>{animal.name}</h4>
        <p>Espèce : {animal.species}</p>
        <p>Poids : {animal.weight} kg</p>
        <AnimalCardAction animal={animal} />
      </div>
    </div>
  );
}
