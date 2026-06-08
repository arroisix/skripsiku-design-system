/**
 * Code Connect — EXAMPLE / TEMPLATE.
 *
 * Links the Figma DS "Button" component (node 3:461) to our <Button />, so
 * Figma Dev Mode shows real <Button> code with the right props.
 *
 * Publishing needs a Figma plan with Code Connect (Organization/Enterprise +
 * a Developer seat). Once available:
 *   npx figma connect publish --token <FIGMA_TOKEN>
 *
 * ⚠️ The figma.enum / figma.boolean KEYS below ("Variant", "Primary", "Size",
 * "Icon", …) must match this component's EXACT Figma property + value names.
 * Verify them in Dev Mode (or `figma connect create`) and adjust — they're
 * filled in here from the design intent, not yet machine-verified, because the
 * current plan blocks reading the Code Connect context.
 */
import figma from '@figma/code-connect';
import { Button } from './Button';

figma.connect(
  Button,
  'https://www.figma.com/design/rtOUDlQXCcRDgbpAHPK0Lh/DS?node-id=3-461',
  {
    props: {
      // Figma "Variant" property → our `variant` prop.
      variant: figma.enum('Variant', {
        Primary: 'primary',
        Secondary: 'secondary',
        Ghost: 'ghost',
        Text: 'text',
        Danger: 'danger',
      }),
      // Figma "Size" property → our `size` prop.
      size: figma.enum('Size', {
        Small: 'sm',
        Medium: 'md',
        Large: 'lg',
      }),
      // Disabled state → the native `disabled` attribute.
      disabled: figma.enum('State', {
        Disabled: true,
      }),
      // Icon slot — maps the Figma icon instance into our `icon` prop.
      icon: figma.boolean('Icon', {
        true: figma.instance('Icon'),
        false: undefined,
      }),
      // The button label text layer → children.
      label: figma.string('Label'),
    },
    example: ({ variant, size, disabled, icon, label }) => (
      <Button variant={variant} size={size} disabled={disabled} icon={icon}>
        {label}
      </Button>
    ),
  },
);
