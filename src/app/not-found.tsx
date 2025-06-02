import Link from 'next/link'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {}

export default function notfound({}: Props) {
  return (
    <div className="flex flex-col center page">
        
        <h2>La page que vous cherchez n`existe pas</h2>
        <Link href={"/"} className='btn-link'>Retourner à l`accueil</Link>
    </div>
  )
}