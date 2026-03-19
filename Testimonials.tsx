import { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  text: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'João Silva',
    text: 'Melhor barbearia de Navegantes. Atendimento excelente e profissionais qualificados. Sempre saio satisfeito com o resultado!',
    rating: 5,
  },
  {
    name: 'Pedro Santos',
    text: 'Ambiente top e barbeiros muito profissionais. Recomendo a todos que buscam qualidade e um bom atendimento.',
    rating: 5,
  },
  {
    name: 'Carlos Oliveira',
    text: 'Fiz o curso e hoje já trabalho como barbeiro. Mudou minha vida! A metodologia é excelente e os instrutores são incríveis.',
    rating: 5,
  },
  {
    name: 'Marcos Lima',
    text: 'Corte perfeito sempre. Não troco por nenhuma outra barbearia. O cuidado com os detalhes é impressionante.',
    rating: 5,
  },
  {
    name: 'Rafael Costa',
    text: 'Excelente atendimento, ambiente agradável e profissionais de primeira. Minha barbearia de confiança!',
    rating: 5,
  },
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
            Depoimentos
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-black mb-4">
            O QUE NOSSOS CLIENTES DIZEM
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </div>

        {/* Testimonials Carousel */}
        <div className={`relative max-w-4xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Main Card */}
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 text-gold/20">
              <Quote className="w-16 h-16" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-gold fill-gold animate-scale-in"
                    style={{ animationDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>

              {/* Text */}
              <blockquote className="text-center text-xl md:text-2xl text-black font-display italic mb-8 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-2xl font-bold text-gold">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <cite className="text-gold font-semibold not-italic text-lg">
                  {testimonials[currentIndex].name}
                </cite>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrev}
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-black hover:bg-gold hover:text-black transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gold w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-black hover:bg-gold hover:text-black transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { value: '4.9', label: 'Avaliação Média' },
            { value: '500+', label: 'Avaliações 5 Estrelas' },
            { value: '98%', label: 'Clientes Satisfeitos' },
            { value: '85%', label: 'Indicam para Amigos' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-4xl font-bold text-gold mb-2">
                {stat.value}
              </div>
              <div className="text-gray-medium text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
