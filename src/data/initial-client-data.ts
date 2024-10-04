import { IndividuaEntrepreneurFormSchema } from '@/lib/schemas'

export const initialDataNaturalPerson = {}
export const initialDataLegalEntity = {}
export const initialDataIndividualEntrepreneur: IndividuaEntrepreneurFormSchema =
  {
    // Personal data
    surname: 'Иванов',
    name: 'Иван',
    patronymic: 'Иванович',
    formerSurname: 'Петров',
    birthDate: '01.01.1967',
    phone: '+375 (44) 123-45-67',
    email: '',
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
    ieCoreActivity: '',
    ieCCEACode: '',
    ieOtherActivity: '',
    isPublicOfficial: 'нет',
  }
