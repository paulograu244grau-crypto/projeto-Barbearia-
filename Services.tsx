import { useEffect, useRef, useState } from 'react';
import { Scissors, Sparkles, Crown, Eye, Droplets, Clock } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  duration: string;
  price: string;
}

const services: Service[] = [
  {
    icon: <Scissors className="w-8 h-8" />,
    title: 'Corte Masculino',
    description: 'Cortes modernos e clássicos com acabamento perfeito. Do degradê ao social, adaptamos ao seu estilo.',
    duration: '30-45 min',
    price: 'R$ 35,00',
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Barba Tradicional',
    description: 'Barba feita com toalha quente, navalha e produtos premium para um acabamento impecável.',
    duration: '30 min',
    price: 'R$ 30,00',
  },
  {
    icon: <Crown className="w-8 h-8" />,
    title: 'Corte + Barba',
    description: 'O combo completo para o seu visual. Corte e barba com preço especial.',
    duration: '60 min',
    price: 'R$ 55,00',
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: 'Pigmentação',
    description: 'Realce natural para sua barba e cabelo. Técnica profissional para um visual mais definido.',
    duration: '20 min',
    price: 'R$ 25,00',
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Sobrancelha',
    description: 'Design masculino para complementar seu estilo. Acabamento natural e alinhado.',
    duration: '15 min',
    price: 'R$ 15,00',
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: 'Tratamentos',
    description: 'Hidratação e cuidados especiais para cabelo e barba. Produtos de alta qualidade.',
    duration: '30 min',
    price: 'R$ 40,00',
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
            Nossos Serviços
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-black mb-4">
            EXPERIÊNCIA PREMIUM
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
          <p className="text-gray-medium mt-6 max-w-2xl mx-auto text-lg">
            Oferecemos serviços de alta qualidade para cuidar do seu visual com
            profissionalismo e atenção aos detalhes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-white border border-gray-soft rounded-xl p-8 hover:border-gold hover:shadow-card-hover transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-black transition-all duration-300 transform group-hover:rotate-6">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl font-bold text-black mb-3 group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-medium mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-soft">
                <div className="flex items-center gap-2 text-sm text-gray-medium">
                  <Clock className="w-4 h-4" />
                  {service.duration}
                </div>
                <span className="font-display text-xl font-bold text-gold">
                  {service.price}
                </span>
              </div>

              {/* CTA */}
              <a
                href={`https://wa.me/5547997577619?text=Olá! Gostaria de agendar ${service.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block w-full text-center bg-black text-white py-3 rounded font-semibold hover:bg-gold hover:text-black transition-all duration-300"
              >
                Agendar Agora
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
