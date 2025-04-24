import {Avatar, AvatarFallback, AvatarImage} from "@/components/molecules/shadcn/avatar"
import {Button} from "@/components/molecules/shadcn//button";

export default function CV_Body() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <Button variant="default">
                <p className="pl-1">PDF</p>
              </Button>
              <Button variant="default">
                <p className="pl-1">DOCX</p>
              </Button>
              <Avatar className="avatar">
                <AvatarImage src="cv/cv.jpg" />
                <AvatarFallback>Foto Perfil</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}