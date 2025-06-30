import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'

const variants = cva(
  '[&_hr[data-align=right]]:ml-4 [&_hr[data-align=left]]:mr-4 flex items-center [&_hr]:border-t [&_hr]:h-0.5 font-medium text-base [&_hr]:grow',
  {
    variants: {
      variant: {
        muted: 'text-muted-foreground [&_hr]:border-muted-foreground',
        primary: 'text-primary [&_hr]:border-primary',
        destructive: 'text-destructive [&_hr]:border-destructive',
      },
      align: {
        left: '[&_hr[data-align=left]]:hidden',
        center: '',
        right: '[&_hr[data-align=right]]:hidden',
      },
      border: {
        solid: '',
        dashed: '[&_hr]:border-dashed',
        dotted: '[&_hr]:border-dotted',
        double: '[&_hr]:border-double',
      },
      defaultVariants: {
        variant: 'muted',
        align: 'center',
        border: 'solid',
      },
    },
  },
)

interface Props
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof variants> {}

const Divider = React.forwardRef<HTMLDivElement, Props>(
  (
    { className = 'text-sm', variant, align, border, children, ...props },
    ref,
  ) => {
    return (
      <div
        {...props}
        className={cn(
          variants({ variant, align, border, className }),
          !children ? '[&_hr]:mr-0! [&_hr[data-align=right]]:hidden' : '',
        )}
        ref={ref}
      >
        {' '}
        <hr data-align="left" />
        {children}
        <hr data-align="right" />
      </div>
    )
  },
)
Divider.displayName = 'Divider'
export { Divider }
