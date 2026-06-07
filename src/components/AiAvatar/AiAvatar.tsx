import type { HTMLAttributes } from 'react';
import { IconSparkles } from '../../icons';
import styles from './AiAvatar.module.css';

export type AiAvatarTone = 'soft' | 'solid';

export interface AiAvatarProps extends HTMLAttributes<HTMLSpanElement> {
  /** Visual weight. @default 'soft' */
  tone?: AiAvatarTone;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Circular AI marker (sparkles) — soft tint or solid brand. Use to attribute
 * AI-generated content or assistant actions. Mirrors the Figma DS AI avatar (tone).
 */
export function AiAvatar({ tone = 'soft', className, ...rest }: AiAvatarProps) {
  return (
    <span
      className={cx(styles.avatar, styles[tone], className)}
      role="img"
      aria-label="AI"
      {...rest}
    >
      <span className={styles.icon}>
        <IconSparkles />
      </span>
    </span>
  );
}
