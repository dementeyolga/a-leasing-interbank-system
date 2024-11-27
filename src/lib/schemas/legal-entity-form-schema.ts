import {
  accountingManagementTypes,
  coreActivityTypes,
  organizationManagementTypes,
  servicingBanks,
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
        .min(1, { message: requiredMessage }),
      managerSurname: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      managerName: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      managerPatronymic: z.string().optional(),
      managerSex: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      managerCitizenship: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      managerBirthdate: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      managerBirthPlace: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
      managerIdentityDocumentType: z
        .string(requiredOptions)
        .min(1, { message: requiredMessage }),
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
      ieRegistrationDate: z.string().optional(),
      ieRegistrationAuthority: z.string().optional(),
      ieLocation: z.string().optional(),
      ieManagerPosition: z.string().optional(),
      ieManagerSurname: z.string().optional(),
      ieManagerName: z.string().optional(),
      ieManagerPatronymic: z.string().optional(),
      ieManagerSex: z.string().optional(),
      ieManagerCitizenship: z.string().optional(),
      ieManagerBirthdate: z.string().optional(),
      ieManagerBirthPlace: z.string().optional(),
      ieManagerIdentityDocumentType: z.string().optional(),
      ieManagerIdentityDocumentNumber: z.string().optional(),
      ieManagerIdentificationNumber: z.string().optional(),
      ieManagerIdentityDocumentIssueDate: z.string().optional(),
      ieManagerIdentityDocumentValidThrough: z.string().optional(),
      ieManagerIdentityDocumentIssuingAuthority: z.string().optional(),
      ieManagerPhone: z
        .string()
        .regex(REGEX_PHONE_INTL, { message: wrongFormatMessage })
        .optional(),
      ieManagerRegistrationCountry: z.string().optional(),
      ieManagerRegistrationRegion: z.string().optional(),
      ieManagerRegistrationSettlement: z.string().optional(),
      ieManagerRegistrationStreetType: z.string().optional(),
      ieManagerRegistrationStreetName: z.string().optional(),
      ieManagerRegistrationHouseNumber: z.string().optional(),
      ieManagerRegistrationBuildingNumber: z.string().optional(),
      ieManagerRegistrationApartmentNumber: z.string().optional(),
    }),
    // 3. case is Legal Entity
    z.object({
      organizationManagementType: z.literal('юридическое лицо'),
      leName: z.string().optional(),
      lePayerAccountingNumber: z.string().optional(),
      leRegistrationNumber: z.string().optional(),
      leRegistrationDate: z.string().optional(),
      leRegistrationAuthority: z.string().optional(),
      leLocation: z.string().optional(),
      leManagerPosition: z.string().optional(),
      leManagerSurname: z.string().optional(),
      leManagerName: z.string().optional(),
      leManagerPatronymic: z.string().optional(),
      leManagerSex: z.string().optional(),
      leManagerCitizenship: z.string().optional(),
      leManagerBirthdate: z.string().optional(),
      leManagerBirthPlace: z.string().optional(),
      leManagerIdentityDocumentType: z.string().optional(),
      leManagerIdentityDocumentNumber: z.string().optional(),
      leManagerIdentificationNumber: z.string().optional(),
      leManagerIdentityDocumentIssueDate: z.string().optional(),
      leManagerIdentityDocumentValidThrough: z.string().optional(),
      leManagerIdentityDocumentIssuingAuthority: z.string().optional(),
      leManagerPhone: z
        .string()
        .regex(REGEX_PHONE_INTL, { message: wrongFormatMessage })
        .optional(),
      leManagerRegistrationCountry: z.string().optional(),
      leManagerRegistrationRegion: z.string().optional(),
      leManagerRegistrationSettlement: z.string().optional(),
      leManagerRegistrationStreetType: z.string().optional(),
      leManagerRegistrationStreetName: z.string().optional(),
      leManagerRegistrationHouseNumber: z.string().optional(),
      leManagerRegistrationBuildingNumber: z.string().optional(),
      leManagerRegistrationApartmentNumber: z.string().optional(),
      // Accountant
      leAccountantPosition: z.string().optional(),
      leAccountantSurname: z.string().optional(),
      leAccountantName: z.string().optional(),
      leAccountantPatronymic: z.string().optional(),
      leAccountantSex: z.string().optional(),
      leAccountantCitizenship: z.string().optional(),
      leAccountantBirthdate: z.string().optional(),
      leAccountantBirthPlace: z.string().optional(),
      leAccountantIdentityDocumentType: z.string().optional(),
      leAccountantIdentityDocumentNumber: z.string().optional(),
      leAccountantIdentificationNumber: z.string().optional(),
      leAccountantIdentityDocumentIssueDate: z.string().optional(),
      leAccountantIdentityDocumentValidThrough: z.string().optional(),
      leAccountantIdentityDocumentIssuingAuthority: z.string().optional(),
      leAccountantPhone: z
        .string()
        .regex(REGEX_PHONE_INTL, { message: wrongFormatMessage })
        .optional(),
      leAccountantRegistrationCountry: z.string().optional(),
      leAccountantRegistrationRegion: z.string().optional(),
      leAccountantRegistrationSettlement: z.string().optional(),
      leAccountantRegistrationStreetType: z.string().optional(),
      leAccountantRegistrationStreetName: z.string().optional(),
      leAccountantRegistrationHouseNumber: z.string().optional(),
      leAccountantRegistrationBuildingNumber: z.string().optional(),
      leAccountantRegistrationApartmentNumber: z.string().optional(),
    }),
  ],
)

