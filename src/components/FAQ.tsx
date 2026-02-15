import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section className="py-24 bg-card text-card-foreground">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Need to Know</span>
          <h2 className="font-display text-4xl md:text-5xl mt-2 mb-6">Visitor Information</h2>
          <p className="text-muted-foreground">Everything you need to prepare for your night under the canopy.</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How long is the performance?</AccordionTrigger>
            <AccordionContent>
              The show runs for approximately 2 hours and 30 minutes, including one 20-minute intermission where refreshments and souvenirs are available.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is the venue wheelchair accessible?</AccordionTrigger>
            <AccordionContent>
              Yes, the Crimson Canopy is fully accessible. We have dedicated seating areas for guests with mobility needs. Please select "Accessible Seating" during checkout or contact us for assistance.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Are children allowed?</AccordionTrigger>
            <AccordionContent>
              While the circus is a spectacle for all ages, the "Midnight" showtimes (8 PM and later) are recommended for ages 12+ due to intense lighting effects and loud music. Matinee shows are perfect for younger families.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>What is the refund policy?</AccordionTrigger>
            <AccordionContent>
              All ticket sales are final. However, you may exchange your tickets for a different date up to 48 hours before your scheduled performance, subject to availability.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Is parking available?</AccordionTrigger>
            <AccordionContent>
              Yes, ample parking is available on the fairgrounds. Premium ticket holders receive complimentary VIP parking close to the entrance. Standard parking is $10 per vehicle.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export default FAQ;
