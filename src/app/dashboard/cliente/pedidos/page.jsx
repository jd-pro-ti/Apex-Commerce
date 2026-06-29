import { NavbarCliente } from "@/components/layout/NavbarCliente";

export default function PedidosClientePage() {
  return (
    <div>
      <NavbarCliente />
      <div className="min-h-screen flex items-center justify-center bg-off-white pt-28">
        <h1 className="font-headline text-primary">Mis Pedidos</h1>
      </div>
    </div>
  );
}
