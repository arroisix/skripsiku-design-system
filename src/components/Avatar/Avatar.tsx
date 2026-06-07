import type { HTMLAttributes } from 'react';
import styles from './Avatar.module.css';

export type AvatarSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg';

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  /** @default 'md' */
  size?: AvatarSize;
  /** Image URL. When set, shows the photo; otherwise falls back to initials. */
  src?: string;
  /** Full name — used for the alt text and to derive initials. */
  name?: string;
  /** Explicit initials override (1–2 chars). */
  initials?: string;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

const SIZE_CLASS: Record<AvatarSize, string> = {
  '2xs': styles.xs2,
  xs: styles.xs,
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
};

function initialsFrom(name?: string) {
  if (!name) return '';
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] ?? '') + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
}

/**
 * Circular user representation — photo, initials, or icon (via children).
 * Mirrors the Figma DS Avatar (size).
 */
export function Avatar({
  size = 'md',
  src,
  name,
  initials,
  className,
  children,
  ...rest
}: AvatarProps) {
  const label = initials ?? initialsFrom(name);
  return (
    <span
      className={cx(styles.avatar, SIZE_CLASS[size], className)}
      role="img"
      aria-label={name}
      {...rest}
    >
      {src ? (
        <img className={styles.img} src={src} alt={name ?? ''} />
      ) : (
        (children ?? label)
      )}
    </span>
  );
}
