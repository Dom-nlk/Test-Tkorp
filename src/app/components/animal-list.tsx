"use client"

import React, { use } from 'react'
import { AnimalContext } from '../context/animal-context'
import AnimalCard from './animal-card'

type Props = {}

export default function AnimalList({}: Props) {
  const {animals} = use(AnimalContext)

  return (
    <div className='w-full flex card-block'>
        {animals.length === 0 && <h5>Il n`y a plus d'animaux</h5>}
        {animals.map((animal) => (
        <AnimalCard animal={animal} key={animal.id} />
      ))}
    </div>
  )
}