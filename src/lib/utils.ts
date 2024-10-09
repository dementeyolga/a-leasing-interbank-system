import { FormStepVariants } from '@/components/ui/form-step'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toFirstUppercase(str: string): string {
  return str.length !== 0 ? str[0].toUpperCase() + str.slice(1) : ''
}

export function defineFormStepVariant(
  stepIndex: number,
  currentStep: number,
): NonNullable<FormStepVariants['variant']> {
  if (stepIndex === currentStep) {
    return 'progress'
  } else if (stepIndex < currentStep) {
    return 'completed'
  } else {
    return 'unfilled'
  }
}

export function generateYesNoRadioItems(): {
  id: string
  value: string
  text: string
}[] {
  return [
    {
      id: crypto.randomUUID(),
      value: 'да',
      text: 'да',
    },
    {
      id: crypto.randomUUID(),
      value: 'нет',
      text: 'нет',
    },
  ]
}

export function generateSexRadioItems(): {
  id: string
  value: string
  text: string
}[] {
  return [
    {
      id: crypto.randomUUID(),
      value: 'мужской',
      text: 'мужской',
    },
    {
      id: crypto.randomUUID(),
      value: 'женский',
      text: 'женский',
    },
  ]
}
