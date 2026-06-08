import type { HTMLAttributes } from 'react';
import { AiAvatar } from '../AiAvatar';
import styles from './ChatBubble.module.css';

export type ChatRole = 'ai' | 'user';

export interface ChatBubbleProps extends HTMLAttributes<HTMLDivElement> {
  /** Sender. @default 'ai' */
  role?: ChatRole;
}

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(' ');

/**
 * Single message bubble in the AI assistant conversation, styled by sender.
 * Mirrors the Figma DS Chat bubble (role).
 */
export function ChatBubble({ role = 'ai', className, children, ...rest }: ChatBubbleProps) {
  const isUser = role === 'user';
  return (
    <div className={cx(styles.row, isUser && styles.user, className)} {...rest}>
      {!isUser && <AiAvatar tone="soft" />}
      <div className={cx(styles.bubble, isUser ? styles.userBubble : styles.aiBubble)}>
        {children}
      </div>
    </div>
  );
}
