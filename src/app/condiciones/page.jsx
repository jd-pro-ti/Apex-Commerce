import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "Términos y condiciones | Apex Commerce",
};

export default function CondicionesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f5f5f0] pb-20 pt-32 text-[#1B2632]">
        <Container>
          <article className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b792c]">
              Proyecto escolar
            </p>
            <h1 className="mt-3 text-3xl font-light md:text-4xl">
              Términos y condiciones
            </h1>
            <div className="mt-8 space-y-8 text-base leading-relaxed text-gray-700">
              <section>
                <h2 className="mb-3 text-xl font-medium text-[#1B2632]">Finalidad del sitio</h2>
                <p>
                  Apex Commerce es un sitio creado como proyecto escolar con fines
                  educativos y de demostración. Su contenido presenta un ejemplo de
                  una tienda en línea.
                </p>
              </section>
              <section>
                <h2 className="mb-3 text-xl font-medium text-[#1B2632]">Productos y pagos</h2>
                <p>
                  No cobramos ni vendemos ninguno de los productos que aparecen en
                  las imágenes. Las imágenes, descripciones y precios se muestran
                  únicamente como ejemplos y no constituyen una oferta de venta.
                  Las funciones de carrito, pedidos y compra son demostrativas.
                </p>
              </section>
              <section>
                <h2 className="mb-3 text-xl font-medium text-[#1B2632]">Uso del sitio</h2>
                <p>
                  El sitio está destinado a la exploración del proyecto escolar.
                  No ingreses información de pago real en los formularios de demostración.
                </p>
              </section>
            </div>
            <Link href="/" className="mt-10 inline-block text-sm font-medium text-[#82631f] underline underline-offset-4 hover:text-[#1B2632]">
              Volver al inicio
            </Link>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
