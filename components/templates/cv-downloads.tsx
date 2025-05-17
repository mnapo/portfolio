import {Button} from "@/components/molecules/shadcn/button";
import Link from 'next/link'

export default function CV_Downloads() {
  return (
    <section className="cv-downloads">
      <div className="container">
        <Link target="_blank" href="cv/CV MATIAS NAPOLI 2025.pdf">
          <Button variant="default" className="btn-download">
            <p className="pl-1">PDF</p>
          </Button>
        </Link>
        <Button variant="default" className="btn-download">
          <p className="pl-1">DOCX</p>
        </Button>
      </div>
    </section>
  )
}