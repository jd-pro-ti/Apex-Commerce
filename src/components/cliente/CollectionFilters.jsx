"use client";

export function CollectionFilters({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap gap-2 md:gap-2.5">
      {categories.map((category) => {
        const isActive = activeCategory === category.id;

        return (
          <button
            key={category.id}
            type="button"
            onClick={() => onCategoryChange(category.id)}
            className={`px-4 py-2 rounded-full font-label text-[9px] md:text-[10px] tracking-[0.08em] uppercase transition-colors ${
              isActive
                ? "bg-primary text-white"
                : "bg-neutral/10 text-primary hover:bg-neutral/15"
            }`}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
