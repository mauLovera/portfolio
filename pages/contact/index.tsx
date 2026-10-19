import PageBanner from '@/components/common/PageBanner/PageBanner'
import Layout from '@/components/layout/Layout'

export default function ContactPage() {
  return (
    <Layout home={false} title="Contact | Mauricio Lovera">
      <PageBanner
        title="Contact"
        description="Always welcome to talk! Reach me through these means:"
        github={'https://github.com/mauLovera'}
        linkedIn={'https://www.linkedin.com/in/mauriciolovera001/'}
      />
    </Layout>
  )
}
