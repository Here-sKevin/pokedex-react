import React, { useEffect, useState } from 'react';
import { Label } from '../ui/label';
import { Toggle } from '../ui/toggle';

const ThemeToggle: React.FC = () => {
  type Theme = 'light' | 'dark';

  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    return savedTheme || 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Toggle onClick={toggleTheme} aria-label="Toggle italic">
      <Label htmlFor="theme-toggle">{theme === 'light' ? '🌞' : '🌙'}</Label>
    </Toggle>
  )

};

export default ThemeToggle;
