import React from "react";
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
    return (
      <nav className={styles.navbar}>
        <ul className={styles.menu}>
          <li
            className={styles.menu__item}
            style={{
              backgroundImage: `url('assets/icons/navbar-home.svg')`
            }}
          >
            <NavLink className={styles.menu__link} exact strict to="/">
              Home
            </NavLink>
          </li>
          <li
            className={styles.menu__item}
            style={{
              backgroundImage: `url('assets/icons/navbar-settings.svg')`
            }}
          >
            <NavLink className={styles.menu__link} to="/settings">
              Settings
            </NavLink>
          </li>
          <li
            className={styles.menu__item}
            style={{
              backgroundImage: `url('assets/icons/navbar-profile.svg')`
            }}
          >
            <NavLink className={styles.menu__link} to="/profile">
              Profile
            </NavLink>
          </li>
          <div className={styles.menu__linkButton}>
            <li
              className={styles.menu__item}
              style={{
                backgroundImage: `url('assets/icons/navbar-create.svg')`
              }}
            >
              <NavLink className={styles.menu__link} to="/add">
                Create post
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
    );
};

export default NavBar;