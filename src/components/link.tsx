import { ReactNode } from 'react';
import cn from 'classnames';

interface LinkProps {
  href: string;
  children: ReactNode;
  color?: 'pink' | 'yellow' | 'blue' | 'red' | 'indigo' | 'green';
}

export function Link({ children, href, color }: LinkProps): JSX.Element {
  return (
    <a
      rel="noopener nofollow"
      href={href}
      className={cn(
        `font-bold transition-colors duration-100 hover:text-white rounded px-px`,
        {
          [`text-black`]: color === undefined,
          [`text-${color}-500 hover:bg-${color}-500`]: color !== undefined,
        }
      )}
    >
      {children}
    </a>
  );
}
