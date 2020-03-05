import React from "react";
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.menu}>
                <li className={styles.menu__item}>
                    <NavLink className={styles.menu__link} exact strict to="/">Home</NavLink>
                </li>
                <li className={styles.menu__item}>
                    <NavLink className={styles.menu__link} to="/settings">Settings</NavLink>
                </li>
                <li className={styles.menu__item}>
                    <NavLink className={styles.menu__link} to="/profile">Profile</NavLink>
                </li>
                <li className={styles.menu__item}>
                    <NavLink className={styles.menu__link} to="/add">Create post</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;