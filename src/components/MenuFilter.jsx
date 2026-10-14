import { useRef, useEffect } from 'react';

/**
 * MenuFilter — Horizontal scrollable category tabs with animation.
 */
export default function MenuFilter({ categories, activeCategory, onCategoryChange }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    const activeBtn = container?.querySelector('[data-active="true"]');
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeCategory]);

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="scrollbar-hide flex gap-2 overflow-x-auto pb-1"
      >
        {categories.map((cat, index) => {
          const isActive = cat.id === activeCategory;
          return (
            <button
              key={cat.id}
              data-active={isActive}
              onClick={() => onCategoryChange(cat.id)}
              className={`
                shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold font-body
                border transition-all duration-300
                ${
                  isActive
                    ? 'border-pure-white bg-pure-white text-matte-black shadow-lg font-bold scale-[1.02]'
                    : 'border-[#333333] bg-ebony text-pewter hover:border-[#555555] hover:text-pure-white hover:bg-[#2A2A2A]'
                }
              `}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
