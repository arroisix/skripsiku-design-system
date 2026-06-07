import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react';
import styles from './Checkbox.module.css';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: ReactNode;
  description?: ReactNode;
  /** Renders the indeterminate (partial) state. */
  indeterminate?: boolean;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

const CheckIcon = () => (
  <svg viewBox="0 0 14 14" aria-hidden="true">
    <path d="M11.3 3.7a.8.8 0 0 1 0 1.1l-4.6 4.6a.8.8 0 0 1-1.1 0L3.2 7a.8.8 0 1 1 1.1-1.1l1.8 1.8 4-4a.8.8 0 0 1 1.2 0z" />
  </svg>
);

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
            <CheckIcon />
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
