import { Card } from '@/components/ui/card';
import { CheckCircle, Lightbulb, Zap, Target, Users, Rocket } from 'lucide-react';

const WhyChooseMe = () => {
  const reasons = [
    {
      icon: Target,
      title: "Strong Foundation in Programming",
      description: "Solid understanding of core programming concepts with expertise in multiple languages including Java, Python, C++, and JavaScript."
    },
    {
      icon: Zap,
      title: "Hands-on Web Development Experience", 
      description: "Practical experience building responsive web applications using modern frameworks like React, along with HTML, CSS, and JavaScript."
    },
    {
      icon: Lightbulb,
      title: "Passionate About AI & Modern Tech",
      description: "Actively exploring cutting-edge technologies like GenAI, prompt engineering, and artificial intelligence to stay ahead of the curve."
    },
    {
      icon: Rocket,
      title: "Quick Learner & Adaptable",
      description: "Ability to rapidly grasp new technologies and adapt to changing requirements in fast-paced development environments."
    },
    {
      icon: CheckCircle,
      title: "Problem-Solving Mindset",
      description: "Strong analytical skills with a systematic approach to identifying issues and implementing effective, scalable solutions."
    },
    {
      icon: Users,
      title: "Collaborative Team Player",
      description: "Excellent communication skills with experience working in team environments and contributing to collective project success."
    }
  ];

  return (
    <section id="why-choose" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Choose <span className="text-primary">Me?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here's what sets me apart as a developer and makes me the right choice for your next project
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card 
              key={reason.title}
              className="p-8 shadow-soft hover:shadow-strong transition-all duration-300 group border-none bg-card hover:bg-gradient-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                {reason.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                {reason.description}
              </p>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-primary/20 transition-colors pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Card className="inline-block p-8 shadow-medium bg-gradient-primary text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-lg mb-6 text-white/90">
              Let's discuss how I can contribute to your team's success and help bring your ideas to life.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;