import React from 'react';
import styles from './app-header.module.scss';
import { Link } from 'react-router-dom';
import useAuth from 'context/auth';
import { useLocation } from 'react-router-dom';

interface AppHeaderLink {
  href: string;
  title: string;
}

const AppHeader: React.FC = () => {
  const { logout } = useAuth();
  const location = useLocation();

  const links: AppHeaderLink[] = [
    {
      href: '/memories',
      title: 'Memories',
    }
  ];

  return (
    <div className={styles.container}>
      {/* <img src="/assets/brisacliente.svg" alt="logo" className={styles.logo} /> */}
      <ul className={styles.linksContainer}>
        {links.map((link, index) => (
          <li
            className={location.pathname === link.href ? styles.selected : ''}
            key={index}
          >
            <Link to={link.href}>{link.title}</Link>
          </li>
        ))}

        <li>
          <a href="#" style={{cursor: 'pointer'}}>Profile</a>
        </li>

        <button className={styles.logoutBtn} onClick={logout}>
          Logout
        </button>
      </ul>
    </div>
  );
};

export default AppHeader;
