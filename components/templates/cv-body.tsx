import {Avatar, AvatarFallback, AvatarImage} from "@/components/molecules/shadcn/avatar"

export default function CV_Body() {
  const studies: { title: string; subtitle: string; description: string }[] = [];
  const experience: { title: string; subtitle: string; description: string }[] = [];
  return (
    <section className="py-1">
      <div className="container">
        <Avatar className="avatar">
          <AvatarImage src="cv/cv.jpg" />
          <AvatarFallback>Foto Perfil</AvatarFallback>
        </Avatar>
      </div>
      <section className="py-4">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h1>Estudios</h1>
          <hr></hr>
        </div>
      </section>
      <section className="py-4">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h1>Experiencia laboral</h1>
          <hr></hr>
        </div>
      </section>
    </section>
  )
}