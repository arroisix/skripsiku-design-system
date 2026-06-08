import {
  forwardRef,
  type ButtonHTMLAttributes,
  type CSSProperties,
  type ReactNode,
} from 'react';
import styles from './PrepCard.module.css';

export interface PrepCardProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'title'> {
  title: ReactNode;
  subtitle?: ReactNode;
  /** Thumbnail colour. */
  thumbColor?: string;
  /** Right-side element, e.g. a `<Badge>`. */
  trailing?: ReactNode;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Card summarising a sidang-prep task — thumbnail, title, status badge.
 * Mirrors the Figma DS Prep card.
 */
export const PrepCard = forwardRef<HTMLButtonElement, PrepCardProps>(function PrepCard(
  { title, subtitle, thumbColor, trailing, className, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      className={cx(styles.card, className)}
      style={{ ['--thumb' as string]: thumbColor } as CSSProperties}
      {...rest}
    >
      <span className={styles.thumb} />
      <span className={styles.body}>
        <span className={styles.title}>{title}</span>
        {subtitle != null && <span className={styles.subtitle}>{subtitle}</span>}
      </span>
      {trailing != null && <span className={styles.trailing}>{trailing}</span>}
    </button>
  );
});
