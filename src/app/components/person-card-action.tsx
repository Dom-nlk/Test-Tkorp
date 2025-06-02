"use client"

import React from 'react'
import { Person } from '../types/person.model'
import { useRouter } from 'next/navigation'

type Props = {
    person: Person
}

export default function PersonCardAction({person}: Props) {

  const router = useRouter()
  const handleNavigate = ()=>{
    router.push(`/persons/${person.id}`)
  }

  return (
    <div className="flex">
      <button className="btn btn-netral" onClick={handleNavigate}>
        Voir
      </button>
      <button className="btn btn-danger">
        Suprimer
      </button>
    </div>
  )
}