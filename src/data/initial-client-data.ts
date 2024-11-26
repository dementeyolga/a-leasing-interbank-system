import {
  IndividuaEntrepreneurFormSchema,
  LegalEntityFormSchema,
  NaturalPersonFormSchema,
} from '@/lib/schemas'

export const initialDataNaturalPerson: NaturalPersonFormSchema = {
  // Personal data
  surname: 'Иванов',
  name: 'Иван',
  patronymic: 'Иванович',
  formerSurname: '',
  birthDate: '11.01.1989',
  sex: 'мужской',
  identityDocumentType: 'Паспорт РБ',
  identityDocumentNumber: 'МР747474',
  identificationNumber: '4545454545455',
  identityDocumentIssueDate: '20.01.2024',
  identityDocumentValidThrough: '20.01.2029',
  identityDocumentIssuingAuthority: 'МОСКОВСКОЕ РУВД г. Минска',
  isResidentOfBelarus: 'да',
  isTaxResidentOfUSA: 'нет',

  // Address information
  // Registration address
  registrationCountry: 'Руспублика Беларусь',
  registrationSettlement: 'г. Минск',
  registrationStreetType: 'пр.',
  registrationStreetName: 'Дзержинского',
  registrationHouseNumber: '34',
  registrationBuildingNumber: '',
  registrationApartmentNumber: '',
  registrationPostalCode: '220112',

  // Residence address
  isResidenceAddressMatchRegistration: 'да',
  residenceCountry: '',
  residenceSettlement: '',
  residenceStreetType: '',
  residenceStreetName: '',
  residenceHouseNumber: '',
  residenceBuildingNumber: '',
  residenceApartmentNumber: '',
  residencePostalCode: '',

  // Marital status and property ownership
  maritalStatus: 'женат/замужем',
  drivingExperience: '',
  ownsProperty: 'нет',
  ownsCar: 'нет',

  // Place of work and income
  jobType: 'иное',
  jobOrganization: 'ООО А-лизинг',
  jobOrganizationAddress: 'г. Минск',
  jobAccountingOrHRDeptPhone: '+375 44 444 44 44',
  jobPosition: 'Директор',
  jobStartDate: '30.0.2019',
  worksUnderContract: 'нет',
  mainIncomeSum: '2000',
  spouseMainIncome: '',
  partTimeWorkIncome: '',
  contractArgeementIncome: '',
  otherIncome: '',
  hasAdditionalUnconfirmedIncome: 'да',
  additionalIncomeSource: '',
  additionalIncomeSum: '',
  totalWorkExperience: '4',
  educationType: 'высшее образование',
  numberOfDependents: '',
  loansPaymentAmount: '',
  installmentsPaymentAmount: '',
  writOfExecutionPaymentAmount: '',
  alimonyPaymentAmount: '',

  // Contacts
  phone: '+375 44 444 44 44',
  trustedPersonPhone: '+375 44 444 44 44',
  additionalPhone: '',
  email: '',

  // Signing documents
  consentApplicationFormForLeasing: true,
  consentCreditReport: true,
  consentAdvertisingAndNewsletter: true,

  signDocsOTP: '',
}

