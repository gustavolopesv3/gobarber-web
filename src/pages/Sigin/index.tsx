import React, { useRef, useCallback, useContext } from 'react';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { AuthContext } from '../../context/AuthContext';
import getValidationErrors from '../../utils/getValidationErrors';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import Logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

interface SignFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { user, signIn } = useContext(AuthContext);

  const handleSubmit = useCallback(
    async (data: SignFormData) => {
      try {
        formRef.current?.setErrors({});
        const Schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatorio')
            .email('Digite um email valido'),
          password: Yup.string().required('Digite sua senha'),
        });
        await Schema.validate(data, {
          abortEarly: false,
        });
        signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }

      console.log(data);
    },
    [signIn]
  );
  return (
    <Container>
      <Content>
        <img src={Logo} alt="GoBarber" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="password"
          />
          <Button type="submit">Entrar</Button>
          <a href="">Esqueci minha senha</a>
        </Form>
        <a href="">
          <FiLogIn />
          Criar Conta
        </a>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
