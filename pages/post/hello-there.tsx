import Head from 'next/head';
import Image from 'next/image';

const Hello = () => (
  <>
    <Head>
      <title>Hello there :: My Blog</title>
      <meta property="og:title" content="Hello there :: My Blog" />
    </Head>
    <article>
      <h1>Hello There!</h1>
      <Image
        src="/post/hello-there/jcemer-road-ahead.jpg"
        width={640}
        height={427}
      />
      <p>Photo by <a href="https://unsplash.com/@jeancarloemer">Jean Carlo Emer</a> on Unsplash</p>
    </article>
  </>
)

export default Hello