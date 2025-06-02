'use client';

import React, { useContext } from 'react';
import { Animal } from '../types/animal.model';
import { useRouter } from 'next/navigation';
import { AnimalContext } from '../context/animal-context';

type Props = {
  animal: Animal;
};

export default function AnimalCardAction({ animal }: Props) {
  const { animals, setAnimals } = useContext(AnimalContext);
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/animals/${animal.id}`);
  };

  const handleDeleteAnimal = () => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet animal ?')) {
      const updatedAnimals = animals.filter((a) => a.id !== animal.id);
      setAnimals(updatedAnimals);
    }
  };

  return (
    <div className="flex">
      <button className="btn btn-netral" onClick={handleNavigate}>
        Voir
      </button>
      <button className="btn btn-danger" onClick={handleDeleteAnimal}>
        Supprimer
      </button>
    </div>
  );
}
