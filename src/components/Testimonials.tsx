import { cn } from "@/lib/utils";

const reviews = [
  {
    text: "I haven't felt this kind of wonder since I was a child. The atmosphere is absolutely electric.",
    author: "Eleanor Vance",
    role: "Theater Critic"
  },
  {
    text: "The Crimson Canopy Circus isn't just a show; it's a portal to another era. Stunning.",
    author: "Marcus Thorne",
    role: "Attendee"
  },
  {
    text: "High-definition magic. Every seat feels like the front row. The aerial acts are heart-stopping.",
    author: "Sarah Jenkins",
    role: "Family Visitor"
  },
  {
    text: "A midnight spectacle indeed! The lighting, the costumes, the music... perfection.",
    author: "Dr. Aris Thorne",
    role: "Historian"
  },
  {
    text: "Best night out in years. It’s gritty, it’s beautiful, it’s real circus.",
    author: "James Miller",
    role: "Local Guide"
  }
];

export function Reviews() {
  return (
    <section className="py-20 bg-secondary border-y border-accent/10 overflow-hidden">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="font-display text-4xl text-foreground mb-4">Whispers from the Crowd</h2>
        <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex gap-8 py-4">
          {[...reviews, ...reviews, ...reviews].map((review, idx) => (
            <div 
              key={idx}
              className="relative w-[400px] flex-shrink-0 rounded-2xl bg-card/5 border border-border/5 p-8 transition-colors hover:bg-card/10 hover:border-accent/30"
            >
              <div className="absolute -top-4 -left-2 text-6xl text-accent/20 font-serif">"</div>
              <p className="text-lg text-foreground-300 whitespace-normal font-body italic mb-6 relative z-10 leading-relaxed">
                {review.text}
              </p>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-background flex items-center justify-center text-foreground font-display">
                  {review.author[0]}
                </div>
                <div>
                  <h4 className="text-foreground font-display text-sm">{review.author}</h4>
                  <p className="text-accent text-xs uppercase tracking-wider">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
