import React from 'react';
import { Link } from 'react-router-dom';
import { RoutesPath } from '@/shared/consts';
import styles from './header.module.scss';

function Header() {
  const routesArray = Object.keys(RoutesPath)
    .map((key) => ({
      name: key,
      path: RoutesPath[key as keyof typeof RoutesPath],
    }))
    .filter((route) => route.path !== RoutesPath.NOT_FOUND);

  return (
    <header className="header">
      <nav className={styles.nav}>
        {routesArray.map((route) => (
          <Link key={route.name} to={route.path} className={styles.link}>
            {route.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
