import clsx from 'clsx'
import { FormStep, FormStepVariants } from '../ui/form-step'

interface FormStepWrapperProps extends FormStepVariants {
  text: string
  progress?: number
}

export default function FormStepWrapper({
  text,
  variant,
  progress,
}: FormStepWrapperProps) {
  return (
    <div className="space-y-1">
      <p
        className={clsx(
          'text-center text-xxs',
          variant === 'progress' || variant === 'completed'
            ? 'text-primary'
            : 'text-secondary',
        )}
      >
        {text}
      </p>
      <FormStep variant={variant} progress={progress} />
    </div>
  )
}
