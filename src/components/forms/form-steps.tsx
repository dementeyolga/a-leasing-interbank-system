import { defineFormStepVariant } from '@/lib/utils'
import FormStepWrapper from './form-step-wrapper'

interface FormStepProps {
  steps: string[]
  currentStep: number
  progress: number
}

export default function FormSteps({
  steps,
  currentStep,
  progress,
}: FormStepProps) {
  return (
    <div className="grid grid-cols-4 items-end gap-1">
      {steps.map((step, i) => (
        <FormStepWrapper
          key={step}
          variant={defineFormStepVariant(i, currentStep)}
          text={step}
          progress={progress}
        />
      ))}
    </div>
  )
}
