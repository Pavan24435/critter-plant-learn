import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type ThemeMode = "light" | "dark" | "plants" | "animals" | "ocean" | "butterflies";

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType>({ theme: "light", setTheme: () => {} });

export const themes: { id: ThemeMode; label: string; icon: string }[] = [
  { id: "light", label: "Light", icon: "☀️" },
  { id: "dark", label: "Dark", icon: "🌙" },
  { id: "plants", label: "Plants", icon: "🌿" },
  { id: "animals", label: "Animals", icon: "🦁" },
  { id: "ocean", label: "Ocean", icon: "🐠" },
  { id: "butterflies", label: "Butterflies", icon: "🦋" },
];

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeMode>(() => (localStorage.getItem("ffv-theme") as ThemeMode) || "light");

  useEffect(() => {
    localStorage.setItem("ffv-theme", theme);
    const root = document.documentElement;
    root.classList.remove("dark", "theme-plants", "theme-animals", "theme-ocean", "theme-butterflies");
    if (theme === "dark") root.classList.add("dark");
    else if (theme !== "light") root.classList.add(`theme-${theme}`);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
