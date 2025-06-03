import { Github, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-card mt-20">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Section */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="text-xl font-bold">Abdul Manan</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Business Developer focused on creating innovative solutions and driving sustainable success.
            </p>
            <div className="flex gap-4 justify-center sm:justify-start">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
              </li>
              <li>
                <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</a>
              </li>
              <li>
                <a href="#blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="text-xl font-bold">Contact Info</h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li className="flex items-center gap-2 text-muted-foreground justify-center sm:justify-start">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="hover:text-primary transition-colors">+923047645602</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground justify-center sm:justify-start">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="hover:text-primary transition-colors">contact@digitalNexus.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground justify-center sm:justify-start">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="hover:text-primary transition-colors">Vehari</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="text-xl font-bold">Newsletter</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Subscribe to stay updated with my latest insights and projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button className="w-full sm:w-auto whitespace-nowrap">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-12 pt-8 text-center text-sm sm:text-base text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Abdul Manan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
