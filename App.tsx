import Navbar from './components/Navbar';
import WhatsAppFloat from './components/WhatsAppFloat';
import Hero from './sections/Hero';
import Services from './sections/Services';
import About from './sections/About';
import Courses from './sections/Courses';
import Gallery from './sections/Gallery';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Services />

        {/* About Section */}
        <About />

        {/* Courses Section */}
        <Courses />

        {/* Gallery Section */}
        <Gallery />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
    </div>
  );
}

export default App;
