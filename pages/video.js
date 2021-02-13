import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='bg-gray-50 min-h-screen flex items-center justify-center'>
        <div className='video-container'>
          <div className='responsive'>
            <iframe
              src='https://player.vimeo.com/video/511836466'
              width='640'
              height='360'
              frameBorder='0'
              allow='autoplay; fullscreen; picture-in-picture'
              allowFullScreen
              className='responsive-iframe'
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
