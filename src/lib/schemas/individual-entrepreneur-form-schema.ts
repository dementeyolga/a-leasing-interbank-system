import { coreActivityTypes, servicingBanks } from '@/data/select-field-options'
import { z } from 'zod'
import {
  OTPLengthMessage,
  requiredMessage,
  requiredOptions,
  wrongFormatMessage,
  yesNoArray,
} from '../constants'
import {
  REGEX_NAME,
  REGEX_ONLY_DIGITS,
  REGEX_PHONE_INTL,
  REGEX_SUM,
} from '../regex'

const hasRecordedCriminalProsecutionsReasons = z.discriminatedUnion(
  'hasRecordedCriminalProsecutions',
  [
    z.object({
      hasRecordedCriminalProsecutions: z.literal('да'),
      hasRecordedCriminalProsecutionsReasons: z.string().optional(),
    }),
    z.object({
      hasRecordedCriminalProsecutions: z.literal('нет'),
    }),
  ],
)

const isParticipateInTrialDiscriminatedUnion = z.discriminatedUnion(
  'isParticipateInTrial',
  [
    z.object({
      isParticipateInTrial: z.literal('да'),
      isParticipateInTrialReasons: z.string().optional(),
    }),
    z.object({
      isParticipateInTrial: z.literal('нет'),
    }),
  ],
)

const isFinancialSanctionsAppliedLastYearDiscriminatedUnion =
  z.discriminatedUnion('isFinancialSanctionsAppliedLastYear', [
    z.object({
      isFinancialSanctionsAppliedLastYear: z.literal('да'),
      isFinancialSanctionsAppliedLastYearReasons: z.string().optional(),
    }),
    z.object({
      isFinancialSanctionsAppliedLastYear: z.literal('нет'),
    }),
  ])

const isParticipateInBankruptEntitiesDiscriminatedUnion = z.discriminatedUnion(
  'isParticipateInBankruptEntities',
  [
    z.object({
      isParticipateInBankruptEntities: z.literal('да'),
      isParticipateInBankruptEntitiesReasons: z.string().optional(),
    }),
    z.object({
      isParticipateInBankruptEntities: z.literal('нет'),
    }),
  ],
)

export const individualEntrepreneurFormSchema = z
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
    phone: z
      .string()
      .regex(REGEX_PHONE_INTL, { message: wrongFormatMessage })
      .optional(),
    email: z.string().email({ message: wrongFormatMessage }).optional(),
    sex: z.string().optional(),
    identityDocumentType: z.string().optional(),
    identityDocumentNumber: z.string().optional(),
    identificationNumber: z.string().optional(),
    identityDocumentIssueDate: z.string().optional(),
    identityDocumentValidThrough: z.string().optional(),
    identityDocumentIssuingAuthority: z.string().optional(),
    isResidentOfBelarus: z.string().optional(),
    isTaxResidentOfUSA: z.string().optional(),

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
    isResidenceAddressMatchRegistration: z.string().optional(),
    residenceCountry: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage }),
    residenceSettlement: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage }),
    residenceStreetType: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage }),
    residenceStreetName: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage }),
    residenceHouseNumber: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage }),
    residenceBuildingNumber: z.string().optional(),
    residenceApartmentNumber: z.string().optional(),
    residencePostalCode: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage })
      .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage }),

    // STEP 3
    // Individual entrepreneur information
    // General
    payerAccountingNumber: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage }),
    ieRegistrationNumber: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage }),
    ieRegistrationDate: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage }),
    ieRegistrationAuthority: z.string().optional(),
    ieCoreActivity: z.enum(coreActivityTypes, {
      required_error: requiredMessage,
    }),
    ieCCEACode: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage })
      .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage }),
    ieOtherActivity: z.string().optional(),
    isPublicOfficial: z.string().optional(),

    // Administrative and financial information
    servicingBank: z.enum(servicingBanks, {
      required_error: requiredMessage,
    }),

    hasNetLossLast3Month: z.enum(yesNoArray, {
      required_error: requiredMessage,
    }),

    hasRecordedCriminalProsecutions: z.enum(yesNoArray, {
      required_error: requiredMessage,
    }),

    isParticipateInTrial: z.enum(yesNoArray, {
      required_error: requiredMessage,
    }),

    isFinancialSanctionsAppliedLastYear: z.enum(yesNoArray, {
      required_error: requiredMessage,
    }),

    isParticipateInBankruptEntities: z.enum(yesNoArray, {
      required_error: requiredMessage,
    }),

    revenueLast12Month1: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage })
      .regex(REGEX_SUM, { message: wrongFormatMessage }),
    revenueLast12Month2: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage })
      .regex(REGEX_SUM, { message: wrongFormatMessage }),
    revenueLast12Month3: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage })
      .regex(REGEX_SUM, { message: wrongFormatMessage }),
    revenueLast12Month4: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage })
      .regex(REGEX_SUM, { message: wrongFormatMessage }),
    revenueLast12Month5: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage })
      .regex(REGEX_SUM, { message: wrongFormatMessage }),
    revenueLast12Month6: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage })
      .regex(REGEX_SUM, { message: wrongFormatMessage }),
    revenueLast12Month7: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage })
      .regex(REGEX_SUM, { message: wrongFormatMessage }),
    revenueLast12Month8: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage })
      .regex(REGEX_SUM, { message: wrongFormatMessage }),
    revenueLast12Month9: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage })
      .regex(REGEX_SUM, { message: wrongFormatMessage }),
    revenueLast12Month10: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage })
      .regex(REGEX_SUM, { message: wrongFormatMessage }),
    revenueLast12Month11: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage })
      .regex(REGEX_SUM, { message: wrongFormatMessage }),
    revenueLast12Month12: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage })
      .regex(REGEX_SUM, { message: wrongFormatMessage }),

    // Signing documents
    consentApplicationFormForLeasing: z.boolean().optional(),
    consentCreditReport: z.boolean().optional(),
    consentAdvertisingAndNewsletter: z.boolean().optional(),

    signDocsOTP: z.string().length(6, { message: OTPLengthMessage }),
  })
  .and(hasRecordedCriminalProsecutionsReasons)
  .and(isParticipateInTrialDiscriminatedUnion)
  .and(isFinancialSanctionsAppliedLastYearDiscriminatedUnion)
  .and(isParticipateInBankruptEntitiesDiscriminatedUnion)

export type IndividuaEntrepreneurFormSchema = z.infer<
  typeof individualEntrepreneurFormSchema
>
