'use client'
import React from 'react'
import style from './navbar.module.css'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
const Navbar = () => {
    const pathname = usePathname();
    return (
        <>
            <div className={style.navbsec}>
                <nav>
                    <ul className={style.ulitems}>
                        <li> <Link className={`link ${pathname === '/' ? 'active' : ''}`} href='/'>Home</Link></li>
                        <li> <Link className={`link ${pathname === '/contact' ? 'active' : ''}`} href='/course'>Course</Link></li>
                        <li> <Link className={`link ${pathname === '/about' ? 'active' : ''}`} href='/about'>About</Link></li>
                        <li> <Link className={`link ${pathname === '/services' ? 'active' : ''}`} href='/services'>Services</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar
