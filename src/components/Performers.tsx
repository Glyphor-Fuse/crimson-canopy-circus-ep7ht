import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const performers = [
  {
    id: 1,
    name: "The Flying Romanovs",
    role: "Aerial Trapeze",
    image: "/images/performer-trapeze.png",
    desc: "Defying gravity with grace and danger high above the arena floor."
  },
  {
    id: 2,
    name: "Zara the Enigma",
    role: "Illusionist",
    image: "/images/performer-magic.png",
    desc: "Reality bends to her will in a display of mind-altering mystery."
  },
  {
    id: 3,
    name: "Bastian the Strong",
    role: "Power Lifter",
    image: "/images/performer-strongman.png",
    desc: "A titan of old, proving the limits of human strength are meant to be broken."
  },
  {
    id: 4,
    name: "Luna & Sol",
    role: "Fire Dancers",
    image: "/images/performer-fire.png",
    desc: "Weaving tales of light and heat in a dangerous, hypnotic dance."
  }
];

export function PerformerMarquee() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-5xl md:text-6xl text-foreground">
            Meet the <span className="text-primary">Legends</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            World-class artists gathered from the farthest corners of the globe to perform feats you have to see to believe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {performers.map((performer) => (
            <div
              key={performer.id}
              onMouseEnter={() => setHovered(performer.id)}
              onMouseLeave={() => setHovered(null)}
              className={cn(
                "group relative h-[450px] w-full rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ease-out",
                hovered !== null && hovered !== performer.id && "opacity-40 blur-[2px] scale-95"
              )}
            >
              {/* Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${performer.image})` }}
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Spotlight Effect (Active State) */}
              <AnimatePresence>
                {hovered === performer.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 pointer-events-none border-2 border-accent/50 shadow-[inset_0_0_50px_rgba(212,175,55,0.3)] rounded-xl z-20"
                  />
                )}
              </AnimatePresence>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2">
                  {performer.role}
                </p>
                <h3 className="font-display text-2xl text-foreground mb-3">
                  {performer.name}
                </h3>
                <p className="text-foreground-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-3">
                  {performer.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PerformerMarquee;
