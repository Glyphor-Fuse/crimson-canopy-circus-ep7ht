import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set date to 3 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);
    targetDate.setHours(20, 0, 0, 0); // 8 PM showtime

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-12 bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">
          <div className="md:w-1/3">
            <h3 className="font-display text-3xl text-foreground">Next Spectacle</h3>
            <p className="text-foreground/80 mt-2 font-body text-lg">
              The curtains rise soon. Do not miss your chance to witness the magic live.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <motion.div 
                  key={item.value}
                  initial={{ scale: 0.9, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-secondary/30 backdrop-blur-sm border border-accent/30 w-20 h-24 md:w-24 md:h-32 flex items-center justify-center rounded-lg shadow-xl"
                >
                  <span className="font-display text-4xl md:text-5xl text-accent">
                    {item.value.toString().padStart(2, '0')}
                  </span>
                </motion.div>
                <span className="mt-3 text-xs md:text-sm uppercase tracking-widest text-foreground/60 font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountdownSection;
