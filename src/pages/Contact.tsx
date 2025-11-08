import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "mandar.mundaware@example.com",
      href: "mailto:mandar.mundaware@example.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
      color: "text-secondary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/mandarmundaware",
      href: "https://linkedin.com/in/mandarmundaware",
      color: "text-accent"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/mandarmundaware",
      href: "https://github.com/mandarmundaware",
      color: "text-primary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mumbai, India",
      href: "#",
      color: "text-secondary"
    }
  ];

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="mb-4 gradient-text" style={{ fontFamily: 'Orbitron' }}>
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's collaborate and create something extraordinary together
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
            <div className="rounded-2xl bg-card border border-border p-8">
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Orbitron' }}>
                Contact Information
              </h2>
              <div className="space-y-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : '_self'}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-start gap-4 p-4 rounded-lg bg-muted hover:bg-muted/70 transition-all group hover:glow-border"
                  >
                    <link.icon className={`w-6 h-6 mt-1 ${link.color} group-hover:scale-110 transition-transform`} />
                    <div>
                      <p className="font-semibold mb-1">{link.label}</p>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {link.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="rounded-2xl bg-card border border-border p-8">
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Orbitron' }}>
                Let's Create Together
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always excited to discuss new projects, creative ideas, or opportunities 
                to be part of your vision. Whether you need a level designer, game designer, 
                or someone to bring your interactive world to life, let's connect!
              </p>
            </div>

            {/* ArtStation Link (Placeholder) */}
            <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/50 p-8 glow-border">
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Orbitron' }}>
                View My Portfolio
              </h3>
              <p className="text-muted-foreground mb-4">
                Check out my complete portfolio on ArtStation
              </p>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10"
                onClick={() => window.open('https://artstation.com', '_blank')}
              >
                Visit ArtStation Profile
              </Button>
            </div>
          </div>
        </div>
      </main>
    );
  };
  
  export default Contact;
