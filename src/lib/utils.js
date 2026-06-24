import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Función para manejar clases condicionales
export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}