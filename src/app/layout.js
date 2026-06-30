import { Montserrat, Open_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-open-sans",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-plus-jakarta",
});

export const metadata = {
  title: "APEXCOMMERCE - Lujo atemporal",
  description: "Eleva tu estilo de vida con lujo atemporal.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} ${openSans.variable} ${plusJakarta.variable} font-body antialiased`}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
