/**
 * @skripsiku/ui — public entry.
 *
 * Components export their own scoped CSS (CSS Modules) and the global
 * stylesheet (tokens + fonts) is pulled in here as a side-effect, so a single
 *   import { Button } from '@skripsiku/ui';
 * brings the styles it needs. You still import the stylesheet once at your app
 * root for the global token variables + fonts:
 *   import '@skripsiku/ui/styles';
 */
// Sans webfont (Open Runde) — externalised in the lib build, so a consumer's
// bundler resolves & emits the woff2 from their node_modules.
import '@fontsource/open-runde/400.css';
import '@fontsource/open-runde/500.css';
import '@fontsource/open-runde/600.css';
import '@fontsource/open-runde/700.css';
// Token CSS variables + typography classes (bundled into the lib stylesheet).
import './styles';

/* ---- Components ---- */
export { Button } from './components/Button';
export type { ButtonProps, ButtonVariant, ButtonSize } from './components/Button';

export { Input } from './components/Input';
export type { InputProps } from './components/Input';

export { Dropdown } from './components/Dropdown';
export type { DropdownProps, DropdownOption } from './components/Dropdown';

export { Radio } from './components/Radio';
export type { RadioProps } from './components/Radio';

export { Checkbox } from './components/Checkbox';
export type { CheckboxProps } from './components/Checkbox';

export { Textarea } from './components/Textarea';
export type { TextareaProps } from './components/Textarea';

export { DashboardHeader } from './components/DashboardHeader';
export type { DashboardHeaderProps } from './components/DashboardHeader';

export { Badge } from './components/Badge';
export type { BadgeProps, BadgeTone } from './components/Badge';

export { Switch } from './components/Switch';
export type { SwitchProps } from './components/Switch';

export { Avatar } from './components/Avatar';
export type { AvatarProps, AvatarSize } from './components/Avatar';

export { ProgressBar } from './components/ProgressBar';
export type { ProgressBarProps, ProgressTone } from './components/ProgressBar';

export { Reveal } from './components/Reveal';
export type { RevealProps } from './components/Reveal';

/* ---- Icons (Ionicons) ---- */
export * from './icons';

/* ---- Design tokens (typed values) ---- */
export * from './tokens/tokens';
