import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { IconChevronForward, IconSparkles } from '../../icons';
import styles from './MenuItemRich.module.css';

export type MenuItemRichTone = 'default' | 'ai';

export interface MenuItemRichProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** Icon in the leading badge (defaults to a sparkle for the `ai` tone). */
  icon?: ReactNode;
  /** Badge colour. @default 'default' */
  tone?: MenuItemRichTone;
  /** Secondary line under the title. */
  subtitle?: ReactNode;
  /** Keyboard shortcut hint (right side). */
  shortcut?: ReactNode;
  /** Shows a submenu chevron on the right. */
  chevron?: boolean;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Expanded menu row with badge, subtitle, optional shortcut, and submenu chevron.
 * The `ai` tone marks AI-powered actions. Mirrors the Figma DS Menu item — rich.
 */
export const MenuItemRich = forwardRef<HTMLButtonElement, MenuItemRichProps>(
  function MenuItemRich(
    { icon, tone = 'default', subtitle, shortcut, chevron, className, children, ...rest },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type="button"
        role="menuitem"
        className={cx(styles.item, className)}
        {...rest}
      >
        <span className={cx(styles.badge, tone === 'ai' ? styles.badgeAi : styles.badgeDefault)}>
          {icon ?? (tone === 'ai' ? <IconSparkles /> : null)}
        </span>
        <span className={styles.text}>
          <span className={styles.title}>{children}</span>
          {subtitle != null && <span className={styles.subtitle}>{subtitle}</span>}
        </span>
        {shortcut != null && <span className={styles.kbd}>{shortcut}</span>}
        {chevron && (
          <span className={styles.chevron}>
            <IconChevronForward />
          </span>
        )}
      </button>
    );
  },
);
