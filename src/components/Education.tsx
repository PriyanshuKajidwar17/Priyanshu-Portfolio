import { Card } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "Government College of Engineering, Aurangabad",
      degree: "Master of Computer Application",
      location: "Chh. Sambhajinagar, India",
      duration: "2024 - 2026",
      cgpa: "8.295",
      type: "Masters",
      status: "Pursuing",
      logo: "/uploads/58e7862b-fb8f-43a2-85da-ff108415958e.png"
    },
    {
      institution: "Dhote Bandhu Science College, Gondia",
      degree: "Bachelor of Computer Application",
      location: "Gondia, India", 
      duration: "2021 - 2024",
      cgpa: "71.89%",
      type: "Bachelors",
      status: "Completed",
      logo: "/uploads/de3914f3-6903-4328-8e2a-dd1caa6edf1b.png"
    },
    {
      institution: "Dhote Bandhu Science College, Gondia",
      degree: "HSC in Computer Science",
      location: "Gondia, India",
      duration: "2019 - 2021", 
      cgpa: "86.67%",
      type: "Higher Secondary",
      status: "Completed",
      logo: "/uploads/de3914f3-6903-4328-8e2a-dd1caa6edf1b.png"
    },
    {
      institution: "Vishwakarma High School & Jr. College (Arts), Murdada",
      degree: "SSC in General Science",
      location: "Murdada, India",
      duration: "2018 - 2019", 
      cgpa: "76.20%",
      type: "Secondary",
      status: "Completed",
      logo: null
    }
  ];

  const getStatusColor = (status: string) => {
    return status === "Pursuing" ? "text-blue-600" : "text-green-600";
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Masters":
        return "🎓";
      case "Bachelors":
        return "🎯";
      case "Higher Secondary":
        return "📚";
      case "Secondary":
        return "📖";
      default:
        return "🎓";
    }
  };

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            My <span className="text-primary">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic journey that shaped my foundation in computer science and technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 transform md:-translate-x-1/2" />

            {educationData.map((edu, index) => (
              <div 
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
                } ${index % 2 === 0 ? 'md:mr-1/2' : 'md:ml-1/2'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className={`absolute w-6 h-6 bg-primary rounded-full border-4 border-background shadow-medium z-10 ${
                  index % 2 === 0 
                    ? 'left-5 md:left-auto md:-right-3' 
                    : 'left-5 md:-left-3'
                } top-8 animate-pulse`}>
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
                </div>

                {/* Education Card */}
                <Card className="education-card ml-16 md:ml-0 p-8 shadow-soft hover:shadow-strong transition-all duration-500 border-none bg-gradient-card group">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      {edu.logo ? (
                        <div className="w-12 h-12 flex-shrink-0">
                          <img 
                            src={edu.logo} 
                            alt={`${edu.institution} logo`}
                            className="w-full h-full object-contain rounded-lg bg-white/5 p-1"
                          />
                        </div>
                      ) : (
                        <div className="text-3xl">{getTypeIcon(edu.type)}</div>
                      )}
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {edu.institution}
                        </h3>
                        <p className="text-primary font-semibold">{edu.degree}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      edu.status === "Pursuing" 
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" 
                        : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                    }`}>
                      {edu.status}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm">{edu.duration}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold">
                        {edu.cgpa.includes('%') ? `${edu.cgpa}` : `CGPA: ${edu.cgpa}`}
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar for CGPA/Percentage */}
                  <div className="mt-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Academic Performance</span>
                      <span className="text-sm font-semibold text-primary">
                        {edu.cgpa.includes('%') ? edu.cgpa : `${((parseFloat(edu.cgpa) / 10) * 100).toFixed(1)}%`}
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse"
                        style={{ 
                          width: edu.cgpa.includes('%') 
                            ? edu.cgpa 
                            : `${(parseFloat(edu.cgpa) / 10) * 100}%`,
                          animationDelay: `${index * 0.3}s`
                        }}
                      />
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-primary/20 transition-all duration-300 pointer-events-none" />
                </Card>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;