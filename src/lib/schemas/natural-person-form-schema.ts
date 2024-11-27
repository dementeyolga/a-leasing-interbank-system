import {
  educationTypes,
  jobType,
  maritalStatuses,
} from '@/data/select-field-options'
import { z } from 'zod'
import {
  OTPLengthMessage,
  requiredMessage,
  requiredOptions,
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

const ownsPropertyDiscriminatedUnion = z.discriminatedUnion('ownsProperty', [
  z.object({
    ownsProperty: z.literal('да'),
    typesOfProperty: z.array(z.string()).nonempty({
      message: requiredMessage,
    }),
  }),
  z.object({
    ownsProperty: z.literal('нет'),
  }),
])

const ownsCarDiscriminatedUnion = z.discriminatedUnion('ownsCar', [
  z.object({
    ownsCar: z.literal('да'),
    carBrand: z.string(requiredOptions).min(1, { message: requiredMessage }),
    carManufactureYear: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage })
      .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage }),
  }),
  z.object({
    ownsCar: z.literal('нет'),
  }),
])

const worksUnderContractDiscriminatedUnion = z.discriminatedUnion(
  'worksUnderContract',
  [
    z.object({
      worksUnderContract: z.literal('да'),
      contractEndDate: z.string().optional(),
    }),
    z.object({
      worksUnderContract: z.literal('нет'),
    }),
  ],
)

const hasAdditionalUnconfirmedIncomeDiscriminatedUnion = z.discriminatedUnion(
  'hasAdditionalUnconfirmedIncome',
  [
    z.object({
      hasAdditionalUnconfirmedIncome: z.literal('да'),
      additionalIncomeSource: z.string().optional(),
      additionalIncomeSum: z
        .string()
        .regex(REGEX_SUM, { message: wrongFormatMessage })
        .optional(),
    }),
    z.object({
      hasAdditionalUnconfirmedIncome: z.literal('нет'),
    }),
  ],
)

export const naturalPersonFormSchema = z
  .object({
    // STEP 1
    // Personal data
    surname: z.string().optional(),
    name: z.string().optional(),
    patronymic: z.string().optional(),
    formerSurname: z
      .string()
      .regex(REGEX_NAME, { message: wrongFormatMessage })
      .optional(),
    birthDate: z.string().optional(),
    sex: z.string().optional(),
    identityDocumentType: z.string().optional(),
    identityDocumentNumber: z.string().optional(),
    identificationNumber: z.string().optional(),
    identityDocumentIssueDate: z.string().optional(),
    identityDocumentValidThrough: z.string().optional(),
    identityDocumentIssuingAuthority: z.string().optional(),
    isResidentOfBelarus: z.enum(yesNoArray, {
      required_error: requiredMessage,
    }),
    isTaxResidentOfUSA: z.enum(yesNoArray, {
      required_error: requiredMessage,
    }),

    // STEP 2
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
    isResidenceAddressMatchRegistration: z.enum(yesNoArray, {
      required_error: requiredMessage,
    }),
    residenceCountry: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage })
      .regex(REGEX_GEO_NAME, { message: wrongFormatMessage }),
    residenceSettlement: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage })
      .regex(REGEX_GEO_NAME, { message: wrongFormatMessage }),
    residenceStreetType: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage }),
    residenceStreetName: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage }),
    residenceHouseNumber: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage })
      .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage }),
    residenceBuildingNumber: z.string().optional(),
    residenceApartmentNumber: z
      .string()
      .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage })
      .optional(),
    residencePostalCode: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage })
      .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage }),

    // STEP 3
    // Marital status and property ownership
    maritalStatus: z.enum(maritalStatuses, { required_error: requiredMessage }),
    drivingExperience: z
      .string()
      .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage })
      .optional(),
    ownsProperty: z.enum(yesNoArray).optional(),
    ownsCar: z.enum(yesNoArray).optional(),

    // Place of work and income
    jobType: z.enum(jobType, { required_error: requiredMessage }),
    jobOrganization: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage }),
    jobOrganizationAddress: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage }),
    jobAccountingOrHRDeptPhone: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage })
      .regex(REGEX_PHONE_INTL, { message: wrongFormatMessage }),
    jobPosition: z.string(requiredOptions).min(1, { message: requiredMessage }),
    jobStartDate: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage }),
    worksUnderContract: z.enum(yesNoArray).optional(),
    mainIncomeSum: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage })
      .regex(REGEX_SUM, { message: wrongFormatMessage }),
    spouseMainIncome: z
      .string()
      .regex(REGEX_SUM, { message: wrongFormatMessage })
      .optional(),
    partTimeWorkIncome: z
      .string()
      .regex(REGEX_SUM, { message: wrongFormatMessage })
      .optional(),
    contractArgeementIncome: z
      .string()
      .regex(REGEX_SUM, { message: wrongFormatMessage })
      .optional(),
    otherIncome: z
      .string()
      .regex(REGEX_SUM, { message: wrongFormatMessage })
      .optional(),
    hasAdditionalUnconfirmedIncome: z.enum(yesNoArray).optional(),
    totalWorkExperience: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage }),
    educationType: z.enum(educationTypes, { required_error: requiredMessage }),
    numberOfDependents: z
      .string()
      .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage })
      .optional(),
    loansPaymentAmount: z
      .string()
      .regex(REGEX_SUM, { message: wrongFormatMessage })
      .optional(),
    installmentsPaymentAmount: z
      .string()
      .regex(REGEX_SUM, { message: wrongFormatMessage })
      .optional(),
    writOfExecutionPaymentAmount: z
      .string()
      .regex(REGEX_SUM, { message: wrongFormatMessage })
      .optional(),
    alimonyPaymentAmount: z
      .string()
      .regex(REGEX_SUM, { message: wrongFormatMessage })
      .optional(),

    // Contacts
    phone: z
      .string()
      .regex(REGEX_PHONE_INTL, { message: wrongFormatMessage })
      .optional(),
    trustedPersonPhone: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage })
      .regex(REGEX_PHONE_INTL, { message: wrongFormatMessage }),
    additionalPhone: z
      .string()
      .regex(REGEX_PHONE_INTL, { message: wrongFormatMessage })
      .optional(),
    email: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage })
      .email({ message: wrongFormatMessage }),

    // STEP 4
    // Signing documents
    consentApplicationFormForLeasing: z.boolean().optional(),
    consentCreditReport: z.boolean().optional(),
    consentAdvertisingAndNewsletter: z.boolean().optional(),

    signDocsOTP: z.string().length(6, { message: OTPLengthMessage }),
  })
  .and(ownsPropertyDiscriminatedUnion)
  .and(ownsCarDiscriminatedUnion)
  .and(worksUnderContractDiscriminatedUnion)
  .and(hasAdditionalUnconfirmedIncomeDiscriminatedUnion)

export type NaturalPersonFormSchema = z.infer<typeof naturalPersonFormSchema>
