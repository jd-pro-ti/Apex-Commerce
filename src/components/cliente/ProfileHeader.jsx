import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function ProfileHeader({ profile }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-6 md:gap-8 mb-10 md:mb-12">
      <div className="relative shrink-0 self-start">
        <div className="relative h-24 w-24 md:h-28 md:w-28 rounded-full overflow-hidden ring-2 ring-neutral/10">
          <Image
            src={profile.avatar}
            alt={profile.name}
            fill
            sizes="112px"
            className="object-cover"
          />
        </div>
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-0.5 rounded-full bg-tertiary text-secondary font-label text-[7px] tracking-[0.12em] uppercase shadow-sm">
          Miembro Gold
        </span>
      </div>

      <div className="flex-1 min-w-0">
        <h1 className="font-headline text-[1.75rem] md:text-[2rem] font-bold text-primary leading-[1.15] mb-2">
          {profile.name}
        </h1>
        <p className="font-body text-[12px] md:text-[13px] leading-[1.6] text-neutral max-w-[480px]">
          {profile.bio}
        </p>
      </div>

      <div className="flex flex-wrap gap-2.5 shrink-0 sm:self-center">
        <Button
          variant="outline"
          size="sm"
          className="rounded-lg border-neutral/25 text-[9px] tracking-[0.12em] px-5"
        >
          Editar Perfil
        </Button>
        <Button
          variant="inverted"
          size="sm"
          className="rounded-lg text-[9px] tracking-[0.12em] px-5"
        >
          Reservar Concierge
        </Button>
      </div>
    </div>
  );
}
