//* === Components === *//
import Head from 'next/head'
import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'

//* === Styles & Utils === *//
import styles from './Layout.module.scss'

import { projects } from '@/lib/projects'

import { ReactNode, useState } from 'react'
interface Props {
  title?: string
  description?: string
  keywords?: string
  children: ReactNode
  home: boolean
}

export default function Layout({
  title = 'Mauricio Lovera | Full Stack Web Developer',
  description = 'Portfolio website for Mauricio Lovera | Full Stack Web Developer',
  keywords = 'portfolio, full stack, web developer',
  children,
  home,
}: Props) {
  const [numberOfProjects, setNumberOfProjects] = useState(projects.length)
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Header home={home} numberOfProjects={numberOfProjects} />
      <main className={styles.container}>{children}</main>
      <Footer numberOfProjects={numberOfProjects} />
    </>
  )
}
