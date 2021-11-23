import React from 'react';

import Image from 'next/image';
import OLKub from '../../public/assets/otavioleite-juscelino-kubitschek.png';
import OLDespertarPolitico from '../../public/assets/otavioleite-despertar-politico.png';
import OtavioLeiteAbout from '../../public/assets/otavioleite2.png';

import { ContainerAbout } from '@/styles/Home';

export default function About() {
  return (
    <>
      <ContainerAbout>
        <ul>
          <li>
            <Image
              width="300"
              height="400"
              src={OLKub} />
          </li>

          <li>
            <Image
              width="450"
              height="450"
              src={OtavioLeiteAbout} />
          </li>

          <li>
            <Image
              width="300"
              height="400"
              src={OLDespertarPolitico} />
          </li>
        </ul>

        <div className="content-about">
          <p>
            Otavio Leite, Deputado Federal do Rio de Janeiro, tem 58 anos, sergipano de Aracaju,
            é afilhado de batismo do ex-presidente Juscelino Kubitschek. Foi criado no Rio por seu avô –
            o senador Júlio Leite. É casado com a pedagoga Ângela Leite e tem dois filhos, Fernando e Otavio Filho.
          </p>

          <p>
            Professor universitário, especialista em Políticas Públicas pela UFRJ,
            estudou no Colégio Andrews de onde saiu para formar-se bacharel em Direito pela UERJ.
            Ainda na UERJ, presidiu o histórico Diretório Acadêmico Luiz Carpenter.
          </p>

          <p>
            Antes de iniciar sua carreira parlamentar, participou ativamente da administração pública nas duas
            gestões do então prefeito Marcello Alencar, quando exerceu os cargos de coordenador das administrações
            regionais e de secretário municipal de Governo, aos 29 anos de idade.
          </p>

          <p>
            Com uma trajetória política de compromisso com o Estado do Rio de Janeiro, Otavio,
            também ex vice-prefeito carioca, é autor de mais de 120 de leis de qualidade em vigor no Brasil
            (federal, estadual e municipal).
            Ele ocupa o primeiro lugar na lista dos deputados fluminenses que mais apresentaram projetos
            de lei na legislatura 2007-2011.
          </p>

          <p>
            Para o Legislativo, foi eleitor deputado federal (2011-2019) por três vezes consecutivas,
            na Assembleia Legislativa, a um mandato de deputado estadual (2003-04), além de vereador
            da Cidade do Rio de Janeiro também por três vezes consecutivas (1992 a 2002).
          </p>

          <p>
            Entre as suas principais lutas destacam-se a incansável defesa dos
            direitos das pessoas com deficiência e o empenho no desenvolvimento da
            indústria do turismo, com a consequente geração de emprego e renda;
            as ações políticas e jurídicas em favor da execução e continuidade das obras
            de saneamento da Baixada de Jacarepaguá, Barra da Tijuca e Recreio dos Bandeirantes,
            inclusive com a construção do emissário submarino da Barra, entre outras iniciativas
            visando mais qualidade de vida para os cariocas.
          </p>

          <p>
            Otavio Leite é o autor da alteração na lei eleitoral que obrigou os partidos políticos,
            no registro de candidatos no TSE, a apresentar suas promessas de campanha.
            É de sua iniciativa a PEC da Música – que barateia os preços dos CDs e DVDs – e foi o
            co-autor da criação da CPI do Apagão Aéreo. Participou como membro da PEC da Reforma
            Tributária e articulou a aprovação dos projetos que autorizam os tribunais de Justiça a
            recorrerem a videoconferências para ouvir presos sem precisar tirá-los dos presídios.
          </p>

          <p>
            Em Brasília, teve participação destacada em prol da ratificação da Convenção
            sobre os Direitos das Pessoas com Deficiência (ONU 2016) e da sanção da Lei Geral do Turismo.
          </p>

          <p>
            Otavio Leite defende também uma solução justa para o prejuízo que o Estado do Rio de Janeiro
            e seus municípios poderão sofrer com a queda nos valores dos royalties distribuídos aos estados
            produtores de petróleo.
          </p>

          <p>
            Seu desempenho no parlamento elevou-o à posição de primeiro vice-líder do PSDB na Câmara dos Deputados,
            membro do Diretório Nacional e presidente do PSDB fluminense.
          </p>

          <p>
            Parte do resultado de toda essa dedicação e trabalho para o Rio está resumido no livro:
            DESAFIO POLÍTICO – 14 ANOS DE TRAJETÓRIA, de sua autoria, lançado em 2006.
          </p>
        </div>
      </ContainerAbout>
    </>
  )
}
