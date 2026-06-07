/**
 * Global token stylesheet (CSS custom properties + typography classes).
 * Bundled into the library's single CSS file. The sans webfont (Open Runde) is
 * loaded separately — see src/index.ts (externalised @fontsource imports) — and
 * the display serif (Fraunces) via tokens.css's @import.
 *
 * Consumers import this once at their app root:
 *   import '@skripsiku/ui/styles';
 */
import './tokens/tokens.css';
import './tokens/typography.css';
