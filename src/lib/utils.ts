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

type ZodPrimitiveType =
  | z.ZodString
  | z.ZodNumber
  | z.ZodBoolean
  | z.ZodEnum<[string]>
  | z.ZodLiteral<unknown>
type ZodSchemaType =
  | z.ZodObject<Record<string, z.ZodTypeAny>>
  | z.ZodArray<z.ZodTypeAny>
  | ZodPrimitiveType
  | z.ZodOptional<ZodPrimitiveType>
  | z.ZodUnion<[ZodSchemaType, ...ZodSchemaType[]]>
  | z.ZodIntersection<z.ZodTypeAny, z.ZodTypeAny>
  | z.ZodDiscriminatedUnion<
      string,
      z.ZodObject<Record<string, ZodSchemaType>>[]
    >

export function isFieldRequired(path: string, schema: ZodSchemaType): boolean {
  const pathArray = path.split(/\.(?![^[]*\])/)
  let currentSchema = schema

  for (const key of pathArray) {
    if (currentSchema instanceof z.ZodObject) {
      const shape = currentSchema.shape
      currentSchema = shape[key]
    } else if (currentSchema instanceof z.ZodArray) {
      const match = key.match(/(\d+)/)
      if (match) {
        currentSchema = currentSchema.element
      } else {
        return false
      }
    } else if (currentSchema instanceof z.ZodUnion) {
      // For union types, we consider it required if all options are required
      return currentSchema._def.options.some((option) =>
        isFieldRequired(path, option),
      )
    } else if (currentSchema instanceof z.ZodIntersection) {
      // For intersection types, we consider it required if either part is required
      return (
        isFieldRequired(path, currentSchema._def.left) ||
        isFieldRequired(path, currentSchema._def.right)
      )
    } else if (currentSchema instanceof z.ZodDiscriminatedUnion) {
      // For discriminated unions, we check if the field is required in any of the options
      return currentSchema._def.options.some((option) =>
        isFieldRequired(path, option),
      )
    } else {
      break
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
    currentSchema instanceof z.ZodBoolean ||
    currentSchema instanceof z.ZodEnum ||
    currentSchema instanceof z.ZodLiteral ||
    (currentSchema instanceof z.ZodArray &&
      currentSchema._def.minLength !== null)
  )
}
