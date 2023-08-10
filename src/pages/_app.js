import { Manrope, Space_Mono } from '@next/font/google';
import 'normalize.css';

import '@/styles/globals.css';

const manrope = Manrope({ subsets: ['latin'] });
const spacemono = Space_Mono({ subsets: ['latin'], weight: '400' });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          html,
          body,
          #__next {
            height: 100%;
          }

          html {
            font-family: ${manrope.style.fontFamily};
          }

          pre,
          code {
            font-family: ${spacemono.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
