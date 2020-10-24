import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { FaSpinner } from 'react-icons/fa';

interface AppButtonProps {
  type: 'button' | 'submit';
  styling: 'solid' | 'outline';
  onClick?: (...args: any[]) => void;
  disabled?: boolean;
  loading?: boolean;
  text: string;
}

const AppButton: React.FC<AppButtonProps> = (props) => {
  const { styling, type, onClick, disabled, loading, text } = props;
  const [classes, setClasses] = useState('');

  useEffect(() => {
    if (styling === 'outline') {
      setClasses(`${styles.button} ${styles.outline}`);
    } else {
      setClasses(`${styles.button} ${styles.solid}`);
    }
  }, [styling]);

  return (
    <button
      className={classes}
      type={type}
      onClick={() => onClick && onClick()}
      disabled={disabled || loading}
    >
      {loading && <FaSpinner className={styles.spin} />}
      {text}
    </button>
  );
};

export default AppButton;
