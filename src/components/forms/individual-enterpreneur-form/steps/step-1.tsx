import { generateYesNoRadioItems } from '@/lib/utils'
import FormFieldsWrapper from '../../form-fields-wrapper'
import FormHeading from '../../form-heading'
import FormWrapper from '../../form-wrapper'
import FormInputWrapper from '../field-wrappers/form-input-wrapper'
import FormRadioWrapper from '../field-wrappers/form-radio-wrapper'

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
        <FormInputWrapper name="phone" label="Мобильный телефон" disabled />
        <FormInputWrapper type="email" name="email" label="Email" />

        <FormRadioWrapper
          name="sex"
          label="Пол"
          items={[
            {
              id: crypto.randomUUID(),
              value: 'мужской',
              text: 'мужской',
            },
            {
              id: crypto.randomUUID(),
              value: 'женский',
              text: 'женский',
            },
          ]}
          disabled
        />

        <FormInputWrapper
          name="identityDocumentType"
          label="Тип документа"
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
        />
        <FormInputWrapper
          name="identityDocumentIssuingAuthority"
          label="Орган, выдавший документ"
          disabled
        />

        <FormRadioWrapper
          name="isResidentOfBelarus"
          label="Вы резидент Республики Беларусь?"
          disabled
          items={generateYesNoRadioItems()}
        />
        <FormRadioWrapper
          name="isTaxResidentOfUSA"
          label="Вы налоговый резидент США?"
          disabled
          items={generateYesNoRadioItems()}
        />
      </FormFieldsWrapper>
    </FormWrapper>
  )
}
