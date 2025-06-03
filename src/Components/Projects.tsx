import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Market Expansion Strategy",
      description: "Led market expansion strategy for a tech startup, resulting in 200% growth",
      tech: ["Market Analysis", "Growth Strategy", "Business Planning"],
      link: "#",
    },
    {
      title: "Partnership Development",
      description: "Established strategic partnerships with key industry players",
      tech: ["Negotiation", "Partnership Building", "Relationship Management"],
      link: "#",
    },
    {
      title: "Revenue Growth Initiative",
      description: "Implemented revenue growth strategies achieving 150% increase",
      tech: ["Sales Strategy", "Business Development", "Revenue Growth"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Recent Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="service-card group hover:border-primary/50"
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    className="text-primary hover:text-primary/80 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;