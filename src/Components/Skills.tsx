import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Users, Target, Briefcase } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: <BarChart className="w-8 h-8 text-primary" />,
      title: "Strategic Planning",
      description: "Expert in developing comprehensive business strategies and growth plans",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Partnership Building",
      description: "Skilled in establishing and nurturing strategic partnerships",
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Market Analysis",
      description: "In-depth market research and competitive analysis expertise",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      title: "Business Development",
      description: "Proven track record in driving business growth and expansion",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="service-card">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;