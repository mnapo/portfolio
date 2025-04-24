import {Button} from "@/components/molecules/shadcn//button";

export default function CV_Downloads() {
  return (
    <section className="py-24 lg:py-32 cv-downloads">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <Button variant="default" className="btn-download">
              <p className="pl-1">PDF</p>
            </Button>
            <Button variant="default" className="btn-download">
              <p className="pl-1">DOCX</p>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}