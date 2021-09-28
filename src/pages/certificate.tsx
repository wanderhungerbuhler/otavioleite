import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Container } from '../styles/Certificate';

export default function Certificate() {
  const router = useRouter();
  const { name } = router.query;

  function handlePrint() {
    window.print();
  }

  return (
    <Container>
      <button onClick={handlePrint}>Imprimir Certificado</button>
      <p>{name}</p>
      <Image
        src="/assets/honraaomerito.jpeg"
        width={960}
        height={600}
      />
    </Container>
  )
}
