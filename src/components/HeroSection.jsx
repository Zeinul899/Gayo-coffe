import { MapPin, ExternalLink } from 'lucide-react';
import { venuePhotos, businessInfo } from '../data/menu';

/**
 * HeroSection — Brand intro, official logo, and photo gallery with mobile-first responsive layout.
 */
export default function HeroSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-matte-black text-pewter border-b border-[#242424]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-center">
          {/* Left Column — Text & Brand */}
          <div className="relative z-10 lg:col-span-5">
            {/* Logo + Tagline */}
            <div className="mb-4 sm:mb-6 flex items-center gap-3">
              <div className="h-12 w-12 sm:h-14 sm:w-14 overflow-hidden rounded-full border-2 border-white/20 bg-ebony shadow-md shrink-0">
                <img
                  src="/logo.jpg"
                  alt="Official Logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#9E9E9E] block">
                  Kedai Kopi · Roastery
                </span>
                <p className="text-[10px] sm:text-[11px] text-[#7A7A7A]">
                  Gejayan, Sleman, Yogyakarta
                </p>
              </div>
            </div>

            <h1 className="font-heading text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl text-pure-white">
              GAYO
              <br />
              <span className="text-pewter">Kedai Kopi</span>
              <br />
              Roaster
            </h1>

            <p className="mt-3 sm:mt-4 font-body text-xs sm:text-sm leading-relaxed text-pewter/90 sm:text-base">
              Biji kopi Arabika Gayo asli dari kebun sendiri, disangrai dan diseduh langsung di tempat. Tempat nongkrong luas 2 lantai dengan WFC, meja biliar, photobox, dan suasana santai 24 jam nonstop.
            </p>

            {/* Google Maps Actions — Pure White Accent */}
            <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
              <a
                href={businessInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-pure-white px-4 py-3 sm:py-2.5 text-xs font-extrabold text-matte-black shadow transition-all hover:bg-neutral-200 active:scale-[0.99]"
              >
                <MapPin size={15} />
                <span>Petunjuk Google Maps</span>
                <ExternalLink size={12} />
              </a>

              <a
                href={businessInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#383838] bg-ebony px-4 py-3 sm:py-2.5 text-xs font-semibold text-pewter transition-colors hover:bg-[#2E2E2E] hover:text-pure-white active:scale-[0.99]"
              >
                <InstagramIcon size={14} />
                <span>{businessInfo.instagram}</span>
              </a>
            </div>

            {/* Facility Highlights — Ebony Dark Containers */}
            <div className="mt-6 sm:mt-8 border-t border-[#242424] pt-4 grid grid-cols-3 gap-1.5 sm:gap-2 text-center text-[10px] sm:text-xs text-pewter/80">
              <div className="rounded-xl bg-ebony border border-[#2E2E2E] p-2 sm:p-2.5">
                <span className="font-bold text-pure-white block text-xs sm:text-sm">2 Lantai</span>
                Indoor & Outdoor
              </div>
              <div className="rounded-xl bg-ebony border border-[#2E2E2E] p-2 sm:p-2.5">
                <span className="font-bold text-pure-white block text-xs sm:text-sm">24 Jam</span>
                Nonstop WFC
              </div>
              <div className="rounded-xl bg-ebony border border-[#2E2E2E] p-2 sm:p-2.5">
                <span className="font-bold text-pure-white block text-xs sm:text-sm">Biliar & DJ</span>
                Hiburan Komplit
              </div>
            </div>
          </div>

          {/* Right Column — Photo Grid */}
          <div className="relative lg:col-span-7">
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {/* Main Photo (Large) */}
              <div className="col-span-2 group relative overflow-hidden rounded-2xl border border-[#2E2E2E] bg-ebony shadow-xl">
                <img
                  src={venuePhotos[0].url}
                  alt={venuePhotos[0].title}
                  className="h-44 sm:h-64 lg:h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-matte-black/95 via-matte-black/30 to-transparent flex flex-col justify-end p-3 sm:p-4">
                  <h3 className="font-heading text-sm sm:text-base font-bold text-pure-white">
                    {venuePhotos[0].title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-pewter mt-0.5 line-clamp-1 sm:line-clamp-none">
                    {venuePhotos[0].desc}
                  </p>
                </div>
              </div>

              {/* Secondary Photo 1 */}
              <div className="group relative overflow-hidden rounded-2xl border border-[#2E2E2E] bg-ebony shadow">
                <img
                  src={venuePhotos[1].url}
                  alt={venuePhotos[1].title}
                  className="h-28 sm:h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-matte-black/95 via-matte-black/20 to-transparent flex flex-col justify-end p-2 sm:p-3">
                  <h4 className="font-heading text-[11px] sm:text-xs font-bold text-pure-white">
                    {venuePhotos[1].title}
                  </h4>
                  <p className="text-[9px] sm:text-[10px] text-pewter mt-0.5 line-clamp-1">
                    {venuePhotos[1].desc}
                  </p>
                </div>
              </div>

              {/* Secondary Photo 2 */}
              <div className="group relative overflow-hidden rounded-2xl border border-[#2E2E2E] bg-ebony shadow">
                <img
                  src={venuePhotos[2].url}
                  alt={venuePhotos[2].title}
                  className="h-28 sm:h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-matte-black/95 via-matte-black/20 to-transparent flex flex-col justify-end p-2 sm:p-3">
                  <h4 className="font-heading text-[11px] sm:text-xs font-bold text-pure-white">
                    {venuePhotos[2].title}
                  </h4>
                  <p className="text-[9px] sm:text-[10px] text-pewter mt-0.5 line-clamp-1">
                    {venuePhotos[2].desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle diagonal background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, white 40px, white 41px)`,
        }}
      />
    </section>
  );
}

function InstagramIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
