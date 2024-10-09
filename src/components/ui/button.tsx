import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'mx-auto inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm lg:text-xl font-medium lg:font-normal transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary-hover',
        outline:
          'border border-primary text-primary bg-transparent hover:bg-accent',
        dotted:
          'border border-dashed font-bold lg:font-bold border-primary text-primary bg-transparent hover:bg-accent',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        secondary: 'text-input hover:text-secondary-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11 px-[18px] lg:px-6 py-3',
        sm: 'h-9 rounded-md px-3',
        smLong: 'h-9 py-1 px-11',
        lg: 'h-12 rounded-md px-8',
        icon: 'h-10 w-10',
      },
      width: {
        full: 'w-full',
        default: 'w-fit',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      width: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
