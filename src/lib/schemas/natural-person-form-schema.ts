import { z } from 'zod'
import {
  OTPLengthMessage,
  requiredMessage,
  wrongFormatMessage,
  yesNoArray,
} from '../constants'
import {
  REGEX_GEO_NAME,
  REGEX_NAME,
  REGEX_ONLY_DIGITS,
  REGEX_PHONE_INTL,
  REGEX_SUM,
} from '../regex'

export const naturalPersonFormSchema = z.object({
  // Personal data
  surname: z.string().optional(),
  name: z.string().optional(),
  patronymic: z.string().optional(),
  formerSurname: z
    .string()
    .regex(REGEX_NAME, { message: wrongFormatMessage })
    .or(z.literal(''))
    .optional(),
  birthDate: z.string().optional(),
  sex: z.string().optional(),
  identityDocumentType: z.string().optional(),
  identityDocumentNumber: z.string().optional(),
  identificationNumber: z.string().optional(),
  identityDocumentIssueDate: z.string().optional(),
  identityDocumentValidThrough: z.string().optional(),
  identityDocumentIssuingAuthority: z.string().optional(),
  isResidentOfBelarus: z.string().optional(),
  isTaxResidentOfUSA: z.string().optional(),

  // Address information
  // Registration address
  registrationCountry: z.string().optional(),
  registrationSettlement: z.string().optional(),
  registrationStreetType: z.string().optional(),
  registrationStreetName: z.string().optional(),
  registrationHouseNumber: z.string().optional(),
  registrationBuildingNumber: z.string().optional(),
  registrationApartmentNumber: z.string().optional(),
  registrationPostalCode: z.string().optional(),

  // Residence address
  isResidenceAddressMatchRegistration: z
    .string()
    .min(1, { message: requiredMessage }),
  residenceCountry: z
    .string()
    .min(1, { message: requiredMessage })
    .regex(REGEX_GEO_NAME, { message: wrongFormatMessage }),
  residenceSettlement: z
    .string()
    .min(1, { message: requiredMessage })
    .regex(REGEX_GEO_NAME, { message: wrongFormatMessage }),
  residenceStreetType: z.string().min(1, { message: requiredMessage }),
  residenceStreetName: z.string().min(1, { message: requiredMessage }),
  residenceHouseNumber: z
    .string()
    .min(1, { message: requiredMessage })
    .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage }),
  residenceBuildingNumber: z.string().optional(),
  residenceApartmentNumber: z
    .string()
    .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage })
    .or(z.literal(''))
    .optional(),
  residencePostalCode: z
    .string()
    .min(1, { message: requiredMessage })
    .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage }),

  // Marital status and property ownership
  maritalStatus: z.string().min(1, { message: requiredMessage }),
  drivingExperience: z
    .string()
    .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage })
    .or(z.literal(''))
    .optional(),
  ownsProperty: z.enum(yesNoArray).optional(),
  ownsCar: z.string().optional(),
  carBrand: z
    .string()
    .min(1, { message: requiredMessage })
    .or(z.literal(undefined)),
  carManufactureYear: z
    .string()
    .min(1, { message: requiredMessage })
    .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage })
    .or(z.literal(undefined)),

  // Place of work and income
  jobType: z.string().min(1, { message: requiredMessage }),
  jobOrganization: z.string().min(1, { message: requiredMessage }),
  jobOrganizationAddress: z.string().min(1, { message: requiredMessage }),
  jobAccountingOrHRDeptPhone: z
    .string()
    .min(1, { message: requiredMessage })
    .regex(REGEX_PHONE_INTL, { message: wrongFormatMessage }),
  jobPosition: z.string().min(1, { message: requiredMessage }),
  jobStartDate: z.string().min(1, { message: requiredMessage }),
  isWorksUnderContract: z.string().optional(),
  contractEndDate: z.string().optional(),
  mainIncomeSum: z
    .string()
    .min(1, { message: requiredMessage })
    .regex(REGEX_SUM, { message: wrongFormatMessage }),
  spouseMainIncome: z
    .string()
    .regex(REGEX_SUM, { message: wrongFormatMessage })
    .or(z.literal(''))
    .optional(),
  partTimeWorkIncome: z
    .string()
    .regex(REGEX_SUM, { message: wrongFormatMessage })
    .or(z.literal(''))
    .optional(),
  contractArgeementIncome: z
    .string()
    .regex(REGEX_SUM, { message: wrongFormatMessage })
    .or(z.literal(''))
    .optional(),
  otherIncome: z
    .string()
    .regex(REGEX_SUM, { message: wrongFormatMessage })
    .or(z.literal(''))
    .optional(),
  hasAdditionalUnconfirmedIncome: z.string().optional(),
  additionalIncomeSource: z.string().optional(),
  additionalIncomeSum: z
    .string()
    .regex(REGEX_SUM, { message: wrongFormatMessage })
    .or(z.literal(''))
    .optional(),
  totalWorkExperience: z.string().min(1, { message: requiredMessage }),
  educationType: z.string().min(1, { message: requiredMessage }),
  numberOfDependents: z
    .string()
    .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage })
    .or(z.literal(''))
    .optional(),
  loansPaymentAmount: z
    .string()
    .regex(REGEX_SUM, { message: wrongFormatMessage })
    .or(z.literal(''))
    .optional(),
  installmentsPaymentAmount: z
    .string()
    .regex(REGEX_SUM, { message: wrongFormatMessage })
    .or(z.literal(''))
    .optional(),
  writOfExecutionPaymentAmount: z
    .string()
    .regex(REGEX_SUM, { message: wrongFormatMessage })
    .or(z.literal(''))
    .optional(),
  alimonyPaymentAmount: z
    .string()
    .regex(REGEX_SUM, { message: wrongFormatMessage })
    .or(z.literal(''))
    .optional(),

  // Contacts
  phone: z
    .string()
    .regex(REGEX_PHONE_INTL, { message: wrongFormatMessage })
    .or(z.literal(''))
    .optional(),
  trustedPersonPhone: z
    .string()
    .min(1, { message: requiredMessage })
    .regex(REGEX_PHONE_INTL, { message: wrongFormatMessage }),
  additionalPhone: z
    .string()
    .regex(REGEX_PHONE_INTL, { message: wrongFormatMessage })
    .or(z.literal(''))
    .optional(),
  email: z
    .string()
    .min(1, { message: requiredMessage })
    .email({ message: wrongFormatMessage }),

  // Signing documents
  consentApplicationFormForLeasing: z.boolean().optional(),
  consentCreditReport: z.boolean().optional(),
  consentAdvertisingAndNewsletter: z.boolean().optional(),

  signDocsOTP: z.string().length(6, { message: OTPLengthMessage }),
})

export type NaturalPersonFormSchema = z.infer<typeof naturalPersonFormSchema>
