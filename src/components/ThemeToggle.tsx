import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [isLight, setIsLight] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("light");
    }
    return false;
  });

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add("light");
      localStorage.setItem("bluedev-theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("bluedev-theme", "dark");
    }
  }, [isLight]);

  return (
    <button
      onClick={() => setIsLight(!isLight)}
      className="relative w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
      aria-label="Toggle theme"
    >
      <Sun
        className={`w-5 h-5 absolute transition-all duration-300 ${
          isLight
            ? "rotate-0 scale-100 opacity-100"
            : "rotate-90 scale-0 opacity-0"
        }`}
        style={{ color: "hsl(var(--foreground))" }}
      />
      <Moon
        className={`w-5 h-5 absolute transition-all duration-300 ${
          isLight
            ? "-rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100"
        }`}
        style={{ color: "hsl(var(--foreground))" }}
      />
    </button>
  );
};

export default ThemeToggle;
