import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Phone, Download, MapPin } from 'lucide-react';
import profileImage from '@/assets/profile-image.png';
import { useState, useEffect } from 'react';

const Hero = () => {
  const profileImages = [
    profileImage,
    '/uploads/d2c578c6-fb36-4b0a-ad5c-19cb511b803b.png',
    '/uploads/8fc05029-0ad7-4e0d-930c-1f7def1951bc.png',
    '/uploads/733c3ade-84db-4b37-88b5-18b77f6a899c.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % profileImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [profileImages.length]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // Download resume functionality
    const link = document.createElement('a');
    link.href = '/Priyanshu_Kajidwar_Resume.pdf';
    link.download = 'Priyanshu_Kajidwar_Resume.pdf';
    link.click();
    
    // Email notification (placeholder - would need backend)
    console.log('Resume downloaded - notification sent');
  };

  return (
    <section id="hero" className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-neon-cyan/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-6s' }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Profile Image Section - Top Left */}
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start space-y-6 animate-slide-in-left">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-neon rounded-2xl transform rotate-6 opacity-20 group-hover:opacity-40 transition-all duration-500" />
            <div className="relative w-80 h-80 overflow-hidden rounded-2xl border-2 border-neon-cyan/30 shadow-neon-cyan group-hover:shadow-neon-pink transition-all duration-500">
              <img 
                src={profileImages[currentImageIndex]}
                alt="Priyanshu Kajidwar - Aspiring Software Developer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                key={currentImageIndex}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-glow rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
          </div>

          {/* Social Links with Glow */}
          <div className="flex space-x-4 mt-6">
            <a 
              href="https://www.linkedin.com/in/priyanshukajidwar/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-neon-cyan/30 hover:border-neon-cyan hover:shadow-neon-cyan transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="w-6 h-6 text-neon-cyan group-hover:animate-pulse" />
            </a>
            
            <a 
              href="https://github.com/PriyanshuKajidwar17"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-neon-green/30 hover:border-neon-green hover:shadow-glow transition-all duration-300 hover:scale-110 group"
            >
              <Github className="w-6 h-6 text-neon-green group-hover:animate-pulse" />
            </a>
            
            <a 
              href="mailto:priyanhukajid03@gmail.com"
              className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-neon-pink/30 hover:border-neon-pink hover:shadow-neon-pink transition-all duration-300 hover:scale-110 group"
            >
              <Mail className="w-6 h-6 text-neon-pink group-hover:animate-pulse" />
            </a>

            <a 
              href="tel:9356849452"
              className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-neon-orange/30 hover:border-neon-orange hover:shadow-glow transition-all duration-300 hover:scale-110 group"
            >
              <Phone className="w-6 h-6 text-neon-orange group-hover:animate-pulse" />
            </a>

            <a 
              href="https://maps.app.goo.gl/vejs6VAPnzBohhnF6"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-neon-purple/30 hover:border-neon-purple hover:shadow-glow transition-all duration-300 hover:scale-110 group"
            >
              <MapPin className="w-6 h-6 text-neon-purple group-hover:animate-pulse" />
            </a>
          </div>
        </div>

        {/* Hero Content */}
        <div className="order-1 lg:order-2 text-center lg:text-left text-foreground">
          <div className="animate-fade-in-up space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block text-foreground">Hi, I'm</span>
              <span className="block bg-gradient-neon bg-clip-text text-transparent neon-text animate-pulse">
                Priyanshu Kajidwar
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl text-neon-cyan font-semibold typewriter">
              Aspiring Software Developer
            </div>

            <p className="text-lg md:text-xl max-w-2xl text-muted-foreground leading-relaxed">
              Building scalable solutions with code & creativity. 
              Passionate about modern technologies and AI-driven development.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mt-8">
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="glow-button text-background px-8 py-6 text-lg font-semibold"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              
              <Button
                onClick={downloadResume}
                variant="outline"
                size="lg"
                className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 hover:shadow-neon-cyan transition-all duration-300 px-8 py-6 text-lg font-semibold"
              >
                <Download className="w-5 h-5 mr-2" />
                Get Resume
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="p-3 rounded-full bg-neon-purple/20 border border-neon-purple/50 hover:bg-neon-purple/30 hover:shadow-glow transition-all duration-300"
        >
          <ArrowDown className="w-6 h-6 text-neon-purple" />
        </button>
      </div>
    </section>
  );
};

export default Hero;