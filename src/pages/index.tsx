import React from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Prismic from '@prismicio/client';
import { getPrismicClient } from '@/services/prismic';

import {
  Container, Informative, Bio, Actions, LawsandProjects,
  SliderAboutProjects, Socials, Footer
} from '@/styles/Home';

interface Post {
  slug: string;
  excerpt: string;
}

interface PostsProps {
  posts: Post[]
}

export default function Home({ posts }: PostsProps) {
  return (
    <>
      <head>
        <title>Home | Deputado Federal Otavio Leite</title>
      </head>
      <Container>
        <Informative>
          <div className="informative-info"></div>
          <a href="./assets/informativo.pdf" download="informativo_OtavioLeite.pdf">
            <div className="informative-download">
            </div>
          </a>
        </Informative>
        <Bio id="biografia">
          <h1>Biografia</h1>
          <div className="otavioleite"></div>
          <div className="bio-otavioleite">
            {posts.map(post => (
              <>
                <p key={post.slug}>{post.excerpt}</p>
                <Link href={`/about/${post.slug}`}><a>Leia Mais</a></Link>
              </>
            ))}
          </div>
        </Bio>

        <Actions>
          <div className="descriptions-actions" id="acoesnacamara">
            <h2>Ações na Câmara</h2>
            <p>Algumas das ações do <b>Deputado Federal Otavio</b> Leite em favor das causas que ele defende.
              Sabemos o quão importante é o trabalho/desenvolvimento em cada uma das áreas, e por isso,
              estou compartilhando com vocês as ações e projetos que venho lutando por você.
            </p>
          </div>

          <SliderAboutProjects>
            <article className="active">
              <div className="icons-projects">
                <span>PCD</span>
              </div>
            </article>
            <article>
              <div className="icons-projects">
                <span>Turismo</span>
              </div>
            </article>
            <article>
              <div className="icons-projects">
                <span>Educação</span>
              </div>
            </article>
            <article>
              <div className="icons-projects">
                <span>Escotismo</span>
              </div>
            </article>
            <article>
              <div className="icons-projects">
                <span>Meio Ambiente</span>
              </div>
            </article>
          </SliderAboutProjects>
        </Actions>

        <LawsandProjects>
          <h2 id="leiseprojetos">Leis e Projetos</h2>
          <p>Com os anos de experiências em cargos <b>Municipais, Estaduais e Federais</b> o <b>Deputado Federal Otavio Leite</b>,
            compartilha com você todos os suas <b>Leis</b> e <b>Projetos</b> em toda sua vida de mandato.
          </p>
          <div className="otavioleite-lawsandprojects"></div>
          <ul>
            <li><Link href="#"><a className="icons municipais">Municipais</a></Link></li>
            <li><Link href="#"><a className="icons federais">Federais</a></Link></li>
            <li><Link href="#"><a className="icons estaduais">Estaduais</a></Link></li>
          </ul>
        </LawsandProjects>

        <Socials id="contato">
          <h3>Conectado em tudo!</h3>
          <p>O Deputado Federal Otavio Leite está conectado nas principais redes sociais,
            pesquise e saiba mais sobre Leis, Projetos e os próximos passos dele... </p>
          <div className="otavioleite-socials"></div>
          <span>Acesse o nosso</span>
          <button>
            <a href="http://api.whatsapp.com/send?phone=552196477-4555&text=Eu vim através do seu site!">WhatsApp Exclusivo!</a>
          </button>
        </Socials>
      </Container>

      <Footer>
        <ul>
          <span>Gabinete em Brasília</span>
          <p>Câmara dos Deputados Anexo IV</p>
          <p>Gabinete 939 - Brasília - DF</p>
          <p>CEP: 70160-900</p>
        </ul>

        <ul>
          <span>Entre em contato</span>
          <p><Link href="http://api.whatsapp.com/send?phone=552196477-4555&text=Eu vim através do seu site!"><a target="_blank" className="icons-socials whatsapp">(21) 96477-4555</a></Link></p>
          <p>escritorio@otavioleite.com.br</p>
        </ul>

        <ul>
          <span>Siga nossas redes</span>
          <li><Link href="https://www.facebook.com/OtavioLeite"><a target="_blank" className="icons-socials facebook">Facebook</a></Link></li>
          <li><Link href="https://www.instagram.com/otavioleite"><a target="_blank" className="icons-socials instagram">Instagram</a></Link></li>
          <li><Link href="https://t.me/s/depotavioleite"><a target="_blank" className="icons-socials telegram">Telegram</a></Link></li>
          <li><Link href="https://twitter.com/otavioleite"><a target="_blank" className="icons-socials twitter">Twitter</a></Link></li>
          <li><Link href="http://api.whatsapp.com/send?phone=552196477-4555&text=Eu vim através do seu site!"><a target="_blank" className="icons-socials whatsapp">WhatsApp</a></Link></li>
        </ul>
      </Footer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    Prismic.predicates.at('document.type', 'bio')
    , {
      fetch: ['bio.content'],
      pageSize: 1,
    });

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
    };
  });

  return {
    props: {
      posts,
    },
    revalidate: 60 * 60 * 24, // 24 horas
  }
}
