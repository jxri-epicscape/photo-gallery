import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';

interface GalleryImage {
  url: string;
  title: string;
  description: string;
}

const images: GalleryImage[] = [
  {
    url: "https://imgur.com/b9kq8CO",
    title: "Kuva 1",
    description: "Ensimmäinen kuva kuvakansiosta"
  },
  {
    url: "/images/logo+järvi.png",
    title: "Kuva 2",
    description: "Toinen kuva kuvakansiosta"
  },
  {
    url: "/images/logo+laatikot.png",
    title: "Kuva 3",
    description: "Kolmas kuva kuvakansiosta"
  },
  {
    url: "/images/logo+web.png",
    title: "Kuva 4",
    description: "Neljäs kuva kuvakansiosta"
  }
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-xl w-full">
        <div className="text-center mb-8">
          <Camera className="h-8 w-8 text-indigo-400 mx-auto mb-3" />
          <h1 className="text-2xl font-bold text-white">Photo Gallery</h1>
        </div>
        
        <div className="relative aspect-square bg-black rounded-xl overflow-hidden">
          {/* Main Image */}
          <img
            src={images[currentIndex].url}
            alt={images[currentIndex].title}
            className="w-full h-full object-cover"
          />

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h3 className="text-white font-medium">
              {images[currentIndex].title}
            </h3>
            <p className="text-gray-200 text-sm">
              {images[currentIndex].description}
            </p>
          </div>

          {/* Dots Indicator */}
          <div className="absolute top-4 left-0 right-0 flex justify-center gap-1">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
