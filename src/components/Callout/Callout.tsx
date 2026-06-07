import type { HTMLAttributes, ReactNode } from 'react';
import {
  IconSparkles,
  IconInformationCircle,
  IconCheckmarkCircle,
  IconWarning,
  IconCloseCircle,
  type IconProps,
} from '../../icons';
import styles from './Callout.module.css';

export type CalloutTone = 'brand' | 'info' | 'success' | 'warning' | 'danger';

export interface CalloutProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Colour/intent. @default 'brand' */
  tone?: CalloutTone;
  /** Heading text. */
  title?: ReactNode;
  /** Icon override; defaults to a tone-appropriate icon. */
  icon?: ReactNode;
  /** Optional action area (e.g. a `<Button>`). */
  action?: ReactNode;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

const TONE_ICON: Record<CalloutTone, (p: IconProps) => ReactNode> = {
  brand: IconSparkles,
  info: IconInformationCircle,
  success: IconCheckmarkCircle,
  warning: IconWarning,
  danger: IconCloseCircle,
};

/**
 * Boxed inline message highlighting tips, info, or warnings within a flow.
 * Mirrors the Figma DS Callout (tone).
 */
export function Callout({
  tone = 'brand',
  title,
  icon,
  action,
  className,
  children,
  ...rest
}: CalloutProps) {
  const DefaultIcon = TONE_ICON[tone];
  return (
    <div className={cx(styles.callout, styles[tone], className)} {...rest}>
      {(title != null || icon != null) && (
        <div className={styles.head}>
          <span className={styles.icon}>{icon ?? <DefaultIcon />}</span>
          {title != null && <span className={styles.title}>{title}</span>}
        </div>
      )}
      {children != null && <p className={styles.body}>{children}</p>}
      {action != null && <div className={styles.action}>{action}</div>}
    </div>
  );
}
