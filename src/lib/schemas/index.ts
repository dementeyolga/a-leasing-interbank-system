import { z } from 'zod'
import {
  REGEX_GEO_NAME,
  REGEX_NAME,
  REGEX_ONLY_DIGITS,
  REGEX_PHONE_INTL,
  REGEX_SUM,
} from '../regex'

const requiredMessage = 'Обязательное поле'
const wrongFormatMessage = 'Некорректный формат данных'
const OTPLengthMessage = 'Код должен содержать 6 цифр'

const requiredOptions = {
  required_error: requiredMessage,
}
const yesNoArray = ['да', 'нет'] as const

const ownsPropertyDiscriminatedUnion = z.discriminatedUnion('ownsProperty')

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

export const legalEntityFormSchema = z
  .object({
    // General data
    fullName: z.string().min(1, { message: requiredMessage }),
    payerAccountingNumber: z
      .string()
      .min(1, { message: requiredMessage })
      .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage }),
    registrationNumber: z.string().min(1, { message: requiredMessage }),
    registrationDate: z.string().min(1, { message: requiredMessage }),
    registrationAuthority: z.string().min(1, { message: requiredMessage }),
    coreActivity: z.string().min(1, { message: requiredMessage }),
    CCEACode: z
      .string()
      .min(1, { message: requiredMessage })
      .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage }),
    otherActivity: z.string().optional(),
    dateOfActivityBeginning: z.string().min(1, { message: requiredMessage }),
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

    // Actual address
    isActualAddressMatchLegal: z.string().min(1, { message: requiredMessage }),
    actualCountry: z
      .string()
      .min(1, { message: requiredMessage })
      .regex(REGEX_GEO_NAME, { message: wrongFormatMessage }),
    actualSettlement: z
      .string()
      .min(1, { message: requiredMessage })
      .regex(REGEX_GEO_NAME, { message: wrongFormatMessage }),
    actualStreetType: z
      .string()
      .min(1, { message: requiredMessage })
      .regex(REGEX_GEO_NAME, { message: wrongFormatMessage }),
    actualStreetName: z.string().min(1, { message: requiredMessage }),
    actualHouseNumber: z
      .string()
      .min(1, { message: requiredMessage })
      .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage }),
    actualBuildingNumber: z.string().optional(),
    actualOfficeNumber: z
      .string()
      .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage })
      .or(z.literal(''))
      .optional(),
    actualPostalCode: z
      .string()
      .min(1, { message: requiredMessage })
      .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage }),

    // Information about legal entity
    organizationManagementType: z.string().min(1, { message: requiredMessage }),
    // 1. case is Natural person
    managerPosition: z
      .string()
      .min(1, { message: requiredMessage })
      .or(z.literal(undefined)),
    managerSurname: z
      .string()
      .min(1, { message: requiredMessage })
      .or(z.literal(undefined)),
    managerName: z
      .string()
      .min(1, { message: requiredMessage })
      .or(z.literal(undefined)),
    managerPatronymic: z.string().optional(),
    managerSex: z
      .string()
      .min(1, { message: requiredMessage })
      .or(z.literal(undefined)),
    managerCitizenship: z
      .string()
      .min(1, { message: requiredMessage })
      .or(z.literal(undefined)),
    managerBirthdate: z
      .string()
      .min(1, { message: requiredMessage })
      .or(z.literal(undefined)),
    managerBirthPlace: z
      .string()
      .min(1, { message: requiredMessage })
      .or(z.literal(undefined)),
    managerIdentityDocumentType: z
      .string()
      .min(1, { message: requiredMessage })
      .or(z.literal(undefined)),
    managerIdentityDocumentNumber: z
      .string()
      .min(1, { message: requiredMessage })
      .or(z.literal(undefined)),
    managerIdentificationNumber: z
      .string()
      .min(1, { message: requiredMessage })
      .or(z.literal(undefined)),
    managerIdentityDocumentIssueDate: z
      .string()
      .min(1, { message: requiredMessage })
      .or(z.literal(undefined)),
    managerIdentityDocumentValidThrough: z
      .string()
      .min(1, { message: requiredMessage })
      .or(z.literal(undefined)),
    managerIdentityDocumentIssuingAuthority: z
      .string()
      .min(1, { message: requiredMessage })
      .or(z.literal(undefined)),
    managerPhone: z
      .string()
      .min(1, { message: requiredMessage })
      .regex(REGEX_PHONE_INTL, { message: wrongFormatMessage }),
    managerRegistrationCountry: z
      .string()
      .min(1, { message: requiredMessage })
      .regex(REGEX_GEO_NAME, { message: wrongFormatMessage })
      .or(z.literal(undefined)),
    managerRegistrationSettlement: z
      .string()
      .min(1, { message: requiredMessage })
      .regex(REGEX_GEO_NAME, { message: wrongFormatMessage })
      .or(z.literal(undefined)),
    managerRegistrationStreetType: z
      .string()
      .min(1, { message: requiredMessage })
      .regex(REGEX_GEO_NAME, { message: wrongFormatMessage })
      .or(z.literal(undefined)),
    managerRegistrationStreetName: z
      .string()
      .min(1, { message: requiredMessage })
      .or(z.literal(undefined)),
    managerRegistrationHouseNumber: z
      .string()
      .min(1, { message: requiredMessage })
      .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage })
      .or(z.literal(undefined)),
    managerRegistrationBuildingNumber: z.string().optional(),
    managerRegistrationApartmentNumber: z
      .string()
      .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage })
      .or(z.literal(''))
      .optional(),

    // 2. case is Inddividual Enterpreneur
    ieName: z
      .string()
      .min(1, { message: requiredMessage })
      .or(z.literal(undefined)),
    iePayerAccountingNumber: z
      .string()
      .min(1, { message: requiredMessage })
      .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage })
      .or(z.literal(undefined)),
    ieRegistrationNumber: z
      .string()
      .min(1, { message: requiredMessage })
      .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage })
      .or(z.literal(undefined)),
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
      .or(z.literal(''))
      .optional(),
    ieManagerRegistrationCountry: z.string().optional(),
    ieManagerRegistrationRegion: z.string().optional(),
    ieManagerRegistrationSettlement: z.string().optional(),
    ieManagerRegistrationStreetType: z.string().optional(),
    ieManagerRegistrationStreetName: z.string().optional(),
    ieManagerRegistrationHouseNumber: z.string().optional(),
    ieManagerRegistrationBuildingNumber: z.string().optional(),
    ieManagerRegistrationApartmentNumber: z.string().optional(),

    // 2. case is Legal Entity
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
      .or(z.literal(''))
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
      .or(z.literal(''))
      .optional(),
    leAccountantRegistrationCountry: z.string().optional(),
    leAccountantRegistrationRegion: z.string().optional(),
    leAccountantRegistrationSettlement: z.string().optional(),
    leAccountantRegistrationStreetType: z.string().optional(),
    leAccountantRegistrationStreetName: z.string().optional(),
    leAccountantRegistrationHouseNumber: z.string().optional(),
    leAccountantRegistrationBuildingNumber: z.string().optional(),
    leAccountantRegistrationApartmentNumber: z.string().optional(),

    // Accounting management information
    accountingManagementType: z.string().min(1, { message: requiredMessage }),

    // 1. case accounting manager is natural person
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
      .or(z.literal(''))
      .optional(),
    accountingManagerRegistrationCountry: z.string().optional(),
    accountingManagerRegistrationRegion: z.string().optional(),
    accountingManagerRegistrationSettlement: z.string().optional(),
    accountingManagerRegistrationStreetType: z.string().optional(),
    accountingManagerRegistrationStreetName: z.string().optional(),
    accountingManagerRegistrationHouseNumber: z.string().optional(),
    accountingManagerRegistrationBuildingNumber: z.string().optional(),
    accountingManagerRegistrationApartmentNumber: z.string().optional(),

    // 2. case accounting manager is a legal entity or individual enterpreneur
    accountingManagementCompanyName: z.string().optional(),
    accountingManagementCompanyPayerAccountingNumber: z.string().optional(),

    // Beneficial owners info
    beneficialOwners: z.array(
      z.object({
        beneficialOwnerSurname: z.string().min(1, { message: requiredMessage }),
        beneficialOwnerName: z.string().min(1, { message: requiredMessage }),
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
          .or(z.literal(''))
          .optional(),
        beneficialOwnerIsPublicOfficial: z.string().optional(),
        beneficialOwnerRegistrationCountry: z
          .string()
          .min(1, { message: requiredMessage }),
        beneficialOwnerRegistrationRegion: z
          .string()
          .min(1, { message: requiredMessage }),
        beneficialOwnerRegistrationSettlement: z
          .string()
          .min(1, { message: requiredMessage }),
        beneficialOwnerRegistrationStreetType: z
          .string()
          .min(1, { message: requiredMessage }),
        beneficialOwnerRegistrationStreetName: z
          .string()
          .min(1, { message: requiredMessage }),
        beneficialOwnerRegistrationHouseNumber: z
          .string()
          .min(1, { message: requiredMessage }),
        beneficialOwnerRegistrationBuildingNumber: z.string().optional(),
        beneficialOwnerRegistrationApartmentNumber: z.string().optional(),
      }),
    ),

    participantsInformation: z.string().optional(),

    // Administrative and financial information
    servicingBank: z.string().min(1, { message: requiredMessage }),
    hasNetLossLast3Month: z.string().optional(),
    netLossLast3MonthSum: z
      .string()
      .regex(REGEX_SUM, { message: wrongFormatMessage })
      .or(z.literal(''))
      .optional(),
    hasNetLossLastQuarterlyDate: z.string().optional(),
    netLossLastQuarterlyDateSum: z
      .string()
      .regex(REGEX_SUM, { message: wrongFormatMessage })
      .or(z.literal(''))
      .optional(),
    hasCasesManagersCriminalResponsibility: z.string().optional(),
    hasCasesManagersCriminalResponsibilityReasons: z.string().optional(),
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
  .and(legalEntityWasReorganisedDiscriminatedUnion)

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
export type NaturalPersonFormSchema = z.infer<typeof naturalPersonFormSchema>
export type LegalEntityFormSchema = z.infer<typeof legalEntityFormSchema>
