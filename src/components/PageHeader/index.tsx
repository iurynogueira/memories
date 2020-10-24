import React from 'react';
import styles from './styles.module.scss';

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <div className={styles.welcome}>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

export default PageHeader;
