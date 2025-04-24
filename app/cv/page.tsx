import type {Metadata} from 'next'
import CV_Body from '@/components/templates/cv-body'
import CV_Downloads from '@/components/templates/cv-downloads'

export const metadata: Metadata = {
  title: "Porfolio Personal • Currículum",
  description: "Porfolio personal de Matías Nápoli (2025)",
  icons: "/favicon.svg",
}

export default function Page() {
  return (
    <>
      <CV_Downloads></CV_Downloads>
      <CV_Body></CV_Body>
    </>
  )
}
