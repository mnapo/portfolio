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
    </section>
  )
}