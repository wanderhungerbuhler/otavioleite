import React from 'react';
import Head from "next/head";
import { getPrismicClient } from "@/services/prismic";
import { GetServerSideProps } from "next";
import { RichText } from "prismic-dom";

import { Container, Post } from '@/styles/Posts/Slug/styles';
import { ContainerAbout } from '@/styles/Home';

import Image from 'next/image';
import OLKub from '../../../public/assets/otavioleite-juscelino-kubitschek.png';
import OLDespertarPolitico from '../../../public/assets/otavioleite-despertar-politico.png';
import OtavioLeiteAbout from '../../../public/assets/otavioleite2.png';

interface PostProps {
  post: {
    slug: string;
    content: string;
  }
}

export default function Slug({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>Sobre o Otavio Leite</title>
      </Head>
      <ContainerAbout>
        <ul>
          <li>
            <Image
              width="300"
              height="400"
              src={OLKub}
              alt="fotos-otavioleite"
            />
          </li>

          <li>
            <Image
              width="450"
              height="450"
              src={OtavioLeiteAbout}
              alt="fotos-otavioleite"
            />
          </li>

          <li>
            <Image
              width="300"
              height="400"
              src={OLDespertarPolitico}
              alt="fotos-otavioleite"
            />
          </li>
        </ul>
        <Container>
          <Post>
            <div className="postContent" dangerouslySetInnerHTML={{ __html: post.content }} />
          </Post>
        </Container>
      </ContainerAbout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const { slug } = params;

  const prismic = getPrismicClient(req);

  const response = await prismic.getByUID('bio', String(slug), {});

  const post = {
    slug,
    content: RichText.asHtml(response.data.content),
  }

  return {
    props: {
      post
    }
  }
}
