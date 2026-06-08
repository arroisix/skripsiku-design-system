import type { HTMLAttributes, ReactNode } from 'react';
import {
  IconCheckmark,
  IconSparkles,
  IconThumbsUp,
  IconThumbsDown,
  IconClose,
} from '../../icons';
import styles from './AiAcceptBar.module.css';

export interface AiAcceptBarProps extends HTMLAttributes<HTMLDivElement> {
  acceptLabel?: ReactNode;
  guideLabel?: ReactNode;
  copilotLabel?: ReactNode;
  onAccept?: () => void;
  onGuide?: () => void;
  onThumbsUp?: () => void;
  onThumbsDown?: () => void;
  onReject?: () => void;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Action bar shown after the AI proposes a change — accept, retry, or discard.
 * Mirrors the Figma DS AI accept bar.
 */
export function AiAcceptBar({
  acceptLabel = 'Accept',
  guideLabel = 'Guide with thinking',
  copilotLabel = 'Copilot AI',
  onAccept,
  onGuide,
  onThumbsUp,
  onThumbsDown,
  onReject,
  className,
  ...rest
}: AiAcceptBarProps) {
  return (
    <div className={cx(styles.bar, className)} {...rest}>
      <button type="button" className={styles.accept} onClick={onAccept}>
        <IconCheckmark />
        {acceptLabel}
      </button>
      <button type="button" className={styles.guide} onClick={onGuide}>
        <IconSparkles />
        {guideLabel}
      </button>
      <button type="button" className={styles.iconBtn} aria-label="Bagus" onClick={onThumbsUp}>
        <IconThumbsUp />
      </button>
      <button type="button" className={styles.iconBtn} aria-label="Kurang" onClick={onThumbsDown}>
        <IconThumbsDown />
      </button>
      <button type="button" className={styles.iconBtn} aria-label="Tolak" onClick={onReject}>
        <IconClose />
      </button>
      <span className={styles.divider} />
      <span className={styles.copilot}>
        <span className={styles.avatar} />
        <span className={styles.copilotLabel}>{copilotLabel}</span>
      </span>
    </div>
  );
}
