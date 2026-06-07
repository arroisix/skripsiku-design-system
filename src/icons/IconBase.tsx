import type { ReactNode, SVGProps } from 'react';

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'children'> {
  /** Pixel size (width = height). @default 24 */
  size?: number | string;
}

/**
 * Shared wrapper for Ionicons. `fill="currentColor"` colours filled icons; outline
 * icons keep their inline `fill="none"` + `stroke="currentColor"`. Set `color` on a
 * parent (or pass `color`) to tint.
 */
export function IconBase({
  size = 24,
  children,
  ...props
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}
