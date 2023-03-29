import { Manrope } from '@next/font/google';
import 'normalize.css';

import '@/styles/globals.css';

const manrope = Manrope({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${manrope.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
