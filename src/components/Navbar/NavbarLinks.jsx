import React from 'react'

export default function NavbarLinks() {
    const links = [
        {
            name: 'About',
            href: '#'
        },
        {
            name: 'Features',
            href: '#features'
        },
        {
            name: 'Countdown',
            href: '#countdown'
        },
        {
            name: 'FAQ',
            href: '#faq'
        },
    ]

    function NavbarLink ({ link }) {
        return (
            <li><a href={link.href}>{link.name}</a></li>
        )
    }

  return (
    <ul className="navbar_links">
        {links.map((link, index) => (
            <NavbarLink key={index} link={link} />
        ))}
    </ul>
  )
}
