import FormFieldsWrapper from '@/components/forms/form-fields-wrapper'
import FormHeading from '@/components/forms/form-heading'
import FormWrapper from '@/components/forms/form-wrapper'
import { organizationManagementTypes } from '@/data/select-field-options'
import { type LegalEntityFormSchema as FormSchema } from '@/lib/schemas'
import { generateSexRadioItems } from '@/lib/utils'
import { UseFormWatch } from 'react-hook-form'
import FormInputWrapper from '../../../field-wrappers/form-input-wrapper'
import FormRadioWrapper from '../../../field-wrappers/form-radio-wrapper'
import FormSelectWrapper from '../../../field-wrappers/form-select-wrapper'

interface Substep1Props {
  watch: UseFormWatch<FormSchema>
}

export default function Substep1({ watch }: Substep1Props) {
  const organizationManagementType = watch('organizationManagementType')

  return (
    <FormWrapper>
      <FormWrapper>
        <FormSelectWrapper
          name="organizationManagementType"
          label="Кто управляет организацией"
          values={organizationManagementTypes}
        />

        <>
          {/* Case 1: Natural person */}
          {organizationManagementType === 'физическое лицо' && (
            <FormWrapper>
              <FormHeading tooltip="ином лице, уполномоченном в соответсвии с учредительными документами действовать от имени клиента-организации">
                Сведения о руководителе организации
              </FormHeading>

              <FormFieldsWrapper>
                <FormInputWrapper
                  name="managerPosition"
                  label="Занимаемая должность"
                />
                <FormInputWrapper name="managerSurname" label="Фамилия" />
                <FormInputWrapper name="managerName" label="Имя" />
                <FormInputWrapper name="managerPatronymic" label="Отчество" />
                <FormRadioWrapper
                  name="managerSex"
                  label="Пол"
                  items={generateSexRadioItems()}
                />
                <FormInputWrapper
                  name="managerCitizenship"
                  label="Гражданство"
                />
                <FormInputWrapper
                  name="managerBirthdate"
                  label="Дата рождения"
                />
                <FormInputWrapper
                  name="managerBirthPlace"
                  label="Место рождения"
                />
                <FormInputWrapper
                  name="managerIdentityDocumentType"
                  label="Тип документа"
                />
                <FormInputWrapper
                  name="managerIdentityDocumentNumber"
                  label="Серия и номер документа"
                />
                <FormInputWrapper
                  name="managerIdentificationNumber"
                  label="Идентификационный номер"
                />
                <FormInputWrapper
                  name="managerIdentityDocumentIssueDate"
                  label="Дата выдачи"
                />
                <FormInputWrapper
                  name="managerIdentityDocumentValidThrough"
                  label="Срок действия"
                />
                <FormInputWrapper
                  name="managerIdentityDocumentIssuingAuthority"
                  label="Орган выдавший документ"
                />
                <FormInputWrapper
                  name="managerPhone"
                  label="Мобильный телефон"
                />
              </FormFieldsWrapper>

              <FormHeading>Адрес регистрации</FormHeading>

              <FormFieldsWrapper>
                <FormInputWrapper
                  name="managerRegistrationCountry"
                  label="Страна"
                />
                <FormInputWrapper
                  name="managerRegistrationSettlement"
                  label="Населенный пункт"
                />
                <FormInputWrapper
                  name="managerRegistrationStreetType"
                  label="Тип улицы"
                />
                <FormInputWrapper
                  name="managerRegistrationStreetName"
                  label="Улица"
                />
                <FormInputWrapper
                  name="managerRegistrationHouseNumber"
                  label="Дом"
                />
                <FormInputWrapper
                  name="managerRegistrationBuildingNumber"
                  label="Строение/корпус"
                />
                <FormInputWrapper
                  name="managerRegistrationApartmentNumber"
                  label="Квартира"
                />
              </FormFieldsWrapper>
            </FormWrapper>
          )}

          {/* Case 2: IndividualInterpreneur */}
          {organizationManagementType === 'индивидуальный предприниматель' && (
            <FormWrapper>
              <FormHeading>Сведения об ИП</FormHeading>

              <FormFieldsWrapper>
                <FormInputWrapper
                  name="ieName"
                  label="Наименование организации"
                />
                <FormInputWrapper name="iePayerAccountingNumber" label="УНП" />
                <FormInputWrapper
                  name="ieRegistrationNumber"
                  label="Регистрационный номер"
                />
                <FormInputWrapper
                  name="ieRegistrationDate"
                  label="Дата регистрации"
                />
                <FormInputWrapper
                  name="ieRegistrationAuthority"
                  label="Наименование регистрирующего органа"
                />
                <FormInputWrapper name="ieLocation" label="Место нахождения" />
              </FormFieldsWrapper>

              <FormHeading tooltip="ином лице, уполномоченном в соответсвии с учредительными документами действовать от имени клиента-организации">
                Сведения о руководителе организации
              </FormHeading>

              <FormFieldsWrapper>
                <FormInputWrapper
                  name="ieManagerPosition"
                  label="Занимаемая должность"
                />
                <FormInputWrapper name="ieManagerSurname" label="Фамилия" />
                <FormInputWrapper name="ieManagerName" label="Имя" />
                <FormInputWrapper name="ieManagerPatronymic" label="Отчество" />
                <FormRadioWrapper
                  name="ieManagerSex"
                  label="Пол"
                  items={generateSexRadioItems()}
                />
                <FormInputWrapper
                  name="ieManagerCitizenship"
                  label="Гражданство"
                />
                <FormInputWrapper
                  name="ieManagerBirthdate"
                  label="Дата рождения"
                />
                <FormInputWrapper
                  name="ieManagerBirthPlace"
                  label="Место рождения"
                />
                <FormInputWrapper
                  name="ieManagerIdentityDocumentType"
                  label="Тип документа"
                />
                <FormInputWrapper
                  name="ieManagerIdentityDocumentNumber"
                  label="Серия и номер документа"
                />
                <FormInputWrapper
                  name="ieManagerIdentificationNumber"
                  label="Идентификационный номер"
                />
                <FormInputWrapper
                  name="ieManagerIdentityDocumentIssueDate"
                  label="Дата выдачи"
                />
                <FormInputWrapper
                  name="ieManagerIdentityDocumentValidThrough"
                  label="Срок действия"
                />
                <FormInputWrapper
                  name="ieManagerIdentityDocumentIssuingAuthority"
                  label="Орган, выдавший документ"
                />
                <FormInputWrapper
                  name="ieManagerPhone"
                  label="Мобильный телефон"
                />
              </FormFieldsWrapper>

              <FormHeading>Адрес регистрации руководителя</FormHeading>

              <FormFieldsWrapper>
                <FormInputWrapper
                  name="ieManagerRegistrationCountry"
                  label="Страна"
                />
                <FormInputWrapper
                  name="ieManagerRegistrationRegion"
                  label="Область"
                />
                <FormInputWrapper
                  name="ieManagerRegistrationSettlement"
                  label="Населенный пункт"
                />
                <FormInputWrapper
                  name="ieManagerRegistrationStreetType"
                  label="Тип улицы"
                />
                <FormInputWrapper
                  name="ieManagerRegistrationStreetName"
                  label="Улица"
                />
                <FormInputWrapper
                  name="ieManagerRegistrationHouseNumber"
                  label="Дом"
                />
                <FormInputWrapper
                  name="ieManagerRegistrationBuildingNumber"
                  label="Строение/корпус"
                />
                <FormInputWrapper
                  name="ieManagerRegistrationApartmentNumber"
                  label="Квартира"
                />
              </FormFieldsWrapper>
            </FormWrapper>
          )}

          {/* Case 3:  Legal entity*/}
          {organizationManagementType === 'юридическое лицо' && (
            <FormWrapper>
              <FormHeading>Сведения о ЮЛ</FormHeading>

              <FormFieldsWrapper>
                <FormInputWrapper
                  name="leName"
                  label="Наименование организации"
                />
                <FormInputWrapper name="lePayerAccountingNumber" label="УНП" />
                <FormInputWrapper
                  name="leRegistrationNumber"
                  label="Регистрационный номер"
                />
                <FormInputWrapper
                  name="leRegistrationDate"
                  label="Дата регистрации"
                />
                <FormInputWrapper
                  name="leRegistrationAuthority"
                  label="Наименование регистрирующего органа"
                />
                <FormInputWrapper name="leLocation" label="Место нахождения" />
              </FormFieldsWrapper>

              <FormHeading tooltip="ином лице, уполномоченном в соответсвии с учредительными документами действовать от имени клиента-организации">
                Сведения о руководителе управляющей компании
              </FormHeading>

              <FormFieldsWrapper>
                <FormInputWrapper
                  name="leManagerPosition"
                  label="Занимаемая должность"
                />
                <FormInputWrapper name="leManagerSurname" label="Фамилия" />
                <FormInputWrapper name="leManagerName" label="Имя" />
                <FormInputWrapper name="leManagerPatronymic" label="Отчество" />
                <FormRadioWrapper
                  name="leManagerSex"
                  label="Пол"
                  items={generateSexRadioItems()}
                />
                <FormInputWrapper
                  name="leManagerCitizenship"
                  label="Гражданство"
                />
                <FormInputWrapper
                  name="leManagerBirthdate"
                  label="Дата рождения"
                />
                <FormInputWrapper
                  name="leManagerBirthPlace"
                  label="Место рождения"
                />
                <FormInputWrapper
                  name="leManagerIdentityDocumentType"
                  label="Тип документа"
                />
                <FormInputWrapper
                  name="leManagerIdentityDocumentNumber"
                  label="Серия и номер документа"
                />
                <FormInputWrapper
                  name="leManagerIdentificationNumber"
                  label="Идентификационный номер"
                />
                <FormInputWrapper
                  name="leManagerIdentityDocumentIssueDate"
                  label="Дата выдачи"
                />
                <FormInputWrapper
                  name="leManagerIdentityDocumentValidThrough"
                  label="Срок действия"
                />
                <FormInputWrapper
                  name="leManagerIdentityDocumentIssuingAuthority"
                  label="Орган, выдавший документ"
                />
                <FormInputWrapper
                  name="leManagerPhone"
                  label="Мобильный телефон"
                />
              </FormFieldsWrapper>

              <FormHeading>
                Адрес регистрации руководителя управляющей компании
              </FormHeading>

              <FormFieldsWrapper>
                <FormInputWrapper
                  name="leManagerRegistrationCountry"
                  label="Страна"
                />
                <FormInputWrapper
                  name="leManagerRegistrationRegion"
                  label="Область"
                />
                <FormInputWrapper
                  name="leManagerRegistrationSettlement"
                  label="Населенный пункт"
                />
                <FormInputWrapper
                  name="leManagerRegistrationStreetType"
                  label="Тип улицы"
                />
                <FormInputWrapper
                  name="leManagerRegistrationStreetName"
                  label="Улица"
                />
                <FormInputWrapper
                  name="leManagerRegistrationHouseNumber"
                  label="Дом"
                />
                <FormInputWrapper
                  name="leManagerRegistrationBuildingNumber"
                  label="Строение/корпус"
                />
                <FormInputWrapper
                  name="leManagerRegistrationApartmentNumber"
                  label="Квартира"
                />
              </FormFieldsWrapper>

              <FormHeading>
                Сведения о лице, осуществляющем руководство бухгалтерским учетом
                в управляющей компании
              </FormHeading>

              <FormFieldsWrapper>
                <FormInputWrapper
                  name="leAccountantPosition"
                  label="Занимаемая должность"
                />
                <FormInputWrapper name="leAccountantSurname" label="Фамилия" />
                <FormInputWrapper name="leAccountantName" label="Имя" />
                <FormInputWrapper
                  name="leAccountantPatronymic"
                  label="Отчество"
                />
                <FormRadioWrapper
                  name="leAccountantSex"
                  label="Пол"
                  items={generateSexRadioItems()}
                />
                <FormInputWrapper
                  name="leAccountantCitizenship"
                  label="Гражданство"
                />
                <FormInputWrapper
                  name="leAccountantBirthdate"
                  label="Дата рождения"
                />
                <FormInputWrapper
                  name="leAccountantBirthPlace"
                  label="Место рождения"
                />
                <FormInputWrapper
                  name="leAccountantIdentityDocumentType"
                  label="Тип документа"
                />
                <FormInputWrapper
                  name="leAccountantIdentityDocumentNumber"
                  label="Серия и номер документа"
                />
                <FormInputWrapper
                  name="leAccountantIdentificationNumber"
                  label="Идентификационный номер"
                />
                <FormInputWrapper
                  name="leAccountantIdentityDocumentIssueDate"
                  label="Дата выдачи"
                />
                <FormInputWrapper
                  name="leAccountantIdentityDocumentValidThrough"
                  label="Срок действия"
                />
                <FormInputWrapper
                  name="leAccountantIdentityDocumentIssuingAuthority"
                  label="Орган, выдавший документ"
                />
                <FormInputWrapper
                  name="leAccountantPhone"
                  label="Мобильный телефон"
                />
              </FormFieldsWrapper>

              <FormHeading>
                Адрес регистрации бухгалтера управляющей компании
              </FormHeading>

              <FormFieldsWrapper>
                <FormInputWrapper
                  name="leAccountantRegistrationCountry"
                  label="Страна"
                />
                <FormInputWrapper
                  name="leAccountantRegistrationRegion"
                  label="Область"
                />
                <FormInputWrapper
                  name="leAccountantRegistrationSettlement"
                  label="Населенный пункт"
                />
                <FormInputWrapper
                  name="leAccountantRegistrationStreetType"
                  label="Тип улицы"
                />
                <FormInputWrapper
                  name="leAccountantRegistrationStreetName"
                  label="Улица"
                />
                <FormInputWrapper
                  name="leAccountantRegistrationHouseNumber"
                  label="Дом"
                />
                <FormInputWrapper
                  name="leAccountantRegistrationBuildingNumber"
                  label="Строение/корпус"
                />
                <FormInputWrapper
                  name="leAccountantRegistrationApartmentNumber"
                  label="Квартира"
                />
              </FormFieldsWrapper>
            </FormWrapper>
          )}
        </>
      </FormWrapper>
    </FormWrapper>
  )
}
