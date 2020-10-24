import React from 'react';
import { AxiosError } from 'axios';
import { toast, ToastOptions } from 'react-toastify';

const toastConfig: ToastOptions = {
  position: 'top-right',
  type: 'error',
};

const errorContent = (message: string) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <span>Opss...</span>
    <br/>
    <span>{message}</span>
  </div>
);

export const handleError = (error: AxiosError) => {
  const { response } = error;
  if (response && response.data) {
    const { message } = response.data;
    console.log(message)

    if (message && typeof message === 'string' && message.length) {
      toast(errorContent(message), toastConfig);
    } else {
      toast('Tivemos um probleminha', toastConfig);
    }
  } else {
    toast('erro', toastConfig);
  }
};
