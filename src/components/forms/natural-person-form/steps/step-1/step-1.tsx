import FormFieldsWrapper from '@/components/forms/form-fields-wrapper'
import FormWrapper from '@/components/forms/form-wrapper'
import { generateSexRadioItems, generateYesNoRadioItems } from '@/lib/utils'
import FormHeading from '../../../form-heading'
import FormInputWrapper from '../../field-wrappers/form-input-wrapper'
import FormRadioWrapper from '../../field-wrappers/form-radio-wrapper'

export default function Step1() {
  return (
    <FormWrapper>
      <FormHeading>
        Личные данные и документ, удостоверяющий личность
      </FormHeading>
      <FormFieldsWrapper>
        <FormInputWrapper name="surname" label="Фамилия" disabled />
        <FormInputWrapper name="name" label="Имя" disabled />
        <FormInputWrapper name="patronymic" label="Отчество" disabled />
        <FormInputWrapper
          name="formerSurname"
          label="Предыдущая фамилия, если менялась"
        />
        <FormInputWrapper name="birthDate" label="Дата рождения" disabled />

        <FormRadioWrapper
          name="sex"
          label="Пол"
          items={generateSexRadioItems()}
          disabled
        />

        <FormInputWrapper
          name="identityDocumentType"
          label="Тип документа, удостоверяющего личность"
          disabled
        />
        <FormInputWrapper
          name="identityDocumentNumber"
          label="Серия и номер документа"
          disabled
        />
        <FormInputWrapper
          name="identificationNumber"
          label="Идентификационный номер"
          disabled
        />
        <FormInputWrapper
          name="identityDocumentIssueDate"
          label="Дата выдачи"
          disabled
        />
        <FormInputWrapper
          name="identityDocumentValidThrough"
          label="Срок действия"
          disabled
        />
        <FormInputWrapper
          name="identityDocumentIssuingAuthority"
          label="Орган, выдавший документ"
          disabled
        />
      </FormFieldsWrapper>

      <FormRadioWrapper
        name="isResidentOfBelarus"
        label="Вы резидент Республики Беларусь?"
        items={generateYesNoRadioItems()}
        disabled
      />
      <FormRadioWrapper
        name="isTaxResidentOfUSA"
        label="Вы налоговый резидент США?"
        items={generateYesNoRadioItems()}
        disabled
      />
    </FormWrapper>
  )
}
