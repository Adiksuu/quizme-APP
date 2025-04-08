import React, { useState } from 'react'
import NavbarHeader from './NavbarHeader'
import NavbarLinks from './NavbarLinks'
import NavbarButtons from './NavbarButtons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    const [active, setActive] = useState(false)

  return (
    <div className={`navbar ${active ? 'mobile' : ''}`}>
        <NavbarHeader />
        <NavbarLinks />
        <NavbarButtons />
        <button onClick={() => setActive(!active)} className='navbar_mobile'><FontAwesomeIcon icon={active ? faBarsStaggered : faBars} /></button>
    </div>
  )
}
