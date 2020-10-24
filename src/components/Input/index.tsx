import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import { useField } from '@unform/core';

interface InputProps {
  label: string;
  placeholder: string;
  id: string;
  type: string;
  name: string;
  required?: boolean;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
}

const Input: React.FC<InputProps> = (props) => {
  const { id, label, placeholder, type, name, ...rest } = props;
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type ? type : 'text'}
        placeholder={placeholder}
        ref={inputRef}
        defaultValue={defaultValue}
        name={name}
        {...rest}
      />
    </div>
  );
};

export default Input;
