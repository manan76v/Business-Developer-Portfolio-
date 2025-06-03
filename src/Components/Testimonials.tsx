import { Card, CardContent } from "./ui/card";
import { QuoteIcon } from "lucide-react";

const testimonials = [
  {
    quote: "Working with Abdul was an absolute pleasure. His business development expertise helped us expand into new markets effectively.",
    author: "Sarah Johnson",
    position: "CEO, TechStart Inc."
  },
  {
    quote: "Exceptional strategic thinking and dedication to delivering results. Abdul's insights were invaluable to our growth.",
    author: "Michael Chen",
    position: "Director of Operations, GrowthCo"
  },
  {
    quote: "A true professional who understands the complexities of modern business development. Highly recommended!",
    author: "Emma Rodriguez",
    position: "Marketing Manager, InnovateNow"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-secondary/5">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it - here's what others have to say about working with me.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card">
              <CardContent className="pt-6">
                <QuoteIcon className="h-8 w-8 text-primary mb-4" />
                <p className="mb-6 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
