import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CountdownSection } from "@/components/Countdown";
import { PerformerMarquee } from "@/components/Performers";
import { Reviews } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground font-body selection:bg-primary selection:text-white">
          <Navbar />
          <Hero />
          <CountdownSection />
          <PerformerMarquee />
          <Reviews />
          <FAQ />
          <Footer />
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
