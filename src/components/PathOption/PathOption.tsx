import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { IconArrowForward } from '../../icons';
import styles from './PathOption.module.css';

export interface PathOptionProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'title'> {
  /** Icon in the leading badge. */
  icon?: ReactNode;
  title: ReactNode;
  /** Whether this path is chosen. */
  selected?: boolean;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Selectable card representing one choice in a guided setup/onboarding path.
 * Mirrors the Figma DS Path option (state).
 */
export const PathOption = forwardRef<HTMLButtonElement, PathOptionProps>(function PathOption(
  { icon, title, selected, className, children, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      data-selected={selected || undefined}
      aria-pressed={selected}
      className={cx(styles.option, className)}
      {...rest}
    >
      {icon != null && <span className={styles.badge}>{icon}</span>}
      <span className={styles.body}>
        <span className={styles.title}>{title}</span>
        {children != null && <span className={styles.desc}>{children}</span>}
      </span>
      <span className={styles.arrow}>
        <IconArrowForward />
      </span>
    </button>
  );
});
