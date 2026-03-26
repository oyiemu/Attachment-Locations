import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Building2, GraduationCap, ArrowRight } from 'lucide-react';
import { Facility } from '../data';
import { cn } from '../lib/utils';

interface CardProps {
  facility: Facility;
  isSelected: boolean;
  onClick: () => void;
}

export const FacilityCard: React.FC<CardProps> = ({ facility, isSelected, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden rounded-2xl border transition-all duration-300 cursor-pointer",
        isSelected 
          ? "border-black ring-1 ring-black shadow-xl" 
          : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
      )}
    >
      {/* Visual Header (Image or Abstract Pattern) */}
      <div className={cn("h-32 w-full relative overflow-hidden", !facility.image && facility.color)}>
        {facility.image ? (
          <img 
            src={facility.image} 
            alt={facility.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
            </svg>
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
        
        <div className="absolute top-4 left-4">
          <span className="px-2 py-1 rounded-md bg-white/20 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-widest border border-white/10">
            {facility.level}
          </span>
        </div>
        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="text-white font-display text-xl leading-tight drop-shadow-sm font-bold">
            {facility.shortName}
          </h3>
        </div>
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-start gap-2 text-gray-500">
          <MapPin size={14} className="mt-1 shrink-0" />
          <p className="text-xs font-medium leading-relaxed">
            {facility.town}, {facility.county} County
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <div className="flex items-center gap-1 px-2 py-1 bg-gray-50 rounded-full border border-gray-100">
            <Building2 size={10} className="text-gray-400" />
            <span className="text-[10px] font-semibold text-gray-600 uppercase">{facility.type}</span>
          </div>
          <div className="flex items-center gap-1 px-2 py-1 bg-gray-50 rounded-full border border-gray-100">
            <GraduationCap size={10} className="text-gray-400" />
            <span className="text-[10px] font-semibold text-gray-600 uppercase">Teaching</span>
          </div>
        </div>

        <div className="pt-2 flex items-center justify-between">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">View Details</span>
          <ArrowRight size={14} className={cn(
            "transition-transform duration-300",
            isSelected ? "translate-x-0 text-black" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 text-gray-400"
          )} />
        </div>
      </div>
    </motion.div>
  );
};
