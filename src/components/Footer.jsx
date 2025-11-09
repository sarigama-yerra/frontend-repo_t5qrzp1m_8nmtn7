export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold">About Anne</h3>
          <p className="text-gray-600 mt-2 max-w-prose">
            Anne crafts bespoke gifts and paintings that capture moments and memories. Every piece is hand-finished with care.
          </p>
        </div>
        <form className="bg-white border border-black/5 rounded-2xl p-4 shadow-sm">
          <h4 className="font-medium">Contact us</h4>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input required placeholder="Name" className="w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200" />
            <input required type="email" placeholder="Email" className="w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200" />
            <textarea rows={3} placeholder="Your message" className="sm:col-span-2 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200" />
          </div>
          <button type="submit" className="mt-3 rounded-full bg-pink-600 text-white px-5 py-2 text-sm font-medium hover:bg-pink-700">Send</button>
        </form>
      </div>
      <div className="border-t border-black/5 py-4 text-center text-sm text-gray-600">© {new Date().getFullYear()} Anne — All rights reserved.</div>
    </footer>
  );
}
