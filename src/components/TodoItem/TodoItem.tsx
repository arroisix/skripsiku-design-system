import {
  forwardRef,
  useState,
  type ButtonHTMLAttributes,
} from 'react';
import { IconCheckmark } from '../../icons';
import styles from './TodoItem.module.css';

export interface TodoItemProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onChange'> {
  /** Controlled done state. */
  done?: boolean;
  /** Uncontrolled initial done state. @default false */
  defaultDone?: boolean;
  onDoneChange?: (done: boolean) => void;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Checklist row that can be marked done (strikes through the label).
 * Mirrors the Figma DS Todo item (value).
 */
export const TodoItem = forwardRef<HTMLButtonElement, TodoItemProps>(function TodoItem(
  { done, defaultDone = false, onDoneChange, className, children, onClick, ...rest },
  ref,
) {
  const isControlled = done !== undefined;
  const [internal, setInternal] = useState(defaultDone);
  const isDone = isControlled ? done : internal;

  return (
    <button
      ref={ref}
      type="button"
      role="checkbox"
      aria-checked={isDone}
      data-done={isDone || undefined}
      className={cx(styles.item, className)}
      onClick={(e) => {
        if (!isControlled) setInternal((v) => !v);
        onDoneChange?.(!isDone);
        onClick?.(e);
      }}
      {...rest}
    >
      <span className={styles.box}>
        <span className={styles.check}>
          <IconCheckmark />
        </span>
      </span>
      <span className={styles.label}>{children}</span>
    </button>
  );
});
