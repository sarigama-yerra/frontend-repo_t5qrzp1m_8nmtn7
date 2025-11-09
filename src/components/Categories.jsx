const items = [
  { title: 'Paintings', img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop', desc: 'Acrylic, watercolor, and portraits' },
  { title: 'Mugs', img: 'https://images.unsplash.com/photo-1619533394726-9c1c46da5bb6?q=80&w=1200&auto=format&fit=crop', desc: 'Names, photos, and quotes' },
  { title: 'Keychains', img: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1200&auto=format&fit=crop', desc: 'Resin and engraved styles' },
  { title: 'Frames', img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop', desc: 'Photo and message frames' },
];

export default function Categories() {
  return (
    <section id="categories" className="py-14 bg-gradient-to-b from-white to-pink-50/40">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold">Popular Categories</h2>
            <p className="text-gray-600 mt-1">Pick a base, then add your personal touch.</p>
          </div>
          <a href="#" className="hidden md:inline-block text-pink-700 hover:text-pink-800 font-medium">View all</a>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {items.map((item) => (
            <article key={item.title} className="group rounded-2xl border border-black/5 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.img} alt={item.title} className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-300" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                <button className="mt-3 inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-2 text-xs font-medium hover:bg-gray-800">Customize</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
