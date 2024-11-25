import FormFieldsWrapper from '@/components/forms/form-fields-wrapper'
import FormWrapper from '@/components/forms/form-wrapper'
import { coreActivityTypes } from '@/data/select-field-options'
import { type LegalEntityFormSchema as FormSchema } from '@/lib/schemas'
import { generateYesNoRadioItems } from '@/lib/utils'
import { UseFormSetValue, UseFormWatch } from 'react-hook-form'
import FormHeading from '../../../form-heading'
import FormInputWrapper from '../../field-wrappers/form-input-wrapper'
import FormRadioWrapper from '../../field-wrappers/form-radio-wrapper'
import FormSelectWrapper from '../../field-wrappers/form-select-wrapper'

interface Step1Props {
  setValue: UseFormSetValue<FormSchema>
  watch: UseFormWatch<FormSchema>
}

export default function Step1({ watch }: Step1Props) {
  const wasReorganized = watch('wasReorganized')

  // const handleWasReorganizedChange = (value: string) => {
  //   // if (value === 'нет') {
  //   //   setValue('reorganizationType', undefined)
  //   //   setValue('reorganizationDate', undefined)
  //   //   setValue('oldFullNameAndLegalForm', undefined)
  //   //   setValue('oldPayerAccountingNumber', undefined)
  //   // } else if (value === 'да') {
  //   //   setValue('reorganizationType', '')
  //   //   setValue('reorganizationDate', '')
  //   //   setValue('oldFullNameAndLegalForm', '')
  //   //   setValue('oldPayerAccountingNumber', '')
  //   // }
  // }

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
        <FormSelectWrapper
          name="coreActivity"
          label="Основной вид деятельности"
          placeholder="Выберите вид деятельности"
          values={coreActivityTypes}
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
          label="Была ли реорганизация?"
          items={generateYesNoRadioItems()}
          // extraOnChange={(value) => handleWasReorganizedChange(value)}
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
