import { ShoppingCart, Gift } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-pink-100 text-pink-600">
            <Gift size={18} />
          </span>
          <span className="text-xl font-semibold tracking-tight">Anne</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#home" className="hover:text-pink-600 transition-colors">Home</a>
          <a href="#categories" className="hover:text-pink-600 transition-colors">Categories</a>
          <a href="#about" className="hover:text-pink-600 transition-colors">About</a>
          <a href="#contact" className="hover:text-pink-600 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-full bg-pink-600 text-white px-4 py-2 text-sm shadow-sm hover:bg-pink-700 transition-colors">
            <ShoppingCart size={16} />
            Customize Now
          </button>
        </div>
      </div>
    </header>
  );
}
