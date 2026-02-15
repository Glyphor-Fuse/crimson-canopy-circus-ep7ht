import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const images = [
  {
    src: "/images/hero-trapeze.png",
    title: "Defy Gravity",
    subtitle: "Witness the impossible under the canopy."
  },
  {
    src: "/images/hero-ringmaster.png",
    title: "The Midnight Spectacle",
    subtitle: "A world of wonder awaits you."
  },
  {
    src: "/images/hero-fire.png",
    title: "Ignite Your Soul",
    subtitle: "Passion and performance in perfect harmony."
  }
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[90vh] w-full overflow-hidden bg-background">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[current].src})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-background/30" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          key={`text-${current}`}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-4xl space-y-6"
        >
          <h2 className="text-xl font-medium tracking-[0.2em] text-accent uppercase">
            {images[current].subtitle}
          </h2>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-foreground drop-shadow-2xl">
            {images[current].title}
          </h1>
          <div className="pt-8">
            <Button size="lg" className="text-lg px-12 group">
              Get Tickets <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 transition-all duration-300 rounded-full ${
              index === current ? "w-12 bg-accent" : "w-2 bg-background/50 hover:bg-background"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
