import PersonList from '@/app/components/person-list'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <div>
        <header>
            <h1 className='card-title'>Liste de nos clients</h1>
            <Link href={"/add-person"} className='btn'>Ajouter un client</Link>
            <PersonList/>
        </header>
    </div>
  )
}