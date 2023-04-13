import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const links = {
    github: 'https://github.com/MartinEmanuelMaldonado93',
    linkedin: 'https://www.linkedin.com/in/martin-emanuel-maldonado93/',
  };
  return (
    <footer className='w-full bg-white'>
      <div className='container px-1 py-2 mx-auto'>
        <div className='text-center'>
          <p className='max-w-md mx-auto mt-2 text-gray-500 dark:text-gray-400'>
            Let's stay connected !
          </p>

          <div className='flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center'>
            <a
              href={links['github']}
              target='_blanck'
              className='flex items-center justify-center order-1 w-full px-2 py-2 mt-3 text-sm tracking-wide text-gray-600 capitalize transition-colors duration-300 transform border rounded-md sm:mx-2  sm:mt-0 sm:w-auto hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40'
            >
              <FaGithub className='text-2xl' />
              <span className='mx-1'>Github</span>
            </a>
            <a
              href={links['linkedin']}
              target='_blanck'
              className='w-full px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80'
            >
              <FaLinkedin className='inline text-2xl mr-px' />
              <span className='mx-1'>Linkedin</span>
            </a>
          </div>
        </div>

        <hr className='my-4 border-gray-200 dark:border-gray-700' />

        <div className='flex flex-col items-center sm:flex-row sm:justify-between'>
          <p className='text-sm text-gray-400'>
            © Copyright {new Date().getFullYear()}. All Rights Reserved.
          </p>

          <div className='flex mt-3 -mx-2 sm:mt-0'>
            <span
              className='mx-2 text-sm text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300'
              aria-label='Reddit'
            >
              {' '}
              Teams{' '}
            </span>
            <span
              className='mx-2 text-sm text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300'
              aria-label='Reddit'
            >
              {' '}
              Privacy{' '}
            </span>
            <span
              className='mx-2 text-sm text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300'
              aria-label='Reddit'
            >
              {' '}
              Cookies{' '}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
