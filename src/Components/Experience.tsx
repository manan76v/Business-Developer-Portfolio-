const experiences = [
  {
    period: "2021 - Present",
    title: "Senior Business Developer",
    company: "Tech Innovations Inc.",
    description: "Leading strategic business development initiatives and managing key client relationships.",
  },
  {
    period: "2018 - 2021",
    title: "Business Development Manager",
    company: "Growth Solutions Ltd.",
    description: "Developed and executed growth strategies resulting in 40% revenue increase.",
  },
  {
    period: "2016 - 2018",
    title: "Business Development Associate",
    company: "Future Corp",
    description: "Identified and secured new business opportunities and partnerships.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Why Hire Me?</h2>
            <p className="text-muted-foreground mb-8">
              With over 7 years of experience in business development, I bring a proven
              track record of driving growth and building successful partnerships. My
              approach combines strategic thinking with practical execution.
            </p>
            
            <div className="space-y-4">
              <div className="bg-card rounded-lg p-4">
                <div className="text-primary mb-2">Strategic Planning</div>
                <div className="h-2 bg-muted rounded-full">
                  <div className="h-2 bg-primary rounded-full" style={{ width: "90%" }} />
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-4">
                <div className="text-primary mb-2">Market Analysis</div>
                <div className="h-2 bg-muted rounded-full">
                  <div className="h-2 bg-primary rounded-full" style={{ width: "85%" }} />
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-4">
                <div className="text-primary mb-2">Partnership Development</div>
                <div className="h-2 bg-muted rounded-full">
                  <div className="h-2 bg-primary rounded-full" style={{ width: "95%" }} />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">My Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="timeline-item"
                  style={{
                    animationDelay: `${index * 200}ms`,
                  }}
                >
                  <div className="text-sm text-primary">{exp.period}</div>
                  <h3 className="text-xl font-semibold mt-1">{exp.title}</h3>
                  <div className="text-muted-foreground">{exp.company}</div>
                  <p className="mt-2 text-muted-foreground">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;