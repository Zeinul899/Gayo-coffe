import { useState, useMemo, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MenuFilter from './components/MenuFilter';
import ProductCard from './components/ProductCard';
import LocationFooter from './components/LocationFooter';
import ReviewsSection from './components/ReviewsSection';
import CartDrawer from './components/CartDrawer';
import { categories, products } from './data/menu';
import { ShoppingBag } from 'lucide-react';

import Lenis from 'lenis';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('signature');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Inertial momentum smooth scroll via Lenis (Apple / modern web style)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.8,
    });

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    // Smooth navigation anchor scrolling
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
          const element = document.querySelector(href);
          if (element) {
            e.preventDefault();
            lenis.scrollTo(element, { offset: -75, duration: 1.4 });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  // Filter products by selected category
  const filteredProducts = useMemo(
    () => products.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  const activeCategoryLabel = useMemo(
    () => categories.find((c) => c.id === activeCategory)?.label || '',
    [activeCategory]
  );

  // Total items in cart
  const totalCartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  // Cart operations
  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    // Show brief toast notification
    setToastMessage(`✓ ${product.name} dimasukkan ke keranjang`);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleUpdateQuantity = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const handleRemoveFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-matte-black font-body text-pewter selection:bg-pure-white selection:text-matte-black">
      {/* Navbar with Cart trigger & 24/7 indicator */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Hero with Official Logo, 24/7 info, and Google Maps photos */}
      <HeroSection />

      {/* Menu Catalog Section */}
      <section id="menu" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-16 lg:px-8">
        {/* Section Header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9E9E9E]">
                Biji Arabika Gayo
              </span>
              <span className="rounded-full bg-ebony px-2.5 py-0.5 text-[10px] font-bold text-pure-white border border-[#333]">
                Pesan Langsung
              </span>
            </div>
            <h2 className="font-heading text-2xl font-extrabold tracking-tight text-pure-white sm:text-3xl">
              Menu & Pesanan Kopi
            </h2>
            <p className="mt-1 text-sm text-[#9E9E9E]">
              Pilih menu, tambahkan ke keranjang, dan pesan langsung via WhatsApp kasir.
            </p>
          </div>

          {/* Quick Cart summary pill */}
          {totalCartCount > 0 && (
            <button
              onClick={() => setIsCartOpen(true)}
              className="inline-flex items-center gap-2 rounded-2xl bg-pure-white px-4 py-2.5 text-xs font-extrabold text-matte-black shadow-md transition-all hover:bg-neutral-200 hover:scale-105"
            >
              <ShoppingBag size={15} />
              <span>Lihat Keranjang ({totalCartCount} item)</span>
            </button>
          )}
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <MenuFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Category Indicator */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm font-bold text-pure-white">
            {activeCategoryLabel}
            <span className="ml-2 font-normal text-[#9E9E9E]">
              · {filteredProducts.length} pilihan menu
            </span>
          </p>
        </div>

        {/* Product Grid — 2 cols mobile, 2 cols tablet, 3-4 cols desktop */}
        <div
          key={activeCategory}
          className="grid grid-cols-2 gap-3 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {/* Empty state fallback */}
        {filteredProducts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <p className="text-sm text-[#9E9E9E]">
              Belum ada item di kategori ini.
            </p>
          </div>
        )}
      </section>

      {/* Google Maps 5-Star Reviews Section */}
      <ReviewsSection />

      {/* Location Footer with 24/7 info & Google Maps link */}
      <LocationFooter />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        updateQuantity={handleUpdateQuantity}
        removeFromCart={handleRemoveFromCart}
        clearCart={handleClearCart}
      />

      {/* Floating Cart Button (Mobile bottom-right) */}
      {totalCartCount > 0 && (
        <div className="fixed bottom-6 right-6 z-40 md:hidden animate-fade-in-up">
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 rounded-full bg-pure-white px-5 py-3.5 text-sm font-extrabold text-matte-black shadow-2xl active:scale-95 border border-white"
          >
            <ShoppingBag size={18} />
            <span>Keranjang</span>
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-600 px-1 text-xs text-white">
              {totalCartCount}
            </span>
          </button>
        </div>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 rounded-full bg-ebony border border-[#3A3A3A] px-5 py-2.5 text-xs font-bold text-pure-white shadow-2xl animate-fade-in-up">
          {toastMessage}
        </div>
      )}
    </div>
  );
}
