import {
  accountingManagementTypes,
  coreActivityTypes,
  organizationManagementTypes,
  servicingBanks,
} from '@/data/select-field-options'
import { z } from 'zod'
import {
  OTPLengthMessage,
  percentLessThanMessage,
  percentMoreThanMessage,
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

const legalEntityWasReorganisedDiscriminatedUnion = z.discriminatedUnion(
  'wasReorganized',
  [
    z.object({
      wasReorganized: z.literal('да'),
      reorganizationType: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      reorganizationDate: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      oldFullNameAndLegalForm: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      oldPayerAccountingNumber: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage }),
    }),
    z.object({
      wasReorganized: z.literal('нет'),
    }),
  ],
)

const organizationManagementTypeDiscriminatedUnion = z.discriminatedUnion(
  'organizationManagementType',
  [
    // 1. case is Natural person
    z.object({
      organizationManagementType: z.literal('физическое лицо'),
      managerPosition: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_NAME, { message: wrongFormatMessage }),
      managerSurname: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_NAME, { message: wrongFormatMessage }),
      managerName: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_NAME, { message: wrongFormatMessage }),
      managerPatronymic: z
        .string()
        .regex(REGEX_NAME, { message: wrongFormatMessage })
        .optional(),
      managerSex: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      managerCitizenship: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_NAME, { message: wrongFormatMessage }),
      managerBirthdate: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      managerBirthPlace: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_NAME, { message: wrongFormatMessage }),
      managerIdentityDocumentType: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_NAME, { message: wrongFormatMessage }),
      managerIdentityDocumentNumber: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      managerIdentificationNumber: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      managerIdentityDocumentIssueDate: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      managerIdentityDocumentValidThrough: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      managerIdentityDocumentIssuingAuthority: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      managerPhone: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_PHONE_INTL, { message: wrongFormatMessage }),

      managerRegistrationCountry: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_GEO_NAME, { message: wrongFormatMessage }),
      managerRegistrationSettlement: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_GEO_NAME, { message: wrongFormatMessage }),
      managerRegistrationStreetType: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_GEO_NAME, { message: wrongFormatMessage }),
      managerRegistrationStreetName: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      managerRegistrationHouseNumber: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage }),
      managerRegistrationBuildingNumber: z.string().optional(),
      managerRegistrationApartmentNumber: z
        .string()
        .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage })
        .optional(),
    }),
    // 2. case is Individual Enterpreneur
    z.object({
      organizationManagementType: z.literal('индивидуальный предприниматель'),

      ieName: z.string(requiredOptions).min(1, { message: requiredMessage }),
      iePayerAccountingNumber: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage }),
      ieRegistrationNumber: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage }),
      ieRegistrationDate: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      ieRegistrationAuthority: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      ieLocation: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),

      ieManagerPosition: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_NAME, { message: wrongFormatMessage }),
      ieManagerSurname: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_NAME, { message: wrongFormatMessage }),
      ieManagerName: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_NAME, { message: wrongFormatMessage }),
      ieManagerPatronymic: z
        .string()
        .regex(REGEX_NAME, { message: wrongFormatMessage })
        .optional(),
      ieManagerSex: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      ieManagerCitizenship: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_NAME, { message: wrongFormatMessage }),
      ieManagerBirthdate: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      ieManagerBirthPlace: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_NAME, { message: wrongFormatMessage }),
      ieManagerIdentityDocumentType: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_NAME, { message: wrongFormatMessage }),
      ieManagerIdentityDocumentNumber: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      ieManagerIdentificationNumber: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      ieManagerIdentityDocumentIssueDate: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      ieManagerIdentityDocumentValidThrough: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      ieManagerIdentityDocumentIssuingAuthority: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      ieManagerPhone: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_PHONE_INTL, { message: wrongFormatMessage }),

      ieManagerRegistrationCountry: z
        .string()
        .regex(REGEX_GEO_NAME, { message: wrongFormatMessage })
        .optional(),
      ieManagerRegistrationRegion: z
        .string()
        .regex(REGEX_GEO_NAME, { message: wrongFormatMessage })
        .optional(),
      ieManagerRegistrationSettlement: z
        .string()
        .regex(REGEX_GEO_NAME, { message: wrongFormatMessage })
        .optional(),
      ieManagerRegistrationStreetType: z
        .string()
        .regex(REGEX_GEO_NAME, { message: wrongFormatMessage })
        .optional(),
      ieManagerRegistrationStreetName: z.string().optional(),
      ieManagerRegistrationHouseNumber: z
        .string()
        .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage })
        .optional(),
      ieManagerRegistrationBuildingNumber: z.string().optional(),
      ieManagerRegistrationApartmentNumber: z
        .string()
        .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage })
        .optional(),
    }),
    // 3. case is Legal Entity
    z.object({
      organizationManagementType: z.literal('юридическое лицо'),

      leName: z.string(requiredOptions).min(1, { message: requiredMessage }),
      lePayerAccountingNumber: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage }),
      leRegistrationNumber: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage }),
      leRegistrationDate: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      leRegistrationAuthority: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      leLocation: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),

      leManagerPosition: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_NAME, { message: wrongFormatMessage }),
      leManagerSurname: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_NAME, { message: wrongFormatMessage }),
      leManagerName: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_NAME, { message: wrongFormatMessage }),
      leManagerPatronymic: z
        .string()
        .regex(REGEX_NAME, { message: wrongFormatMessage })
        .optional(),
      leManagerSex: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      leManagerCitizenship: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_NAME, { message: wrongFormatMessage }),
      leManagerBirthdate: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      leManagerBirthPlace: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_NAME, { message: wrongFormatMessage }),
      leManagerIdentityDocumentType: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_NAME, { message: wrongFormatMessage }),
      leManagerIdentityDocumentNumber: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      leManagerIdentificationNumber: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      leManagerIdentityDocumentIssueDate: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      leManagerIdentityDocumentValidThrough: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      leManagerIdentityDocumentIssuingAuthority: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      leManagerPhone: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_PHONE_INTL, { message: wrongFormatMessage }),

      leManagerRegistrationCountry: z
        .string(requiredOptions)
        .regex(REGEX_GEO_NAME, { message: wrongFormatMessage })
        .optional(),
      leManagerRegistrationRegion: z
        .string()
        .regex(REGEX_GEO_NAME, { message: wrongFormatMessage })
        .optional(),
      leManagerRegistrationSettlement: z
        .string()
        .regex(REGEX_GEO_NAME, { message: wrongFormatMessage })
        .optional(),
      leManagerRegistrationStreetType: z
        .string()
        .regex(REGEX_GEO_NAME, { message: wrongFormatMessage })
        .optional(),
      leManagerRegistrationStreetName: z.string().optional(),
      leManagerRegistrationHouseNumber: z
        .string()
        .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage })
        .optional(),
      leManagerRegistrationBuildingNumber: z.string().optional(),
      leManagerRegistrationApartmentNumber: z
        .string()
        .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage })
        .optional(),

      // Accountant
      leAccountantPosition: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_NAME, { message: wrongFormatMessage }),
      leAccountantSurname: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_NAME, { message: wrongFormatMessage }),
      leAccountantName: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_NAME, { message: wrongFormatMessage }),
      leAccountantPatronymic: z
        .string()
        .regex(REGEX_NAME, { message: wrongFormatMessage })
        .optional(),
      leAccountantSex: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      leAccountantCitizenship: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_NAME, { message: wrongFormatMessage }),
      leAccountantBirthdate: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      leAccountantBirthPlace: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_NAME, { message: wrongFormatMessage }),
      leAccountantIdentityDocumentType: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_NAME, { message: wrongFormatMessage }),
      leAccountantIdentityDocumentNumber: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      leAccountantIdentificationNumber: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      leAccountantIdentityDocumentIssueDate: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      leAccountantIdentityDocumentValidThrough: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      leAccountantIdentityDocumentIssuingAuthority: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      leAccountantPhone: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_PHONE_INTL, { message: wrongFormatMessage }),

      leAccountantRegistrationCountry: z
        .string()
        .regex(REGEX_GEO_NAME, { message: wrongFormatMessage })
        .optional(),
      leAccountantRegistrationRegion: z
        .string()
        .regex(REGEX_GEO_NAME, { message: wrongFormatMessage })
        .optional(),
      leAccountantRegistrationSettlement: z
        .string()
        .regex(REGEX_GEO_NAME, { message: wrongFormatMessage })
        .optional(),
      leAccountantRegistrationStreetType: z
        .string()
        .regex(REGEX_GEO_NAME, { message: wrongFormatMessage })
        .optional(),
      leAccountantRegistrationStreetName: z.string().optional(),
      leAccountantRegistrationHouseNumber: z
        .string()
        .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage })
        .optional(),
      leAccountantRegistrationBuildingNumber: z.string().optional(),
      leAccountantRegistrationApartmentNumber: z
        .string()
        .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage })
        .optional(),
    }),
  ],
)

