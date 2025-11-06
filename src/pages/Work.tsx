import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  tags: string[];
  role: string;
}

const Work = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Epic Fantasy RPG - Forest Realm",
      description: "Designed and implemented a vast forest level with branching paths, hidden secrets, and dynamic combat encounters. Created environmental storytelling elements and optimized for performance.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      tags: ["Level Design", "Unity", "RPG", "Environment"],
      role: "Lead Level Designer"
    },
    {
      id: 2,
      title: "Sci-Fi Shooter - Space Station Alpha",
      description: "Crafted a multi-level space station with zero-gravity sections, intense combat arenas, and puzzle elements. Focused on player flow and pacing.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      tags: ["Level Design", "Unreal Engine", "FPS", "Sci-Fi"],
      role: "Level Designer"
    },
    {
      id: 3,
      title: "Puzzle Adventure - Ancient Temple",
      description: "Designed intricate puzzle mechanics integrated with environmental storytelling. Created a progressive difficulty curve that rewards exploration and creative thinking.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      tags: ["Game Design", "Unity", "Puzzle", "Adventure"],
      role: "Game Designer"
    },
    {
      id: 4,
      title: "Horror Experience - Abandoned Hospital",
      description: "Developed atmospheric horror level with strategic lighting, sound design integration, and psychological tension building. Implemented dynamic encounter systems.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      tags: ["Level Design", "Unreal Engine", "Horror", "Atmosphere"],
      role: "Lead Level Designer"
    },
    {
      id: 5,
      title: "Racing Game - Urban Circuit",
      description: "Created a dynamic urban racing circuit with multiple routes, shortcuts, and environmental hazards. Optimized for high-speed gameplay and visual appeal.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      tags: ["Level Design", "Unity", "Racing", "Urban"],
      role: "Level Designer"
    },
    {
      id: 6,
      title: "Platformer - Neon City",
      description: "Designed challenging platforming sequences with precise timing mechanics. Integrated collectibles and secrets to encourage exploration and replayability.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      tags: ["Game Design", "Unreal Engine", "Platformer", "Cyberpunk"],
      role: "Game Designer"
    }
  ];

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="mb-4 gradient-text" style={{ fontFamily: 'Orbitron' }}>
            My Work
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of immersive levels, engaging gameplay, and interactive experiences
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-xl overflow-hidden bg-card border border-border hover:border-primary transition-all duration-300"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Video Container */}
              <div className="relative aspect-video bg-muted overflow-hidden">
                <iframe
                  src={project.videoUrl}
                  title={project.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-background/90 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredId === project.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}>
                  <div className="text-center">
                    <Play className="w-16 h-16 mx-auto mb-4 text-primary animate-pulse" />
                    <p className="text-lg font-semibold">Watch Demo</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors" style={{ fontFamily: 'Orbitron' }}>
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <p className="text-sm text-accent mb-3 font-semibold">{project.role}</p>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary"
                      className="bg-muted hover:bg-primary/20 hover:text-primary transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground italic">
            Note: Video links are placeholders. Replace with your actual gameplay demos and project walkthroughs.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Work;
