/** Public entry for design tokens. Import CSS once at the app/Storybook root. */
// Schibsted Grotesk (OFL, Google Fonts) — self-hosted via Fontsource. Drives --font-sans.
import '@fontsource/schibsted-grotesk/400.css';
import '@fontsource/schibsted-grotesk/500.css';
import '@fontsource/schibsted-grotesk/600.css';
import '@fontsource/schibsted-grotesk/700.css';
import './tokens.css';
import './typography.css';

export * from './tokens';