const accountingManagementTypeDiscriminatedUnion = z.discriminatedUnion(
  'accountingManagementType',
  [
    // 1. case accounting manager is natural person
    z.object({
      accountingManagementType: z.literal('физическое лицо'),

      accountingManagerPosition: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_NAME, { message: wrongFormatMessage }),
      accountingManagerSurname: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_NAME, { message: wrongFormatMessage }),
      accountingManagerName: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_NAME, { message: wrongFormatMessage }),
      accountingManagerPatronymic: z
        .string()
        .regex(REGEX_NAME, { message: wrongFormatMessage })
        .optional(),
      accountingManagerSex: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      accountingManagerCitizenship: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_NAME, { message: wrongFormatMessage }),
      accountingManagerBirthdate: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      accountingManagerBirthPlace: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      accountingManagerIdentityDocumentType: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_NAME, { message: wrongFormatMessage }),
      accountingManagerIdentityDocumentNumber: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      accountingManagerIdentificationNumber: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      accountingManagerIdentityDocumentIssueDate: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      accountingManagerIdentityDocumentValidThrough: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      accountingManagerIdentityDocumentIssuingAuthority: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      accountingManagerPhone: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_PHONE_INTL, { message: wrongFormatMessage }),

      accountingManagerRegistrationCountry: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_GEO_NAME, { message: wrongFormatMessage }),
      accountingManagerRegistrationRegion: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_GEO_NAME, { message: wrongFormatMessage }),
      accountingManagerRegistrationSettlement: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_GEO_NAME, { message: wrongFormatMessage }),
      accountingManagerRegistrationStreetType: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_GEO_NAME, { message: wrongFormatMessage }),
      accountingManagerRegistrationStreetName: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      accountingManagerRegistrationHouseNumber: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage }),
      accountingManagerRegistrationBuildingNumber: z.string().optional(),
      accountingManagerRegistrationApartmentNumber: z
        .string(requiredOptions)
        .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage })
        .optional(),
    }),
    // 2. case accounting manager is a legal entity or individual enterpreneur
    z.object({
      accountingManagementType: z.literal('юридическое лицо/ИП'),

      accountingManagementCompanyName: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      accountingManagementCompanyPayerAccountingNumber: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage }),
    }),
  ],
)

