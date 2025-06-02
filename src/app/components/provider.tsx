'use client';

import React, { ReactNode, useState } from 'react';
import { animals, persons } from '../data/actors';
import { PersonContext } from '../context/person-context';
import { AnimalContext } from '../context/animal-context';

type Props = {
  children: ReactNode;
};

export default function Provider({ children }: Props) {
  const [personList, setPersonList] = useState(persons);
  const [animalList, setAnimalList] = useState(animals);

  return (
    <PersonContext.Provider value={{ persons: personList, setPersons: setPersonList }}>
      <AnimalContext.Provider value={{ animals: animalList, setAnimals: setAnimalList }}>
        {children}
      </AnimalContext.Provider>
    </PersonContext.Provider>
  );
}
