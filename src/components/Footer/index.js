import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/logo_white.png'


function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img src={Logo} alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
