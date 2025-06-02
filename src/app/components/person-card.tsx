import React from 'react'
import { Person } from '../types/person.model'
import Image from 'next/image'
import PersonCardAction from './person-card-action'

type Props = {
    person: Person
}

export default function PersonCard({person}: Props) {
  return (
    <div key={person.id} className='flex mt-2 between card bg-card'>
        <Image src={`https://avatar.iran.liara.run/public/${(person.id % 100) + 1}`} width={70} height={70} alt={person.firstName}/>
        <div className='flex-1'>
            <h4>{person.firstName} {person.lastName}</h4>
            <p>{person.email}</p>
            <p>{person.phoneNumber}</p>
            <PersonCardAction person={person} />
        </div>
    </div>
  )
}