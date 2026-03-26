import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, History, Stethoscope, GraduationCap, Accessibility, Navigation, ExternalLink, Phone, Mail, User, Home, Coffee, Bus, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { Facility } from '../data';
import { cn } from '../lib/utils';

interface ModalProps {
  facility: Facility | null;
  onClose: () => void;
}

export const DetailModal: React.FC<ModalProps> = ({ facility, onClose }) => {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);
  
  if (!facility) return null;

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null && facility.gallery) {
      setSelectedIndex((selectedIndex + 1) % facility.gallery.length);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null && facility.gallery) {
      setSelectedIndex((selectedIndex - 1 + facility.gallery.length) % facility.gallery.length);
    }
  };

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-5xl max-h-[95vh] md:max-h-[90vh] bg-white rounded-2xl md:rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-2 md:p-3 bg-black/20 hover:bg-black/40 backdrop-blur-xl rounded-full text-white transition-all hover:scale-110 active:scale-95"
          aria-label="Close modal"
        >
          <X size={20} className="md:w-6 md:h-6" />
        </button>

        {/* Left Column: Visual & Header */}
        <div className={cn("w-full md:w-2/5 p-6 md:p-10 flex flex-col justify-between text-white relative overflow-hidden shrink-0", !facility.image && facility.color)}>
          {facility.image ? (
            <img 
              src={facility.image} 
              alt={facility.name}
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          ) : (
            <>
              {/* Abstract Background Elements */}
              <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl md:blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl md:blur-2xl" />
            </>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80 z-0" />
          
          <div className="relative z-10 space-y-4 md:space-y-6">
            <div className="flex flex-wrap gap-2">
              <span className="px-2 md:px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[8px] md:text-[10px] font-bold uppercase tracking-widest border border-white/10">
                {facility.level}
              </span>
              <span className="px-2 md:px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[8px] md:text-[10px] font-bold uppercase tracking-widest border border-white/10">
                {facility.type}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
              {facility.shortName}
            </h2>
            <div className="flex items-center gap-2 opacity-80">
              <MapPin size={16} className="md:w-[18px] md:h-[18px]" />
              <span className="text-xs md:text-sm font-medium">{facility.town}, {facility.county} County</span>
            </div>
          </div>

          <div className="relative z-10 mt-8 md:mt-12 space-y-3 md:space-y-4">
            <div className="p-3 md:p-4 bg-white/10 rounded-xl md:rounded-2xl backdrop-blur-md border border-white/10">
              <p className="text-[8px] md:text-[10px] uppercase font-bold tracking-widest opacity-60 mb-1">Coordinates</p>
              <p className="font-mono text-[10px] md:text-xs">{facility.lat.toFixed(4)}, {facility.lng.toFixed(4)}</p>
            </div>
            
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${facility.lat},${facility.lng}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 md:py-4 bg-white text-black text-sm md:text-base font-bold rounded-xl md:rounded-2xl hover:bg-gray-100 transition-colors"
            >
              <Navigation size={16} className="md:w-[18px] md:h-[18px]" />
              Open in Google Maps
              <ExternalLink size={12} className="md:w-[14px] md:h-[14px]" />
            </a>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="w-full md:w-3/5 p-6 md:p-12 overflow-y-auto bg-[#FDFCFB]">
          <div className="space-y-8 md:space-y-10">
            <section className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-2 text-gray-400">
                <History size={16} className="md:w-[18px] md:h-[18px]" />
                <h4 className="text-[10px] font-bold uppercase tracking-widest">History & Background</h4>
              </div>
              <p className="text-gray-600 leading-relaxed font-serif text-base md:text-lg italic">
                "{facility.history}"
              </p>
            </section>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <section className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-2 text-gray-400">
                  <Stethoscope size={16} className="md:w-[18px] md:h-[18px]" />
                  <h4 className="text-[10px] font-bold uppercase tracking-widest">Clinical Services</h4>
                </div>
                <ul className="space-y-1.5 md:space-y-2">
                  {facility.services.map((s, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                      <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-gray-300 shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-2 text-gray-400">
                  <GraduationCap size={16} className="md:w-[18px] md:h-[18px]" />
                  <h4 className="text-[10px] font-bold uppercase tracking-widest">Student Programmes</h4>
                </div>
                <ul className="space-y-1.5 md:space-y-2">
                  {facility.programmes.map((p, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                      <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-gray-300 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Contact Directory Section */}
            <section className="space-y-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 text-gray-400">
                <Phone size={16} className="md:w-[18px] md:h-[18px]" />
                <h4 className="text-[10px] font-bold uppercase tracking-widest">Contact Directory</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <User size={14} className="text-gray-400" />
                  <div>
                    <p className="text-[8px] uppercase font-bold text-gray-400">Head of Unit / CEO</p>
                    <p className="text-xs font-semibold text-gray-700">{facility.contact.head}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <Mail size={14} className="text-gray-400" />
                  <div>
                    <p className="text-[8px] uppercase font-bold text-gray-400">Email Address</p>
                    <a href={`mailto:${facility.contact.email}`} className="text-xs font-semibold text-blue-600 hover:underline">{facility.contact.email}</a>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl sm:col-span-2">
                  <Phone size={14} className="text-gray-400" />
                  <div>
                    <p className="text-[8px] uppercase font-bold text-gray-400">Phone Number</p>
                    <p className="text-xs font-semibold text-gray-700">{facility.contact.phone}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Living Guide Section */}
            <section className="space-y-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 text-gray-400">
                <Home size={16} className="md:w-[18px] md:h-[18px]" />
                <h4 className="text-[10px] font-bold uppercase tracking-widest">Accommodation & Living</h4>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                    <Home size={14} className="text-orange-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-900">Housing</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{facility.living.housing}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                    <Coffee size={14} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-900">Meals</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{facility.living.meals}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <Bus size={14} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-900">Transport Tips</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{facility.living.transport}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Gallery Section */}
            {facility.gallery && facility.gallery.length > 0 && (
              <section className="space-y-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-gray-400">
                  <ImageIcon size={16} className="md:w-[18px] md:h-[18px]" />
                  <h4 className="text-[10px] font-bold uppercase tracking-widest">Facility Gallery</h4>
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {facility.gallery.map((img, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setSelectedIndex(i)}
                      className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 border border-gray-100 cursor-zoom-in"
                    >
                      <img 
                        src={img} 
                        alt={`${facility.shortName} gallery ${i + 1}`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            <section className="p-4 md:p-6 bg-gray-50 rounded-2xl md:rounded-3xl border border-gray-100 space-y-3 md:space-y-4">
              <div className="flex items-center gap-2 text-gray-400">
                <Accessibility size={16} className="md:w-[18px] md:h-[18px]" />
                <h4 className="text-[10px] font-bold uppercase tracking-widest">Getting There</h4>
              </div>
              <div className="space-y-2 md:space-y-3">
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  <span className="font-bold text-gray-900">Accessibility:</span> {facility.accessibility}
                </p>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  <span className="font-bold text-gray-900">Key Roads:</span> {facility.roads}
                </p>
              </div>
            </section>
          </div>
        </div>
        </motion.div>

        {/* Swipeable Image Lightbox */}
        <AnimatePresence>
          {selectedIndex !== null && facility.gallery && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[3000] flex items-center justify-center bg-black/95 backdrop-blur-xl touch-none"
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => setSelectedIndex(null)}
                className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all z-[3100]"
              >
                <X size={24} />
              </motion.button>

              {/* Navigation Buttons (Desktop) */}
              <button 
                onClick={handlePrev}
                className="absolute left-4 md:left-8 z-[3100] p-4 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all hidden md:block"
              >
                <ChevronLeft size={32} />
              </button>
              <button 
                onClick={handleNext}
                className="absolute right-4 md:right-8 z-[3100] p-4 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all hidden md:block"
              >
                <ChevronRight size={32} />
              </button>
              
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={(_, info) => {
                  if (info.offset.x > 100) handlePrev();
                  else if (info.offset.x < -100) handleNext();
                }}
                className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
                onClick={() => setSelectedIndex(null)}
              >
                <img 
                  src={facility.gallery[selectedIndex]} 
                  alt="Enlarged view"
                  className="max-w-[90%] max-h-[80%] object-contain rounded-lg shadow-2xl pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute bottom-12 left-0 right-0 flex flex-col items-center gap-2">
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">
                    {selectedIndex + 1} / {facility.gallery.length}
                  </p>
                  <p className="text-white/20 text-[8px] font-bold uppercase tracking-widest md:hidden">
                    Swipe left or right to navigate
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
  );
};
