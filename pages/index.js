import { useState } from 'react';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

export default function Home() {
  const { register, handleSubmit, watch, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const onSubmit = (data) => {
    setLoading(true);
    fetch(
      `/api/logVideo?firstName=${data.firstName}&lastName=${data.lastName}&email=${data.email}`
    )
      .then((resp) => resp.json())
      .then(() => {
        router.push('/video');
      });
  };

  return (
    <div>
      <Head>
        <title>Spirit Flight Attendant Orientation</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <img className='mx-auto h-12 w-auto' src='/logo.svg' alt='Workflow' />
          <h2 className='mt-6 text-center text-2x font-semibold text-gray-900'>
            Please enter the information below and click continue in order to
            access the Spirit Flight Attendant Orientation.
          </h2>
        </div>
        {!loading && (
          <div className='mt-8 sm:mx-auto w-5/6 mx-auto sm:max-w-md'>
            <div className='bg-white py-8 px-4 shadow rounded-lg sm:px-10'>
              <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700'
                  >
                    First Name
                  </label>
                  <div className='mt-1'>
                    <input
                      id='firstName'
                      name='firstName'
                      type='firstName'
                      autoComplete='given-name'
                      required
                      ref={register}
                      className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='lastname'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Last Name
                  </label>
                  <div className='mt-1'>
                    <input
                      id='lastName'
                      name='lastName'
                      type='text'
                      autoComplete='family-name'
                      required
                      ref={register}
                      className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Email
                  </label>
                  <div className='mt-1'>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      autoComplete='email'
                      required
                      ref={register}
                      className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>

                <div>
                  <button
                    type='submit'
                    className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-yellow  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {loading && (
          <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
            <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 flex justify-center'>
              <img src='/loading.svg' />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
