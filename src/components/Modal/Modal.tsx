import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { IconWarning } from '../../icons';
import styles from './Modal.module.css';

export type ModalTone = 'default' | 'destructive';

export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Intent. @default 'default' */
  tone?: ModalTone;
  /** Icon shown in the badge; defaults to a warning icon. */
  icon?: ReactNode;
  /** Dialog heading. */
  title: ReactNode;
  /** Action area — typically a cancel + confirm `<Button>`. */
  actions?: ReactNode;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Centered confirmation/decision dialog card. Wrap with your own backdrop/portal
 * for a full modal. Mirrors the Figma DS Modal (tone · swappable icon).
 */
export function Modal({
  tone = 'default',
  icon,
  title,
  actions,
  className,
  children,
  ...rest
}: ModalProps) {
  const titleId = useId();
  return (
    <div
      className={cx(styles.modal, className)}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      {...rest}
    >
      <span
        className={cx(
          styles.badge,
          tone === 'destructive' ? styles.badgeDestructive : styles.badgeDefault,
        )}
      >
        {icon ?? <IconWarning />}
      </span>
      <div className={styles.text}>
        <p id={titleId} className={styles.title}>
          {title}
        </p>
        {children != null && <p className={styles.desc}>{children}</p>}
      </div>
      {actions != null && <div className={styles.actions}>{actions}</div>}
    </div>
  );
}
