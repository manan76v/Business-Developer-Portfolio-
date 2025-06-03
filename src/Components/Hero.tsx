import { Button } from "./ui/button";
import { Download, Github, Linkedin, Twitter, Youtube } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-[calc(100vh-5rem)] flex items-center pt-16 lg:pt-20">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8 animate-fade-up [--animation-delay:200ms] text-center lg:text-left">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Abdul Manan
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-primary mb-4 sm:mb-6">
                I'm a Business Developer
              </p>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Strategic business developer with expertise in market expansion, partnership building,
                and revenue growth. Dedicated to creating innovative business solutions and driving
                sustainable success.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button>
              
              <div className="flex gap-4 justify-center lg:justify-start">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative order-first lg:order-last">
            <div className="relative w-[280px] sm:w-[320px] lg:w-[400px] aspect-square mx-auto">
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-0 rounded-full border-2 border-t-primary animate-[spin_15s_linear_infinite]" />
              <div className="profile-border">
                <img
                  src="/lovable-uploads/newqqa.png"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;