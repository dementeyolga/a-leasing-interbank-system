import { z } from 'zod'
import { REGEX_ONLY_DIGITS, REGEX_PHONE, REGEX_SUM } from './regex'

const requiredMessage = 'Обязательное поле'
const wrongFormatMessage = 'Некорректный формат данных'
const OTPLengthMessage = 'Код должен содержать 6 цифр'

export const naturalPersonFormSchema = z.object({
  // Personal data
  surname: z.string().optional(),
  name: z.string().optional(),
  patronymic: z.string().optional(),
  formerSurname: z.string().optional(),
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

  // Marital status and property ownership
  maritalStatus: z.string().min(1, { message: requiredMessage }),
  drivingExperience: z.string().optional(),
  ownsProperty: z.string().optional(),
  typesOfProperty: z
    .string()
    .min(1, { message: requiredMessage })
    .or(z.literal(undefined)),
  ownsCar: z.string().optional(),
  carBrand: z
    .string()
    .min(1, { message: requiredMessage })
    .or(z.literal(undefined)),
  carManufactureYear: z
    .string()
    .min(1, { message: requiredMessage })
    .or(z.literal(undefined)),

  // Place of work and income
  jobType: z.string().min(1, { message: requiredMessage }),
  jobOrganization: z.string().min(1, { message: requiredMessage }),
  jobOrganizationAddress: z.string().min(1, { message: requiredMessage }),
  jobAccountingOrHRDeptPhone: z
    .string()
    .min(1, { message: requiredMessage })
    .regex(REGEX_PHONE, { message: wrongFormatMessage }),
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
    .regex(REGEX_PHONE, { message: wrongFormatMessage })
    .or(z.literal(''))
    .optional(),
  trustedPersonPhone: z
    .string()
    .min(1, { message: requiredMessage })
    .regex(REGEX_PHONE, { message: wrongFormatMessage }),
  additionalPhone: z
    .string()
    .regex(REGEX_PHONE, { message: wrongFormatMessage })
    .or(z.literal(''))
    .optional(),
  email: z
    .string()
    .email({ message: wrongFormatMessage })
    .or(z.literal(''))
    .optional(),

  // Signing documents
  consentApplicationFormForLeasing: z.boolean().optional(),
  consentCreditReport: z.boolean().optional(),
  consentAdvertisingAndNewsletter: z.boolean().optional(),

  signDocsOTP: z.string().min(6, { message: OTPLengthMessage }),
})

export const legalEntityFormSchema = z.object({
  // General data
  fullName: z.string().optional(),
  payerAccountingNumber: z.string().optional(),
  registrationNumber: z.string().optional(),
  registrationDate: z.string().optional(),
  registrationAuthority: z.string().optional(),
  coreActivity: z.string().min(1, { message: requiredMessage }),
  CCEACode: z
    .string()
    .min(1, { message: requiredMessage })
    .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage }),
  otherActivity: z.string().optional(),
  dateOfActivityBeginning: z.string().optional(),
  licenceValidThrough: z.string().optional(),
  wasReorganized: z.string().optional(),
  reorganizationType: z.string().optional(),
  reorganizationDate: z.string().optional(),
  oldFullNameAndLegalForm: z.string().optional(),
  oldPayerAccountingNumber: z.string().optional(),

  // Address information
  // Legal address
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
  actualCountry: z.string().min(1, { message: requiredMessage }),
  actualSettlement: z.string().min(1, { message: requiredMessage }),
  actualStreetType: z.string().min(1, { message: requiredMessage }),
  actualStreetName: z.string().min(1, { message: requiredMessage }),
  actualHouseNumber: z.string().min(1, { message: requiredMessage }),
  actualBuildingNumber: z.string().optional(),
  actualOfficeNumber: z.string().optional(),
  actualPostalCode: z
    .string()
    .min(1, { message: requiredMessage })
    .regex(REGEX_ONLY_DIGITS, { message: wrongFormatMessage }),

  // Information about legal entity
  organizationManagementType: z.string().min(1, { message: requiredMessage }),
  // 1. case is Natural person
  managerPosition: z.string().optional(),
  managerSurname: z.string().optional(),
  managerName: z.string().optional(),
  managerPatronymic: z.string().optional(),
  managerSex: z.string().optional(),
  managerCitizenship: z.string().optional(),
  managerBirthdate: z.string().optional(),
  managerBirthPlace: z.string().optional(),
  managerIdentityDocumentType: z.string().optional(),
  managerIdentityDocumentNumber: z.string().optional(),
  managerIdentificationNumber: z.string().optional(),
  managerIdentityDocumentIssueDate: z.string().optional(),
  managerIdentityDocumentValidThrough: z.string().optional(),
  managerIdentityDocumentIssuingAuthority: z.string().optional(),
  managerPhone: z
    .string()
    .regex(REGEX_PHONE, { message: wrongFormatMessage })
    .or(z.literal(''))
    .optional(),
  managerRegistrationCountry: z.string().optional(),
  managerRegistrationSettlement: z.string().optional(),
  managerRegistrationStreetType: z.string().optional(),
  managerRegistrationStreetName: z.string().optional(),
  managerRegistrationHouseNumber: z.string().optional(),
  managerRegistrationBuildingNumber: z.string().optional(),
  managerRegistrationApartmentNumber: z.string().optional(),

  // 2. case is Inddividual Enterpreneur
  ieName: z.string().optional(),
  iePayerAccountingNumber: z.string().optional(),
  ieRegistrationNumber: z.string().optional(),
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
    .regex(REGEX_PHONE, { message: wrongFormatMessage })
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
    .regex(REGEX_PHONE, { message: wrongFormatMessage })
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
    .regex(REGEX_PHONE, { message: wrongFormatMessage })
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
    .regex(REGEX_PHONE, { message: wrongFormatMessage })
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
        .regex(REGEX_PHONE, { message: wrongFormatMessage })
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

  signDocsOTP: z.string().min(6, { message: OTPLengthMessage }),
})

export const individualEntrepreneurFormSchema = z.object({
  // Personal data
  surname: z.string().optional(),
  name: z.string().optional(),
  patronymic: z.string().optional(),
  formerSurname: z.string().optional(),
  birthDate: z.string().optional(),
  phone: z
    .string()
    .regex(REGEX_PHONE, { message: wrongFormatMessage })
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

  signDocsOTP: z.string().min(6, { message: OTPLengthMessage }),
})

export type IndividuaEntrepreneurFormSchema = z.infer<
  typeof individualEntrepreneurFormSchema
>
export type NaturalPersonFormSchema = z.infer<typeof naturalPersonFormSchema>
export type LegalEntityFormSchema = z.infer<typeof legalEntityFormSchema>

export const individuaEntrepreneurFormSchemaShape =
  individualEntrepreneurFormSchema.shape
export const legalEntityFormSchemaShape = legalEntityFormSchema.shape
export const naturalPersonFormSchemaShape = naturalPersonFormSchema.shape
