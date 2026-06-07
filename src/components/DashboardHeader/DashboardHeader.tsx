import type { ReactNode } from 'react';
import { IconChevronBack } from '../../icons';
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
              <IconChevronBack />
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