const hasNetLossLast3MonthDiscriminatedUnion = z.discriminatedUnion(
  'hasNetLossLast3Month',
  [
    z.object({
      hasNetLossLast3Month: z.literal('да'),
      netLossLast3MonthSum: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_SUM, { message: wrongFormatMessage }),
    }),
    z.object({
      hasNetLossLast3Month: z.literal('нет'),
    }),
  ],
)

const hasNetLossLastQuarterlyDateDiscriminatedUnion = z.discriminatedUnion(
  'hasNetLossLastQuarterlyDate',
  [
    z.object({
      hasNetLossLastQuarterlyDate: z.literal('да'),
      netLossLastQuarterlyDateSum: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage })
        .regex(REGEX_SUM, { message: wrongFormatMessage }),
    }),
    z.object({
      hasNetLossLastQuarterlyDate: z.literal('нет'),
    }),
  ],
)

const hasCasesManagersCriminalResponsibilityDiscriminatedUnion =
  z.discriminatedUnion('hasCasesManagersCriminalResponsibility', [
    z.object({
      hasCasesManagersCriminalResponsibility: z.literal('да'),
      hasCasesManagersCriminalResponsibilityReasons: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
    }),
    z.object({
      hasCasesManagersCriminalResponsibility: z.literal('нет'),
    }),
  ])

