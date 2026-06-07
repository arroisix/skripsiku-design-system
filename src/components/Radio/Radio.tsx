import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';
import styles from './Radio.module.css';

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Primary label text. */
  label?: ReactNode;
  /** Optional secondary description below the label. */
  description?: ReactNode;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Single-choice control. Use within a group (same `name`) of two or more.
 * Mirrors the Figma DS Radio (state · selected).
 */
export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { label, description, className, ...rest },
  ref,
) {
  return (
    <label className={cx(styles.root, className)}>
      <span className={styles.control}>
        <input ref={ref} type="radio" className={styles.input} {...rest} />
        <span className={styles.box} aria-hidden="true">
          <span className={styles.dot} />
        </span>
      </span>
      {(label != null || description != null) && (
        <span className={styles.labelCol}>
          {label != null && <span className={styles.title}>{label}</span>}
          {description != null && <span className={styles.desc}>{description}</span>}
        </span>
      )}
    </label>
  );
});
