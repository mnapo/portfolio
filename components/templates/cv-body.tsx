import {Avatar, AvatarFallback, AvatarImage} from "@/components/molecules/shadcn/avatar"

export default function CV_Body() {
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