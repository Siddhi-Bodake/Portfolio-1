import { Button } from "@/components/ui/button";
import { ArrowRight, Gamepad2, Layers3, Code2, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const navigate = useNavigate();
  const resumeFileName = 'mandar_resume1.1 .pdf';

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Futuristic game design workspace" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background"></div>
        </div>

        {/* Animated Grid Background */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 z-10 text-center">
          <div className="animate-float">
            <h1 className="mb-6 gradient-text" style={{ fontFamily: 'Orbitron' }}>
              Mandar Mundaware
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
              Game Developer • Level Designer
            </p>
            <p className="text-lg md:text-xl text-primary mb-8 max-w-2xl mx-auto italic glow-text">
              "Crafting immersive worlds where creativity meets technology"
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-background font-semibold glow-border text-lg px-8"
              onClick={() => navigate('/work')}
            >
              View My Work
              <ArrowRight className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 text-lg px-8"
              onClick={() => navigate('/contact')}
            >
              Get in Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary/10 text-lg px-8"
              onClick={() => {
                const link = document.createElement('a');
                link.href = encodeURI(`/${resumeFileName}`);
                link.download = resumeFileName;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Download Resume
              <Download className="ml-2" />
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary transition-all hover:glow-border group">
              <Gamepad2 className="w-12 h-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Orbitron' }}>Game Development</h3>
              <p className="text-muted-foreground">Creating engaging gameplay mechanics and experiences</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border hover:border-secondary transition-all hover:glow-border-pink group">
              <Layers3 className="w-12 h-12 mx-auto mb-4 text-secondary group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Orbitron' }}>Level Design</h3>
              <p className="text-muted-foreground">Building immersive environments and worlds</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border hover:border-accent transition-all hover:glow-border-pink group">
              <Code2 className="w-12 h-12 mx-auto mb-4 text-accent group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Orbitron' }}>Unity 3D and Unreal Engine</h3>
              <p className="text-muted-foreground">Expert in industry-leading game engines</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
