import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'
import { useEffect } from 'react'

const formStepVariants = cva('w-full h-1', {
  variants: {
    variant: {
      unfilled: 'bg-secondary',
      progress:
        'bg-primary/50 relative after:absolute after:inset after:h-full after:bg-primary',
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
  progress?: number
}

const FormStep = React.forwardRef<HTMLDivElement, FormStepProps>(
  ({ className, variant, asChild = false, progress, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div'
    useEffect(() => {
      const root = document.documentElement
      root.style.setProperty('--step-progress', `${progress}%`)

      return () => {
        root.style.removeProperty('--step-progress')
      }
    }, [progress])

    return (
      <Comp
        className={cn(
          formStepVariants({ variant, className }),
          progress && 'after:w-[--step-progress]',
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
FormStep.displayName = 'FormStep'

export { FormStep, formStepVariants, type FormStepVariants }
