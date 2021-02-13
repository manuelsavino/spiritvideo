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
          src='https://player.vimeo.com/video/511836466'
          width='640'
          height='360'
          frameBorder='0'
          allow='autoplay; fullscreen; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
