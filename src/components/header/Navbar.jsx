"use client"
import Link from "next/link"
import { GrTechnology } from "react-icons/gr";
import styles from "./header.module.css";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { TURBO_TRACE_DEFAULT_MEMORY_LIMIT } from "next/dist/shared/lib/constants";

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
                <div>
                    <LuMenu className={styles.icon} onClick={() => setToogle(prev => !prev)} />
                </div>
            </div>
            <div className={styles.navLinksWraper} style={{ clipPath: toogle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)" || "" }}>
                <ul className={styles.navLinks}>
                    <Link className={styles.navLink} href="/">Home</Link>
                    <Link className={styles.navLink} href="/articles">Articles</Link>
                    <Link className={styles.navLink} href="/about">About</Link>
                    <Link className={styles.navLink} href="/admin">Admin Dashboard</Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar