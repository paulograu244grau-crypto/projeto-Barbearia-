import { useEffect, useRef, useState } from 'react';
import { Check, GraduationCap, Clock, Award, Users, Star } from 'lucide-react';

interface Course {
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  level: string;
  features: string[];
  price: string;
  popular?: boolean;
}

const courses: Course[] = [
  {
    title: 'Curso Iniciante',
    subtitle: 'Do zero ao primeiro corte',
    description: 'Para quem quer começar na profissão de barbeiro. Aprenda as técnicas fundamentais.',
    duration: '2 meses',
    level: 'Iniciante',
    features: [
      'Noções básicas de anatomia',
      'Técnicas de corte com máquina',
      'Técnicas de corte com tesoura',
      'Acabamentos e finalizações',
      'Higiene e biossegurança',
      'Atendimento ao cliente',
    ],
    price: 'R$ 1.200',
  },
  {
    title: 'Curso Profissional',
    subtitle: 'Aperfeiçoe suas técnicas',
    description: 'Para barbeiros que querem evoluir e se destacar no mercado.',
    duration: '3 meses',
    level: 'Intermediário',
    features: [
      'Todas as técnicas do curso iniciante',
      'Cortes avançados e degradês',
      'Barba com toalha quente',
      'Design de sobrancelha',
      'Pigmentação de barba',
      'Gestão de barbearia',
    ],
    price: 'R$ 2.000',
    popular: true,
  },
  {
    title: 'Curso Avançado',
    subtitle: 'Domine a arte da barbearia',
    description: 'Técnicas master para se tornar um barbeiro de elite.',
    duration: '4 meses',
    level: 'Avançado',
    features: [
      'Todas as técnicas dos cursos anteriores',
      'Técnicas de navalha',
      'Tratamentos capilares',
      'Coloração masculina',
      'Cortes especiais e tendências',
      'Marketing pessoal',
    ],
    price: 'R$ 3.000',
  },
];

const Courses = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="courses"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/5" />
      
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
            Cursos Profissionais
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            TORNE-SE UM BARBEIRO
            <br />
            <span className="text-gold">PROFISSIONAL</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Aprenda com os melhores. Nossos cursos formam barbeiros de excelência, 
            do básico ao avançado, com certificação reconhecida.
          </p>
        </div>

        {/* Benefits */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { icon: <GraduationCap className="w-6 h-6" />, text: 'Certificado Reconhecido' },
            { icon: <Users className="w-6 h-6" />, text: 'Turmas Reduzidas' },
            { icon: <Award className="w-6 h-6" />, text: 'Instrutores Experientes' },
            { icon: <Star className="w-6 h-6" />, text: 'Material Incluso' },
          ].map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
            >
              <div className="text-gold">{benefit.icon}</div>
              <span className="text-white text-sm font-medium">{benefit.text}</span>
            </div>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.title}
              className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-700 transform hover:-translate-y-2 ${
                course.popular ? 'ring-2 ring-gold shadow-gold-lg' : 'shadow-xl'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* Popular Badge */}
              {course.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gold text-black text-center py-2 font-semibold text-sm">
                  MAIS POPULAR
                </div>
              )}

              <div className={`p-8 ${course.popular ? 'pt-14' : ''}`}>
                {/* Header */}
                <div className="mb-6">
                  <span className="inline-block bg-black/5 text-black/70 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {course.level}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-black mb-1">
                    {course.title}
                  </h3>
                  <p className="text-gold font-medium text-sm">{course.subtitle}</p>
                </div>

                <p className="text-gray-medium mb-6">{course.description}</p>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-gray-medium">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {course.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-gray-medium text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="pt-6 border-t border-gray-soft">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-display text-3xl font-bold text-black">
                      {course.price}
                    </span>
                    <span className="text-gray-medium text-sm">/ curso completo</span>
                  </div>

                  <a
                    href={`https://wa.me/5547997577619?text=Olá! Tenho interesse no ${course.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-4 rounded-lg font-semibold transition-all duration-300 ${
                      course.popular
                        ? 'bg-gold text-black hover:bg-gold-hover'
                        : 'bg-black text-white hover:bg-gold hover:text-black'
                    }`}
                  >
                    Quero me Inscrever
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className={`mt-16 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto border border-white/10">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold fill-gold" />
              ))}
            </div>
            <blockquote className="text-white text-lg italic mb-4">
              "Fiz o curso profissional na LH Barbearia e hoje já trabalho como barbeiro. 
              A metodologia é excelente e os instrutores são muito atenciosos."
            </blockquote>
            <cite className="text-gold font-semibold not-italic">
              — Carlos Oliveira, Aluno Formado
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
