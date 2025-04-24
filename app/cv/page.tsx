import type {Metadata} from 'next'
import {Avatar, AvatarFallback, AvatarImage} from "@/components/molecules/shadcn/avatar"

export const metadata: Metadata = {
  title: "Porfolio Personal • Currículum",
  description: "Porfolio personal de Matías Nápoli (2025)",
  icons: "/favicon.svg",
}

export default function Page() {
  return (
    <div>
      <br></br><br></br><br></br><br></br><br></br>
      <Avatar className="avatar">
        <AvatarImage src="cv/cv.jpg" />
        <AvatarFallback>Foto Perfil</AvatarFallback>
      </Avatar>
    </div>
  )
}
