import {
  IndividuaEntrepreneurFormSchema,
  LegalEntityFormSchema,
  NaturalPersonFormSchema,
} from '@/lib/schemas'

export const initialDataNaturalPerson: NaturalPersonFormSchema = {}

export const initialDataLegalEntity: LegalEntityFormSchema = {}

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
    servicingBank: '',
    hasNetLossLast3Month: 'нет',
    hasRecordedCriminalProsecutions: 'нет',
    hasRecordedCriminalProsecutionsReasons: '',
    isParticipateInTrial: 'нет',
    isParticipateInTrialReasons: '',
    isFinancialSanctionsAppliedLastYear: 'нет',
    isFinancialSanctionsAppliedLastYearReasons: '',
    isParticipateInBankruptEntities: 'нет',
    isParticipateInBankruptEntitiesReasons: '',
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
    consentCreditReport: false,
    consentAdvertisingAndNewsletter: false,

    signDocsOTP: '',
  }
