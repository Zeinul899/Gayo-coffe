import { MapPin, Phone, Clock, Navigation, ExternalLink } from 'lucide-react';
import { businessInfo } from '../data/menu';

function InstagramIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.76-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.32-.02-.45s-.56-1.35-.77-1.85c-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.45.06-.68.32-.23.25-.89.87-.89 2.13s.91 2.47 1.04 2.64c.13.17 1.79 2.73 4.34 3.83.61.26 1.08.42 1.45.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.3Z" />
    </svg>
  );
}

export default function LocationFooter() {
  return (
    <footer id="location" className="border-t border-[#242424] bg-[#161616]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center gap-1 rounded-full bg-ebony border border-[#383838] px-2.5 py-0.5 text-[10px] font-extrabold text-pure-white">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
                24/7 NONSTOP
              </span>
            </div>
            <h2 className="font-heading text-xl sm:text-3xl font-extrabold text-pure-white">
              Kunjungi Kedai Kami
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-pewter">
              Nongkrong, WFC, atau sekadar ngopi santai di Jl. Affandi (Gejayan), Yogyakarta.
            </p>
          </div>

          <a
            href={businessInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-pure-white px-4 py-3 sm:py-2.5 text-xs font-bold text-matte-black shadow transition-all hover:bg-neutral-200 hover:shadow-md active:scale-[0.99] w-full sm:w-auto"
          >
            <MapPin size={15} />
            <span>Petunjuk Google Maps</span>
            <ExternalLink size={12} />
          </a>
        </div>

        {/* 4 Info Columns (Ebony Dark Blocks) */}
        <div className="grid gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Address */}
          <div className="flex gap-3 rounded-2xl border border-[#2E2E2E] p-4 bg-ebony">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#181818] border border-[#383838] text-pure-white">
              <MapPin size={18} strokeWidth={1.8} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-pure-white">Alamat</h3>
              <p className="mt-0.5 text-xs leading-relaxed text-pewter">
                {businessInfo.address}<br />
                {businessInfo.district}<br />
                {businessInfo.city}
              </p>
            </div>
          </div>

          {/* WhatsApp & Phone */}
          <div className="flex gap-3 rounded-2xl border border-[#2E2E2E] p-4 bg-ebony">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-black">
              <WhatsAppIcon size={18} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-pure-white">Pemesanan WhatsApp</h3>
              <p className="mt-0.5 text-xs text-pewter">
                {businessInfo.phone}
              </p>
              <a
                href={`https://wa.me/${businessInfo.whatsappNumber}?text=Halo%20Gayo%20Kedai%20Kopi%20Roaster!`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 inline-flex items-center gap-1 text-xs font-bold text-[#25D366] hover:underline"
              >
                Chat Kasir Sekarang →
              </a>
            </div>
          </div>

          {/* Operational Hours */}
          <div className="flex gap-3 rounded-2xl border border-[#2E2E2E] p-4 bg-ebony">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#181818] border border-[#383838] text-pure-white">
              <Clock size={18} strokeWidth={1.8} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-pure-white">Jam Operasional</h3>
              <p className="mt-0.5 text-xs font-extrabold text-pure-white">
                24/7 (Buka Setiap Hari)
              </p>
              <p className="text-[11px] text-pewter/80">
                Nonstop 24 Jam (WFC & Santai)
              </p>
            </div>
          </div>

          {/* Instagram & Social */}
          <div className="flex gap-3 rounded-2xl border border-[#2E2E2E] p-4 bg-ebony">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#181818] border border-[#383838] text-pure-white">
              <InstagramIcon size={18} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-pure-white">Instagram</h3>
              <p className="mt-0.5 text-xs text-pewter">
                {businessInfo.instagram}
              </p>
              <a
                href={businessInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 inline-flex items-center gap-1 text-xs font-bold text-pure-white hover:underline"
              >
                Lihat Update & Promo →
              </a>
            </div>
          </div>
        </div>

        {/* Google Maps Embed Frame */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-[#2E2E2E] shadow-sm">
          <iframe
            title="Lokasi Gayo Kedai Kopi Roaster"
            src={businessInfo.googleMapsEmbed}
            width="100%"
            height="280"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          />
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-[#242424] pt-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 overflow-hidden rounded-full border border-white/20">
              <img src="/logo.jpg" alt="Logo" className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="font-heading text-xs font-extrabold text-pure-white">
                GAYO KEDAI KOPI ROASTER
              </p>
              <p className="text-[11px] text-[#9E9E9E]">
                © 2026 · Jl. Affandi No. 40B, Gejayan, Sleman, Yogyakarta
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={businessInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-ebony text-pewter hover:bg-pure-white hover:text-matte-black transition-colors border border-[#2E2E2E]"
              aria-label="Instagram"
            >
              <InstagramIcon size={15} />
            </a>
            <a
              href={`https://wa.me/${businessInfo.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-ebony text-pewter hover:bg-[#25D366] hover:text-black transition-colors border border-[#2E2E2E]"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon size={15} />
            </a>
            <a
              href={businessInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-ebony text-pewter hover:bg-pure-white hover:text-matte-black transition-colors border border-[#2E2E2E]"
              aria-label="Google Maps"
            >
              <MapPin size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
