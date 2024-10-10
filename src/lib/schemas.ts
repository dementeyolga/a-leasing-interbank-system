import { z } from 'zod'

const requiredMessage = 'Обязательное поле'
const wrongFormatMessage = 'Некорректный формат данных'
const OTPLengthMessage = 'Код должен содержать 6 цифр'

export const naturalPersonFormSchema = z
  .object({
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
    residencePostalCode: z.string().min(1, { message: requiredMessage }),

    // Marital status and property ownership
    maritalStatus: z.string().min(1, { message: requiredMessage }),
    drivingExperience: z.string().optional(),
    ownsProperty: z.string().optional(),
    typesOfProperty: z
      .string()
      .min(1, { message: requiredMessage })
      .or(z.literal(null)),
    ownsCar: z.string().optional(),
    carBrand: z
      .string()
      .min(1, { message: requiredMessage })
      .or(z.literal(null)),
    carManufactureYear: z
      .string()
      .min(1, { message: requiredMessage })
      .or(z.literal(null)),

    // Place of work and income
    jobType: z.string().min(1, { message: requiredMessage }),
    jobOrganization: z.string().min(1, { message: requiredMessage }),
    jobOrganizationAddress: z.string().min(1, { message: requiredMessage }),
    jobAccountingOrHRDeptPhone: z.string().min(1, { message: requiredMessage }),
    jobPosition: z.string().min(1, { message: requiredMessage }),
    jobStartDate: z.string().min(1, { message: requiredMessage }),
    isWorksUnderContract: z.string().optional(),
    contractEndDate: z.string().optional(),
    mainIncomeSum: z.string().min(1, { message: requiredMessage }),
    spouseMainIncome: z.string().optional(),
    partTimeWorkIncome: z.string().optional(),
    contractArgeementIncome: z.string().optional(),
    otherIncome: z.string().optional(),
    hasAdditionalUnconfirmedIncome: z.string().optional(),
    additionalIncomeSource: z.string().optional(),
    additionalIncomeSum: z.string().optional(),
    totalWorkExperience: z.string().min(1, { message: requiredMessage }),
    educationType: z.string().min(1, { message: requiredMessage }),
    numberOfDependents: z.string().optional(),
    loansPaymentAmount: z.string().optional(),
    installmentsPaymentAmount: z.string().optional(),
    writOfExecutionPaymentAmount: z.string().optional(),
    alimonyPaymentAmount: z.string().optional(),

    // Contacts
    phone: z.string().optional(),
    trustedPersonPhone: z.string().min(1, { message: requiredMessage }),
    additionalPhone: z.string().optional(),
    email: z
      .string()
      .email({ message: wrongFormatMessage })
      .or(z.literal(''))
      .optional(),

    // Signing documents
    consentApplicationFormForLeasing: z
      .boolean()
      .refine((val) => val === true, {
        message: requiredMessage,
      }),
    consentCreditReport: z.boolean().optional(),
    consentAdvertisingAndNewsletter: z.boolean().optional(),

    signDocsOTP: z.string().min(6, { message: OTPLengthMessage }),
  })
  .superRefine((data, ctx) => {
    if (data.trustedPersonPhone.length < 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `No duplicates allowed.`,
      })
    }
  })

