import React from "react";
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
import { ROUTES } from '../../consts';

const NavBar = () => {
    return (
      <nav className={styles.navbar}>
        <h1 className="hidden">Hoofdnavigatie</h1>
        <ul className={styles.menu}>
          <li
            className={styles.menu__item}
            style={{
              backgroundImage: `url('assets/icons/navbar-home.svg')`
            }}
          >
            <NavLink
              className={styles.menu__link}
              exact
              strict
              to={ROUTES.home}
            >
              <span className={styles.menu__text}>Home</span>
            </NavLink>
          </li>
          <li
            className={styles.menu__item}
            style={{
              backgroundImage: `url('assets/icons/navbar-profile.svg')`
            }}
          >
            <NavLink className={styles.menu__link} to={ROUTES.profile}>
              <span className={styles.menu__text}>Profiel</span>
            </NavLink>
          </li>
          <div className={styles.menu__linkButton}>
            <li
              className={styles.menu__item}
              style={{
                backgroundImage: `url('assets/icons/navbar-create.svg')`
              }}
            >
              <NavLink className={styles.menu__link} to={ROUTES.addpost}>
                <span className={styles.menu__text}>Creeër post</span>
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
    );
};

export default NavBar;