import { Menu, X, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

/**
 * Navbar — Clean brand header with official Gayo logo (24/7 pill removed as requested), Cart counter button, and Nav links.
 */
export default function Navbar({ cartCount, onOpenCart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'Suasana', href: '#about' },
    { label: 'Ulasan', href: '#reviews' },
    { label: 'Lokasi', href: '#location' },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[#242424] bg-[#121212]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand with Official Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-white/20 bg-ebony shrink-0 shadow-sm transition-transform group-hover:scale-105">
            <img
              src="/logo.jpg"
              alt="Logo Gayo Kedai Kopi Roaster"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-base font-extrabold leading-tight tracking-tight text-pure-white sm:text-lg">
              GAYO
            </span>
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9E9E9E]">
              Kedai Kopi Roaster
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm font-semibold text-pewter transition-colors hover:text-pure-white"
            >
              {link.label}
            </a>
          ))}

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2 rounded-full border border-[#383838] bg-ebony px-4 py-2 text-xs font-bold text-pewter transition-all hover:bg-pure-white hover:text-matte-black hover:border-white shadow-sm"
            aria-label="Buka Keranjang Pesanan"
          >
            <ShoppingBag size={15} />
            <span>Keranjang</span>
            {cartCount > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-600 px-1 text-[10px] font-extrabold text-white animate-scale-in">
                {cartCount}
              </span>
            )}
          </button>

          {/* Instagram Link (Pure White Accent) */}
          <a
            href="https://www.instagram.com/gayokedaikopi.roaster/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-pure-white px-4 py-2 text-xs font-bold text-matte-black transition-colors hover:bg-neutral-200"
          >
            <InstagramIcon size={14} />
            <span>Follow</span>
          </a>
        </nav>

        {/* Mobile Actions: Cart & Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenCart}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#383838] bg-ebony text-pewter hover:text-pure-white"
            aria-label="Keranjang"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-600 px-1 text-[9px] font-extrabold text-white">
                {cartCount}
              </span>
            )}
          </button>

          <button
            className="flex items-center justify-center h-10 w-10 rounded-xl border border-[#383838] bg-ebony text-pewter hover:text-pure-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#242424] bg-[#161616] px-4 pb-4 pt-3 animate-fade-in-up" style={{ animationDuration: '0.2s' }}>
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-sm font-semibold text-pewter py-2.5 px-3 rounded-xl hover:bg-ebony hover:text-pure-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCart();
              }}
              className="flex items-center justify-between py-2.5 px-3 rounded-xl bg-ebony border border-[#333] font-body text-sm font-bold text-pure-white mt-1"
            >
              <span className="flex items-center gap-2">
                <ShoppingBag size={16} />
                Keranjang Pesanan
              </span>
              {cartCount > 0 && (
                <span className="rounded-full bg-rose-600 px-2 py-0.5 text-xs text-white">
                  {cartCount} item
                </span>
              )}
            </button>
            <a
              href="https://www.instagram.com/gayokedaikopi.roaster/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-xl bg-pure-white px-4 py-2.5 text-sm font-bold text-matte-black mt-2"
            >
              <InstagramIcon size={14} />
              @gayokedaikopi.roaster
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function InstagramIcon({ size = 16, className = '' }) {
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
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
