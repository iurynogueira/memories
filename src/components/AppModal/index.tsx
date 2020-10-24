import React from 'react';
import Popup from 'reactjs-popup';
import styles from './styles.module.scss';

interface AppModalProps {
  open: boolean;
  close: () => void;
  content: React.ReactElement,
}

const AppModal: React.FC<AppModalProps> = (props) => {

  return (
    <Popup
      open={props.open}
      onClose={props.close}
      closeOnDocumentClick
    >
      <div className={styles.container}>{props.content}</div>
    </Popup>
  );
};

export default AppModal;
