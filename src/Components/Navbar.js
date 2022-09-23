import React from 'react'
import { Link, Navigate } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
    </nav>
  )
}
