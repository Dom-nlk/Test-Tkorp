import React, { ReactNode } from 'react'
import Navbar from '../components/navbar'
import Provider from '../components/provider'


type Props = {
    children: ReactNode
}

export default function layout({children}: Props) {
  return (
    <div className="page">
      <Provider>
            <Navbar/>
            {children}
      </Provider>
    </div>
  )
}