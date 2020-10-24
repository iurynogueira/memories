import React from 'react';
import styles from './login.module.scss';
import Input from 'components/Input';
import { Form } from '@unform/web';
import useAuth, { LoginData } from 'context/auth';
import { Redirect } from 'react-router-dom';
import AppButton from 'components/AppButton';

const Login: React.FC = () => {
  document.title = 'Login';

  const { login, isAuthenticated, loading } = useAuth();

  const handleSubmit = (data: LoginData) => {
    login(data);
  };

  if (isAuthenticated) {
    return <Redirect to="/memories" />;
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.rightColumn}>
          <img src="https://cdn.dribbble.com/users/573008/screenshots/4484579/affeti_da.png" alt="" />

          <Form className={styles.formWrapper} onSubmit={handleSubmit}>
            <Input
              id="username"
              label="Usuário"
              placeholder="Digite aqui o seu usuário"
              type="text"
              name="username"
              required
              min={11}
            />

            <Input
              id="password"
              label="Senha"
              placeholder="Digite aqui a sua senha"
              type="password"
              name="password"
              required
              min={3}
            />

            <AppButton
              type="submit"
              styling="solid"
              text="Entrar"
              loading={loading}
            />
            <br />
          </Form>

          <span className={styles.footer}>
            © 2020 Memories
          </span>
        </div>
      </main>
    </div>
  );
};

export default Login;
