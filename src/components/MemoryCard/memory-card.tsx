import React from 'react';
import styles from './styles.module.scss';
import { toast, ToastOptions } from 'react-toastify';
import { removeMemory } from 'services/memories';


export interface MemoryCardProps {
    id: number;
    user_id: number;
    key: string;
    value: string;
    visibility: boolean;
}

const toastConfigSuccess: ToastOptions = {
  position: 'top-right',
  type: 'success',
  autoClose: 2000
};

const MemoryCard: React.FC<MemoryCardProps> = (props) => {

  function copy(textToCopy: string) {
    const el = document.createElement('textarea');
    el.value = textToCopy;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    toast('Copied!', toastConfigSuccess);
  }

  function remove(memoryId: number) {
    removeMemory(memoryId)
      .then(
        response => {
          toast('Forgotten memory!', toastConfigSuccess);
        }
      )
  }

  return (
    <div className={styles.card}>
      <div className={styles.value}>
        {props.value}
      </div>
      <div className={styles.action_row}>
        <div className={styles.copy_action} onClick={() => copy(props.value)}>Copy</div>
        <div className={styles.copy_action} onClick={() => remove(props.id)}>Delete</div>
      </div> 
    </div>
  );
};

export default MemoryCard;