export const initialDataLegalEntity: LegalEntityFormSchema = {
  fullName: 'Общество с ограниченной ответственностью “ааа ооо иии”',
  payerAccountingNumber: '12312312',
  registrationNumber: '12312312',
  registrationDate: '12.05.2020',
  registrationAuthority: 'Главное управление юстиции Могилевского облисполкома',
  coreActivity: '',
  CCEACode: '222222',
  otherActivity: '',
  dateOfActivityBeginning: '12.05.2020',
  licenceValidThrough: '',
  wasReorganized: 'нет',

  // Address information
  // Legal address
  legalCountry: 'Республика Беларусь',
  legalSettlement: 'г. Минск',
  legalStreetType: 'Проспект',
  legalStreetName: 'Дзержинского',
  legalHouseNumber: '94',
  legalBuildingNumber: '',
  legalOfficeNumber: '135',
  legalPostalCode: '220000',

  // Actual address
  isActualAddressMatchLegal: 'да',
  actualCountry: '',
  actualSettlement: '',
  actualStreetType: '',
  actualStreetName: '',
  actualHouseNumber: '',
  actualBuildingNumber: '',
  actualOfficeNumber: '',
  actualPostalCode: '',

  // Information about legal entity
  organizationManagementType: 'физическое лицо',
  // 1. case is Natural person
  managerPosition: 'Директор',
  managerSurname: 'Иванов',
  managerName: 'Иван',
  managerPatronymic: 'Иванович',
  managerSex: 'мужской',
  managerCitizenship: 'Республика Беларусь',
  managerBirthdate: '01.01.1967',
  managerBirthPlace: 'Республика Беларусь',
  managerIdentityDocumentType: 'Паспорт РБ',
  managerIdentityDocumentNumber: 'МР1234567',
  managerIdentificationNumber: '4010167К006РВ8',
  managerIdentityDocumentIssueDate: '01.01.2022',
  managerIdentityDocumentValidThrough: '01.01.2029',
  managerIdentityDocumentIssuingAuthority: 'МОСКОВСКОЕ РУВД Г.МИНСКА',
  managerPhone: '+375 (44) 123-45-67',
  managerRegistrationCountry: 'Беларусь',
  managerRegistrationSettlement: 'Минская область',
  managerRegistrationStreetType: '',
  managerRegistrationStreetName: '',
  managerRegistrationHouseNumber: '94',
  managerRegistrationBuildingNumber: '',
  managerRegistrationApartmentNumber: '135',

  // Accounting management information
  accountingManagementType: 'физическое лицо',

  // 1. case accounting manager is natural person
  accountingManagerPosition: 'Главный бухгалтер',
  accountingManagerSurname: 'Иванов',
  accountingManagerName: 'Иван',
  accountingManagerPatronymic: 'Иванович',
  accountingManagerSex: 'мужской',
  accountingManagerCitizenship: 'Республика Беларусь',
  accountingManagerBirthdate: '01.01.1967',
  accountingManagerBirthPlace: 'Республика Беларусь',
  accountingManagerIdentityDocumentType: 'Паспорт РБ',
  accountingManagerIdentityDocumentNumber: 'МР1234567',
  accountingManagerIdentificationNumber: '4010167К006РВ8',
  accountingManagerIdentityDocumentIssueDate: '01.01.2022',
  accountingManagerIdentityDocumentValidThrough: '01.01.2029',
  accountingManagerIdentityDocumentIssuingAuthority: 'МОСКОВСКОЕ РУВД Г.МИНСКА',
  accountingManagerPhone: '+375 (44) 123-45-67',
  accountingManagerRegistrationCountry: 'Беларусь',
  accountingManagerRegistrationRegion: 'Минская область',
  accountingManagerRegistrationSettlement: '',
  accountingManagerRegistrationStreetType: '',
  accountingManagerRegistrationStreetName: '',
  accountingManagerRegistrationHouseNumber: '94',
  accountingManagerRegistrationBuildingNumber: '',
  accountingManagerRegistrationApartmentNumber: '135',

  // Beneficial owners info
  beneficialOwners: [
    {
      beneficialOwnerSurname: 'Иванов',
      beneficialOwnerName: 'Иван',
      beneficialOwnerPatronymic: 'Иванович',
      beneficialOwnerRole: 'Учредитель',
      beneficialOwnerFraction: '10,00',
      beneficialOwnerCitizenship: 'Республика Беларусь',
      beneficialOwnerBirthdate: '01.01.1967',
      beneficialOwnerBirthPlace: 'Республика Беларусь',
      beneficialOwnerIdentityDocumentType: 'Паспорт РБ',
      beneficialOwnerIdentityDocumentNumber: 'МР1234567',
      beneficialOwnerIdentificationNumber: '4010167К006РВ8',
      beneficialOwnerIdentityDocumentIssueDate: '01.01.2022',
      beneficialOwnerIdentityDocumentValidThrough: '01.01.2029',
      beneficialOwnerIdentityDocumentIssuingAuthority:
        'МОСКОВСКОЕ РУВД Г.МИНСКА',
      beneficialOwnerPhone: '+375 (44) 123-45-67',
      beneficialOwnerIsPublicOfficial: 'да',
      beneficialOwnerRegistrationCountry: 'Беларусь',
      beneficialOwnerRegistrationRegion: 'Минская область',
      beneficialOwnerRegistrationSettlement: '',
      beneficialOwnerRegistrationStreetType: '',
      beneficialOwnerRegistrationStreetName: '',
      beneficialOwnerRegistrationHouseNumber: '94',
      beneficialOwnerRegistrationBuildingNumber: '',
      beneficialOwnerRegistrationApartmentNumber: '135',
    },
  ],

  participantsInformation: '',

  // Administrative and financial information
  servicingBank: 'ОАО "АСБ Беларусбанк"',
  hasNetLossLast3Month: 'нет',
  hasNetLossLastQuarterlyDate: 'нет',
  hasCasesManagersCriminalResponsibility: 'нет',
  isParticipateInTrial: 'нет',
  isFinancialSanctionsAppliedLastYear: 'нет',
  isParticipateInBankruptEntities: 'нет',
  revenueLast12Month1: '',
  revenueLast12Month2: '',
  revenueLast12Month3: '',
  revenueLast12Month4: '',
  revenueLast12Month5: '',
  revenueLast12Month6: '',
  revenueLast12Month7: '',
  revenueLast12Month8: '',
  revenueLast12Month9: '',
  revenueLast12Month10: '',
  revenueLast12Month11: '',
  revenueLast12Month12: '',

  // Signing documents
  consentApplicationFormForLeasing: true,
  consentCreditReport: true,
  consentAdvertisingAndNewsletter: true,

  signDocsOTP: '',
}

