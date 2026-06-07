# @skripsiku/ui

Skripsiku design system — React components + design tokens, generated 1:1 from
Figma. **Storybook is the living documentation** for both designers and engineers.

- **Foundation tokens**: colors (light/dark), typography, radius, spacing, shadow, blur
- **Components**: Button, Input, Dropdown, Radio, Checkbox, Textarea, DashboardHeader, Reveal
- **Fonts**: Open Runde (sans, self-hosted) + Fraunces (display serif)

---

## For everyone — the documentation lives in Storybook

```bash
npm install
npm run storybook        # http://localhost:6006
```

Browse every component with its variants, states, props, and accessibility notes.
Toggle the **Theme** (Light / Dark) in the toolbar. This is the source of truth for
how things look and behave — designers and engineers should both work from it.

---

## For engineers — using the library in an app

### Install

```bash
npm install @skripsiku/ui          # plus react & react-dom (peer deps)
```

### Use

```tsx
// 1. Import the stylesheet ONCE at your app root (tokens + typography).
import '@skripsiku/ui/styles';

// 2. Import components anywhere.
import { Button, Input, Dropdown } from '@skripsiku/ui';

export function Example() {
  return (
    <>
      <Button variant="primary" size="md">Mulai</Button>
      <Input label="Email" placeholder="nama@kampus.ac.id" />
    </>
  );
}
```

The **sans webfont (Open Runde) loads automatically** — it ships as a dependency
and is pulled in when you import from `@skripsiku/ui`. The display serif (Fraunces)
loads from Google Fonts via the stylesheet. No manual font setup.

### Dark mode

Set `data-theme="dark"` on a wrapping element (or `<html>`); all color tokens flip.
Without it, the OS `prefers-color-scheme` is respected.

```html
<html data-theme="dark"> … </html>
```

### Design tokens in code

```ts
import { color, space, radius, typography, shadow } from '@skripsiku/ui';

color.light.brand;   // '#2563eb'
space[4];            // '16px'
radius.lg;           // '12px'
```

Or reference the live CSS custom properties (theme-aware) directly:

```css
.card {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-2);
  font-family: var(--font-sans);
}
```

---

## For the PIC — maintaining the system

### Scripts

| Command | What it does |
|---|---|
| `npm run storybook` | Dev docs at :6006 (hot reload) |
| `npm run build-storybook` | Static docs site → `storybook-static/` |
| `npm run build:lib` | Build the package → `dist/` (ESM + types + `skripsiku-ui.css`) |
| `npx vitest --project storybook run` | Run all story tests (play functions) |

### Figma ↔ code parity

The **token layer** (`src/tokens/tokens.css` + `tokens.ts`) is the contract between
Figma and code. When a value changes in the Figma Foundation, mirror it here; when a
component changes, update its `*.tsx` + `*.module.css`. Component stories double as
regression tests (vitest play functions).

- Figma Foundation file: colors/type/radius/spacing/shadow tokens
- Figma DS file: component designs (Button, Input, …)

### Publishing (optional)

The package is `private: true` to prevent accidental publishes. To distribute:
1. Remove `"private": true` (or publish to a private registry / GitHub Packages).
2. `npm run build:lib`
3. `npm publish`

For a monorepo, skip publishing and consume `@skripsiku/ui` as a workspace package.

### Adding a component

1. `src/components/<Name>/` → `<Name>.tsx` + `<Name>.module.css` + `index.ts` + `<Name>.stories.tsx`
2. Re-export it from `src/index.ts`
3. Keep styling token-driven (`var(--color-*)`, `var(--space-*)`, …) — no hardcoded values

---

## License

Code: MIT. Fonts: Open Runde & Fraunces are licensed under the SIL Open Font License (OFL).
