import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 sm:px-6 lg:px-8'>
        <iframe
          width={560}
          height={315}
          src='https://www.youtube.com/embed/DbyFM6xtN0E'
          frameBorder={0}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </div>
    </div>
  );
}
