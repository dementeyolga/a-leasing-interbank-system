import FormFieldsWrapper from '@/components/forms/form-fields-wrapper'
import FormHeading from '@/components/forms/form-heading'
import FormWrapper from '@/components/forms/form-wrapper'
import { type NaturalPersonFormSchema as FormSchema } from '@/lib/schemas'
import { generateYesNoRadioItems } from '@/lib/utils'
import { useState } from 'react'
import { UseFormGetValues } from 'react-hook-form'
import FormInputWrapper from '../../../field-wrappers/form-input-wrapper'
import FormRadioWrapper from '../../../field-wrappers/form-radio-wrapper'
import FormSelectWrapper from '../../../field-wrappers/form-select-wrapper'

interface Substep2Props {
  getValues: UseFormGetValues<FormSchema>
}

export default function Substep2({ getValues }: Substep2Props) {
  const [isWorksUnderContract, setIsWorksUnderContract] = useState(
    () => getValues('isWorksUnderContract') || '',
  )
  const [hasAdditionalUnconfirmedIncome, setHasAdditionalUnconfirmedIncome] =
    useState(() => getValues('hasAdditionalUnconfirmedIncome') || '')

  return (
    <FormWrapper>
      <FormHeading>Место работы и доход</FormHeading>

      <FormFieldsWrapper>
        <FormSelectWrapper
          name="jobType"
          label="Тип должности"
          values={['иное', 'рабочий', 'специалист', 'руководитель']}
        />

        <FormInputWrapper
          name="jobOrganization"
          label="Место работы (наименование организации)"
        />
        <FormInputWrapper
          name="jobOrganizationAddress"
          label="Адрес организации"
        />
        <FormInputWrapper
          name="jobAccountingOrHRDeptPhone"
          label="Рабочий номер телефона (отдел кадров или бухгалтерия)"
        />
        <FormInputWrapper name="jobPosition" label="Должность" />
        <FormInputWrapper name="jobStartDate" label="Дата начала работы" />

        <FormRadioWrapper
          name="isWorksUnderContract"
          label="Работаете по контракту (трудовому договору)?"
          items={generateYesNoRadioItems()}
          extraOnChange={(value) => setIsWorksUnderContract(value)}
        />
        <>
          {isWorksUnderContract === 'да' && (
            <FormInputWrapper
              name="contractEndDate"
              label="Дата окончания контракта (трудового договора)"
            />
          )}
        </>

        <FormInputWrapper
          name="mainIncomeSum"
          label="Сумма основного дохода, бел. руб."
        />
        <FormInputWrapper
          name="spouseMainIncome"
          label="Доход супруга по месту основной работы, бел. руб."
        />
        <FormInputWrapper
          name="partTimeWorkIncome"
          label="Доход по месту работы по совместительству, бел. руб."
        />
        <FormInputWrapper
          name="contractArgeementIncome"
          label="Доход по договорам подряда, бел. руб."
        />
        <FormInputWrapper name="otherIncome" label="Пенсия/иное, бел. руб." />

        <FormRadioWrapper
          name="hasAdditionalUnconfirmedIncome"
          label="Наличие дополнительного неподтвержденного дохода"
          items={generateYesNoRadioItems()}
          extraOnChange={(value) => setHasAdditionalUnconfirmedIncome(value)}
        />
        <>
          {hasAdditionalUnconfirmedIncome === 'да' && (
            <>
              <FormInputWrapper
                name="additionalIncomeSource"
                label="Источник дополнительного дохода"
              />
              <FormInputWrapper
                name="additionalIncomeSum"
                label="Сумма дополнительного дохода, бел. руб."
              />
            </>
          )}
        </>

        <FormInputWrapper
          name="totalWorkExperience"
          label="Общий стаж работы, лет"
        />

        <FormSelectWrapper
          name="educationType"
          label="Ваше образование"
          values={[
            'общее среднее образование',
            'профессионально-техническое образование',
            'среднее специальное образование',
            'высшее образование',
          ]}
        />

        <FormInputWrapper
          name="numberOfDependents"
          label="Количество иждивенцев"
        />
        <FormInputWrapper
          name="loansPaymentAmount"
          label="Сумма платежей по кредитам, бел. руб."
        />
        <FormInputWrapper
          name="installmentsPaymentAmount"
          label="Сумма платежей по рассрочкам, бел. руб."
        />
        <FormInputWrapper
          name="writOfExecutionPaymentAmount"
          label="Сумма платежей по исполнительным листам, бел. руб."
        />
        <FormInputWrapper
          name="alimonyPaymentAmount"
          label="Сумма платежей по алиментам, бел. руб."
        />
      </FormFieldsWrapper>
    </FormWrapper>
  )
}