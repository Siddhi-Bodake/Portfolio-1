import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: "/#home", section: "home", label: "Home" },
    { to: "/#about", section: "about", label: "About" },
    { to: "/#work", section: "work", label: "Work" },
    { to: "/#contact", section: "contact", label: "Contact" },
  ];

  const activeSection = location.pathname === "/"
    ? location.hash.replace("#", "") || "home"
    : location.pathname.replace("/", "");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/#home" className="flex min-w-0 items-center space-x-2" onClick={() => setIsOpen(false)}>
            <div className="w-10 h-10 shrink-0 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-background" style={{ fontFamily: 'Orbitron' }}>
              MM
            </div>
            <span className="hidden truncate text-lg font-bold sm:block md:text-xl" style={{ fontFamily: 'Orbitron' }}>
              Mandar Mundaware
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "text-muted-foreground hover:text-primary transition-colors relative py-2",
                  activeSection === item.section && "text-primary font-semibold"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "block rounded-md px-2 py-3 text-muted-foreground hover:text-primary transition-colors",
                  activeSection === item.section && "text-primary font-semibold"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
