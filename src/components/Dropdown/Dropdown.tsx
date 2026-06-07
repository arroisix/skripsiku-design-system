import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from 'react';
import styles from './Dropdown.module.css';

export interface DropdownOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

export interface DropdownProps {
  /** Field label rendered above the trigger. */
  label?: ReactNode;
  /** Placeholder shown when no value is selected. */
  placeholder?: string;
  options: DropdownOption[];
  /** Controlled selected value. */
  value?: string;
  /** Uncontrolled initial value. */
  defaultValue?: string;
  onChange?: (value: string) => void;
  helperText?: ReactNode;
  /** Error flag. Pass a string to show it as the message. */
  error?: boolean | string;
  disabled?: boolean;
  id?: string;
  /** Name for an associated hidden input (form submission). */
  name?: string;
  className?: string;
}

const ChevronDownIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path d="M4.2 6.1a.7.7 0 0 1 1 0L8 8.9l2.8-2.8a.7.7 0 1 1 1 1L8.5 10.4a.7.7 0 0 1-1 0L4.2 7.1a.7.7 0 0 1 0-1z" />
  </svg>
);
const CheckmarkCircleIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zm3.1 4.8-3.6 3.6a.7.7 0 0 1-1 0L4.9 8.2a.7.7 0 0 1 1-1l1.1 1.2 3.1-3.1a.7.7 0 1 1 1 1z" />
  </svg>
);
const AlertIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM7.3 5a.7.7 0 0 1 1.4 0v3.2a.7.7 0 0 1-1.4 0V5zM8 10.3a.85.85 0 1 0 0 1.7.85.85 0 0 0 0-1.7z" />
  </svg>
);

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Labelled, validated select that opens a list of options.
 * Mirrors the Figma DS Dropdown (state · value).
 */
export function Dropdown({
  label,
  placeholder = 'Pilih…',
  options,
  value,
  defaultValue,
  onChange,
  helperText,
  error,
  disabled,
  id,
  name,
  className,
}: DropdownProps) {
  const reactId = useId();
  const baseId = id ?? reactId;
  const listId = `${baseId}-list`;
  const messageId = `${baseId}-msg`;

  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState<string | undefined>(defaultValue);
  const selectedValue = isControlled ? value : internalValue;

  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const isError = Boolean(error);
  const errorMessage = typeof error === 'string' ? error : undefined;
  const message = errorMessage ?? (!isError ? helperText : undefined);

  const selectedIndex = options.findIndex((o) => o.value === selectedValue);
  const selected = selectedIndex >= 0 ? options[selectedIndex] : undefined;

  const close = useCallback(() => setOpen(false), []);

  const openMenu = useCallback(() => {
    if (disabled) return;
    setOpen(true);
    setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
  }, [disabled, selectedIndex]);

  const select = useCallback(
    (option: DropdownOption) => {
      if (option.disabled) return;
      if (!isControlled) setInternalValue(option.value);
      onChange?.(option.value);
      setOpen(false);
      triggerRef.current?.focus();
    },
    [isControlled, onChange],
  );

  // Close on outside click.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [open]);

  const step = (dir: 1 | -1) => {
    setActiveIndex((i) => {
      const n = options.length;
      let next = i;
      for (let k = 0; k < n; k++) {
        next = (next + dir + n) % n;
        if (!options[next]?.disabled) return next;
      }
      return i;
    });
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        open ? step(1) : openMenu();
        break;
      case 'ArrowUp':
        e.preventDefault();
        open ? step(-1) : openMenu();
        break;
      case 'Home':
        if (open) {
          e.preventDefault();
          setActiveIndex(0);
        }
        break;
      case 'End':
        if (open) {
          e.preventDefault();
          setActiveIndex(options.length - 1);
        }
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (open && options[activeIndex]) select(options[activeIndex]);
        else openMenu();
        break;
      case 'Escape':
        if (open) {
          e.preventDefault();
          close();
        }
        break;
      case 'Tab':
        if (open) close();
        break;
    }
  };

  const triggerIcon = isError ? (
    <AlertIcon />
  ) : selected && !open ? (
    <CheckmarkCircleIcon />
  ) : (
    <ChevronDownIcon />
  );

  return (
    <div className={cx(styles.root, className)} ref={rootRef}>
      {label != null && (
        <label htmlFor={baseId} className={styles.label}>
          {label}
        </label>
      )}

      <div className={styles.control}>
        <button
          ref={triggerRef}
          id={baseId}
          type="button"
          className={styles.trigger}
          disabled={disabled}
          data-open={open || undefined}
          data-error={isError || undefined}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={open ? listId : undefined}
          aria-invalid={isError || undefined}
          aria-describedby={message != null ? messageId : undefined}
          onClick={() => (open ? close() : openMenu())}
          onKeyDown={onKeyDown}
        >
          <span className={styles.value} data-placeholder={!selected || undefined}>
            {selected ? selected.label : placeholder}
          </span>
          <span
            className={cx(styles.icon, !isError && !selected && styles.chevron)}
            data-variant={isError ? 'error' : undefined}
            data-open={open || undefined}
          >
            {triggerIcon}
          </span>
        </button>

        {open && (
          <ul className={styles.menu} id={listId} role="listbox" aria-label={typeof label === 'string' ? label : undefined}>
            {options.map((option, i) => (
              <li
                key={option.value}
                role="option"
                aria-selected={option.value === selectedValue}
                aria-disabled={option.disabled || undefined}
                data-active={i === activeIndex || undefined}
                className={styles.option}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => select(option)}
              >
                <span className={styles.optTitle}>{option.label}</span>
                {option.description && (
                  <span className={styles.optDesc}>{option.description}</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {name && <input type="hidden" name={name} value={selectedValue ?? ''} />}

      {message != null && (
        <p
          id={messageId}
          className={cx(styles.message, isError ? styles.error : styles.helper)}
        >
          {message}
        </p>
      )}
    </div>
  );
}
