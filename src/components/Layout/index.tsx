import React from 'react';
import styles from './styles.module.scss';
import AppHeader from 'components/AppHeader/app-header';
import { PrivateRoute } from 'context/auth';
import Home from 'pages/home/home';

const Layout: React.FC<any> = ({ match }) => (
  <div className={styles.layout}>
    <AppHeader />

    <main className={styles.main}>
      <PrivateRoute exact path={match.url} component={Home} />
    </main>
  </div>
);

export default Layout;