const accountingManagementTypeDiscriminatedUnion = z.discriminatedUnion(
  'accountingManagementType',
  [
    // 1. case accounting manager is natural person
    z.object({
      accountingManagementType: z.literal('физическое лицо'),

      accountingManagerPosition: z.string().optional(),
      accountingManagerSurname: z.string().optional(),
      accountingManagerName: z.string().optional(),
      accountingManagerPatronymic: z.string().optional(),
      accountingManagerSex: z.string().optional(),
      accountingManagerCitizenship: z.string().optional(),
      accountingManagerBirthdate: z.string().optional(),
      accountingManagerBirthPlace: z.string().optional(),
      accountingManagerIdentityDocumentType: z.string().optional(),
      accountingManagerIdentityDocumentNumber: z.string().optional(),
      accountingManagerIdentificationNumber: z.string().optional(),
      accountingManagerIdentityDocumentIssueDate: z.string().optional(),
      accountingManagerIdentityDocumentValidThrough: z.string().optional(),
      accountingManagerIdentityDocumentIssuingAuthority: z.string().optional(),
      accountingManagerPhone: z
        .string()
        .regex(REGEX_PHONE_INTL, { message: wrongFormatMessage })
        .optional(),
      accountingManagerRegistrationCountry: z.string().optional(),
      accountingManagerRegistrationRegion: z.string().optional(),
      accountingManagerRegistrationSettlement: z.string().optional(),
      accountingManagerRegistrationStreetType: z.string().optional(),
      accountingManagerRegistrationStreetName: z.string().optional(),
      accountingManagerRegistrationHouseNumber: z.string().optional(),
      accountingManagerRegistrationBuildingNumber: z.string().optional(),
      accountingManagerRegistrationApartmentNumber: z.string().optional(),
    }),
    // 2. case accounting manager is a legal entity or individual enterpreneur
    z.object({
      accountingManagementType: z.literal('юридическое лицо/ИП'),

      accountingManagementCompanyName: z.string().optional(),
      accountingManagementCompanyPayerAccountingNumber: z.string().optional(),
    }),
  ],
)

const hasNetLossLast3MonthDiscriminatedUnion = z.discriminatedUnion(
  'hasNetLossLast3Month',
  [
    z.object({
      hasNetLossLast3Month: z.literal('да'),
      netLossLast3MonthSum: z
        .string()
        .regex(REGEX_SUM, { message: wrongFormatMessage })
        .optional(),
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
        .string()
        .regex(REGEX_SUM, { message: wrongFormatMessage })
        .optional(),
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
      hasCasesManagersCriminalResponsibilityReasons: z.string().optional(),
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
    isActualAddressMatchLegal: z
      .string(requiredOptions)
      .min(1, { message: requiredMessage }),
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
          .min(1, { message: requiredMessage }),
        beneficialOwnerName: z
          .string(requiredOptions)
          .min(1, { message: requiredMessage }),
        beneficialOwnerPatronymic: z.string().optional(),
        beneficialOwnerRole: z.string().optional(),
        beneficialOwnerFraction: z.string().optional(),
        beneficialOwnerCitizenship: z.string().optional(),
        beneficialOwnerBirthdate: z.string().optional(),
        beneficialOwnerBirthPlace: z.string().optional(),
        beneficialOwnerIdentityDocumentType: z.string().optional(),
        beneficialOwnerIdentityDocumentNumber: z.string().optional(),
        beneficialOwnerIdentificationNumber: z.string().optional(),
        beneficialOwnerIdentityDocumentIssueDate: z.string().optional(),
        beneficialOwnerIdentityDocumentValidThrough: z.string().optional(),
        beneficialOwnerIdentityDocumentIssuingAuthority: z.string().optional(),
        beneficialOwnerPhone: z
          .string()
          .regex(REGEX_PHONE_INTL, { message: wrongFormatMessage })
          .optional(),
        beneficialOwnerIsPublicOfficial: z.string().optional(),
        beneficialOwnerRegistrationCountry: z
          .string(requiredOptions)
          .min(1, { message: requiredMessage }),
        beneficialOwnerRegistrationRegion: z
          .string(requiredOptions)
          .min(1, { message: requiredMessage }),
        beneficialOwnerRegistrationSettlement: z
          .string(requiredOptions)
          .min(1, { message: requiredMessage }),
        beneficialOwnerRegistrationStreetType: z
          .string(requiredOptions)
          .min(1, { message: requiredMessage }),
        beneficialOwnerRegistrationStreetName: z
          .string(requiredOptions)
          .min(1, { message: requiredMessage }),
        beneficialOwnerRegistrationHouseNumber: z
          .string(requiredOptions)
          .min(1, { message: requiredMessage }),
        beneficialOwnerRegistrationBuildingNumber: z.string().optional(),
        beneficialOwnerRegistrationApartmentNumber: z.string().optional(),
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
