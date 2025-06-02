"use client"

import React, { use } from 'react'
import { Person } from '../types/person.model'
import { useRouter } from 'next/navigation'
import { PersonContext } from '../context/person-context'

type Props = {
    person: Person
}

export default function PersonCardAction({person}: Props) {

  const {persons, setPersons} = use(PersonContext)
  const router = useRouter()

  const handleNavigate = ()=>{
    router.push(`/persons/${person.id}`)
  }

  const handleDeletePerson = ()=>{
    if (confirm("Etes-vous sûr de vouloir supprimer ce client")) {
      const newPersons = persons.filter((p) => p.id !== person.id)
      setPersons(newPersons)
    }
  }

  return (
    <div className="flex">
      <button className="btn btn-netral" onClick={handleNavigate}>
        Voir
      </button>
      <button className="btn btn-danger" onClick={handleDeletePerson}>
        Suprimer
      </button>
    </div>
  )
}