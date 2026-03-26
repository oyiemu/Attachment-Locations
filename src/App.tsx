/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Map as MapIcon, LayoutGrid, Info, Compass } from 'lucide-react';
import { facilities, Facility } from './data';
import { FacilityCard } from './components/FacilityCard';
import { MapView } from './components/MapView';
import { DetailModal } from './components/DetailModal';
import { cn } from './lib/utils';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedFacilityId, setSelectedFacilityId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');

  const filters = ['All', 'Level 6', 'Level 5', 'Specialized', 'Nairobi', 'Coastal', 'Western'];

  const filteredFacilities = useMemo(() => {
    return facilities.filter((f) => {
      const matchesSearch = 
        f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.county.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.town.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesFilter = 
        activeFilter === 'All' ||
        (activeFilter === 'Level 6' && f.level === 'Level 6') ||
        (activeFilter === 'Level 5' && f.level === 'Level 5') ||
        (activeFilter === 'Specialized' && f.level === 'Specialized') ||
        (activeFilter === 'Nairobi' && f.county === 'Nairobi') ||
        (activeFilter === 'Coastal' && (f.county === 'Mombasa' || f.county === 'Kwale')) ||
        (activeFilter === 'Western' && (f.county === 'Kisumu' || f.county === 'Kakamega' || f.county === 'Vihiga'));

      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  const selectedFacility = useMemo(() => 
    facilities.find(f => f.id === selectedFacilityId) || null
  , [selectedFacilityId]);

  const handleSelectFacility = (id: string) => {
    setSelectedFacilityId(id);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Editorial Hero Section */}
      <header className="relative h-[60vh] md:h-[70vh] bg-[#0A0502] overflow-hidden flex items-center px-6 md:px-12">
        {/* Background Visuals - Atmospheric Gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-600/20 blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-600/20 blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, 30, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-purple-600/10 blur-[100px]" 
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0502]/40 to-[#0A0502] z-10" />
          
          {/* Subtle Grid Overlay */}
          <div className="grid grid-cols-8 h-full opacity-20">
            {[...Array(8)].map((_, i) => (
              <div key={i} className={cn(
                "border-r border-white/10 h-full",
                i % 2 === 0 ? "bg-white/5" : ""
              )} />
            ))}
          </div>
        </div>

        <div className="relative z-20 max-w-5xl w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 md:w-12 h-px bg-white/50" />
            <span className="text-white/60 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em]">Clinical Attachment Atlas</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="text-white text-5xl sm:text-7xl md:text-9xl font-display font-bold leading-[0.9] md:leading-[0.85] tracking-tighter"
          >
            ATTACHMENT<br />
            <span className="text-white/40 italic font-serif font-light">GUIDE</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-white/70 max-w-xl text-base md:text-xl font-medium leading-relaxed"
          >
            Helping reduce the confusion one line of code at a time
          </motion.p>

          <div className="pt-4 md:pt-8 flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.getElementById('directory')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 md:px-8 py-3 md:py-4 bg-white/90 backdrop-blur-sm text-black text-sm md:text-base font-bold rounded-full hover:bg-white transition-all shadow-lg hover:shadow-white/10 flex items-center justify-center gap-2 group"
            >
              Explore Directory
              <Compass size={18} className="group-hover:rotate-45 transition-transform" />
            </button>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-12 bottom-12 hidden lg:block"
        >
          <div className="w-64 h-64 border border-white/10 rounded-full flex items-center justify-center">
            <div className="w-48 h-48 border border-white/20 rounded-full flex items-center justify-center animate-spin-slow">
              <div className="w-2 h-2 bg-white rounded-full absolute top-0" />
            </div>
          </div>
        </motion.div>
      </header>

      {/* Main Content Area */}
      <main id="directory" className="flex-1 bg-[#FDFCFB] relative overflow-hidden px-6 md:px-12 py-16">
        {/* Subtle Background Blobs for Main Content */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          <motion.div 
            animate={{ 
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-blue-100 blur-[100px]" 
          />
          <motion.div 
            animate={{ 
              x: [0, -100, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-emerald-100 blur-[100px]" 
          />
        </div>

        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          
          {/* Controls Bar */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-6 flex-1">
              <div className="space-y-2">
                <h2 className="text-4xl font-display font-bold tracking-tight">Facility Directory</h2>
                <p className="text-gray-500 font-medium">Browse and filter clinical attachment sites by region and level.</p>
              </div>

              {/* Search & Filters */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type="text"
                    placeholder="Search by name, county, or town..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
                  />
                </div>
                <div className="flex bg-gray-100 p-1 rounded-2xl">
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={cn(
                      "flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all",
                      viewMode === 'grid' ? "bg-white shadow-sm text-black" : "text-gray-500 hover:text-gray-700"
                    )}
                  >
                    <LayoutGrid size={16} />
                    Grid
                  </button>
                  <button 
                    onClick={() => setViewMode('map')}
                    className={cn(
                      "flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all",
                      viewMode === 'map' ? "bg-white shadow-sm text-black" : "text-gray-500 hover:text-gray-700"
                    )}
                  >
                    <MapIcon size={16} />
                    Map
                  </button>
                </div>
              </div>

              {/* Filter Chips */}
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={cn(
                      "px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all border",
                      activeFilter === filter 
                        ? "bg-black border-black text-white shadow-lg" 
                        : "bg-white border-gray-200 text-gray-500 hover:border-gray-300"
                    )}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex flex-col items-end gap-2">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Results Found</span>
              <span className="text-6xl font-display font-bold leading-none">{filteredFacilities.length}</span>
            </div>
          </div>

          {/* View Content */}
          <div className="min-h-[400px] md:min-h-[600px] relative">
            <AnimatePresence mode="wait">
              {viewMode === 'grid' ? (
                <motion.div 
                  key="grid"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
                >
                  {filteredFacilities.map((facility) => (
                    <FacilityCard 
                      key={facility.id}
                      facility={facility}
                      isSelected={selectedFacilityId === facility.id}
                      onClick={() => handleSelectFacility(facility.id)}
                    />
                  ))}
                  {filteredFacilities.length === 0 && (
                    <div className="col-span-full py-16 md:py-24 flex flex-col items-center justify-center text-center space-y-4">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                        <Info size={28} />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg md:text-xl font-bold">No facilities found</h3>
                        <p className="text-sm md:text-base text-gray-500">Try adjusting your search or filters.</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div 
                  key="map"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="h-[500px] md:h-[700px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-gray-200"
                >
                  <MapView 
                    facilities={filteredFacilities}
                    selectedId={selectedFacilityId}
                    onSelect={handleSelectFacility}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl font-display font-bold">Field Guide Kenya</h2>
            <p className="text-sm text-gray-400 font-medium">© 2026 Clinical Attachment Resource. Built for Optometry Students.</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors">Privacy</a>
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors">Terms</a>
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {isModalOpen && selectedFacility && (
          <DetailModal 
            facility={selectedFacility}
            onClose={() => {
              setIsModalOpen(false);
              setSelectedFacilityId(null);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
