import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play, Image as ImageIcon } from "lucide-react";

interface VideoProject {
  id: number;
  title: string;
  description: string;
  youtubeId: string;
  tags: string[];
  role: string;
}

interface ImageProject {
  id: number;
  title: string;
  description: string;
  imageUrl: string; // e.g., "/images/screenshot1.jpg" or external URL
  tags: string[];
}

const Work = () => {
  const [hoveredVideoId, setHoveredVideoId] = useState<number | null>(null);

  // ——————— VIDEO PROJECTS (YouTube) ———————
  const videoProjects: VideoProject[] = [
    {
      id: 1,
      title: "3D TEAM DEATHMATCH (TDM) MOBILE GAME",
      description: "Developed a mobile multiplayer-style shooter in Unity featuring core combat mechanics, AI enemies and optimized touch controls for responsive gameplay.",
      youtubeId: "eCOSa7RhK3I",
      tags: ["Unity 3D", "Mobile Game Development"],
      role: "Game Developer"
    },
    {
      id: 2,
      title: "Desert City – Unreal Engine Level Design",
      description: "Designed and built a large-scale desert city environment in Unreal Engine, featuring a two-tier layout with a lower compact district and an expansive upper city.",
      youtubeId: "oeHPUl9ObBM",
      tags: ["Level Design", "Unreal Engine"],
      role: "Level Designer"
    },
    {
      id: 3,
      title: "Forest Path – Unity Level Flow Design",
      description: "Designed a structured five-section forest level in Unity, focusing on player progression, path readability, and smooth gameplay flow.",
      youtubeId: "wt-eaO6j5eY", // Replace with your real IDs
      tags: ["Level Design", "Unity"],
      role: "Level Designer"
    },
    
    // Add more...
  ];

  // ——————— IMAGE PROJECTS (Screenshots / Art) ———————
  const imageProjects: ImageProject[] = [
    {
      id: 1,
      title: "Forest Campfire – Unity Environment Blockout",
      description: "A small forest zone designed with dense tree placement and a campfire VFX setup. Includes a prototype humanoid character for testing player scale, navigation, and lighting interaction within a natural environment.",
      imageUrl: "/images/Forest Campfire.png",
      tags: ["Unity", "Environment Design"]
    },
    {
      id: 2,
      title: "Sunset Woods – Unity Open World Scene",
      description: "An open-world forest environment featuring dynamic sunset lighting, atmospheric depth, and a fully integrated third-person character.",
      imageUrl: "/images/Sunset Woods.png",
      tags: ["Unity", "Open World", "Lighting & Atmosphere"]
    },
    {
      id: 3,
      title: "Abandoned Cargo Yard – Unity Level Area",
      description: "A cluttered industrial zone built with shipping containers, crates, and barrels to create a tense, maze-like environment.",
      imageUrl: "/images/Abandoned Cargo Yard.png",
      tags: ["Unity", "Level Design", "Props Placement"]
    },
    // Add as many as you want
  ];

  const getYouTubeEmbedUrl = (id: string) =>
    `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&modestbranding=1&rel=0`;

  const getYouTubeThumbnail = (id: string) =>
    `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

  return (
    <main className="min-h-screen pt-24 pb-16 sm:pb-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl font-bold gradient-text break-words" style={{ fontFamily: 'Orbitron' }}>
            My Work
          </h1>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Gameplay videos, level walkthroughs, and detailed screenshots from my projects
          </p>
        </div>

        {/* ——————— VIDEO SECTION ——————— */}
        <section className="mb-16 sm:mb-20">
          <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <Play className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 text-primary" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Orbitron' }}>
              Video Showcases
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {videoProjects.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-xl overflow-hidden bg-card border border-border hover:border-primary transition-all duration-300 shadow-xl"
                onMouseEnter={() => setHoveredVideoId(project.id)}
                onMouseLeave={() => setHoveredVideoId(null)}
              >
                {/* Video Preview */}
                <div className="relative aspect-video bg-black">
                  {/* Thumbnail */}
                  <img
                    src={getYouTubeThumbnail(project.youtubeId)}
                    alt={project.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      hoveredVideoId === project.id ? "opacity-0" : "opacity-100"
                    }`}
                  />

                  {/* Hover → YouTube Player */}
                  {hoveredVideoId === project.id && (
                    <iframe
                      src={getYouTubeEmbedUrl(project.youtubeId)}
                      title={project.title}
                      allow="accelerometer; autoplay; encrypted-media"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  )}

                  {/* Play Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className={`transition-transform duration-300 ${hoveredVideoId === project.id ? "scale-0" : "scale-100"}`}>
                      <Play className="w-20 h-20 text-white drop-shadow-2xl" fill="rgba(0,0,0,0.6)" />
                    </div>
                  </div>

                  {/* YouTube Link */}
                  <a
                    href={`https://youtube.com/watch?v=${project.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full p-3 opacity-80 hover:opacity-100 transition"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                </div>

                {/* Video Info */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 break-words" style={{ fontFamily: 'Orbitron' }}>
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary font-semibold mb-3">{project.role}</p>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ——————— IMAGE GALLERY SECTION ——————— */}
        <section>
          <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <ImageIcon className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 text-primary" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Orbitron' }}>
              Screenshots & Concepts
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {imageProjects.map((img) => (
              <div
                key={img.id}
                className="group relative rounded-xl overflow-hidden bg-card border border-border hover:border-primary transition-all duration-300 shadow-lg"
              >
                <div className="aspect-video md:aspect-square overflow-hidden">
                  <img
                    src={img.imageUrl}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors break-words">
                    {img.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {img.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {img.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Optional: Fullscreen icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition">
                  <div className="bg-black/60 backdrop-blur-sm rounded-full p-2">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Note */}
        <div className="mt-14 sm:mt-20 text-center text-sm sm:text-base text-muted-foreground italic">
          <p>All videos hosted on YouTube • Images are in-game screenshots or concept renders</p>
        </div>
      </div>
    </main>
  );
};

export default Work;
