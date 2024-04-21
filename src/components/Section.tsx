import { cn } from '@/utils/styles';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

export const Section = ({ className, description, title, subtitle, children }: Props) => (
  <div className={cn('px-3 py-16', className)}>
    {(title || subtitle || description) && (
      <div className="mx-auto mb-12 max-w-screen-md text-center">
        {subtitle && (
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-sm font-bold text-transparent">
            {subtitle}
          </div>
        )}

        {title && (
          <div className="mt-1 text-3xl font-bold">{title}</div>
        )}

        {description && (
          <div className="mt-2 text-lg text-muted-foreground">
            {description}
          </div>
        )}
      </div>
    )}

    <div className="mx-auto max-w-screen-lg">{children}</div>
  </div>
);