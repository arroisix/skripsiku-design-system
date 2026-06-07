import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react';
import { IconCheckmark } from '../../icons';
import styles from './Checkbox.module.css';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: ReactNode;
  description?: ReactNode;
  /** Renders the indeterminate (partial) state. */
  indeterminate?: boolean;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * On/off control allowing several selections within a group. Supports an
 * indeterminate state for parent-of-partial-children. Mirrors the Figma DS Checkbox.
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, description, indeterminate = false, className, ...rest },
  ref,
) {
  const innerRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => innerRef.current as HTMLInputElement, []);
  useEffect(() => {
    if (innerRef.current) innerRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  return (
    <label className={cx(styles.root, className)}>
      <span className={styles.control}>
        <input ref={innerRef} type="checkbox" className={styles.input} {...rest} />
        <span className={styles.box} aria-hidden="true">
          <span className={styles.check}>
            <IconCheckmark />
          </span>
          <span className={styles.dash} />
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
