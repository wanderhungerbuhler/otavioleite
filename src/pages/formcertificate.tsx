import React from 'react';

import { Container } from '../styles/Certificate';

export default function FormCertificate() {
  return (
    <Container>
      <span>Baixe o seu <br /><b>Certificado Honra ao Mérito</b></span>
      <form action="/certificate">
        <input name="name" placeholder="Nome Completo" />
        <button>Baixar Certificado</button>
      </form>
    </Container>
  );
}
