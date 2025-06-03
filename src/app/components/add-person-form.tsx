"use client";

import { useContext } from "react";
import { PersonContext } from "../context/person-context";
import { useRouter } from "next/navigation";

export default function AddPersonForm() {
  const { persons, setPersons } = useContext(PersonContext);
  const router = useRouter();

const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault(); // Empêche le rechargement de la page.
  const form = new FormData(e.currentTarget);

  // Génère un ID unique
  let newId = 0;
  do {
    newId = Math.floor(Math.random() * 1000);
  } while (persons.some((p) => p.id === newId));

  const newPerson = {
    id: newId,
    firstName: form.get("firstName") as string,
    lastName: form.get("lastName") as string,
    email: form.get("email") as string,
    phoneNumber: form.get("phoneNumber") as string,
  };

  setPersons([newPerson, ...persons]);
  router.push("/persons"); // Redirige vers la liste
};


  return (
    <form onSubmit={handleSubmitForm} className="form-container">
      <div className="form-group">
        <label>Prénom</label>
        <input name="firstName" placeholder="Dominique" required/>
      </div>
      <div className="form-group">
        <label>Nom</label>
        <input name="lastName" placeholder="Nlandu" required />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" name="email" placeholder="dom.test@gmail.com" required />
      </div>
      <div className="form-group">
        <label>Téléphone</label>
        <input type="tel" name="phoneNumber" placeholder="243-0825" required />
      </div>
      <button type="submit" className="btn w-full">Ajouter le client</button>
    </form>
  );
}
