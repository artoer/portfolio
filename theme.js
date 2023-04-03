let currentTheme = localStorage.getItem('theme');
if (!currentTheme) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
} else {
    document.documentElement.setAttribute('data-theme', currentTheme);
}