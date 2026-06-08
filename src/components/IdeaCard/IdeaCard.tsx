import type { HTMLAttributes, ReactNode } from 'react';
import { IconBookmark } from '../../icons';
import styles from './IdeaCard.module.css';

export interface IdeaCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Source/citation line shown under the idea. */
  source?: ReactNode;
  /** Icon next to the source (defaults to a bookmark). */
  sourceIcon?: ReactNode;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Card capturing a single idea/quote with its source, for the ideas pane.
 * Mirrors the Figma DS Idea card.
 */
export function IdeaCard({ source, sourceIcon, className, children, ...rest }: IdeaCardProps) {
  return (
    <div className={cx(styles.card, className)} {...rest}>
      <p className={styles.quote}>{children}</p>
      {source != null && (
        <div className={styles.source}>
          <span className={styles.icon}>{sourceIcon ?? <IconBookmark />}</span>
          <span className={styles.sourceText}>{source}</span>
        </div>
      )}
    </div>
  );
}
