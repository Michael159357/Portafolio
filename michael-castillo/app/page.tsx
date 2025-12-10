
import {Quicksand} from "next/font/google"
import {Linkedin,Github,Mail,ArrowRight} from "lucide-react"
import Image from "next/image";

const dancing = Quicksand({
    weight : "400",
    subsets : ['latin']
  })

export default function Home() {


  return (
    <main className=" flex flex-col justify-center bg-white w-full">
      {/*Presentation */}
      <section className="flex justify-center items-center   w-full max-w-5xl mx-auto px-6 py-32 md:py-20">
        <div className="space-y-8  pr-4">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance text-[#1A1A1A] leading-tight">
                Hola, soy <br /><span className="text-[#0066ff]">Michael</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                Desarrollador Full Stack especializado en crear interfaces modernas y sistemas escalables
              </p>
            </div>

            <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl">
              Transformo ideas en productos funcionales combinando diseño, arquitectura y experiencia de usuario para
              construir soluciones que impactan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-[#0066ff] text-white hover:opacity-90 transition-opacity font-medium"
              >
                Ver mis trabajos
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-black hover:text-white transition-colors font-medium"
              >
                Hablemos
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex justify-center gap-6 pt-8 pb-4">
              <a
                href="#"
                className="p-3 rounded-lg border-2 border-foreground text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-lg border-2 border-foreground text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-lg border-2 border-foreground text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <div className="h-full w-full bg-[#1A1A1A] pb-3 pr-3 rounded-4xl">
              <Image src="/FotoPerfil.png" alt=" FotoPerfil" width={300} height={300} className="rounded-2xl flex justify-center"/>
            </div>
          </div>
      </section>

      {/*About me */}
      <section id="sobre" className="bg-[#1a1a1a] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white">Sobre mí</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <p className="text-lg text-white leading-relaxed">
                Desarrollador especializado en construir interfaces modernas, APIs robustas y soluciones escalables.
                Trabajo principalmente con Spring Boot en el backend y React en el frontend, además de desarrollar proyectos completos con Next.js cuando se requiere integración entre backend y frontend.
              </p>
              <p className="text-lg text-white leading-relaxed">
                Tengo experiencia creando aplicaciones reales como sistemas para restaurantes, plataformas de gestión y proyectos personalizados que combinan diseño, arquitectura y experiencia de usuario excepcional.
                Trabajo con bases de datos en PostgreSQL, y despliego mis soluciones en la nube utilizando AWS.
              </p>
              <p className="text-lg text-white leading-relaxed">
                Además, soy creador del canal de YouTube Main Function, donde enseño algoritmos y fundamentos de programación.
                Actualmente lidero el desarrollo de una aplicación llamada Memorable Tickets.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Habilidades principales</h3>
              <div className="grid grid-cols-2 gap-3">
                {["React", "TypeScript", "Tailwind", "Node.js", "PostgreSQL", "MongoDB", "AWS", "Docker"].map(
                  (skill) => (
                    <div
                      key={skill}
                      className="px-4 py-3 rounded-lg bg-background border-2 border-border text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
                    >
                      {skill}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
        

    </main>
    
  );
}
