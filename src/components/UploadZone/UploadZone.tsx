import type { HTMLAttributes, ReactNode } from 'react';
import { IconCloudUpload, IconCheckmarkCircle, IconAlertCircle } from '../../icons';
import { ProgressBar } from '../ProgressBar';
import styles from './UploadZone.module.css';

export type UploadState = 'idle' | 'uploading' | 'success' | 'error';

export interface UploadZoneProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Lifecycle state. @default 'idle' */
  state?: UploadState;
  /** idle: the prompt text. @default "Klik / drop file di sini" */
  prompt?: ReactNode;
  /** idle: the accepted-formats hint. */
  hint?: ReactNode;
  /** filled states: the file name. */
  filename?: ReactNode;
  /** filled states: meta line under the file name. */
  meta?: ReactNode;
  /** success/error: short status label on the right. */
  status?: ReactNode;
  /** success/error: a caption shown below the row. */
  caption?: ReactNode;
  /** uploading: 0–100 progress. */
  progress?: number;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Drag-and-drop upload area covering the full lifecycle (idle → uploading →
 * success/error). Mirrors the Figma DS Upload zone (state).
 */
export function UploadZone({
  state = 'idle',
  prompt = 'Klik / drop file di sini',
  hint,
  filename,
  meta,
  status,
  caption,
  progress = 0,
  className,
  ...rest
}: UploadZoneProps) {
  if (state === 'idle') {
    return (
      <div
        className={cx(styles.zone, styles.idle, className)}
        role="button"
        tabIndex={0}
        {...rest}
      >
        <span className={styles.idleBadge}>
          <IconCloudUpload />
        </span>
        <span className={styles.title}>{prompt}</span>
        {hint != null && <span className={styles.hint}>{hint}</span>}
      </div>
    );
  }

  const isError = state === 'error';
  return (
    <div className={cx(styles.zone, styles.filled, isError && styles.error, className)} {...rest}>
      <div className={styles.row}>
        <span className={cx(styles.rowBadge, isError && styles.rowBadgeError)}>
          {isError ? <IconAlertCircle /> : <IconCheckmarkCircle />}
        </span>
        <span className={styles.rowBody}>
          {filename != null && <span className={styles.filename}>{filename}</span>}
          {state === 'uploading' ? (
            <ProgressBar value={progress} />
          ) : (
            meta != null && <span className={styles.meta}>{meta}</span>
          )}
        </span>
        {status != null && (
          <span className={cx(styles.status, isError ? styles.statusError : styles.statusSuccess)}>
            {status}
          </span>
        )}
      </div>
      {caption != null && <p className={styles.caption}>{caption}</p>}
    </div>
  );
}
