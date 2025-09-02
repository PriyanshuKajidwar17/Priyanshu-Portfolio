import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Instagram,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEBEMAILAPIKEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setIsSubmitting(false);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      setIsSubmitting(false);
    }

  };

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/priyanshukajidwar/",
      color: "hover:text-neon-cyan hover:shadow-neon-cyan",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/PriyanshuKajidwar17",
      color: "hover:text-neon-green hover:shadow-glow",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/priyanshu_17i/",
      color: "hover:text-neon-pink hover:shadow-neon-pink",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get In <span className="text-neon-purple neon-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Let&apos;s
            create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8 animate-slide-in-left">
            <Card className="p-8 shadow-glow bg-gradient-card border border-neon-purple/20 hover:border-neon-purple/40 transition-all duration-500">
              <h3 className="text-2xl font-bold mb-6 text-foreground neon-text text-neon-cyan">
                Let&apos;s Connect
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I&apos;m always open to discussing new opportunities,
                interesting projects, or just having a conversation about
                technology and development.
              </p>

              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="p-3 rounded-lg bg-neon-purple/10 group-hover:bg-neon-purple/20 border border-neon-purple/30 group-hover:shadow-glow transition-all duration-300 mr-4">
                    <Mail className="w-5 h-5 text-neon-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <a
                      href="mailto:priyanhukajid03@gmail.com"
                      className="text-muted-foreground hover:text-neon-purple transition-colors"
                    >
                      priyanhukajid03@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="p-3 rounded-lg bg-neon-cyan/10 group-hover:bg-neon-cyan/20 border border-neon-cyan/30 group-hover:shadow-neon-cyan transition-all duration-300 mr-4">
                    <Phone className="w-5 h-5 text-neon-cyan animate-pulse" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground text-neon-cyan font-mono">
                      9356849452
                    </p>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="p-3 rounded-lg bg-neon-green/10 group-hover:bg-neon-green/20 border border-neon-green/30 group-hover:shadow-glow transition-all duration-300 mr-4">
                    <MapPin className="w-5 h-5 text-neon-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground">
                      Available for Remote Work
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-semibold text-foreground mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-lg bg-card border border-border ${social.color} transition-all duration-300 hover:scale-110 hover:-translate-y-1`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8 shadow-glow bg-gradient-card border border-neon-pink/20 hover:border-neon-pink/40 transition-all duration-500 animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-6 text-foreground neon-text text-neon-pink">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="access_key" value={import.meta.env.VITE_WEBEMAILAPIKEY} />
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                />
              </div>

              <Input
                id="subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Discussion"
              />

              <Textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or just say hello..."
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full glow-button text-background py-6 text-lg font-semibold group"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-background mr-2" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
             <span>{result}</span>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
