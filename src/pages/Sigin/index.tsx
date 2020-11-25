import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import Logo from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={Logo} alt="GoBarber" />
      <form>
        <h1>Faça seu logon</h1>
        <input placeholder="E-mail" />
        <input type="password" placeholder="password" />
        <button type="submit">Entrar</button>
        <a href="">Esqueci minha senha</a>
      </form>
      <a href="">
        <FiLogIn />
        Criar Conta
      </a>
    </Content>

    <Background />
  </Container>
);

export default SignIn;
