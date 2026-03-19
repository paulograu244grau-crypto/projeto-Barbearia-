import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Instagram, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Olá! Meu nome é ${formData.name}.\n\nTelefone: ${formData.phone}\nEmail: ${formData.email}\n\nMensagem: ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp
    window.open(`https://wa.me/5547997577619?text=${encodedMessage}`, '_blank');
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Endereço',
      content: 'Av. Prefeito José Juvenal Mafra, 7067 sala 3',
      subContent: 'Gravatá, Navegantes - SC',
      link: 'https://maps.google.com/?q=Av.+Prefeito+José+Juvenal+Mafra,+7067+Navegantes+SC',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'WhatsApp',
      content: '(47) 99757-7619',
      subContent: 'Segunda a Sábado',
      link: 'https://wa.me/5547997577619',
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: 'Instagram',
      content: '@barbearialhnavega',
      subContent: 'Siga-nos nas redes',
      link: 'https://www.instagram.com/barbearialhnavega',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Horário de Funcionamento',
      content: 'Seg - Sex: 9h às 19h',
      subContent: 'Sábado: 9h às 17h',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
            Contato
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-black mb-4">
            ENTRE EM CONTATO
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="text-gray-medium max-w-2xl mx-auto text-lg">
            Agende seu horário ou tire suas dúvidas. Estamos prontos para atender você!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <h3 className="font-display text-2xl font-bold text-black mb-8">
              Informações de Contato
            </h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className={`flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gold/5 transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center text-gold flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-medium hover:text-gold transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-medium">{info.content}</p>
                    )}
                    {info.subContent && (
                      <p className="text-sm text-gray-light">{info.subContent}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="https://wa.me/554799757619"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Falar no WhatsApp
              </a>
              <a
                href="https://www.instagram.com/barbearialhnavega"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                <Instagram className="w-5 h-5" />
                Seguir no Instagram
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <h3 className="font-display text-2xl font-bold text-black mb-8">
              Envie uma Mensagem
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-soft rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300 outline-none"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-soft rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300 outline-none"
                    placeholder="(47) 99999-9999"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-soft rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300 outline-none"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-soft rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300 outline-none resize-none"
                  placeholder="Como podemos ajudar?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                  isSubmitted
                    ? 'bg-green-500 text-white'
                    : 'bg-black text-white hover:bg-gold hover:text-black'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Mensagem Enviada!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className={`mt-16 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="rounded-2xl overflow-hidden shadow-xl h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.234567890123!2d-48.654321!3d-26.901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzA0LjQiUyIDQ4wrAzOScxNS42Ilc!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="LH Barbearia Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
