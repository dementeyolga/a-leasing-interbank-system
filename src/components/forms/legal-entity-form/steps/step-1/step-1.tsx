import FormFieldsWrapper from '@/components/forms/form-fields-wrapper'
import FormWrapper from '@/components/forms/form-wrapper'
import { type LegalEntityFormSchema as FormSchema } from '@/lib/schemas'
import { generateYesNoRadioItems } from '@/lib/utils'
import { useState } from 'react'
import { UseFormGetValues } from 'react-hook-form'
import FormHeading from '../../../form-heading'
import FormInputWrapper from '../../field-wrappers/form-input-wrapper'
import FormRadioWrapper from '../../field-wrappers/form-radio-wrapper'

interface Step1Props {
  getValues: UseFormGetValues<FormSchema>
}

export default function Step1({ getValues }: Step1Props) {
  const [wasReorganized, setWasReorganized] = useState(
    () => getValues('wasReorganized') || '',
  )

  return (
    <FormWrapper>
      <FormHeading>Общие сведения о юридическом лице</FormHeading>
      <FormFieldsWrapper>
        <FormInputWrapper
          name="fullName"
          label="Полное наименование"
          disabled
        />
        <FormInputWrapper name="payerAccountingNumber" label="УНП" disabled />
        <FormInputWrapper
          name="registrationNumber"
          label="Регистрационный номер"
          disabled
        />
        <FormInputWrapper
          name="registrationDate"
          label="Дата регистрации"
          disabled
        />
        <FormInputWrapper
          name="registrationAuthority"
          label="Наименование регистрирующего органа"
          disabled
        />
        <FormInputWrapper
          name="coreActivity"
          label="Основной вид деятельности"
        />
        <FormInputWrapper name="CCEACode" label="Код ОКЭД" />
        <FormInputWrapper
          name="otherActivity"
          label="Другие фактически осуществляемые виды деятельности"
        />
        <FormInputWrapper
          name="dateOfActivityBeginning"
          label="Дата начала хозяйственной деятельности"
          tooltip="первое отображение денежных средств на счетах организации"
        />
        <FormInputWrapper
          name="licenceValidThrough"
          label="Срок действия лицензии"
          tooltip="в случае, если деятельность лицензируется"
        />

        <FormRadioWrapper
          name="wasReorganized"
          label="Былы ли реорганизация?"
          items={generateYesNoRadioItems()}
          extraOnChange={(value) => setWasReorganized(value)}
        />

        <>
          {wasReorganized === 'да' && (
            <>
              <FormInputWrapper
                name="reorganizationType"
                label="Выберите тип реорганизации"
              />
              <FormInputWrapper
                name="reorganizationDate"
                label="Дата реорганизации"
              />
              <FormInputWrapper
                name="oldFullNameAndLegalForm"
                label="Прежнее полное наименование и правовая форма"
              />
              <FormInputWrapper
                name="oldPayerAccountingNumber"
                label="Прежний УНП"
              />
            </>
          )}
        </>
      </FormFieldsWrapper>
    </FormWrapper>
  )
}
