import FormFieldsWrapper from '@/components/forms/form-fields-wrapper'
import FormWrapper from '@/components/forms/form-wrapper'

import FormHeading from '@/components/forms/form-heading'
import FormInputWrapper from '../../../field-wrappers/form-input-wrapper'

export default function Substep3() {
  return (
    <FormWrapper>
      <FormHeading>Контакты для связи</FormHeading>

      <FormFieldsWrapper>
        <FormInputWrapper name="phone" label="Мобильный телефон" />
        <FormInputWrapper
          name="trustedPersonPhone"
          label="Телефон для экстренной связи (доверенное лицо)"
        />
        <FormInputWrapper
          name="additionalPhone"
          label="Дополнительный номер телефона"
        />
        <FormInputWrapper name="email" label="Email" />
      </FormFieldsWrapper>
    </FormWrapper>
  )
}
