import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react';
import styles from './Reveal.module.css';

export interface RevealProps {
  children: ReactNode;
  /** Vertical travel distance in px (element starts this far below). @default 24 */
  y?: number;
  /** Delay before animating, in seconds (use for stagger). @default 0 */
  delay?: number;
  /** Duration in seconds. @default 0.7 (Framer's value) */
  duration?: number;
  /** Reveal only once (stay visible). @default true */
  once?: boolean;
  className?: string;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Scroll-triggered reveal — fades and rises into place when it enters the
 * viewport. Mirrors the Framer "appear" animation (ease cubic-bezier(.44,0,.56,1),
 * 0.7s). Honours `prefers-reduced-motion`. Zero dependencies (IntersectionObserver).
 */
export function Reveal({
  children,
  y = 24,
  delay = 0,
  duration = 0.7,
  once = true,
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) io.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const style = {
    '--reveal-y': `${y}px`,
    '--reveal-delay': `${delay}s`,
    '--reveal-dur': `${duration}s`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      style={style}
      className={cx(styles.reveal, visible && styles.visible, className)}
    >
      {children}
    </div>
  );
}
