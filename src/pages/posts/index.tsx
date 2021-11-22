import { GetStaticProps } from 'next';
import Head from 'next/head';
import { RichText } from 'prismic-dom';


import Prismic from '@prismicio/client';
import { getPrismicClient } from '@/services/prismic';

import { Container, ContentPost } from '@/styles/Posts';

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
}

interface PostsProps {
  posts: Post[]
}

export default function Posts({ posts }: PostsProps) {
  return (
    <>
      <Head>
        <title>Notícias | Deputado Federal Otavio Leite</title>
      </Head>

      <Container>
        <ContentPost>
          {posts.map(post => (
            <a key={post.slug} href="#">
              <time>{post.updatedAt}</time>
              <strong>{post.title}</strong>
              <p>{post.excerpt}</p>
            </a>
          ))}
        </ContentPost>
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'news')
  ], {
    fetch: ['news.title', 'news.content'],
    pageSize: 100,
  });

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    };
  });

  return {
    props: {
      posts,
    }
  }
}