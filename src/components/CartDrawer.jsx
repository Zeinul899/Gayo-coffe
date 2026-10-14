import { X, Plus, Minus, Trash2, ShoppingBag, Send } from 'lucide-react';
import { businessInfo } from '../data/menu';

function formatRupiah(num) {
  return 'Rp ' + num.toLocaleString('id-ID');
}

export default function CartDrawer({ isOpen, onClose, cart, updateQuantity, removeFromCart, clearCart }) {
  if (!isOpen) return null;

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckoutWhatsApp = () => {
    if (cart.length === 0) return;

    let message = `Halo *GAYO KEDAI KOPI ROASTER*, saya mau pesan:\n\n`;
    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.name}* x ${item.quantity} = ${formatRupiah(item.price * item.quantity)}\n`;
    });
    message += `\n*Total: ${formatRupiah(totalPrice)}*\n`;
    message += `\nMohon konfirmasi ketersediaan & petunjuk pembayaran. Terima kasih! 🙏`;

    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encoded}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative z-10 flex h-full w-full max-w-md flex-col bg-[#181818] border-l border-[#2E2E2E] shadow-2xl animate-fade-in-up" style={{ animationDuration: '0.25s' }}>
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#2E2E2E] px-6 py-4 bg-ebony">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-pure-white text-matte-black shadow-sm font-bold">
              <ShoppingBag size={18} />
            </div>
            <div>
              <h2 className="font-heading text-base font-bold text-pure-white">
                Keranjang Pesanan
              </h2>
              <p className="text-xs text-[#9E9E9E]">
                {totalItems} item dipilih
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#383838] text-pewter hover:bg-ebony hover:text-pure-white transition-colors"
            aria-label="Tutup keranjang"
          >
            <X size={18} />
          </button>
        </div>

        {/* Item List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center py-12">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-ebony border border-[#2E2E2E] text-[#7A7A7A] mb-3">
                <ShoppingBag size={32} strokeWidth={1.5} />
              </div>
              <p className="font-heading text-base font-bold text-pure-white">
                Keranjang Masih Kosong
              </p>
              <p className="text-xs text-[#9E9E9E] mt-1 max-w-xs">
                Pilih menu kopi atau makanan favoritmu lalu klik tombol "+ Pesan".
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 rounded-2xl border border-[#2E2E2E] p-3 bg-ebony transition-colors hover:border-[#3E3E3E]"
              >
                {/* Thumbnail */}
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-[#121212] border border-[#2E2E2E]">
                  <img
                    src={item.image || '/images/venue-coffee.jpg'}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-heading text-sm font-bold text-pure-white truncate">
                    {item.name}
                  </h4>
                  <p className="text-xs font-semibold text-pewter mt-0.5">
                    {formatRupiah(item.price)}
                  </p>
                  <p className="text-[11px] text-[#9E9E9E] mt-0.5">
                    Subtotal: <span className="font-bold text-pure-white">{formatRupiah(item.price * item.quantity)}</span>
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex flex-col items-end gap-2">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-[#7A7A7A] hover:text-rose-400 transition-colors p-1"
                    title="Hapus item"
                  >
                    <Trash2 size={14} />
                  </button>
                  <div className="flex items-center gap-1.5 rounded-lg border border-[#383838] bg-[#141414] px-1.5 py-0.5">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="flex h-5 w-5 items-center justify-center rounded text-pewter hover:bg-ebony hover:text-pure-white transition-colors"
                      aria-label="Kurangi"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="w-5 text-center text-xs font-bold text-pure-white">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="flex h-5 w-5 items-center justify-center rounded text-pewter hover:bg-ebony hover:text-pure-white transition-colors"
                      aria-label="Tambah"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / WhatsApp Checkout */}
        {cart.length > 0 && (
          <div className="border-t border-[#2E2E2E] bg-ebony p-6 space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-pewter font-medium">Subtotal ({totalItems} item)</span>
              <span className="font-heading text-lg font-extrabold text-pure-white">
                {formatRupiah(totalPrice)}
              </span>
            </div>

            <button
              onClick={handleCheckoutWhatsApp}
              className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] px-5 py-3.5 text-sm font-extrabold text-black shadow-lg transition-all hover:bg-[#20ba59] hover:shadow-xl active:scale-[0.99]"
            >
              <WhatsAppIcon size={20} />
              <span>Pesan via WhatsApp ({formatRupiah(totalPrice)})</span>
            </button>

            <div className="flex items-center justify-between text-[11px] text-[#9E9E9E] pt-1">
              <span>Pesanan langsung terhubung ke kasir</span>
              <button
                onClick={clearCart}
                className="underline hover:text-rose-400 transition-colors"
              >
                Kosongkan Keranjang
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function WhatsAppIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.76-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.32-.02-.45s-.56-1.35-.77-1.85c-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.45.06-.68.32-.23.25-.89.87-.89 2.13s.91 2.47 1.04 2.64c.13.17 1.79 2.73 4.34 3.83.61.26 1.08.42 1.45.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.3Z" />
    </svg>
  );
}
