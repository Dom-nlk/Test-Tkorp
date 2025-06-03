"use client";

import React, { useContext } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PersonContext } from "../context/person-context";
import { AnimalContext } from "../context/animal-context";
import PersonCard from "./person-card";

// Fonction pour obtenir l'image de l'espèce
function getAnimalImage(species: string): string {
  const speciesKey = species.toLowerCase();
  const imageMap: { [key: string]: string } = {
    turtle: "/turtle.png",
    bird: "/bird.png",
    dog: "/dog.png",
    rabbit: "/rabbit.png",
    hamster: "/hamster.png",
    cat: "/cat.png",
  };
  return imageMap[speciesKey] || "/animal.png";
}

export default function AnimalDetails() {
  const { persons } = useContext(PersonContext);
  const { animals } = useContext(AnimalContext);
  const { id } = useParams();
  const currentAnimal = animals.find((a) => a.id === Number(id));

  if (!currentAnimal) {
    return notFound();
  }

  const owner = persons.find((p) => p.id === currentAnimal.personId);

  return (
    <div className="flex mt-2 center flex-col">
      <Image
        src={getAnimalImage(currentAnimal.species)}
        alt={currentAnimal.name}
        width={200}
        height={200}
        style={{
          background: "#3334",
          borderRadius: "50%",
        }}
      />
      <h2>{currentAnimal.name}</h2>
      <p>
        <strong>Espèce :</strong> {currentAnimal.species}
      </p>
      <p>
        <strong>Race :</strong> {currentAnimal.breed}
      </p>
      <p>
        <strong>Couleur :</strong> {currentAnimal.color}
      </p>
      <p>
        <strong>Poids :</strong> {currentAnimal.weight} kg
      </p>
      <p>
        <strong>Date de naissance :</strong> {currentAnimal.dateOfBirth}
      </p>
      {owner && <PersonCard person={owner} />}
      <Link href="/animals" className="btn">
        Retourner
      </Link>
    </div>
  );
}
