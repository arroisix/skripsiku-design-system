/** Public entry for design tokens. Import CSS once at the app/Storybook root. */
// Nunito — rounded sans (OFL, Google Fonts). Self-hosted via Fontsource. Drives --font-sans.
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/500.css';
import '@fontsource/nunito/600.css';
import '@fontsource/nunito/700.css';
import './tokens.css';
import './typography.css';

export * from './tokens';
