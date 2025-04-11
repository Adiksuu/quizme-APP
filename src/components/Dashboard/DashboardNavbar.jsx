import React, { useState } from 'react'
import NavbarHeader from '../Navbar/NavbarHeader'
import DashboardNavbarTabs from '../Navbar/DashboardNavbarTabs'
import { faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function DashboardNavbar() {
    const [active, setActive] = useState(false)

  return (
    <div className={`navbar dashboard ${active ? 'mobile' : ''}`}>
        <NavbarHeader />
        <DashboardNavbarTabs />
        <button onClick={() => setActive(!active)} className='navbar_mobile'><FontAwesomeIcon icon={active ? faBarsStaggered : faBars} /></button>
    </div>
  )
}
