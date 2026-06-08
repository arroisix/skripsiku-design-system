import {
  forwardRef,
  type ButtonHTMLAttributes,
  type CSSProperties,
  type ReactNode,
} from 'react';
import styles from './RefItem.module.css';

export interface RefItemProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'title'> {
  title: ReactNode;
  subtitle?: ReactNode;
  /** File-type label shown on the thumbnail (e.g. "PDF"). */
  fileType?: ReactNode;
  /** Thumbnail background (colour or gradient). */
  thumbColor?: string;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Row representing a reference/citation in the library — file thumb + title.
 * Mirrors the Figma DS Ref item.
 */
export const RefItem = forwardRef<HTMLButtonElement, RefItemProps>(function RefItem(
  { title, subtitle, fileType = 'PDF', thumbColor, className, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      className={cx(styles.item, className)}
      {...rest}
    >
      <span
        className={styles.thumb}
        style={{ ['--thumb' as string]: thumbColor } as CSSProperties}
      >
        {fileType}
      </span>
      <span className={styles.body}>
        <span className={styles.title}>{title}</span>
        {subtitle != null && <span className={styles.subtitle}>{subtitle}</span>}
      </span>
    </button>
  );
});
