import { Scissors, MapPin, Phone, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuLinks = [
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
  };

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Top Border */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                <Scissors className="w-6 h-6 text-black" />
              </div>
              <div>
                <span className="font-display text-xl font-bold tracking-wider">
                  LH
                </span>
                <span className="block text-xs text-gold tracking-widest -mt-1">
                  BARBEARIA
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Estilo, tradição e profissionalismo desde 2017. 
              Sua barbearia de confiança em Navegantes, SC.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/5547997577619"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold hover:text-black transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/barbearialhnavega"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold hover:text-black transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/60 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Serviços</h4>
            <ul className="space-y-3">
              {[
                'Corte Masculino',
                'Barba Tradicional',
                'Corte + Barba',
                'Pigmentação',
                'Sobrancelha',
                'Tratamentos',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('#services');
                    }}
                    className="text-white/60 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">
                  Av. Prefeito José Juvenal Mafra, 7067 sala 3
                  <br />
                  Gravatá, Navegantes - SC
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="https://wa.me/5547997577619"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-gold transition-colors text-sm"
                >
                  (47) 99757-7619
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="https://www.instagram.com/barbearialhnavega"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-gold transition-colors text-sm"
                >
                  @barbearialhnavega
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center md:text-left">
            © {new Date().getFullYear()} LH Barbearia. Todos os direitos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-white/60 hover:text-gold transition-colors"
          >
            <span className="text-sm">Voltar ao topo</span>
            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-gold group-hover:text-black transition-all duration-300">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>

      {/* Decorative */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </footer>
  );
};

export default Footer;
