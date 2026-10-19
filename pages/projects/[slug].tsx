import { projects } from '@/lib/projects'
import Layout from '@/components/layout/Layout'
import type { GetStaticPaths, GetStaticProps } from 'next'
import PageBanner from '@/components/common/PageBanner/PageBanner'
import Briefing from '@/components/pages/projects/Briefing/Briefing'
import Gallery from '@/components/pages/projects/Gallery/Gallery'

interface Props {
  project: {
    title: string
    slug: string
    briefDescription: string
    deployment: string
    github: string
    timeline: string
    type: string
    contributors: {
      title: string
      name: string
    }[]
    tech: string
    images: {
      url: string
      description: string
    }[]
  }
}

export default function ProjectPage({ project }: Props) {
  return (
    <Layout
      home={false}
      title={`${project.title} | Mauricio Lovera`}
      description={project.briefDescription}
    >
      <PageBanner
        title={project.title}
        description={project.briefDescription}
        deployment={project.deployment}
        github={project.github}
      />
      <Briefing
        timeline={project.timeline}
        type={project.type}
        contributors={project.contributors}
        tech={project.tech}
      />
      <Gallery images={project.images} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: projects.map((proj) => ({ params: { slug: proj.slug } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const project = projects.find((proj) => proj.slug === params?.slug)
  if (!project) return { notFound: true }

  return {
    props: {
      project,
    },
  }
}
