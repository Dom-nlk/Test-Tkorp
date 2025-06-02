"use client"

import React, { use } from 'react'
import PersonCard from './person-card'
import { PersonContext } from '../context/person-context'

type Props = {}

export default function PersonList({}: Props) {
  const {persons} = use(PersonContext)

  return (
    <div className='w-full flex card-block'>
        {persons.length === 0 && <h5>Il n`y a plus de contact</h5>}
        {persons.map((person) => (
        <PersonCard person={person} key={person.id} />
      ))}
    </div>
  )
}