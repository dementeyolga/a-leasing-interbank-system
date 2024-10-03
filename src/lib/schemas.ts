import { z } from 'zod'

const requiredMessage = 'Обязательное поле'
const wrongFormatMessage = 'Некорректный формат данных'

export const naturalPersonFormSchema = {}

export const individualEntrepreneurFormSchema = z.object({
  // Personal data
  surname: z.string().min(1, { message: requiredMessage }),
  name: z.string().min(1, { message: requiredMessage }),
  patronymic: z.string().min(1, { message: requiredMessage }),
  formerSurname: z.string().min(1, { message: requiredMessage }),
  birthDate: z.string().min(1, { message: requiredMessage }),
  phone: z.string().min(1, { message: requiredMessage }),
  email: z.string().email({ message: wrongFormatMessage }),
  sex: z.string().min(1, { message: requiredMessage }),
  identityDocumentType: z.string().min(1, { message: requiredMessage }),
  identityDocumentNumber: z.string().min(1, { message: requiredMessage }),
  identificationNumber: z.string().min(1, { message: requiredMessage }),
  identityDocumentIssueDate: z.string().min(1, { message: requiredMessage }),
  identityDocumentValidThrough: z.string().min(1, { message: requiredMessage }),
  identityDocumentIssuingAuthority: z
    .string()
    .min(1, { message: requiredMessage }),
  isResidentOfBelarus: z.string().min(1, { message: requiredMessage }),
  isTaxResidentOfUSA: z.string().min(1, { message: requiredMessage }),

  // Address information
  // Registration address
  settlementName: z.string().min(1, { message: requiredMessage }),
  streetType: z.string().min(1, { message: requiredMessage }),
  streetName: z.string().min(1, { message: requiredMessage }),
  houseNumber: z.string().min(1, { message: requiredMessage }),
  buildingNumber: z.string().min(1, { message: requiredMessage }),
  apartmentNumber: z.string().min(1, { message: requiredMessage }),
  postalCode: z.string().min(1, { message: requiredMessage }),

  // Inndividual entrepreneur information
  // General
  payerAccountingNumber: z.string().min(1, { message: requiredMessage }),
  ieRegistrationNumber: z.string().min(1, { message: requiredMessage }),
  ieRegistrationDate: z.string().min(1, { message: requiredMessage }),
  ieRegistrationAuthority: z.string().min(1, { message: requiredMessage }),
  ieCoreActivity: z.string().min(1, { message: requiredMessage }),
  ieCCEACode: z.string().min(1, { message: requiredMessage }),
  ieOtherActivity: z.string().min(1, { message: requiredMessage }),
  isPublicOfficial: z.string().min(1, { message: requiredMessage }),
})

export type IndividuaEntrepreneurFormSchema = z.infer<
  typeof individualEntrepreneurFormSchema
>

export const legalEntityFormSchema = {}
