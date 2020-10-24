import React from 'react';
import styles from './styles.module.scss';

export interface MemorieCardProps {
    id: number;
    user_id: number;
    key: string;
    value: string;
    visibility: boolean;
}

const MemorieCard: React.FC<MemorieCardProps> = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.value}>
        {props.value}
      </div>
    </div>
  );
};

export default MemorieCard;
