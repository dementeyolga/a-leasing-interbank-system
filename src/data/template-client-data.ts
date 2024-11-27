import { LegalEntityFormSchema } from '@/lib/schemas'

export const templateBeneficialOwnerData: LegalEntityFormSchema['beneficialOwners'][0] =
  {
    beneficialOwnerSurname: '',
    beneficialOwnerName: '',
    beneficialOwnerPatronymic: '',
    beneficialOwnerRole: '',
    beneficialOwnerFraction: 0,
    beneficialOwnerCitizenship: '',
    beneficialOwnerBirthdate: '',
    beneficialOwnerBirthPlace: '',
    beneficialOwnerIdentityDocumentType: '',
    beneficialOwnerIdentityDocumentNumber: '',
    beneficialOwnerIdentificationNumber: '',
    beneficialOwnerIdentityDocumentIssueDate: '',
    beneficialOwnerIdentityDocumentValidThrough: '',
    beneficialOwnerIdentityDocumentIssuingAuthority: '',
    beneficialOwnerPhone: '',
    beneficialOwnerIsPublicOfficial: 'да',
    beneficialOwnerRegistrationCountry: '',
    beneficialOwnerRegistrationRegion: '',
    beneficialOwnerRegistrationSettlement: '',
    beneficialOwnerRegistrationStreetType: '',
    beneficialOwnerRegistrationStreetName: '',
    beneficialOwnerRegistrationHouseNumber: '',
    beneficialOwnerRegistrationBuildingNumber: '',
    beneficialOwnerRegistrationApartmentNumber: '',
  }
