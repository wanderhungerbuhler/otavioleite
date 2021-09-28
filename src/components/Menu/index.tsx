import React from 'react';
import Link from 'next/link';

import { Menu, Logo } from '@/styles/Home';

const MenuHome: React.FC = () => {
  return (
    <Menu>
      <Link href="/">
        <a><Logo /></a>
      </Link>
      <ul>
        <li><Link href="#biografia"><a>Biografia</a></Link></li>
        <li><Link href="#acoesnacamara"><a>Ações na Câmara</a></Link></li>
        <li><Link href="#"><a>Notícias</a></Link></li>
        <li><Link href="#"><a>Mídias</a></Link></li>
        <li><Link href="#leiseprojetos"><a>Leis e Projetos</a></Link></li>
        <li><Link href="#contato"><a>Contato</a></Link></li>
      </ul>
    </Menu> 
  )
}

export default MenuHome;