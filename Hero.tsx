import { useEffect, useRef } from 'react';
import { Calendar, GraduationCap, MessageCircle } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !contentRef.current) return;
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      const progress = Math.min(scrollY / heroHeight, 1);

      // Parallax effect on background
      const bgElement = heroRef.current.querySelector('.hero-bg') as HTMLElement;
      if (bgElement) {
        bgElement.style.transform = `translateY(${scrollY * 0.5}px) scale(${1 + progress * 0.1})`;
      }

      // Fade out content on scroll
      if (contentRef.current) {
        contentRef.current.style.opacity = `${1 - progress}`;
        contentRef.current.style.transform = `translateY(${-scrollY * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="hero-bg absolute inset-0 z-0">
        <img
          src="/images/1000079927.jpg"
          alt="LH Barbearia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-px h-40 bg-gradient-to-b from-transparent via-gold to-transparent opacity-50" />
      <div className="absolute bottom-1/4 left-10 w-px h-40 bg-gradient-to-b from-transparent via-gold to-transparent opacity-50" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
      >
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-gold text-sm font-medium tracking-wide">
              Desde 2017 em Navegantes
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-slide-up">
            ESTILO,{' '}
            <span className="text-gold">TRADIÇÃO</span>
            <br />
            E PROFISSIONALISMO
            <br />
            EM CADA CORTE
          </h1>

          {/* Description */}
          <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl animate-slide-up" style={{ animationDelay: '200ms' }}>
            Experiência premium de barbearia em Navegantes. Cortes masculinos,
            barba tradicional e cursos profissionais para quem busca excelência.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '400ms' }}>
            <a
              href="https://wa.me/5547997577619"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-gold text-black px-8 py-4 rounded font-semibold text-lg hover:bg-gold-hover transform hover:scale-105 transition-all duration-300 animate-pulse-gold"
            >
              <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Agendar Horário
            </a>
            <a
              href="https://wa.me/5547997577619"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded font-semibold text-lg hover:bg-white/20 hover:border-gold transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Falar no WhatsApp
            </a>
          </div>

          <div className="mt-4 animate-slide-up" style={{ animationDelay: '500ms' }}>
            <a
              href="#courses"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#courses')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-3 bg-transparent text-gold border border-gold/50 px-8 py-4 rounded font-semibold text-lg hover:bg-gold/10 hover:border-gold transition-all duration-300"
            >
              <GraduationCap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Conhecer os Cursos
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <div>
              <div className="font-display text-3xl sm:text-4xl font-bold text-gold">7+</div>
              <div className="text-white/60 text-sm mt-1">Anos de Experiência</div>
            </div>
            <div>
              <div className="font-display text-3xl sm:text-4xl font-bold text-gold">5000+</div>
              <div className="text-white/60 text-sm mt-1">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="font-display text-3xl sm:text-4xl font-bold text-gold">200+</div>
              <div className="text-white/60 text-sm mt-1">Alunos Formados</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
};

export default Hero;
