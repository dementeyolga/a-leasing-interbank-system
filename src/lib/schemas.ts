import { z } from 'zod'

const requiredMessage = 'Обязательное поле'
const wrongFormatMessage = 'Некорректный формат данных'

export const naturalPersonFormSchema = {}

export const individualEntrepreneurFormSchema = z.object({
  // Personal data
  surname: z.string({ required_error: requiredMessage }).optional(),
  name: z.string({ required_error: requiredMessage }).optional(),
  patronymic: z.string({ required_error: requiredMessage }).optional(),
  formerSurname: z.string({ required_error: requiredMessage }).optional(),
  birthDate: z.string({ required_error: requiredMessage }).optional(),
  phone: z.string({ required_error: requiredMessage }).optional(),
  email: z
    .string({ required_error: requiredMessage })
    .email({ message: wrongFormatMessage })
    .optional(),
  sex: z.string({ required_error: requiredMessage }).optional(),
  identityDocumentType: z
    .string({ required_error: requiredMessage })
    .optional(),
  identityDocumentNumber: z
    .string({ required_error: requiredMessage })
    .optional(),
  identificationNumber: z
    .string({ required_error: requiredMessage })
    .optional(),
  identityDocumentIssueDate: z
    .string({ required_error: requiredMessage })
    .optional(),
  identityDocumentValidThrough: z
    .string({ required_error: requiredMessage })
    .optional(),
  identityDocumentIssuingAuthority: z
    .string({
      required_error: requiredMessage,
    })
    .optional(),
  isResidentOfBelarus: z.string({ required_error: requiredMessage }).optional(),
  isTaxResidentOfUSA: z.string({ required_error: requiredMessage }).optional(),
  // Address information
  // Registration address
  registrationCountry: z.string({ required_error: requiredMessage }).optional(),
  registrationSettlement: z
    .string({ required_error: requiredMessage })
    .optional(),
  registrationStreetType: z
    .string({ required_error: requiredMessage })
    .optional(),
  registrationStreetName: z
    .string({ required_error: requiredMessage })
    .optional(),
  registrationHouseNumber: z
    .string({ required_error: requiredMessage })
    .optional(),
  registrationBuildingNumber: z.string().optional(),
  registrationApartmentNumber: z.string().optional(),
  registrationPostalCode: z
    .string({ required_error: requiredMessage })
    .optional(),

  // Residence address
  isResidenceAddressMatchRegistration: z
    .string({
      required_error: requiredMessage,
    })
    .min(1, { message: requiredMessage }),
  residenceCountry: z
    .string({ required_error: requiredMessage })
    .min(1, { message: requiredMessage }),
  residenceSettlement: z
    .string({ required_error: requiredMessage })
    .min(1, { message: requiredMessage }),
  residenceStreetType: z
    .string({ required_error: requiredMessage })
    .min(1, { message: requiredMessage }),
  residenceStreetName: z
    .string({ required_error: requiredMessage })
    .min(1, { message: requiredMessage }),
  residenceHouseNumber: z
    .string({ required_error: requiredMessage })
    .min(1, { message: requiredMessage }),
  residenceBuildingNumber: z.string().optional(),
  residenceApartmentNumber: z.string().optional(),
  residencePostalCode: z
    .string({ required_error: requiredMessage })
    .min(1, { message: requiredMessage }),

  // Inndividual entrepreneur information
  // General
  payerAccountingNumber: z
    .string({ required_error: requiredMessage })
    .min(1, { message: requiredMessage }),
  ieRegistrationNumber: z
    .string({ required_error: requiredMessage })
    .min(1, { message: requiredMessage }),
  ieRegistrationDate: z
    .string({ required_error: requiredMessage })
    .min(1, { message: requiredMessage }),
  ieRegistrationAuthority: z
    .string()
    .min(1, { message: requiredMessage })
    .optional(),
  ieCoreActivity: z
    .string({ required_error: requiredMessage })
    .min(1, { message: requiredMessage }),
  ieCCEACode: z
    .string({ required_error: requiredMessage })
    .min(1, { message: requiredMessage }),
  ieOtherActivity: z.string().min(1, { message: requiredMessage }).optional(),
  isPublicOfficial: z
    .string({ required_error: requiredMessage })
    .min(1, { message: requiredMessage }),
})

export type IndividuaEntrepreneurFormSchema = z.infer<
  typeof individualEntrepreneurFormSchema
>

export const legalEntityFormSchema = {}