export const initialDataIndividualEntrepreneur: IndividuaEntrepreneurFormSchema =
  {
    // Personal data
    surname: 'Иванов',
    name: 'Иван',
    patronymic: 'Иванович',
    formerSurname: 'Петров',
    birthDate: '01.01.1967',
    phone: '+375 (44) 123-45-67',
    email: 'ff@gmail.com',
    sex: 'мужской',
    identityDocumentType: 'fdfd',
    identityDocumentNumber: 'МР1234567',
    identificationNumber: '4010167К006РВ8',
    identityDocumentIssueDate: '01.01.2022',
    identityDocumentValidThrough: '01.01.2029',
    identityDocumentIssuingAuthority: 'МОСКОВСКОЕ РУВД Г.МИНСКА',
    isResidentOfBelarus: 'да',
    isTaxResidentOfUSA: 'нет',

    // Address information
    // Registration address
    registrationCountry: 'Республика Беларусь',
    registrationSettlement: 'г. Минск',
    registrationStreetType: 'Проспект',
    registrationStreetName: 'Дзержинского',
    registrationHouseNumber: '94',
    registrationBuildingNumber: '-',
    registrationApartmentNumber: '135',
    registrationPostalCode: '220000',
    // Residence address
    isResidenceAddressMatchRegistration: 'да',
    residenceCountry: '',
    residenceSettlement: '',
    residenceStreetType: '',
    residenceStreetName: '',
    residenceHouseNumber: '',
    residenceBuildingNumber: '',
    residenceApartmentNumber: '',
    residencePostalCode: '',

    // Inndividual entrepreneur information
    // General
    payerAccountingNumber: '111',
    ieRegistrationNumber: '111',
    ieRegistrationDate: '21.02.2021',
    ieRegistrationAuthority: 'Орган',
    ieCoreActivity: 'продажа',
    ieCCEACode: '11111',
    ieOtherActivity: '',
    isPublicOfficial: 'нет',

    // Administrative and financial information
    servicingBank: 'ОАО "АСБ Беларусбанк"',
    hasNetLossLast3Month: 'нет',
    hasRecordedCriminalProsecutions: 'нет',
    isParticipateInTrial: 'нет',
    isFinancialSanctionsAppliedLastYear: 'нет',
    isParticipateInBankruptEntities: 'нет',
    revenueLast12Month1: '',
    revenueLast12Month2: '',
    revenueLast12Month3: '',
    revenueLast12Month4: '',
    revenueLast12Month5: '',
    revenueLast12Month6: '',
    revenueLast12Month7: '',
    revenueLast12Month8: '',
    revenueLast12Month9: '',
    revenueLast12Month10: '',
    revenueLast12Month11: '',
    revenueLast12Month12: '',

    // Signing docs
    consentApplicationFormForLeasing: true,
    consentCreditReport: true,
    consentAdvertisingAndNewsletter: true,

    signDocsOTP: '',
  }
