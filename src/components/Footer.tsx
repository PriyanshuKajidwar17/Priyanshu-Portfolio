import { Heart, ArrowUp, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-12 relative">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Main Footer Content */}
          <div className="mb-8">
            <h3 className="text-2xl font-playfair font-bold mb-4">Priyanshu Kajidwar</h3>
            <p className="text-background/80 max-w-md mx-auto">
              Aspiring Software Developer passionate about creating innovative solutions
            </p>
            <div className="flex justify-center mt-4">
              <a
                href="https://maps.app.goo.gl/vejs6VAPnzBohhnF6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-background/80 hover:text-background transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span>Gondia, Maharashtra, India</span>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-background/20 pt-8">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              {/* Copyright */}
              <div className="flex items-center space-x-2">
                <span>© 2025 Priyanshu Kajidwar | All Rights Reserved</span>
              </div>


              {/* Quick Links */}
              <div className="flex items-center space-x-6 text-sm">
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Skills
                </button>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="absolute -top-6 right-8 p-3 bg-primary text-primary-foreground rounded-full shadow-medium hover:scale-110 transition-all duration-300 hover:shadow-strong"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full" />
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full" />
      </div>
    </footer>
  );
};

export default Footer;