import "./globals.css";
import Image from "next/image";
import  Link  from "next/link";

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode;}>) {

  return (
    <html lang="en">
      <body >
        {/*HEADER*/}
        <header className="bg-white py-4 flex justify-center gap-108 border-b-2 border-[#0066ff] backdrop-blur">
            <Link href="/" className="text-xl font-bold tracking-tight hover:text-[#0066ff] transition-colors">
            michael-castillo
            </Link>
            <div className="hidden md:flex items-center gap-12">
            <Link href="#sobre" className="text-[#666666] hover:text-[#1a1a1a] transition-colors text-sm">
              Sobre mi
            </Link>
            <Link href="#proyectos" className="text-[#666666] hover:text-[#1a1a1a]  transition-colors text-sm">
              Proyectos
            </Link>
            <Link href="#tecnologias" className="text-[#666666] hover:text-[#1a1a1a]  transition-colors text-sm">
              Tecnologías
            </Link>
            <Link href="#contacto" className="text-[#666666] hover:text-[#1a1a1a]  transition-colors text-sm">
              Contacto
            </Link>
          </div>
        </header>
        {/*BODY*/}
        {children}
      </body>
    </html>
  );
}
