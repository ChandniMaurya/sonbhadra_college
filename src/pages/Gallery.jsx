import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Image sequence based on your HTML code
  const imageNumbers = [
    1, 2, 3, 4, 5, 6, 7, 28, 8, 9, 10, 26, 11, 12, 13, 14, 15, 16, 
    17, 18, 19, 20, 30, 21, 22, 27, 23, 24, 25, 29
  ];

  const images = imageNumbers.map(num => `/collage pic/a${num}.jpeg`);

  // Fallback image in case local image is not found
  const handleImageError = (e) => {
    e.target.src = "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  };

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'ArrowRight') nextImage(e);
      if (e.key === 'ArrowLeft') prevImage(e);
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-24">
      
      {/* Page Header */}
      <div className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/40 to-slate-900/80" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-teal-400 font-bold tracking-widest uppercase text-sm mb-2 block">Memories & Events</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Photo Gallery</h1>
          <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Beautiful glimpses of campus life, academic events, and memorable moments at Government Polytechnic Sonbhadra.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer break-inside-avoid bg-white border border-slate-100"
            >
              <img 
                src={img} 
                alt={`College view ${idx + 1}`} 
                onError={handleImageError}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
                loading="lazy"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-teal-900/0 group-hover:bg-teal-900/40 transition-colors duration-300 flex items-center justify-center backdrop-blur-[2px] opacity-0 group-hover:opacity-100">
                <div className="bg-white/20 p-4 rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <ZoomIn size={32} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 hover:bg-black p-3 rounded-full transition-all z-[110]"
            onClick={closeLightbox}
          >
            <X size={28} />
          </button>

          {/* Prev Button */}
          <button 
            className="absolute left-4 md:left-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all z-[110]"
            onClick={prevImage}
          >
            <ChevronLeft size={36} />
          </button>

          {/* Image Container */}
          <div className="relative w-full max-w-5xl max-h-[90vh] px-4 md:px-24 flex items-center justify-center p-4">
            <img 
              src={selectedImage} 
              alt="Expanded view" 
              onError={handleImageError}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()} 
            />
            <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 text-white/60 font-medium tracking-widest">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          {/* Next Button */}
          <button 
            className="absolute right-4 md:right-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all z-[110]"
            onClick={nextImage}
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}

    </div>
  );
};

export default Gallery;
