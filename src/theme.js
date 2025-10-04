// theme.js - Theme management module

const THEME_KEY = "theme";
const LIGHT_THEME = "light";
const DARK_THEME = "dark";

/**
 * Get the current theme from localStorage or system preference
 */
function getInitialTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);

  if (savedTheme) {
    return savedTheme;
  }

  // Check system preference
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return DARK_THEME;
  }

  return DARK_THEME;
}

/**
 * Apply theme to the document
 */
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_KEY, theme);
}

/**
 * Toggle between light and dark themes
 */
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
  applyTheme(newTheme);
  return newTheme;
}

/**
 * Initialize theme on page load
 */
function initTheme() {
  const theme = getInitialTheme();
  applyTheme(theme);
}

// Initialize theme immediately to prevent flash
initTheme();

export { toggleTheme, getInitialTheme, applyTheme, LIGHT_THEME, DARK_THEME };
