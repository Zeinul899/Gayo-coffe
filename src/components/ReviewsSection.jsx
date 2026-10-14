import { Star, ThumbsUp, CheckCircle, ExternalLink } from 'lucide-react';
import { googleReviews, businessInfo } from '../data/menu';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="border-t border-[#242424] bg-matte-black py-10 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 sm:gap-6 mb-8 sm:mb-10">
          <div>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2">
              <span className="flex items-center gap-1.5 rounded-full bg-ebony text-emerald-400 border border-emerald-900/60 px-3 py-1 text-xs font-bold">
                <CheckCircle size={13} />
                Ulasan Google Maps Terverifikasi
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-ebony text-amber-300 border border-amber-900/60 px-3 py-1 text-xs font-bold">
                <Star size={12} fill="currentColor" className="text-amber-400" />
                Rating 5 / 5 Sempurna
              </span>
            </div>
            <h2 className="font-heading text-2xl font-extrabold text-pure-white sm:text-3xl">
              Apa Kata Pengunjung Kami?
            </h2>
            <p className="mt-1 text-sm text-pewter/90 max-w-xl">
              Ulasan nyata bintang 5 dari pelanggan dan Google Local Guide yang sudah nongkrong, nugas, dan ngopi di Gayo Kedai Kopi Roaster Gejayan.
            </p>
          </div>

          {/* Rating Summary Card (Ebony Dark) */}
          <div className="flex items-center gap-4 rounded-2xl border border-[#2E2E2E] bg-ebony p-4 shadow-sm shrink-0">
            <div className="text-center pr-4 border-r border-[#333333]">
              <span className="font-heading text-3xl font-black text-pure-white block leading-none">
                5.0
              </span>
              <div className="flex items-center justify-center gap-0.5 text-amber-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span className="text-[10px] text-[#9E9E9E] mt-0.5 block font-medium">
                635+ Ulasan
              </span>
            </div>
            <div>
              <p className="text-xs font-bold text-pure-white">Google Maps Rating</p>
              <p className="text-[11px] text-[#9E9E9E]">GAYO KEDAI KOPI ROASTER</p>
              <a
                href={businessInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 inline-flex items-center gap-1 text-xs font-bold text-pure-white hover:text-pewter underline"
              >
                <span>Buka di Google Maps</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Grid (Ebony Dark Containers) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {googleReviews.map((item) => (
            <div
              key={item.id}
              className="card-hover flex flex-col justify-between rounded-2xl border border-[#2E2E2E] bg-ebony p-5 shadow-sm"
            >
              <div>
                {/* User Info */}
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-10 w-10 rounded-full object-cover border border-[#383838]"
                  />
                  <div className="min-w-0">
                    <h3 className="font-heading text-sm font-bold text-pure-white truncate">
                      {item.name}
                    </h3>
                    <p className="text-[10px] text-[#9E9E9E] font-medium truncate">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Stars & Date */}
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={13} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#7A7A7A]">{item.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-xs leading-relaxed text-pewter">
                  "{item.review}"
                </p>
              </div>

              {/* Photo attached by reviewer & likes */}
              <div className="mt-4 pt-3 border-t border-[#2E2E2E]">
                {item.photo && (
                  <div className="mb-2.5 overflow-hidden rounded-xl border border-[#2E2E2E] aspect-[16/10] bg-[#181818]">
                    <img
                      src={item.photo}
                      alt={`Foto ulasan oleh ${item.name}`}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="flex items-center justify-between text-[11px] text-[#9E9E9E]">
                  <span className="flex items-center gap-1">
                    <ThumbsUp size={12} className="text-[#9E9E9E]" />
                    {item.likes} terbantu
                  </span>
                  <span className="text-[10px] uppercase font-bold text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-900/50">
                    Bintang 5
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to write a review on Google Maps (Ebony Container with Pure White Button) */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-[#2E2E2E] bg-ebony p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#181818] border border-[#383838] text-pure-white font-bold text-xl shrink-0">
              G
            </div>
            <div>
              <h3 className="font-heading text-base font-bold text-pure-white">
                Sudah Pernah Mampir ke Gayo Kedai Kopi?
              </h3>
              <p className="text-xs text-pewter mt-0.5">
                Bantu orang lain menemukan tempat ngopi terbaik dengan membagikan ulasanmu di Google Maps.
              </p>
            </div>
          </div>

          <a
            href={businessInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-pure-white px-5 py-3 text-xs font-bold text-matte-black shadow transition-all hover:bg-neutral-200 hover:shadow-md"
          >
            <span>Beri Ulasan di Google Maps</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
