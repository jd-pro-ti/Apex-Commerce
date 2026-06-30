export function ProductIntelligence({ specs }) {
  return (
    <section className="mt-10 md:mt-12 pt-8 border-t border-neutral/15">
      <span className="font-headline text-[1.125rem] font-bold text-primary mb-5 block">
        Especificaciones del Producto
      </span>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-neutral/15 rounded-lg overflow-hidden border border-neutral/15">
        {specs.map((spec) => (
          <div key={spec.label} className="bg-white px-4 py-3.5">
            <span className="font-label text-[8px] tracking-[0.12em] uppercase text-neutral mb-1 block">
              {spec.label}
            </span>
            <span className="font-body text-[11px] text-primary">{spec.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
