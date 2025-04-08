import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbarButtons() {
  return (
    <div className="navbar_buttons">
        <Link to={"/login"}>Sign In</Link>
        <Link to={"/panel"}>Get Started</Link>
    </div>
  )
}
