import type { HTMLAttributes } from 'react';
import styles from './Ruler.module.css';

export type RulerState = 'default' | 'first-line-indent' | 'hanging-indent';

export interface RulerProps extends HTMLAttributes<HTMLDivElement> {
  /** Indent preview. @default 'default' */
  state?: RulerState;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

const ZONE_START = 220; // text zone left edge (px)
const ZONE_END = 740; // text zone right edge (px)
const CM = 37.5; // px per cm
const INDENT = 2 * CM; // a 2cm indent step

// cm 0..13 ticks; even cm get a taller tick + a number (2,4,6,…12)
const TICKS = Array.from({ length: 14 }, (_, cm) => ({
  cm,
  x: ZONE_START + cm * CM,
  major: cm % 2 === 0,
}));

/**
 * Horizontal document ruler showing page margins, tick scale, and paragraph
 * indent markers. Mirrors the Figma DS Ruler (state).
 */
export function Ruler({ state = 'default', className, ...rest }: RulerProps) {
  const firstLineX =
    state === 'first-line-indent' ? ZONE_START + INDENT : ZONE_START;
  const leftIndentX =
    state === 'hanging-indent' ? ZONE_START + INDENT : ZONE_START;

  return (
    <div className={cx(styles.ruler, className)} role="presentation" {...rest}>
      {/* margin zones (outside the writing column) */}
      <div className={styles.marginZone} style={{ left: 140, width: ZONE_START - 140 }} />
      <div className={styles.marginZone} style={{ left: ZONE_END, width: 80 }} />
      {/* writing column */}
      <div className={styles.textZone} style={{ left: ZONE_START, width: ZONE_END - ZONE_START }} />

      {/* ticks + numbers */}
      {TICKS.map(({ cm, x, major }) => (
        <span key={cm}>
          <span
            className={cx(styles.tick, major ? styles.tickMajor : styles.tickMinor)}
            style={{ left: x }}
          />
          {major && cm > 0 && (
            <span className={styles.num} style={{ left: x }}>
              {cm}
            </span>
          )}
        </span>
      ))}

      {/* indent markers */}
      <span className={cx(styles.marker, styles.markerTop)} style={{ left: firstLineX }} />
      <span className={cx(styles.marker, styles.markerBottom)} style={{ left: leftIndentX }} />
      <span className={cx(styles.marker, styles.markerBottom)} style={{ left: ZONE_END }} />
    </div>
  );
}
