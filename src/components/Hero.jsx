import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center px-4 pt-12 pb-20">
        <div className="relative">
          <span className="inline-block rounded-full bg-pink-100 px-3 py-1 text-pink-700 text-xs font-medium">Handmade & Personalized</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Gifts and Paintings crafted just for you
          </h1>
          <p className="mt-4 text-gray-600">
            Create something meaningful. Add names, photos, or heartfelt messages across mugs, frames, keychains, and more.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#categories" className="rounded-full bg-pink-600 text-white px-5 py-3 text-sm font-medium shadow hover:bg-pink-700 transition-colors">Explore Categories</a>
            <a href="#contact" className="rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-gray-800 transition-colors">Get a Quote</a>
          </div>
        </div>
        <div className="relative h-[380px] md:h-[460px] rounded-2xl overflow-hidden border border-black/5">
          <Spline scene="https://prod.spline.design/0gEJbkn-O1r6kMhb/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
