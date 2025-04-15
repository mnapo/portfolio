import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: "Porfolio Personal • Currículum",
  description: "Porfolio personal de Matías Nápoli (2025)",
  icons: "/favicon.svg",
}

export default function Page() {
  return (
    <div>
      <br></br><br></br><br></br>
      <h1>Formación Académica</h1>
      <hr></hr>
      <h1>Experiencia laboral</h1>
      <hr></hr>
    </div>
  )
}