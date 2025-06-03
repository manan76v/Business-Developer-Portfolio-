import { Code2, PenTool, BarChart, Video, Camera, Search } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Business Strategy",
    description: "Developing comprehensive business strategies to drive growth and maximize market opportunities.",
  },
  {
    icon: PenTool,
    title: "Market Analysis",
    description: "In-depth market research and analysis to identify trends and competitive advantages.",
  },
  {
    icon: BarChart,
    title: "Growth Planning",
    description: "Creating and implementing strategic growth plans to achieve business objectives.",
  },
  {
    icon: Search,
    title: "Partnership Development",
    description: "Building and maintaining strategic partnerships to expand business reach.",
  },
  {
    icon: Video,
    title: "Sales Strategy",
    description: "Developing effective sales strategies to increase revenue and market share.",
  },
  {
    icon: Camera,
    title: "Business Innovation",
    description: "Implementing innovative solutions to drive business transformation and growth.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive business development services to help your company grow and succeed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <service.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;