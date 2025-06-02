import AddPersonForm from '@/app/components/add-person-form'
import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <div className='mt-2'>
      <h1>Ajouter une personne</h1>
      <AddPersonForm/>
    </div>
  )
}