import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Download, Mail } from 'lucide-react';
import pkLogo from '@/assets/pk-logo.png';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card shadow-medium' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-5">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img 
                src={pkLogo} 
                alt="PK Logo" 
                className="w-14 h-14 object-contain rounded-2xl p-2 bg-gradient-primary/10 hover:scale-110 hover:rotate-12 transition-all duration-500 animate-pulse shadow-soft"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl blur-md animate-float"></div>
            </div>
            <div className="font-playfair font-bold text-2xl text-primary hover:text-primary-light transition-smooth">
              Priyanshu Kajidwar
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-5">
            <ThemeToggle />
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="transition-smooth"
            >
              <Mail className="w-4 h-4 mr-2" />
              Hire Me
            </Button>
            <Button 
              className="glow-button text-background hover:scale-105 transition-smooth"
              onClick={() => window.open('/Priyanshu_Kajidwar_Resume.pdf', '_blank')}
            >
              <Download className="w-4 h-4 mr-2" />
              Get Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-smooth"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 glass-card rounded-lg animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-foreground hover:text-primary transition-smooth font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <div className="flex justify-center pb-2">
                  <ThemeToggle />
                </div>
                <Button
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  className="w-full transition-smooth"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Hire Me
                </Button>
                <Button 
                  className="w-full glow-button text-background transition-smooth"
                  onClick={() => window.open('/Priyanshu_Kajidwar_Resume.pdf', '_blank')}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Get Resume
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;