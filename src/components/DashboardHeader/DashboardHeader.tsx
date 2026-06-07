import type { ReactNode } from 'react';
import styles from './DashboardHeader.module.css';

export interface DashboardHeaderProps {
  /** Main title (rendered in the display/Fraunces style). */
  title: ReactNode;
  /** Supporting line under the title. */
  subtitle?: ReactNode;
  /** Back-link label. When set (with `onBack`), a back link appears above the title. */
  backLabel?: ReactNode;
  onBack?: () => void;
  /** Right-aligned action slot — typically one or more `<Button>`s. */
  actions?: ReactNode;
  className?: string;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

const ChevronBackIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path d="M10.3 3.2a.7.7 0 0 1 0 1L6.5 8l3.8 3.8a.7.7 0 1 1-1 1L4.9 8.5a.7.7 0 0 1 0-1l4.4-4.3a.7.7 0 0 1 1 0z" />
  </svg>
);

/**
 * Header block for a dashboard: title, optional back link + subtitle, and a
 * top-level action slot. Mirrors the Figma DS "Dashboard header" organism.
 */
export function DashboardHeader({
  title,
  subtitle,
  backLabel,
  onBack,
  actions,
  className,
}: DashboardHeaderProps) {
  return (
    <header className={cx(styles.root, className)}>
      <div className={styles.main}>
        {backLabel != null && (
          <button type="button" className={styles.backLink} onClick={onBack}>
            <span className={styles.backIcon} aria-hidden="true">
              <ChevronBackIcon />
            </span>
            {backLabel}
          </button>
        )}
        <h2 className={styles.title}>{title}</h2>
        {subtitle != null && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      {actions != null && <div className={styles.actions}>{actions}</div>}
    </header>
  );
}
