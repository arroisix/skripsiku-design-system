import type { Preview, Decorator } from '@storybook/react-vite'
import { useEffect } from 'react'
// Sans webfont + design system stylesheet (token CSS vars + typography classes).
import '@fontsource/open-runde/400.css'
import '@fontsource/open-runde/500.css'
import '@fontsource/open-runde/600.css'
import '@fontsource/open-runde/700.css'
import '../src/styles'

/** Sets `data-theme` on <html> so the token CSS resolves light/dark, and paints
 *  the preview background from the themed `--color-bg`. */
const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme ?? 'light'
  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    document.body.style.background = 'var(--color-bg)'
    document.body.style.color = 'var(--color-text)'
  }, [theme])
  return <Story />
}

const preview: Preview = {
  decorators: [withTheme],
  globalTypes: {
    theme: {
      description: 'Foundation theme',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;
