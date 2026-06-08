import {
  forwardRef,
  type ButtonHTMLAttributes,
  type CSSProperties,
  type ReactNode,
} from 'react';
import { IconChevronForward } from '../../icons';
import styles from './DeckCard.module.css';

export interface DeckCardProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'title'> {
  title: ReactNode;
  subtitle?: ReactNode;
  /** Colour of the deck thumbnail block. */
  thumbColor?: string;
  /** Right-side meta content (e.g. a Badge + timestamps). */
  meta?: ReactNode;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Entry card for a flashcard deck — thumbnail, title, and progress meta.
 * Mirrors the Figma DS Deck card.
 */
export const DeckCard = forwardRef<HTMLButtonElement, DeckCardProps>(function DeckCard(
  { title, subtitle, thumbColor, meta, className, ...rest },
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
        {meta != null && <span className={styles.meta}>{meta}</span>}
      </span>
      <span className={styles.chevron}>
        <IconChevronForward />
      </span>
    </button>
  );
});
