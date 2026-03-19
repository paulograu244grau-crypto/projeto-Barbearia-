import { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#home' },
    { label: 'Serviços', href: '#services' },
    { label: 'Cursos', href: '#courses' },
    { label: 'Galeria', href: '#gallery' },
    { label: 'Contato', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-xl shadow-lg border-b border-gold/30'
          : 'bg-transparent'
      }`}
      style={{ height: isScrolled ? '80px' : '100px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <Scissors className="w-6 h-6 text-black" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold text-white tracking-wider">
                LH
              </span>
              <span className="text-xs text-gold tracking-widest -mt-1">
                BARBEARIA
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="relative text-white/80 hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wide group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/5547997577619"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-black px-6 py-3 rounded font-semibold text-sm hover:bg-gold-hover transform hover:scale-105 transition-all duration-300 animate-pulse-gold"
            >
              Agendar Horário
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-black/98 backdrop-blur-xl border-b border-gold/30 transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {menuItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="block text-white/80 hover:text-gold transition-colors duration-300 text-lg font-medium py-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/5547997577619"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gold text-black px-6 py-3 rounded font-semibold text-center mt-4 hover:bg-gold-hover transition-colors duration-300"
          >
            Agendar Horário
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
