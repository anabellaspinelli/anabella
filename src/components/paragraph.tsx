import { ReactNode } from 'react';
import cn from 'classnames';

interface ParagraphProps {
  children: ReactNode;
  size?: 'lg' | 'md' | 'sm';
  className?: string;
}

export function Paragraph({
  children,
  size,
  className,
}: ParagraphProps): JSX.Element {
  return (
    <p
      className={cn(
        'text-center',
        {
          'text-8xl': size === undefined || size === 'lg',
          'text-7xl': size === 'md',
          'text-6xl': size === 'sm',
        },
        className
      )}
    >
      {children}
    </p>
  );
}
