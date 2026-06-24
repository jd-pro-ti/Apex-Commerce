import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Empresa: ["Sostenibilidad", "Ética", "Prensa"],
    Asistencia: ["Envío", "Devoluciones", "Conserje"],
    "Aviso legal": ["Privacidad", "Condiciones", "Cookies"],
  };

  return (
    <footer className="bg-[#0a0a0a] text-[#a8a8a8] border-t border-[#1a1a1a]">
      <Container>
        <div className="py-16">
          {/* Descripción */}
          <div className="max-w-md mb-12">
            <h3 className="text-xl font-light tracking-[0.2em] text-white mb-4">
              APEX<span className="text-[#c9a84c]">COMMERCE</span>
            </h3>
            <p className="text-sm font-light leading-relaxed">
              Seleccionar los artículos de lujo más excepcionales del mundo para un
              público internacional de coleccionistas exigentes.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-white font-light text-sm tracking-[0.1em] uppercase mb-4">
                  {category}
                </h4>
                <ul className="space-y-2 text-sm font-light">
                  {links.map((link) => (
                    <li key={link}>
                      <Link
                        href={`/${link.toLowerCase()}`}
                        className="hover:text-white transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row justify-between items-center text-xs font-light">
            <p>© {currentYear} Apex Commerce. Todos los derechos reservados.</p>
            <p className="mt-2 md:mt-0">
              Diseñado en México · Fabricado en todo el mundo
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}