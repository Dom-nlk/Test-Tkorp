"use client"

import React, { ReactNode, useState } from 'react'
import { persons } from '../data/actors'
import { PersonContext } from '../context/person-context'

type Props = {
    children: ReactNode
}

export default function Provider({children}: Props) {
    const [personList, setPersonList] = useState(persons)
  return (
    <>
        <PersonContext
            value={{
                persons: personList,
                setPersons: setPersonList
            }}
        >
            {children}
        </PersonContext>
    </>
  )
}