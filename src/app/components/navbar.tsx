import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <header className='navbar'>
        <Link href={"/"}>
            <Image src={"/tkorp_logo.png"} width={100} height={40} alt='logo'/>
        </Link>
    </header>
  )
}