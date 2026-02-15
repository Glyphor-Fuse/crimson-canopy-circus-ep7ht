import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t-4 border-primary pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <h2 className="font-display text-4xl text-foreground">
              Crimson Canopy <span className="text-primary">Circus</span>
            </h2>
            <p className="text-muted-foreground max-w-md font-body">
              A timeless tradition reborn. Join us for a night of wonder, danger, and beauty under the midnight stars. The show never truly ends.
            </p>
            <div className="flex gap-4">
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary/20 text-foreground">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary/20 text-foreground">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary/20 text-foreground">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-xl text-accent">Navigate</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Showtimes</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Performers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">VIP Experience</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Group Sales</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-xl text-accent">Contact</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                info@crimsoncircus.com
              </li>
              <li>
                123 Carnival Grounds,<br />
                Midnight District, NY 10012
              </li>
              <li className="text-accent font-medium mt-4">
                Box Office Open: 10AM - 9PM
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Crimson Canopy Circus. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
