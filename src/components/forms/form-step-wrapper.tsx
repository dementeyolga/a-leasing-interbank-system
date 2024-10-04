import clsx from 'clsx'
import { FormStep, FormStepVariants } from '../ui/form-step'

interface FormStepWrapperProps extends FormStepVariants {
  text: string
}

export default function FormStepWrapper({
  text,
  variant,
}: FormStepWrapperProps) {
  return (
    <div className="space-y-1">
      <p
        className={clsx(
          'text-xxs text-center',
          variant === 'progress' || variant === 'completed'
            ? 'text-primary'
            : 'text-secondary',
        )}
      >
        {text}
      </p>
      <FormStep variant={variant} />
    </div>
  )
}