const isParticipateInTrialDiscriminatedUnion = z.discriminatedUnion(
  'isParticipateInTrial',
  [
    z.object({
      isParticipateInTrial: z.literal('да'),
      isParticipateInTrialReasons: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
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
      isFinancialSanctionsAppliedLastYearReasons: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
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
      isParticipateInBankruptEntitiesReasons: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
    }),
    z.object({
      isParticipateInBankruptEntities: z.literal('нет'),
    }),
  ],
)

export const legalEntityFormSchema = z
  .object({
    // STEP 1
    // General data
    fullName: z.string(requiredOptions).min(1, { message: requiredMessage }),
    payerAccountingNumber: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage })
      .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage }),
    registrationNumber: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage }),
    registrationDate: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage }),
    registrationAuthority: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage }),
    coreActivity: z.enum(coreActivityTypes, {
      required_error: requiredMessage,
    }),
    CCEACode: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage })
      .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage }),
    otherActivity: z.string().optional(),
    dateOfActivityBeginning: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage }),
    licenceValidThrough: z.string().optional(),

    wasReorganized: z.enum(yesNoArray).optional(),

    legalCountry: z.string().optional(),
    legalSettlement: z.string().optional(),
    legalStreetType: z.string().optional(),
    legalStreetName: z.string().optional(),
    legalHouseNumber: z.string().optional(),
    legalBuildingNumber: z.string().optional(),
    legalOfficeNumber: z.string().optional(),
    legalPostalCode: z.string().optional(),

    // STEP 2
    // Actual address
    isActualAddressMatchLegal: z.enum(yesNoArray, {
      required_error: requiredMessage,
    }),
    actualCountry: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage })
      .regex(REGEX_GEO_NAME, { message: wrongFormatMessage }),
    actualSettlement: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage })
      .regex(REGEX_GEO_NAME, { message: wrongFormatMessage }),
    actualStreetType: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage })
      .regex(REGEX_GEO_NAME, { message: wrongFormatMessage }),
    actualStreetName: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage }),
    actualHouseNumber: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage })
      .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage }),
    actualBuildingNumber: z.string().optional(),
    actualOfficeNumber: z
      .string()
      .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage })
      .optional(),
    actualPostalCode: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage })
      .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage }),

    // STEP 3
    // Substep 1
    // Information about legal entity
    organizationManagementType: z.enum(organizationManagementTypes, {
      required_error: requiredMessage,
    }),

    // Accounting management information
    // Substep 2
    accountingManagementType: z.enum(accountingManagementTypes, {
      required_error: requiredMessage,
    }),

    // Beneficial owners info
    // Substep 3
    beneficialOwners: z.array(
      z.object({
        beneficialOwnerSurname: z
          .string(requiredOptions)
          .min(1, { message: requiredMessage })
          .regex(REGEX_GEO_NAME, { message: wrongFormatMessage }),
        beneficialOwnerName: z
          .string(requiredOptions)
          .min(1, { message: requiredMessage })
          .regex(REGEX_GEO_NAME, { message: wrongFormatMessage }),
        beneficialOwnerPatronymic: z
          .string()
          .regex(REGEX_NAME, { message: wrongFormatMessage })
          .optional(),
        beneficialOwnerRole: z
          .string(requiredOptions)
          .min(1, { message: requiredMessage })
          .regex(REGEX_GEO_NAME, { message: wrongFormatMessage }),
        beneficialOwnerFraction: z.coerce
          .number({
            ...requiredOptions,
            invalid_type_error: wrongFormatMessage,
          })
          .gt(0, { message: percentMoreThanMessage })
          .lte(100, { message: percentLessThanMessage }),
        beneficialOwnerCitizenship: z
          .string(requiredOptions)
          .min(1, { message: requiredMessage })
          .regex(REGEX_GEO_NAME, { message: wrongFormatMessage }),
        beneficialOwnerBirthdate: z
          .string(requiredOptions)
          .min(1, { message: requiredMessage }),
        beneficialOwnerBirthPlace: z
          .string(requiredOptions)
          .min(1, { message: requiredMessage }),
        beneficialOwnerIdentityDocumentType: z
          .string(requiredOptions)
          .min(1, { message: requiredMessage })
          .regex(REGEX_NAME, { message: wrongFormatMessage }),
        beneficialOwnerIdentityDocumentNumber: z
          .string(requiredOptions)
          .min(1, { message: requiredMessage }),
        beneficialOwnerIdentificationNumber: z
          .string(requiredOptions)
          .min(1, { message: requiredMessage }),
        beneficialOwnerIdentityDocumentIssueDate: z
          .string(requiredOptions)
          .min(1, { message: requiredMessage }),
        beneficialOwnerIdentityDocumentValidThrough: z
          .string(requiredOptions)
          .min(1, { message: requiredMessage }),
        beneficialOwnerIdentityDocumentIssuingAuthority: z
          .string(requiredOptions)
          .min(1, { message: requiredMessage }),
        beneficialOwnerPhone: z
          .string(requiredOptions)
          .min(1, { message: requiredMessage })
          .regex(REGEX_PHONE_INTL, { message: wrongFormatMessage }),
        beneficialOwnerIsPublicOfficial: z
          .string(requiredOptions)
          .min(1, { message: requiredMessage }),

        beneficialOwnerRegistrationCountry: z
          .string(requiredOptions)
          .min(1, { message: requiredMessage })
          .regex(REGEX_GEO_NAME, { message: wrongFormatMessage }),
        beneficialOwnerRegistrationRegion: z
          .string(requiredOptions)
          .min(1, { message: requiredMessage })
          .regex(REGEX_GEO_NAME, { message: wrongFormatMessage }),
        beneficialOwnerRegistrationSettlement: z
          .string(requiredOptions)
          .min(1, { message: requiredMessage })
          .regex(REGEX_GEO_NAME, { message: wrongFormatMessage }),
        beneficialOwnerRegistrationStreetType: z
          .string(requiredOptions)
          .min(1, { message: requiredMessage })
          .regex(REGEX_GEO_NAME, { message: wrongFormatMessage }),
        beneficialOwnerRegistrationStreetName: z
          .string(requiredOptions)
          .min(1, { message: requiredMessage }),
        beneficialOwnerRegistrationHouseNumber: z
          .string(requiredOptions)
          .min(1, { message: requiredMessage })
          .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage }),
        beneficialOwnerRegistrationBuildingNumber: z.string().optional(),
        beneficialOwnerRegistrationApartmentNumber: z
          .string()
          .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage })
          .optional(),
      }),
    ),

    participantsInformation: z.string().optional(),
    foundersWithLargeUVShareInformation: z.string().optional(),

    // Substep 4
    // Administrative and financial information
    servicingBank: z.enum(servicingBanks, {
      required_error: requiredMessage,
    }),

    hasNetLossLast3Month: z.enum(yesNoArray, {
      required_error: requiredMessage,
    }),

    hasNetLossLastQuarterlyDate: z.enum(yesNoArray, {
      required_error: requiredMessage,
    }),

    hasCasesManagersCriminalResponsibility: z.enum(yesNoArray, {
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
  .and(legalEntityWasReorganisedDiscriminatedUnion)
  .and(organizationManagementTypeDiscriminatedUnion)
  .and(accountingManagementTypeDiscriminatedUnion)
  .and(hasNetLossLast3MonthDiscriminatedUnion)
  .and(hasNetLossLastQuarterlyDateDiscriminatedUnion)
  .and(hasCasesManagersCriminalResponsibilityDiscriminatedUnion)
  .and(isParticipateInTrialDiscriminatedUnion)
  .and(isFinancialSanctionsAppliedLastYearDiscriminatedUnion)
  .and(isParticipateInBankruptEntitiesDiscriminatedUnion)

export type LegalEntityFormSchema = z.infer<typeof legalEntityFormSchema>
