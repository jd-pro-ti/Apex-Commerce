"use client";

import Link from "next/link";
import { NavbarCliente } from "@/components/layout/NavbarCliente";
import { ProfileHeader } from "@/components/cliente/ProfileHeader";
import { ProfileStatsRow } from "@/components/cliente/ProfileStatsRow";
import { ProfileInfoRow } from "@/components/cliente/ProfileInfoRow";
import { ProfileBespokeCuration } from "@/components/cliente/ProfileBespokeCuration";
import { clientProfileData } from "@/data/clientProfile";

export default function PerfilPage() {
  const profile = clientProfileData;

  return (
    <>
      <NavbarCliente />

      <main className="w-[90%] max-w-[1240px] mx-auto px-4 sm:px-5 lg:px-6 pt-28 md:pt-[7.5rem] pb-14">
        <nav className="font-label text-[9px] tracking-[0.16em] uppercase text-neutral mb-6">
          <Link href="/dashboard/cliente" className="hover:text-primary transition-colors">
            Inicio
          </Link>
          <span className="mx-1">&gt;</span>
          <span className="text-primary">Perfil Premium del Cliente</span>
        </nav>

        <ProfileHeader profile={profile} />
        <ProfileStatsRow profile={profile} />
        <ProfileInfoRow profile={profile} />
        <ProfileBespokeCuration curation={profile.curation} />
      </main>
    </>
  );
}
