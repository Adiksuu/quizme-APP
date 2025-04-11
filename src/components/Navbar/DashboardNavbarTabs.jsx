import React, { useState } from 'react'

export default function DashboardNavbarTabs() {
    const [active, setActive] = useState('Overview')

    const tabs = [
        {
            name: 'Overview'
        },
        {
            name: 'Explore'
        },
        {
            name: 'Settings'
        },
    ]

    function NavbarLink ({ link }) {
        return (
            <li><a className={active === link.name ? 'active' : ''} onClick={() => setActive(link.name)}>{link.name}</a></li>
        )
    }

  return (
    <ul className="navbar_links">
        {tabs.map((link, index) => (
            <NavbarLink key={index} link={link} />
        ))}
    </ul>
  )
}
