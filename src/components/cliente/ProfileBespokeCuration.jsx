import Image from "next/image";

export function ProfileBespokeCuration({ curation }) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      <div>
        <h2 className="font-headline text-[1.5rem] md:text-[1.75rem] font-bold text-primary leading-[1.2] mb-3">
          {curation.heading}
        </h2>
        <p className="font-body text-[12px] md:text-[13px] leading-[1.65] text-neutral mb-6 max-w-[440px]">
          {curation.description}
        </p>

        <blockquote className="relative pl-4 border-l-2 border-tertiary bg-off-white/80 rounded-r-lg py-4 pr-4">
          <p className="font-headline text-[13px] md:text-sm italic text-primary leading-[1.55]">
            &ldquo;{curation.quote}&rdquo;
          </p>
        </blockquote>
      </div>

      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {curation.images.map((src, index) => (
          <div
            key={src}
            className={`relative overflow-hidden rounded-xl bg-off-white ${
              index === 0 ? "aspect-square" : "aspect-square mt-6"
            }`}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(max-width: 1024px) 50vw, 280px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
