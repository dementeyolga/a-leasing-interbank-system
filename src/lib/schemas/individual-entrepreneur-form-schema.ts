import { z } from 'zod'
import {
  OTPLengthMessage,
  requiredMessage,
  wrongFormatMessage,
} from '../constants'
import {
  REGEX_NAME,
  REGEX_ONLY_DIGITS,
  REGEX_PHONE_INTL,
  REGEX_SUM,
} from '../regex'

export const individualEntrepreneurFormSchema = z.object({
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
  phone: z
    .string()
    .regex(REGEX_PHONE_INTL, { message: wrongFormatMessage })
    .or(z.literal(''))
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
  residenceCountry: z.string().min(1, { message: requiredMessage }),
  residenceSettlement: z.string().min(1, { message: requiredMessage }),
  residenceStreetType: z.string().min(1, { message: requiredMessage }),
  residenceStreetName: z.string().min(1, { message: requiredMessage }),
  residenceHouseNumber: z.string().min(1, { message: requiredMessage }),
  residenceBuildingNumber: z.string().optional(),
  residenceApartmentNumber: z.string().optional(),
  residencePostalCode: z
    .string()
    .min(1, { message: requiredMessage })
    .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage }),

  // Inndividual entrepreneur information
  // General
  payerAccountingNumber: z.string().min(1, { message: requiredMessage }),
  ieRegistrationNumber: z.string().min(1, { message: requiredMessage }),
  ieRegistrationDate: z.string().min(1, { message: requiredMessage }),
  ieRegistrationAuthority: z.string().optional(),
  ieCoreActivity: z.string().min(1, { message: requiredMessage }),
  ieCCEACode: z
    .string()
    .min(1, { message: requiredMessage })
    .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage }),
  ieOtherActivity: z.string().optional(),
  isPublicOfficial: z.string().optional(),

  // Administrative and financial information
  servicingBank: z.string().min(1, { message: requiredMessage }),
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
    .string()
    .min(1, { message: requiredMessage })
    .regex(REGEX_SUM, { message: wrongFormatMessage }),
  revenueLast12Month2: z
    .string()
    .min(1, { message: requiredMessage })
    .regex(REGEX_SUM, { message: wrongFormatMessage }),
  revenueLast12Month3: z
    .string()
    .min(1, { message: requiredMessage })
    .regex(REGEX_SUM, { message: wrongFormatMessage }),
  revenueLast12Month4: z
    .string()
    .min(1, { message: requiredMessage })
    .regex(REGEX_SUM, { message: wrongFormatMessage }),
  revenueLast12Month5: z
    .string()
    .min(1, { message: requiredMessage })
    .regex(REGEX_SUM, { message: wrongFormatMessage }),
  revenueLast12Month6: z
    .string()
    .min(1, { message: requiredMessage })
    .regex(REGEX_SUM, { message: wrongFormatMessage }),
  revenueLast12Month7: z
    .string()
    .min(1, { message: requiredMessage })
    .regex(REGEX_SUM, { message: wrongFormatMessage }),
  revenueLast12Month8: z
    .string()
    .min(1, { message: requiredMessage })
    .regex(REGEX_SUM, { message: wrongFormatMessage }),
  revenueLast12Month9: z
    .string()
    .min(1, { message: requiredMessage })
    .regex(REGEX_SUM, { message: wrongFormatMessage }),
  revenueLast12Month10: z
    .string()
    .min(1, { message: requiredMessage })
    .regex(REGEX_SUM, { message: wrongFormatMessage }),
  revenueLast12Month11: z
    .string()
    .min(1, { message: requiredMessage })
    .regex(REGEX_SUM, { message: wrongFormatMessage }),
  revenueLast12Month12: z
    .string()
    .min(1, { message: requiredMessage })
    .regex(REGEX_SUM, { message: wrongFormatMessage }),

  // Signing documents
  consentApplicationFormForLeasing: z.boolean().optional(),
  consentCreditReport: z.boolean().optional(),
  consentAdvertisingAndNewsletter: z.boolean().optional(),

  signDocsOTP: z.string().length(6, { message: OTPLengthMessage }),
})

export type IndividuaEntrepreneurFormSchema = z.infer<
  typeof individualEntrepreneurFormSchema
>
