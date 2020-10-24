import React from 'react';
import styles from './spinner.module.scss';
import { FaSpinner } from 'react-icons/fa';

export const Spinner = () => {
  return <FaSpinner className={styles.spin} size={40} />;
};
