import { Coffee, ShoppingBag } from 'lucide-react';
import { businessInfo } from '../data/menu';

function ProcessBadge({ process }) {
  if (!process) return null;

  const config = {
    ARABICA: 'bg-ebony/90 text-pewter border-[#383838]',
    GAYO: 'bg-pure-white text-matte-black border-white font-extrabold',
  };

  const cls = config[process] || 'bg-ebony/90 text-pewter border-[#383838]';

  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-1.5 py-0.5 sm:px-2 text-[8px] sm:text-[10px] font-bold uppercase tracking-wider ${cls}`}>
      <Coffee size={8} strokeWidth={2.5} />
      {process}
    </span>
  );
}

function TagBadge({ label }) {
  if (!label) return null;

  const colors = {
    'BEST SELLER': 'bg-amber-950/90 text-amber-300 border-amber-700/60',
    'SIGNATURE': 'bg-rose-950/90 text-rose-300 border-rose-700/60',
    'TRADISIONAL': 'bg-emerald-950/90 text-emerald-300 border-emerald-700/60',
  };

  const cls = colors[label] || 'bg-ebony/90 text-pewter border-[#383838]';

  return (
    <span className={`inline-flex items-center rounded-full border px-1.5 py-0.5 sm:px-2 text-[8px] sm:text-[10px] font-bold uppercase tracking-wider ${cls}`}>
      {label}
    </span>
  );
}

function formatRupiah(num) {
  return 'Rp ' + num.toLocaleString('id-ID');
}

export default function ProductCard({ product, index = 0, onAddToCart }) {
  const { name, description, tastingNotes, process, price, badge, image } = product;

  // Direct WA order for this specific item
  const handleQuickWaOrder = (e) => {
    e.stopPropagation();
    const text = encodeURIComponent(
      `Halo *GAYO KEDAI KOPI ROASTER*, saya mau pesan 1x *${name}* (${formatRupiah(price)}). Tolong info ketersediaannya ya. Terima kasih! 🙏`
    );
    window.open(`https://wa.me/${businessInfo.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="card-hover group flex flex-col overflow-hidden rounded-2xl border border-[#2E2E2E] bg-ebony animate-fade-in-up"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      {/* Product Image — Aspect ratio responsive for mobile */}
      <div className="relative aspect-square sm:aspect-[4/5] w-full overflow-hidden bg-[#181818]">
        <img
          src={image || '/images/venue-coffee.jpg'}
          alt={name}
          className="h-full w-full object-cover img-rotate-hover"
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/images/venue-coffee.jpg';
          }}
        />

        {/* Badges — top left corner */}
        <div className="absolute left-2 top-2 flex flex-col gap-1 z-10">
          {process && <ProcessBadge process={process} />}
          {badge && <TagBadge label={badge} />}
        </div>

        {/* Quick Add overlay button on image hover (desktop) */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex items-center justify-center p-4">
          <button
            onClick={() => onAddToCart(product)}
            className="flex items-center gap-2 rounded-xl bg-pure-white px-4 py-2.5 text-xs font-bold text-matte-black shadow-lg backdrop-blur-sm transition-transform hover:scale-105 active:scale-95"
          >
            <ShoppingBag size={14} />
            + Tambah Keranjang
          </button>
        </div>
      </div>

      {/* Content — Mobile clean padding */}
      <div className="flex flex-1 flex-col p-2.5 sm:p-4">
        <h3 className="font-heading text-xs sm:text-[15px] font-bold leading-snug text-pure-white line-clamp-2">
          {name}
        </h3>

        <p className="mt-1 text-[10px] sm:text-xs leading-relaxed text-pewter/80 line-clamp-2">
          {description}
        </p>

        {tastingNotes && (
          <p className="mt-1.5 text-[9px] sm:text-[11px] italic text-[#9E9E9E] line-clamp-1">
            {tastingNotes}
          </p>
        )}

        {/* Bottom Bar: Price & Order Action Buttons */}
        <div className="mt-auto pt-2.5 sm:pt-3.5 border-t border-[#2E2E2E] flex flex-col xs:flex-row xs:items-center justify-between gap-1.5 sm:gap-2">
          <div>
            <span className="font-heading text-xs sm:text-base font-extrabold text-pure-white block">
              {formatRupiah(price)}
            </span>
          </div>

          <div className="flex items-center gap-1 sm:gap-1.5 justify-end">
            {/* Direct WhatsApp Order */}
            <button
              onClick={handleQuickWaOrder}
              className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl border border-emerald-500/30 bg-emerald-950/40 text-emerald-400 transition-all hover:bg-[#25D366] hover:text-black shrink-0"
              title="Pesan langsung lewat WA"
              aria-label="Pesan WA"
            >
              <WhatsAppMiniIcon size={14} />
            </button>

            {/* Add to Cart Button (Pure White Accent) */}
            <button
              onClick={() => onAddToCart(product)}
              className="flex items-center justify-center gap-1 rounded-lg sm:rounded-xl bg-pure-white px-2 py-1.5 sm:px-3 sm:py-2 text-[10px] sm:text-xs font-bold text-matte-black shadow-sm transition-all hover:bg-neutral-200 active:scale-95 shrink-0"
              aria-label="Tambah ke keranjang"
            >
              <ShoppingBag size={11} />
              <span>+ Pesan</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function WhatsAppMiniIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.76-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.32-.02-.45s-.56-1.35-.77-1.85c-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.45.06-.68.32-.23.25-.89.87-.89 2.13s.91 2.47 1.04 2.64c.13.17 1.79 2.73 4.34 3.83.61.26 1.08.42 1.45.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.3Z" />
    </svg>
  );
}
