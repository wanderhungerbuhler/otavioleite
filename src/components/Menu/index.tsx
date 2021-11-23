import React from 'react';
import { Menu, Logo } from '@/styles/components/Menu/styles';

import { ActiveLink } from '@/components/ActiveLink';

const MenuHome: React.FC = () => {

  return (
    <Menu>
      <a><Logo /></a>

      <ActiveLink activeClassName="active" href="/#">
        <a>Home</a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="/#biografia">
        <a>Biografia</a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="/#acoesnacamara">
        <a>Ações na Câmara</a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="/posts">
        <a>Notícias</a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="#">
        <a>Mídias</a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="/#leiseprojetos">
        <a>Leis e Projetos</a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="/#contato">
        <a>Contato</a>
      </ActiveLink>

    </Menu>
  )
}

export default MenuHome;
