import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { IconCheckmark } from '../../icons';
import styles from './QuizOption.module.css';

export type QuizControl = 'checkbox' | 'radio';

export interface QuizOptionProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** Control type: radio for single-answer, checkbox for multiple. @default 'radio' */
  control?: QuizControl;
  /** Whether this option is selected. */
  selected?: boolean;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Selectable answer choice for a quiz / self-test, with a checkbox or radio control.
 * Mirrors the Figma DS Quiz option (control · state).
 */
export const QuizOption = forwardRef<HTMLButtonElement, QuizOptionProps>(function QuizOption(
  { control = 'radio', selected, className, children, ...rest },
  ref,
) {
  const isRadio = control === 'radio';
  return (
    <button
      ref={ref}
      type="button"
      role={isRadio ? 'radio' : 'checkbox'}
      aria-checked={!!selected}
      data-selected={selected || undefined}
      className={cx(styles.option, className)}
      {...rest}
    >
      <span className={styles.control}>
        <span className={cx(styles.box, isRadio ? styles.radio : styles.checkbox)}>
          {isRadio ? (
            <span className={styles.dot} />
          ) : (
            <span className={styles.check}>
              <IconCheckmark />
            </span>
          )}
        </span>
        <span className={styles.label}>{children}</span>
      </span>
    </button>
  );
});
