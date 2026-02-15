import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
      scrolled 
        ? "bg-background/95 backdrop-blur-md border-border/10 py-3" 
        : "bg-transparent border-transparent py-6"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
            <span className="font-display text-foreground text-lg">C</span>
          </div>
          <span className={cn(
            "font-display text-xl tracking-wide uppercase transition-colors",
            scrolled ? "text-foreground" : "text-foreground drop-shadow-md"
          )}>
            Crimson Circus
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Show', 'Performers', 'Experience', 'FAQ'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className={cn(
                "text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors",
                scrolled ? "text-muted-foreground" : "text-foreground/90 hover:text-foreground drop-shadow-sm"
              )}
            >
              {item}
            </a>
          ))}
        </div>

        <Button variant={scrolled ? "default" : "gold"} size="sm" className="gap-2">
          <Star className="h-4 w-4" />
          Buy Tickets
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
