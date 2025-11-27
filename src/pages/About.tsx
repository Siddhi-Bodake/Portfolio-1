import { Sparkles, Zap, Target, Heart } from "lucide-react";
import aboutVisual from "@/assets/about-visual.jpg";

const About = () => {
  const skills = [
    { name: "Unity", level: 95 },
    { name: "Unreal Engine", level: 90 },
    { name: "Level Design", level: 95 },
    { name: "Game Mechanics", level: 90 },
    { name: "C#", level: 85 },
    { name: "Blueprints", level: 88 },
  ];

  const tools = [
    "Unity", "Unreal Engine"
  ];

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="mb-4 gradient-text" style={{ fontFamily: 'Orbitron' }}>
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A passionate Game Designer crafting immersive experiences and interactive worlds
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-1 gap-12 items-center mb-16">
          
          {/* Story */}
          <div className="space-y-10">
            <h2 className="text-3xl font-bold text-primary" style={{ fontFamily: 'Orbitron' }}>
              My Journey
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                As a professional Game Designer and Level Designer, I specialize in creating immersive, 
                interactive experiences that captivate players and bring virtual worlds to life. With 
                expertise in both Unity and Unreal Engine, I transform creative visions into engaging 
                gameplay experiences.
              </p>
              <p>
                My journey into game design began the day I realized that making games could be just as exciting as playing them
                I began exploring Unity, building small personal projects that taught me the foundations of level design, 
                player flow, and visual storytelling. As I grew, I dove deeper into both Unity and Unreal Engine, 
                mastering the tools that bring imagination to life.
              </p>
              <p>
                Through my Level Design Certification Course, I learned to see the world differently
                not just as places and objects, but as potential levels filled with purpose and interaction. 
                Every environment became a new design opportunity.
              </p>
            </div>
          </div>
        </div>

        {/* Design Philosophy */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text" style={{ fontFamily: 'Orbitron' }}>
            Design Philosophy
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary transition-all group">
              <Sparkles className="w-12 h-12 mb-4 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Orbitron' }}>Innovation</h3>
              <p className="text-muted-foreground text-sm">
                Constantly exploring new mechanics and pushing creative boundaries
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border hover:border-secondary transition-all group">
              <Zap className="w-12 h-12 mb-4 text-secondary group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Orbitron' }}>Engagement</h3>
              <p className="text-muted-foreground text-sm">
                Creating experiences that keep players immersed and excited
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border hover:border-accent transition-all group">
              <Target className="w-12 h-12 mb-4 text-accent group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Orbitron' }}>Precision</h3>
              <p className="text-muted-foreground text-sm">
                Attention to detail in every level and gameplay element
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary transition-all group">
              <Heart className="w-12 h-12 mb-4 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Orbitron' }}>Passion</h3>
              <p className="text-muted-foreground text-sm">
                Dedicated to creating worlds that players love to explore
              </p>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text" style={{ fontFamily: 'Orbitron' }}>
            Tools & Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {tools.map((tool) => (
              <div 
                key={tool}
                className="px-6 py-3 rounded-full bg-card border border-border hover:border-primary hover:glow-border transition-all cursor-default group"
              >
                <span className="font-semibold group-hover:text-primary transition-colors">
                  {tool}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
