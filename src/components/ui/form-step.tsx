import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const formStepVariants = cva('w-full h-1', {
  variants: {
    variant: {
      unfilled: 'bg-secondary',
      progress:
        'bg-primary/50 relative after:absolute after:inset after:w-1/2 after:h-full after:bg-primary',
      completed: 'bg-primary',
    },
  },
  defaultVariants: {
    variant: 'unfilled',
  },
})

type FormStepVariants = VariantProps<typeof formStepVariants>

export interface FormStepProps extends FormStepVariants {
  className?: string
  asChild?: boolean
}

const FormStep = React.forwardRef<HTMLDivElement, FormStepProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div'
    return (
      <Comp
        className={cn(formStepVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
FormStep.displayName = 'FormStep'

export { FormStep, formStepVariants, type FormStepVariants }