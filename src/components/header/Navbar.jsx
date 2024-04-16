"use client"
import Link from "next/link"
import { GrTechnology } from "react-icons/gr";
import styles from "./header.module.css";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";


const Navbar = () => {
    const [toogle, setToogle] = useState(false);
    return (
        <nav className={styles.navbar}>
            <div>
                <Link href="/" className={styles.logo}>
                    Cloud
                    <GrTechnology />
                    Company
                </Link>
                <div className={styles.icon}>
                    {toogle ? <IoCloseOutline onClick={() => setToogle(prev => !prev)} /> : <LuMenu onClick={() => setToogle(prev => !prev)} />}
                </div>
            </div>
            <div className={styles.navLinksWraper} style={{ clipPath: toogle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)" || "" }}>
                <ul className={styles.navLinks}>
                    <Link className={styles.navLink} onClick={() => setToogle(false)} href="/">Home</Link>
                    <Link className={styles.navLink} onClick={() => setToogle(false)} href="/articles">Articles</Link>
                    <Link className={styles.navLink} onClick={() => setToogle(false)} href="/about">About</Link>
                    <Link className={styles.navLink} onClick={() => setToogle(false)} href="/admin">Admin Dashboard</Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar