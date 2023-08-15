'use client'

import Link from 'next/link';
import React, { useState } from 'react'

const Navbar = () => {
  const [titleText, setTitleText] = useState("Hi.")

    return (
        <ul className="flex fixed items-center top-10 space-x-20 font-bold text-3xl">
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='/projects'>Projects</Link>
            </li>
            <li>
                <Link href='/about'>About</Link>
            </li>
            <li>
                <Link href='/contact'>Contact</Link>
            </li>
        </ul>
    )
}

export default Navbar;