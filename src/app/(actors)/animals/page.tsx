import AnimalList from '@/app/components/animal-list'
import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <div>
        <header>
            <h1 className='card-title'>Catalogue de nos animaux</h1>
            <AnimalList/>
        </header>
    </div>
  )
}