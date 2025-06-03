import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to take your business to the next level? Let's discuss how we can
            work together to achieve your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="bg-card p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Call Me</h3>
                <p className="text-muted-foreground">+923047645602</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-card p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Email Me</h3>
                <p className="text-muted-foreground">contact@digitalNexus.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-card p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-muted-foreground">Vehari</p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Input
                placeholder="Full Name"
                className="bg-card border-none"
              />
              <Input
                placeholder="Email Address"
                className="bg-card border-none"
              />
            </div>
            <Input
              placeholder="Subject"
              className="bg-card border-none"
            />
            <Textarea
              placeholder="Your Message"
              className="bg-card border-none min-h-[150px]"
            />
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;