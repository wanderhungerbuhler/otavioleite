import Head from "next/head";
import { getPrismicClient } from "@/services/prismic";
import { GetServerSideProps } from "next";
import { RichText } from "prismic-dom";

import { Container, Post } from '@/styles/Posts/Slug/styles';

interface PostProps {
  post: {
    slug: string;
    title: string;
    content: string;
    excerpt: string;
    updatedAt: string;
  }
}

export default function Slug({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>{post.title} | Deputado Otavio Leite</title>
      </Head>

      <Container>
        <Post>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div className="postContent" dangerouslySetInnerHTML={{ __html: post.content }} />
        </Post>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const { slug } = params;

  const prismic = getPrismicClient(req);

  const response = await prismic.getByUID('news', String(slug), {});

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }

  return {
    props: {
      post
    }
  }
}
