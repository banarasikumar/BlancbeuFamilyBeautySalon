import { useEffect } from "react";

export default function ThemeMetaTag() {
  useEffect(() => {
    const updateThemeColor = () => {
      const isDark = document.documentElement.classList.contains('dark');
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      
      if (metaThemeColor) {
        // Light mode: rose/pink color (primary)
        // Dark mode: darker purple/rose
        metaThemeColor.setAttribute('content', isDark ? '#1a0d14' : '#c7365f');
      }
    };

    // Update on mount
    updateThemeColor();

    // Watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          updateThemeColor();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
