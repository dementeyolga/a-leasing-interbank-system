import { z } from 'zod'

const requiredMessage = 'Обязательное поле'
const wrongFormatMessage = 'Некорректный формат данных'

export const naturalPersonFormSchema = {}

export const individualEntrepreneurFormSchema = z
  .object({
    // Personal data
    surname: z.string().optional(),
    name: z.string().optional(),
    patronymic: z.string().optional(),
    formerSurname: z.string().optional(),
    birthDate: z.string().optional(),
    phone: z.string().optional(),
    email: z.string().email({ message: wrongFormatMessage }).optional(),
    sex: z.string().optional(),
    identityDocumentType: z.string().optional(),
    identityDocumentNumber: z.string().optional(),
    identificationNumber: z.string().optional(),
    identityDocumentIssueDate: z.string().optional(),
    identityDocumentValidThrough: z.string().optional(),
    identityDocumentIssuingAuthority: z
      .string({
        required_error: requiredMessage,
      })
      .optional(),
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
    ieOtherActivity: z.string().optional(),
    isPublicOfficial: z
      .string({ required_error: requiredMessage })
      .min(1, { message: requiredMessage }),

    // Administrative and financial information
    servicingBank: z
      .string({ required_error: requiredMessage })
      .min(1, { message: requiredMessage }),
    hasNetLossLast3Month: z.string().optional(),
    hasRecordedCriminalProsecutions: z.string().optional(),
    hasRecordedCriminalProsecutionsReasons: z.string().optional(),
    isParticipateInTrial: z.string().optional(),
    isParticipateInTrialReasons: z.string().optional(),
    isFinancialSanctionsAppliedLastYear: z.string().optional(),
    isFinancialSanctionsAppliedLastYearReasons: z.string().optional(),
    isParticipateInBankruptEntities: z.string().optional(),
    isParticipateInBankruptEntitiesReasons: z.string().optional(),
    revenueLast12Month1: z
      .string({ required_error: requiredMessage })
      .min(1, { message: requiredMessage }),
    revenueLast12Month2: z
      .string({ required_error: requiredMessage })
      .min(1, { message: requiredMessage }),
    revenueLast12Month3: z
      .string({ required_error: requiredMessage })
      .min(1, { message: requiredMessage }),
    revenueLast12Month4: z
      .string({ required_error: requiredMessage })
      .min(1, { message: requiredMessage }),
    revenueLast12Month5: z
      .string({ required_error: requiredMessage })
      .min(1, { message: requiredMessage }),
    revenueLast12Month6: z
      .string({ required_error: requiredMessage })
      .min(1, { message: requiredMessage }),
    revenueLast12Month7: z
      .string({ required_error: requiredMessage })
      .min(1, { message: requiredMessage }),
    revenueLast12Month8: z
      .string({ required_error: requiredMessage })
      .min(1, { message: requiredMessage }),
    revenueLast12Month9: z
      .string({ required_error: requiredMessage })
      .min(1, { message: requiredMessage }),
    revenueLast12Month10: z
      .string({ required_error: requiredMessage })
      .min(1, { message: requiredMessage }),
    revenueLast12Month11: z
      .string({ required_error: requiredMessage })
      .min(1, { message: requiredMessage }),
    revenueLast12Month12: z
      .string({ required_error: requiredMessage })
      .min(1, { message: requiredMessage }),

    // Signing documents
    consentApplicationFormForLeasing: z
      .boolean()
      .refine((val) => val === true, {
        message: requiredMessage,
      }),
    consentCreditReport: z.boolean().refine((val) => val === true, {
      message: requiredMessage,
    }),
    consentAdvertisingAndNewsletter: z.boolean().optional(),
  })
  .superRefine((data, ctx) => {
    if (
      data.hasRecordedCriminalProsecutions === 'да' &&
      (!data.hasRecordedCriminalProsecutionsReasons ||
        data.hasRecordedCriminalProsecutionsReasons.trim() === '')
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.too_small,
        type: 'string',
        minimum: 1,
        inclusive: false,
        message: requiredMessage,
        path: ['hasRecordedCriminalProsecutionsReasons'],
      })
    }

    if (
      data.isParticipateInTrial === 'да' &&
      (!data.isParticipateInTrialReasons ||
        data.isParticipateInTrialReasons.trim() === '')
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.too_small,
        type: 'string',
        minimum: 1,
        inclusive: false,
        message: requiredMessage,
        path: ['isParticipateInTrialReasons'],
      })
    }

    if (
      data.isFinancialSanctionsAppliedLastYear === 'да' &&
      (!data.isFinancialSanctionsAppliedLastYearReasons ||
        data.isFinancialSanctionsAppliedLastYearReasons.trim() === '')
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.too_small,
        type: 'string',
        minimum: 1,
        inclusive: false,
        message: requiredMessage,
        path: ['isFinancialSanctionsAppliedLastYearReasons'],
      })
    }

    if (
      data.isParticipateInBankruptEntities === 'да' &&
      (!data.isParticipateInBankruptEntitiesReasons ||
        data.isParticipateInBankruptEntitiesReasons.trim() === '')
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.too_small,
        type: 'string',
        minimum: 1,
        inclusive: false,
        message: requiredMessage,
        path: ['isParticipateInBankruptEntitiesReasons'],
      })
    }
  })

export type IndividuaEntrepreneurFormSchema = z.infer<
  typeof individualEntrepreneurFormSchema
>

export const individuaEntrepreneurFormSchemaShape =
  individualEntrepreneurFormSchema.sourceType()._def.shape()

export const legalEntityFormSchema = {}
