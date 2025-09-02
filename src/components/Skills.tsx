import { Card } from '@/components/ui/card';
import { Code2, Globe, Database, Sparkles } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Skills",
      icon: Code2,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      skills: ["Java", "C", "Python", "C++"]
    },
    {
      title: "Web Technologies", 
      icon: Globe,
      color: "text-green-600",
      bgColor: "bg-green-50",
      skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Tailwind CSS"]
    },
    {
      title: "Databases",
      icon: Database,
      color: "text-purple-600", 
      bgColor: "bg-purple-50",
      skills: ["DBMS", "MySQL", "SQL"]
    },
    {
      title: "Trending Technologies",
      icon: Sparkles,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      skills: ["GenAI", "Prompt Engineering", "JSON Prompting", "Artificial Intelligence"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to build exceptional software solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="skill-card p-8 bg-card shadow-soft border-none hover:border-primary/20 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl ${category.bgColor} mb-6 group-hover:scale-110 transition-transform`}>
                <category.icon className={`w-8 h-8 ${category.color}`} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-6 text-foreground">
                {category.title}
              </h3>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className="flex items-center group-hover:translate-x-2 transition-transform"
                    style={{ transitionDelay: `${skillIndex * 50}ms` }}
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground font-medium">{skill}</span>
                  </div>
                ))}
              </div>

              {/* Skill Count Badge */}
              <div className="mt-6 pt-6 border-t border-border">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  {category.skills.length} Skills
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills Info */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <Card className="inline-block p-6 shadow-medium bg-gradient-primary text-white">
            <p className="text-lg font-medium">
              Always learning and expanding my skillset with the latest technologies and best practices
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;