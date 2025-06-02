import AnimalDetails from '@/app/components/animal-details'
import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <div className="mt-2">
        <AnimalDetails/>
    </div>
  )
}