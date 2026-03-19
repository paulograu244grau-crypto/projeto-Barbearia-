import { useEffect, useRef, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
  { src: '/images/1000079920.jpg', alt: 'Corte com design', category: 'Cortes' },
  { src: '/images/1000079918.jpg', alt: 'Degradê perfeito', category: 'Cortes' },
  { src: '/images/1000079916.jpg', alt: 'Corte clássico', category: 'Cortes' },
  { src: '/images/1000079923.jpg', alt: 'Barba tradicional', category: 'Barba' },
  { src: '/images/1000079926.jpg', alt: 'Acabamento navalha', category: 'Barba' },
  { src: '/images/1000079929.jpg', alt: 'Lavagem capilar', category: 'Tratamentos' },
  { src: '/images/1000079928.jpg', alt: 'Ferramentas profissionais', category: 'Ambiente' },
  { src: '/images/1000079925.jpg', alt: 'Ambiente LH Barbearia', category: 'Ambiente' },
];

const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filters = ['Todos', 'Cortes', 'Barba', 'Tratamentos', 'Ambiente'];

  const filteredImages = activeFilter === 'Todos'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter);

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

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
            Galeria
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-black mb-4">
            NOSSOS TRABALHOS
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="text-gray-medium max-w-2xl mx-auto text-lg">
            Confira alguns dos nossos cortes, tratamentos e o ambiente da LH Barbearia.
          </p>
        </div>

        {/* Filters */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gold text-black'
                  : 'bg-gray-100 text-gray-medium hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.src}
              className={`group relative aspect-square overflow-hidden rounded-xl cursor-pointer transition-all duration-500 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-black" />
                  </div>
                </div>
              </div>
              {/* Category Tag */}
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-gold text-black text-xs font-semibold px-3 py-1 rounded-full">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-gold transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-[90vh] object-contain rounded-lg animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
