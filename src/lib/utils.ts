import { FormStepVariants } from '@/components/ui/form-step'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { z } from 'zod'

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

type ZodPrimitiveType = z.ZodString | z.ZodNumber | z.ZodBoolean
type ZodSchemaType =
  | z.ZodObject<Record<string, z.ZodTypeAny>>
  | z.ZodArray<z.ZodTypeAny>
  | ZodPrimitiveType
  | z.ZodOptional<ZodPrimitiveType>

export function isFieldRequired(path: string, schema: ZodSchemaType): boolean {
  const pathArray = path.split(/\.(?![^[]*\])/)
  let currentSchema: ZodSchemaType = schema

  for (const key of pathArray) {
    if (currentSchema instanceof z.ZodObject) {
      const shape = currentSchema.shape
      currentSchema = shape[key] as ZodSchemaType
    } else if (currentSchema instanceof z.ZodArray) {
      const match = key.match(/(\d+)/)
      if (match) {
        currentSchema = currentSchema.element as ZodSchemaType
      } else {
        return false
      }
    } else {
      return false
    }

    if (!currentSchema) {
      return false
    }
  }

  if (currentSchema instanceof z.ZodOptional) {
    return false
  }

  return (
    currentSchema instanceof z.ZodString ||
    currentSchema instanceof z.ZodNumber ||
    currentSchema instanceof z.ZodBoolean
  )
}
