import { useEffect, useRef, useState } from 'react';
import { Target, Heart, Award, Users } from 'lucide-react';

const About = () => {
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

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Missão',
      description: 'Oferecer serviços de barbearia com excelência, valorizando a identidade de cada cliente.',
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Valores',
      description: 'Profissionalismo, qualidade, higiene e atendimento personalizado em cada serviço.',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Excelência',
      description: 'Compromisso com a satisfação total dos clientes e resultados impecáveis.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Equipe',
      description: 'Profissionais qualificados e em constante atualização nas últimas tendências.',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            {/* Main Image */}
            <div className="relative z-10">
              <img
                src="/images/1000079925.jpg"
                alt="LH Barbearia - Ambiente"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              {/* Gold Frame */}
              <div className="absolute -inset-4 border-2 border-gold rounded-2xl -z-10" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-gold text-black p-6 rounded-xl shadow-xl z-20">
              <div className="font-display text-4xl font-bold">7+</div>
              <div className="text-sm font-medium">Anos de<br/>Experiência</div>
            </div>

            {/* Secondary Image */}
            <div className="absolute -top-8 -left-8 w-48 h-48 rounded-xl overflow-hidden shadow-xl border-4 border-white z-20 hidden lg:block">
              <img
                src="/images/1000079922.jpg"
                alt="Equipe LH Barbearia"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
              Sobre Nós
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-black mb-6 leading-tight">
              LH BARBEARIA
              <br />
              <span className="text-gold">TRADIÇÃO E EXCELÊNCIA</span>
            </h2>
            
            <div className="space-y-4 text-gray-medium text-lg leading-relaxed mb-8">
              <p>
                Desde 2017, a <strong className="text-black">LH Barbearia</strong> tem sido referência em Navegantes, 
                Santa Catarina. Nossa missão é proporcionar uma experiência única de cuidado masculino, 
                combinando técnicas tradicionais com as últimas tendências do mercado.
              </p>
              <p>
                Nosso espaço foi cuidadosamente projetado para oferecer conforto e sofisticação, 
                onde cada cliente é tratado com atenção personalizada. Utilizamos apenas produtos 
                de alta qualidade e equipamentos profissionais.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center text-gold flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-black mb-1">
                      {value.title}
                    </h4>
                    <p className="text-sm text-gray-medium">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded font-semibold hover:bg-gold hover:text-black transition-all duration-300"
            >
              Conheça Nossa História
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
