import {Button} from "@/components/molecules/shadcn/button";

export default function CV_Downloads() {
  return (
    <section className="cv-downloads">
      <div className="container">
        <Button variant="default" className="btn-download">
          <p className="pl-1">PDF</p>
        </Button>
        <Button variant="default" className="btn-download">
          <p className="pl-1">DOCX</p>
        </Button>
      </div>
    </section>
  )
}