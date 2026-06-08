import {
  useRef,
  useState,
  type HTMLAttributes,
  type KeyboardEvent,
  type PointerEvent,
} from 'react';
import styles from './Ruler.module.css';

export type RulerState = 'default' | 'first-line-indent' | 'hanging-indent';

/** Indent values in cm: first-line & left measured from the left margin, right from the right margin. */
export interface RulerIndents {
  firstLine: number;
  left: number;
  right: number;
}

export interface RulerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Initial indent preset. @default 'default' */
  state?: RulerState;
  /** Fired while dragging a marker, with indents in cm. */
  onChange?: (indents: RulerIndents) => void;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

const ZONE_START = 220;
const ZONE_END = 740;
const CM = 37.5;
const INDENT = 2 * CM;
const MIN = 140;
const MAX = 820;
const STEP = CM / 4; // keyboard nudge (0.25cm)

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));
const round1 = (n: number) => Math.round(n * 10) / 10;

const TICKS = Array.from({ length: 14 }, (_, cm) => ({
  cm,
  x: ZONE_START + cm * CM,
  major: cm % 2 === 0,
}));

type Marker = 'firstLine' | 'left' | 'right';

function preset(state: RulerState) {
  return {
    firstLine: state === 'first-line-indent' ? ZONE_START + INDENT : ZONE_START,
    left: state === 'hanging-indent' ? ZONE_START + INDENT : ZONE_START,
    right: ZONE_END,
  };
}

/**
 * Interactive document ruler — drag the indent markers (first-line, left, right)
 * to set paragraph indents. Reports values in cm via `onChange`. Keyboard
 * accessible (focus a marker, arrow keys to nudge). Mirrors the Figma DS Ruler.
 */
export function Ruler({ state = 'default', onChange, className, ...rest }: RulerProps) {
  const rulerRef = useRef<HTMLDivElement>(null);
  const drag = useRef<Marker | null>(null);
  const [pos, setPos] = useState(() => preset(state));

  // Reset marker positions when the `state` preset changes (during render — the
  // React-recommended alternative to a setState-in-effect).
  const [prevState, setPrevState] = useState(state);
  if (state !== prevState) {
    setPrevState(state);
    setPos(preset(state));
  }

  const toCm = (p: typeof pos): RulerIndents => ({
    firstLine: round1((p.firstLine - ZONE_START) / CM),
    left: round1((p.left - ZONE_START) / CM),
    right: round1((ZONE_END - p.right) / CM),
  });

  const apply = (which: Marker, x: number) => {
    const next = { ...pos };
    if (which === 'right') next.right = clamp(x, Math.max(pos.firstLine, pos.left), MAX);
    else next[which] = clamp(x, MIN, pos.right);
    setPos(next);
    onChange?.(toCm(next)); // fire in the event handler, never inside a render
  };

  const xFromClient = (clientX: number) => {
    const rect = rulerRef.current!.getBoundingClientRect();
    const scale = rect.width / 960; // map rendered px → 960 coordinate space
    return (clientX - rect.left) / (scale || 1);
  };

  const onPointerDown = (which: Marker) => (e: PointerEvent<HTMLSpanElement>) => {
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = which;
  };
  const onPointerMove = (e: PointerEvent<HTMLSpanElement>) => {
    if (drag.current) apply(drag.current, xFromClient(e.clientX));
  };
  const onPointerUp = (e: PointerEvent<HTMLSpanElement>) => {
    drag.current = null;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      /* noop */
    }
  };
  const onKeyDown = (which: Marker) => (e: KeyboardEvent<HTMLSpanElement>) => {
    const dir = e.key === 'ArrowLeft' ? -1 : e.key === 'ArrowRight' ? 1 : 0;
    if (!dir) return;
    e.preventDefault();
    apply(which, pos[which] + dir * STEP);
  };

  const handle = (which: Marker, kind: 'top' | 'bottom', label: string) => {
    const valueCm =
      which === 'right' ? round1((ZONE_END - pos[which]) / CM) : round1((pos[which] - ZONE_START) / CM);
    return (
      <span
        className={styles.handle}
        style={{ left: pos[which] }}
        role="slider"
        tabIndex={0}
        aria-label={label}
        aria-valuenow={valueCm}
        aria-valuemin={0}
        aria-valuetext={`${valueCm} cm`}
        onPointerDown={onPointerDown(which)}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onKeyDown={onKeyDown(which)}
      >
        <span className={cx(styles.tri, kind === 'top' ? styles.triTop : styles.triBottom)} />
      </span>
    );
  };

  return (
    <div className={cx(styles.ruler, className)} ref={rulerRef} {...rest}>
      <div className={styles.marginZone} style={{ left: 140, width: ZONE_START - 140 }} />
      <div className={styles.marginZone} style={{ left: ZONE_END, width: 80 }} />
      <div className={styles.textZone} style={{ left: ZONE_START, width: ZONE_END - ZONE_START }} />

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

      {handle('firstLine', 'top', 'Indentasi baris pertama')}
      {handle('left', 'bottom', 'Indentasi kiri')}
      {handle('right', 'bottom', 'Indentasi kanan')}
    </div>
  );
}
