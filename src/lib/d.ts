import { z } from 'zod'

type ZodPrimitiveType =
  | z.ZodString
  | z.ZodNumber
  | z.ZodBoolean
  | z.ZodEnum<any>
  | z.ZodLiteral<any>
type ZodSchemaType =
  | z.ZodObject<Record<string, z.ZodTypeAny>>
  | z.ZodArray<z.ZodTypeAny>
  | ZodPrimitiveType
  | z.ZodOptional<ZodSchemaType>
  | z.ZodUnion<[ZodSchemaType, ...ZodSchemaType[]]>
  | z.ZodIntersection<ZodSchemaType, ZodSchemaType>
  | z.ZodDiscriminatedUnion<
      string,
      z.ZodObject<Record<string, ZodSchemaType>>[]
    >

export function isFieldRequired(path: string, schema: ZodSchemaType): boolean {
  const pathArray = path.split(/\.(?![^[]*\])/)
  let currentSchema: ZodSchemaType | undefined = schema

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
    } else if (currentSchema instanceof z.ZodUnion) {
      // For union types, we consider it required if all options are required
      return currentSchema._def.options.every((option: ZodSchemaType) =>
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
      return currentSchema._def.options.some(
        (option: z.ZodObject<Record<string, ZodSchemaType>>) =>
          isFieldRequired(path, option),
      )
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
    currentSchema instanceof z.ZodBoolean ||
    currentSchema instanceof z.ZodEnum ||
    currentSchema instanceof z.ZodLiteral
  )
}
