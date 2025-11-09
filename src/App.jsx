import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Categories />
      </main>
      <Footer />
    </div>
  );
}

export default App;
