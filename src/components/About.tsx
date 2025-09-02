import { Card } from '@/components/ui/card';
import profileImage from '@/assets/profile-image.png';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Profile Image */}
          <div className="order-2 lg:order-1 animate-slide-in-left">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-neon rounded-2xl transform rotate-3 opacity-20 group-hover:rotate-6 group-hover:opacity-40 transition-all duration-500" />
              <Card className="relative p-2 shadow-glow bg-gradient-card overflow-hidden border border-neon-purple/30 group-hover:border-neon-cyan/50 transition-all duration-500">
                <img 
                  src={profileImage}
                  alt="Priyanshu Kajidwar - Aspiring Software Developer"
                  className="w-full h-auto rounded-xl object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-glow rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              </Card>
            </div>
          </div>

          {/* Enhanced About Content */}
          <div className="order-1 lg:order-2 space-y-8 animate-fade-in-up">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                About <span className="text-neon-purple neon-text">Me</span>
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Hello! I'm <span className="text-neon-cyan font-semibold">Priyanshu Kajidwar</span>, an aspiring software developer with a passion for 
                  creating innovative solutions and building scalable applications. My journey in 
                  technology is driven by curiosity and a desire to make a meaningful impact.
                </p>
                
                <p>
                  With a strong foundation in programming languages like <span className="text-neon-pink">Java</span>, <span className="text-neon-green">C</span>, <span className="text-neon-orange">Python</span>, and <span className="text-neon-cyan">C++</span>, 
                  I've developed expertise in modern web technologies including React, JavaScript, 
                  and various frameworks. I'm particularly excited about the potential of AI and 
                  emerging technologies to transform how we solve problems.
                </p>

                <p>
                  I believe in continuous learning and staying updated with the latest technological 
                  trends. When I'm not coding, you'll find me exploring new technologies, working on 
                  personal projects, or contributing to open-source initiatives.
                </p>
              </div>

              {/* Enhanced Key Highlights */}
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <Card className="p-6 shadow-glow hover:shadow-neon-cyan bg-gradient-card border border-neon-cyan/20 hover:border-neon-cyan/40 transition-all duration-500 group">
                  <h3 className="font-semibold text-foreground mb-2 text-neon-cyan">🧩 Problem Solver</h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    Love tackling complex challenges with creative and efficient solutions.
                  </p>
                </Card>

                <Card className="p-6 shadow-glow hover:shadow-neon-pink bg-gradient-card border border-neon-pink/20 hover:border-neon-pink/40 transition-all duration-500 group">
                  <h3 className="font-semibold text-foreground mb-2 text-neon-pink">⚡ Quick Learner</h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    Adapt quickly to new technologies and frameworks in the fast-evolving tech landscape.
                  </p>
                </Card>

                <Card className="p-6 shadow-glow hover:shadow-glow bg-gradient-card border border-neon-green/20 hover:border-neon-green/40 transition-all duration-500 group">
                  <h3 className="font-semibold text-foreground mb-2 text-neon-green">🤝 Team Player</h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    Collaborate effectively with diverse teams to deliver exceptional results.
                  </p>
                </Card>

                <Card className="p-6 shadow-glow hover:shadow-neon-pink bg-gradient-card border border-neon-orange/20 hover:border-neon-orange/40 transition-all duration-500 group">
                  <h3 className="font-semibold text-foreground mb-2 text-neon-orange">🚀 Innovation Focused</h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    Always seeking new ways to improve processes and create better user experiences.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;