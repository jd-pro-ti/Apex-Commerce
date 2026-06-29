"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { catalogBrands, catalogConditions } from "@/data/catalogProducts";

const filterTitleClass =
  "font-label text-[10px] font-semibold leading-none tracking-[0.14em] uppercase text-primary mb-3 block";

function FilterSection({ title, children, isLast = false }) {
  return (
    <section className={isLast ? "pb-0" : "pb-5 mb-5 border-b border-neutral/15"}>
      <span className={filterTitleClass}>{title}</span>
      {children}
    </section>
  );
}

export function CatalogFilters({ onApply }) {
  const [priceMin, setPriceMin] = useState(500);
  const [priceMax, setPriceMax] = useState(5000);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedConditions, setSelectedConditions] = useState([]);

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const toggleCondition = (condition) => {
    setSelectedConditions((prev) =>
      prev.includes(condition)
        ? prev.filter((c) => c !== condition)
        : [...prev, condition]
    );
  };

  const handleApply = () => {
    onApply?.({ priceMin, priceMax, selectedBrands, selectedConditions });
  };

  const sliderPercent = (value) => ((value - 100) / (10000 - 100)) * 100;

  return (
    <aside className="w-full lg:w-[190px]">
      <FilterSection title="Rango de Precio">
        <div className="relative h-0.5 rounded-full bg-neutral/15 mb-2.5">
          <div
            className="absolute h-full rounded-full bg-primary"
            style={{
              left: `${sliderPercent(priceMin)}%`,
              right: `${100 - sliderPercent(priceMax)}%`,
            }}
          />
          <input
            type="range"
            min={100}
            max={10000}
            step={50}
            value={priceMin}
            onChange={(e) => setPriceMin(Math.min(Number(e.target.value), priceMax - 100))}
            className="absolute inset-0 w-full opacity-0 cursor-pointer z-10"
            aria-label="Precio mínimo"
          />
          <input
            type="range"
            min={100}
            max={10000}
            step={50}
            value={priceMax}
            onChange={(e) => setPriceMax(Math.max(Number(e.target.value), priceMin + 100))}
            className="absolute inset-0 w-full opacity-0 cursor-pointer z-20"
            aria-label="Precio máximo"
          />
          <span
            className="absolute top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-white border-2 border-primary pointer-events-none"
            style={{ left: `calc(${sliderPercent(priceMin)}% - 5px)` }}
          />
          <span
            className="absolute top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-white border-2 border-primary pointer-events-none"
            style={{ left: `calc(${sliderPercent(priceMax)}% - 5px)` }}
          />
        </div>
        <div className="flex items-center gap-1.5">
          <input
            type="number"
            value={priceMin}
            onChange={(e) => setPriceMin(Number(e.target.value))}
            className="w-full h-7 px-2 border border-neutral/20 rounded font-body text-[10px] text-primary focus:outline-none focus:border-primary"
          />
          <span className="font-body text-[10px] text-neutral shrink-0">a</span>
          <input
            type="number"
            value={priceMax}
            onChange={(e) => setPriceMax(Number(e.target.value))}
            className="w-full h-7 px-2 border border-neutral/20 rounded font-body text-[10px] text-primary focus:outline-none focus:border-primary"
          />
        </div>
      </FilterSection>

      <FilterSection title="Marca">
        <ul className="space-y-2">
          {catalogBrands.map((brand) => (
            <li key={brand}>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => toggleBrand(brand)}
                  className="h-3 w-3 shrink-0 rounded-sm border-neutral/35 text-primary focus:ring-primary/20"
                />
                <span className="font-body text-[11px] leading-none text-neutral group-hover:text-primary transition-colors">
                  {brand}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </FilterSection>

      <FilterSection title="Condición">
        <div className="flex flex-wrap gap-1.5">
          {catalogConditions.map((condition) => {
            const isSelected = selectedConditions.includes(condition);
            return (
              <button
                key={condition}
                type="button"
                onClick={() => toggleCondition(condition)}
                className={`px-2 py-0.5 rounded-full font-label text-[8px] leading-none tracking-[0.04em] uppercase border transition-colors ${
                  isSelected
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-neutral border-neutral/25 hover:border-primary hover:text-primary"
                }`}
              >
                {condition}
              </button>
            );
          })}
        </div>
      </FilterSection>

      <FilterSection title="Ubicación" isLast>
        <div className="relative">
          <MapPin className="absolute left-2 top-1/2 -translate-y-1/2 h-3 w-3 text-neutral/70 pointer-events-none" />
          <input
            type="text"
            placeholder="Envío Global"
            className="w-full h-7 pl-7 pr-2 border border-neutral/20 rounded font-body text-[10px] text-primary placeholder:text-neutral/60 focus:outline-none focus:border-primary"
          />
        </div>
      </FilterSection>

      <button
        type="button"
        onClick={handleApply}
        className="w-full h-8 mt-1 rounded-lg bg-primary text-white font-label text-[9px] tracking-[0.14em] uppercase hover:bg-secondary transition-colors"
      >
        Aplicar Filtros
      </button>
    </aside>
  );
}
