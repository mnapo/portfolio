import {Avatar, AvatarFallback, AvatarImage} from "@/components/molecules/shadcn/avatar"

const studies: {title: string; subtitle: string; description: string}[] = [
  { title: "Bachiller", subtitle: "Instituto Colegio Corazón de Jesús", description: "1996-2012"},
  { title: "Tecnicatura Superior en Ciencia de Datos e IA", subtitle: "Instituto de Formación Técnica Superior Nº28", description: "CABA 2025"}
];
const courses: {title: string; subtitle: string; description: string}[] = [
  { title: "Inglés C1", subtitle: "Liceo Cultural Británico", description: "CABA 2005-2013"},
  { title: "Desarrollo Web Full Stack en JS", subtitle: "freeCodeCamp.org", description: "2019-2019"},
  { title: "Análisis de Datos en Python", subtitle: "freeCodeCamp.org", description: "2024-2024"},  { title: "Tecnicatura en Reparación de PC I", subtitle: "Centro de Formación Profesional Nº28", description: "Suterh 2010-2010"},
  { title: "Tecnicatura en Reparación de PC II", subtitle: "Centro de Formación Profesional Nº28 Suterh", description: "Suterh 2011-2011"},
  { title: "Diseño Web en HTML y CSS", subtitle: "Centro de Formación Profesional Nº28 Suterh", description: "Suterh 2011-2012"},
  { title: "Medicina", subtitle: "UBA (CBC aprobado, Primer año 80%)", description: "CABA 2013-2016"},
  { title: "Bioingeniería", subtitle: "UBA (CBC aprobado, Primer año 70%)", description: "CABA 2017-2020"}
];
const experience: { title: string; subtitle: string; description: string }[] = [
  { title: "ZoHo", subtitle: "Desarrollo y Soporte Técnico", description: "Remoto 2022-2023"},
  { title: "Freelancing", subtitle: "Desarrollo de aplicaciones - Consultoría", description: "Remoto 2017-actualidad"},
  { title: "Clases de apoyo para secundario", subtitle: "Fisicoquímica y matemática", description: "CABA 2017-actualidad"}
];

export default function CV_Body() {
  return (
    <section className="py-1">
      <div className="container">
        <Avatar className="avatar">
          <AvatarImage src="cv/cv.jpg" />
          <AvatarFallback>Foto Perfil</AvatarFallback>
        </Avatar>
        <h1>Matías Nápoli</h1>
        <h1>Estudiante de Tecnicatura Superior en Ciencia de Datos</h1>
        <h1>DNI 38.625.566</h1>
      </div>
      <section className="py-4">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h1>Estudios</h1>
          <hr></hr>
          {studies.map((study)=>{
            return(
              <div>
                <h1>{study.title}</h1>
                <h2>{study.subtitle}</h2>
                <h3>{study.description}</h3>
              </div>
            )
          })}
        </div>
      </section>
      <section className="py-4">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h1>Idiomas y Cursos</h1>
          <hr></hr>
          {courses.map((course)=>{
            return(
              <div>
                <h1>{course.title}</h1>
                <h2>{course.subtitle}</h2>
                <h3>{course.description}</h3>
              </div>
            )
          })}
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
