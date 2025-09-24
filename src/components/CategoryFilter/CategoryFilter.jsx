import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';
import portfolio1 from './../../assets/img/profolio1.jpg';
import portfolio2 from './../../assets/img/profolio2.jpg';
import portfolio3 from './../../assets/img/profolio3.jpg';
import portfolio4 from './../../assets/img/profolio4.jpg';
import portfolio5 from './../../assets/img/profolio5.jpg';
import portfolio6 from './../../assets/img/profolio6.jpg';

const categories = ['All', 'Wedding', 'Baby shower', 'Outdoor', 'Couple Portraits', 'Elements'];

// const portfolioImages = useMemo(() => [
//     portfolio1,
//     portfolio6,
//     portfolio2,
//     portfolio3,
//     portfolio4,
//     portfolio5,
//     portfolio1,
//     portfolio3,
// ], []);
const items = [
  { id: 1, category: 'Wedding', title: 'Home Design', image: portfolio1 },
  { id: 2, category: 'Baby shower', title: 'Portfolio Item', image: portfolio2 },
  { id: 3, category: 'Outdoor', title: 'Blog Post', image: portfolio3 },
  { id: 4, category: 'Couple Portraits', title: 'About Page', image: portfolio4 },
  { id: 5, category: 'Elements', title: 'UI Kit', image: portfolio5 },
  { id: 6, category: 'Baby shower', title: 'More Work', image: portfolio6 },
];

const PortfolioFramer = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems =
    activeCategory === 'All'
      ? items
      : items.filter((item) => item.category === activeCategory);


          useEffect(() => {
              Fancybox.bind('[data-fancybox="gallery"]', {
                  // optional config
                  animated: true,
                  showClass: "fancybox-zoomIn",
                  hideClass: "fancybox-zoomOut",
              });
              return () => {
                  Fancybox.destroy();
              };
          }, []);

  return (
    <div className="px-4 py-10">
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${activeCategory === cat
              ? 'bg-primary text-white shadow-md'
              : 'bg-gray-200 text-gray-800 hover:bg-primary hover:text-white'
              }`}>
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-lg shadow">
              <a href={item.image} data-fancybox="gallery" className="relative block w-full h-full group">
                <img
                 src={item.image}
                  loading="lazy"
                  alt={`portfolio-${item}`}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center text-sm text-white transition-opacity duration-300 opacity-0 bg-black/60 group-hover:opacity-100">
                  Click Here
                </div>
              </a>
              <img alt={item.title}
                className="object-cover w-full h-auto"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PortfolioFramer;