export const legalEntityFormSchema = z
  .object({
    // General data
    fullName: z.string().optional(),
    payerAccountingNumber: z.string().optional(),
    registrationNumber: z.string().optional(),
    registrationDate: z.string().optional(),
    registrationAuthority: z.string().optional(),
    coreActivity: z.string().min(1, { message: requiredMessage }),
    CCEACode: z.string().min(1, { message: requiredMessage }),
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
    actualPostalCode: z.string().min(1, { message: requiredMessage }),

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
    managerPhone: z.string().optional(),
    managerRegistrationCountry: z.string().min(1, { message: requiredMessage }),
    managerRegistrationSettlement: z
      .string()
      .min(1, { message: requiredMessage }),
    managerRegistrationStreetType: z
      .string()
      .min(1, { message: requiredMessage }),
    managerRegistrationStreetName: z
      .string()
      .min(1, { message: requiredMessage }),
    managerRegistrationHouseNumber: z
      .string()
      .min(1, { message: requiredMessage }),
    managerRegistrationBuildingNumber: z.string().optional(),
    managerRegistrationApartmentNumber: z.string().optional(),

    // 2. case is Inddividual Enterpreneur
    ieName: z.string().min(1, { message: requiredMessage }),
    iePayerAccountingNumber: z.string().min(1, { message: requiredMessage }),
    ieRegistrationNumber: z.string().min(1, { message: requiredMessage }),
    ieRegistrationDate: z.string().min(1, { message: requiredMessage }),
    ieRegistrationAuthority: z.string().optional(),
    ieLocation: z.string().min(1, { message: requiredMessage }),
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
    ieManagerPhone: z.string().optional(),
    ieManagerRegistrationCountry: z
      .string()
      .min(1, { message: requiredMessage }),
    ieManagerRegistrationRegion: z
      .string()
      .min(1, { message: requiredMessage }),
    ieManagerRegistrationSettlement: z
      .string()
      .min(1, { message: requiredMessage }),
    ieManagerRegistrationStreetType: z
      .string()
      .min(1, { message: requiredMessage }),
    ieManagerRegistrationStreetName: z
      .string()
      .min(1, { message: requiredMessage }),
    ieManagerRegistrationHouseNumber: z
      .string()
      .min(1, { message: requiredMessage }),
    ieManagerRegistrationBuildingNumber: z.string().optional(),
    ieManagerRegistrationApartmentNumber: z.string().optional(),

    // 2. case is Legal Entity
    leName: z.string().min(1, { message: requiredMessage }),
    lePayerAccountingNumber: z.string().min(1, { message: requiredMessage }),
    leRegistrationNumber: z.string().min(1, { message: requiredMessage }),
    leRegistrationDate: z.string().min(1, { message: requiredMessage }),
    leRegistrationAuthority: z.string().optional(),
    leLocation: z.string().min(1, { message: requiredMessage }),
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
    leManagerPhone: z.string().optional(),
    leManagerRegistrationCountry: z
      .string()
      .min(1, { message: requiredMessage }),
    leManagerRegistrationRegion: z
      .string()
      .min(1, { message: requiredMessage }),
    leManagerRegistrationSettlement: z
      .string()
      .min(1, { message: requiredMessage }),
    leManagerRegistrationStreetType: z
      .string()
      .min(1, { message: requiredMessage }),
    leManagerRegistrationStreetName: z
      .string()
      .min(1, { message: requiredMessage }),
    leManagerRegistrationHouseNumber: z
      .string()
      .min(1, { message: requiredMessage }),
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
    leAccountantPhone: z.string().optional(),
    leAccountantRegistrationCountry: z
      .string()
      .min(1, { message: requiredMessage }),
    leAccountantRegistrationRegion: z
      .string()
      .min(1, { message: requiredMessage }),
    leAccountantRegistrationSettlement: z
      .string()
      .min(1, { message: requiredMessage }),
    leAccountantRegistrationStreetType: z
      .string()
      .min(1, { message: requiredMessage }),
    leAccountantRegistrationStreetName: z
      .string()
      .min(1, { message: requiredMessage }),
    leAccountantRegistrationHouseNumber: z
      .string()
      .min(1, { message: requiredMessage }),
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
    accountingManagerPhone: z.string().optional(),
    accountingManagerRegistrationCountry: z
      .string()
      .min(1, { message: requiredMessage }),
    accountingManagerRegistrationRegion: z
      .string()
      .min(1, { message: requiredMessage }),
    accountingManagerRegistrationSettlement: z
      .string()
      .min(1, { message: requiredMessage }),
    accountingManagerRegistrationStreetType: z
      .string()
      .min(1, { message: requiredMessage }),
    accountingManagerRegistrationStreetName: z
      .string()
      .min(1, { message: requiredMessage }),
    accountingManagerRegistrationHouseNumber: z
      .string()
      .min(1, { message: requiredMessage }),
    accountingManagerRegistrationBuildingNumber: z.string().optional(),
    accountingManagerRegistrationApartmentNumber: z.string().optional(),

    // 2. case accounting manager is a legal entity or individual enterpreneur
    accountingManagementCompanyName: z
      .string()
      .min(1, { message: requiredMessage }),
    accountingManagementCompanyPayerAccountingNumber: z
      .string()
      .min(1, { message: requiredMessage }),

    // Beneficial owners info
    beneficialOwners: z
      .array(
        z.object({
          beneficialOwnerSurname: z.string().optional(),
          beneficialOwnerName: z.string().optional(),
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
          beneficialOwnerIdentityDocumentIssuingAuthority: z
            .string()
            .optional(),
          beneficialOwnerPhone: z.string().optional(),
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
      )
      .optional(),

    participantsInformation: z.string().optional(),

    // Administrative and financial information
    servicingBank: z.string().min(1, { message: requiredMessage }),
    hasNetLossLast3Month: z.string().optional(),
    netLossLast3MonthSum: z.string().optional(),
    hasNetLossLastQuarterlyDate: z.string().optional(),
    netLossLastQuarterlyDateSum: z.string().optional(),
    hasCasesManagersCriminalResponsibility: z.string().optional(),
    hasCasesManagersCriminalResponsibilityReasons: z.string().optional(),
    isParticipateInTrial: z.string().optional(),
    isParticipateInTrialReasons: z.string().optional(),
    isFinancialSanctionsAppliedLastYear: z.string().optional(),
    isFinancialSanctionsAppliedLastYearReasons: z.string().optional(),
    isParticipateInBankruptEntities: z.string().optional(),
    isParticipateInBankruptEntitiesReasons: z.string().optional(),
    revenueLast12Month1: z.string().min(1, { message: requiredMessage }),
    revenueLast12Month2: z.string().min(1, { message: requiredMessage }),
    revenueLast12Month3: z.string().min(1, { message: requiredMessage }),
    revenueLast12Month4: z.string().min(1, { message: requiredMessage }),
    revenueLast12Month5: z.string().min(1, { message: requiredMessage }),
    revenueLast12Month6: z.string().min(1, { message: requiredMessage }),
    revenueLast12Month7: z.string().min(1, { message: requiredMessage }),
    revenueLast12Month8: z.string().min(1, { message: requiredMessage }),
    revenueLast12Month9: z.string().min(1, { message: requiredMessage }),
    revenueLast12Month10: z.string().min(1, { message: requiredMessage }),
    revenueLast12Month11: z.string().min(1, { message: requiredMessage }),
    revenueLast12Month12: z.string().min(1, { message: requiredMessage }),

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

    signDocsOTP: z.string().min(6, { message: OTPLengthMessage }),
  })
  .superRefine((data, ctx) => {
    if (data.CCEACode.length < 3) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `No duplicates allowed.`,
      })
    }
  })

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
    residencePostalCode: z.string().min(1, { message: requiredMessage }),

    // Inndividual entrepreneur information
    // General
    payerAccountingNumber: z.string().min(1, { message: requiredMessage }),
    ieRegistrationNumber: z.string().min(1, { message: requiredMessage }),
    ieRegistrationDate: z.string().min(1, { message: requiredMessage }),
    ieRegistrationAuthority: z.string().optional(),
    ieCoreActivity: z.string().min(1, { message: requiredMessage }),
    ieCCEACode: z.string().min(1, { message: requiredMessage }),
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
    revenueLast12Month1: z.string().min(1, { message: requiredMessage }),
    revenueLast12Month2: z.string().min(1, { message: requiredMessage }),
    revenueLast12Month3: z.string().min(1, { message: requiredMessage }),
    revenueLast12Month4: z.string().min(1, { message: requiredMessage }),
    revenueLast12Month5: z.string().min(1, { message: requiredMessage }),
    revenueLast12Month6: z.string().min(1, { message: requiredMessage }),
    revenueLast12Month7: z.string().min(1, { message: requiredMessage }),
    revenueLast12Month8: z.string().min(1, { message: requiredMessage }),
    revenueLast12Month9: z.string().min(1, { message: requiredMessage }),
    revenueLast12Month10: z.string().min(1, { message: requiredMessage }),
    revenueLast12Month11: z.string().min(1, { message: requiredMessage }),
    revenueLast12Month12: z.string().min(1, { message: requiredMessage }),

    // Signing documents
    consentApplicationFormForLeasing: z.boolean().optional(),
    consentCreditReport: z.boolean().optional(),
    consentAdvertisingAndNewsletter: z.boolean().optional(),

    signDocsOTP: z.string().min(6, { message: OTPLengthMessage }),
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
export type NaturalPersonFormSchema = z.infer<typeof naturalPersonFormSchema>
export type LegalEntityFormSchema = z.infer<typeof legalEntityFormSchema>

export const individuaEntrepreneurFormSchemaShape =
  individualEntrepreneurFormSchema.sourceType()._def.shape()
export const legalEntityFormSchemaShape = legalEntityFormSchema
  .sourceType()
  ._def.shape()
export const naturalPersonFormSchemaShape = naturalPersonFormSchema
  .sourceType()
  ._def.shape()
