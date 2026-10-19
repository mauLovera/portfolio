import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion'
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
      {/* strict: errors if a full `motion.*` component sneaks back in and bloats the bundle */}
      <LazyMotion features={domAnimation} strict>
        <MotionConfig reducedMotion="user">
          <Component {...pageProps} />
        </MotionConfig>
      </LazyMotion>
    </>
  )
}
