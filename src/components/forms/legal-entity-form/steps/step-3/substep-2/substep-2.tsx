import FormFieldsWrapper from '@/components/forms/form-fields-wrapper'
import FormHeading from '@/components/forms/form-heading'
import FormWrapper from '@/components/forms/form-wrapper'
import { accountingManagementTypes } from '@/data/select-field-options'
import { type LegalEntityFormSchema as FormSchema } from '@/lib/schemas'
import { generateSexRadioItems } from '@/lib/utils'
import { UseFormWatch } from 'react-hook-form'
import FormInputWrapper from '../../../field-wrappers/form-input-wrapper'
import FormRadioWrapper from '../../../field-wrappers/form-radio-wrapper'
import FormSelectWrapper from '../../../field-wrappers/form-select-wrapper'

interface Substep2Props {
  watch: UseFormWatch<FormSchema>
}

export default function Substep2({ watch }: Substep2Props) {
  const accountingManagementType = watch('accountingManagementType')

  return (
    <FormWrapper>
      <FormHeading tooltip="ином лице, уполномоченном в соответсвии с учредительными документами действовать от имени клиента-организации">
        Сведения о лице, осуществляющем руководство бухгалтерским учетом
      </FormHeading>

      <FormFieldsWrapper>
        <FormSelectWrapper
          name="accountingManagementType"
          label="Кто управляет организацией"
          values={accountingManagementTypes}
        />

        <>
          {/* Case 1: Natural person */}
          {accountingManagementType === 'физическое лицо' && (
            <>
              <>
                <FormInputWrapper
                  name="accountingManagerPosition"
                  label="Занимаемая должность"
                />
                <FormInputWrapper
                  name="accountingManagerSurname"
                  label="Фамилия"
                />
                <FormInputWrapper name="accountingManagerName" label="Имя" />
                <FormInputWrapper
                  name="accountingManagerPatronymic"
                  label="Отчество"
                />
                <FormRadioWrapper
                  name="accountingManagerSex"
                  label="Пол"
                  items={generateSexRadioItems()}
                />
                <FormInputWrapper
                  name="accountingManagerCitizenship"
                  label="Гражданство"
                />
                <FormInputWrapper
                  name="accountingManagerBirthdate"
                  label="Дата рождения"
                />
                <FormInputWrapper
                  name="accountingManagerBirthPlace"
                  label="Место рождения"
                />
                <FormInputWrapper
                  name="accountingManagerIdentityDocumentType"
                  label="Тип документа"
                />
                <FormInputWrapper
                  name="accountingManagerIdentityDocumentNumber"
                  label="Серия и номер документа"
                />
                <FormInputWrapper
                  name="accountingManagerIdentificationNumber"
                  label="Идентификационный номер"
                />
                <FormInputWrapper
                  name="accountingManagerIdentityDocumentIssueDate"
                  label="Дата выдачи"
                />
                <FormInputWrapper
                  name="accountingManagerIdentityDocumentValidThrough"
                  label="Срок действия"
                />
                <FormInputWrapper
                  name="accountingManagerIdentityDocumentIssuingAuthority"
                  label="Орган, выдавший документ"
                />
                <FormInputWrapper
                  name="accountingManagerPhone"
                  label="Мобильный телефон"
                />
              </>

              <FormHeading>Адрес регистрации</FormHeading>

              <>
                <FormInputWrapper
                  name="accountingManagerRegistrationCountry"
                  label="Страна"
                />
                <FormInputWrapper
                  name="accountingManagerRegistrationRegion"
                  label="Область"
                />
                <FormInputWrapper
                  name="accountingManagerRegistrationSettlement"
                  label="Населенный пункт"
                />
                <FormInputWrapper
                  name="accountingManagerRegistrationStreetType"
                  label="Тип улицы"
                />
                <FormInputWrapper
                  name="accountingManagerRegistrationStreetName"
                  label="Улица"
                />
                <FormInputWrapper
                  name="accountingManagerRegistrationHouseNumber"
                  label="Дом"
                />
                <FormInputWrapper
                  name="accountingManagerRegistrationBuildingNumber"
                  label="Строение/корпус"
                />
                <FormInputWrapper
                  name="accountingManagerRegistrationApartmentNumber"
                  label="Квартира"
                />
              </>
            </>
          )}

          {/* Case 2: IE or LE */}
          {accountingManagementType === 'юридическое лицо/ИП' && (
            <>
              <FormInputWrapper
                name="accountingManagementCompanyName"
                label="Наименование организации"
              />
              <FormInputWrapper
                name="accountingManagementCompanyPayerAccountingNumber"
                label="УНП"
              />
            </>
          )}
        </>
      </FormFieldsWrapper>
    </FormWrapper>
  )
}
