import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'
import '@/styles/main.scss'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-primary: ${poppins.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
