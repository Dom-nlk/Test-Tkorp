"use client";

import React, { use } from "react";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { animals, persons } from "../data/actors";

export default function UserDetails() {
  const { id } = useParams();
  const currentPerson = persons.find((p) => p.id === Number(id));

  if (!currentPerson) {
    return notFound();
  }
  const ownedAnimals = animals.filter((a) => a.personId === currentPerson.id)

  return (
    <div className="flex mt-2 center flex-col">
      <Image
        src={`https://avatar.iran.liara.run/public/${(currentPerson.id % 100) + 1}`}
        alt={currentPerson.firstName!}
        width={200}
        style={{
          background: "#3334",
          borderRadius: "50%",
        }}
        height={200}
      />
      <h2>{currentPerson?.firstName} {currentPerson?.lastName}</h2>
      <p>
        <strong>Email : </strong> {currentPerson?.email}
      </p>
      <p>
        <strong>Numero Telephone : </strong> {currentPerson?.phoneNumber}
      </p>

            <h3 className="mt-4">Animaux :</h3>
      {ownedAnimals.length === 0 ? (
        <p>Aucun animal trouvé pour cette personne.</p>
      ) : (
        <ul className="mt-2">
          {ownedAnimals.map((animal) => (
            <li key={animal.id} className="card card-block bg-muted p-2 mb-2 rounded">
              <h4>{animal.name} ({animal.species})</h4>
              <p><strong>Race :</strong> {animal.breed}</p>
              <p><strong>Couleur :</strong> {animal.color}</p>
              <p><strong>Poids :</strong> {animal.weight} g</p>
              <p><strong>Date de naissance :</strong> {animal.dateOfBirth}</p>
            </li>
          ))}
        </ul>
      )}

      <Link href={"/persons"} className="btn">
        Retourner
      </Link>
    </div>
  );
}