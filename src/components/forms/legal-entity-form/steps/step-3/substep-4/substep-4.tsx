import FormFieldsWrapper from '@/components/forms/form-fields-wrapper'
import FormHeading from '@/components/forms/form-heading'
import FormWrapper from '@/components/forms/form-wrapper'
import { FormLabel } from '@/components/ui/form'
import { type LegalEntityFormSchema as FormSchema } from '@/lib/schemas'
import { generateYesNoRadioItems } from '@/lib/utils'
import { useState } from 'react'
import { UseFormGetValues } from 'react-hook-form'
import FormInputWrapper from '../../../field-wrappers/form-input-wrapper'
import FormRadioWrapper from '../../../field-wrappers/form-radio-wrapper'
import FormSelectWrapper from '../../../field-wrappers/form-select-wrapper'

interface Substep4Props {
  getValues: UseFormGetValues<FormSchema>
}

export default function Substep4({ getValues }: Substep4Props) {
  const [hasNetLossLast3Month, setHasNetLossLast3Month] = useState<string>(
    () => getValues('hasNetLossLast3Month') || '',
  )
  const [hasNetLossLastQuarterlyDate, setHasNetLossLastQuarterlyDate] =
    useState<string>(() => getValues('hasNetLossLastQuarterlyDate') || '')
  const [
    hasCasesManagersCriminalResponsibility,
    setHasCasesManagersCriminalResponsibility,
  ] = useState<string>(
    () => getValues('hasCasesManagersCriminalResponsibility') || '',
  )
  const [isParticipateInTrial, setIsParticipateInTrial] = useState<string>(
    () => getValues('isParticipateInTrial') || '',
  )
  const [
    isFinancialSanctionsAppliedLastYear,
    setIsFinancialSanctionsAppliedLastYear,
  ] = useState<string>(
    () => getValues('isFinancialSanctionsAppliedLastYear') || '',
  )
  const [isParticipateInBankruptEntities, setIsParticipateInBankruptEntities] =
    useState<string>(() => getValues('isParticipateInBankruptEntities') || '')

  return (
    <FormWrapper>
      <FormHeading>Административно-финансовая информация</FormHeading>
      <FormFieldsWrapper>
        <FormSelectWrapper
          name="servicingBank"
          label="Обслуживающий банк"
          placeholder="Выберите банк"
          values={['Альфа-Банк', 'МТБанк', 'Беларусбанк', 'Банк Дабрабыт']}
        />

        <FormRadioWrapper
          name="hasNetLossLast3Month"
          label="Наличие чистого убытка за 3 последних месяца"
          items={generateYesNoRadioItems()}
          tooltip="Для ИП, которые ведут бухгалтерский учет и используют упрощенную систему налогообложения"
          extraOnChange={(value) => setHasNetLossLast3Month(value)}
        />
        <>
          {hasNetLossLast3Month === 'да' && (
            <FormInputWrapper
              name="netLossLast3MonthSum"
              label="Сумма убытка"
            />
          )}
        </>

        <FormRadioWrapper
          name="hasNetLossLastQuarterlyDate"
          label="Наличие чистого убытка на последнюю квартальную дату"
          items={generateYesNoRadioItems()}
          extraOnChange={(value) => setHasNetLossLastQuarterlyDate(value)}
        />
        <>
          {hasNetLossLastQuarterlyDate === 'да' && (
            <FormInputWrapper
              name="netLossLastQuarterlyDateSum"
              label="Сумма убытка"
            />
          )}
        </>

        <FormRadioWrapper
          name="hasCasesManagersCriminalResponsibility"
          label="Наличие случаев привлечения к уголовной ответсвенности"
          items={generateYesNoRadioItems()}
          extraOnChange={(value) =>
            setHasCasesManagersCriminalResponsibility(value)
          }
        />
        <>
          {hasCasesManagersCriminalResponsibility === 'да' && (
            <FormInputWrapper
              name="hasCasesManagersCriminalResponsibilityReasons"
              label="Укажите причины"
            />
          )}
        </>

        <FormRadioWrapper
          name="isParticipateInTrial"
          label="Является ли ИП ответчиком, должником в хозяйственном, уголовном процессе, гражданском судопроизводстве либо лицом, в отношении которого ведется административный процесс?"
          items={generateYesNoRadioItems()}
          extraOnChange={(value) => setIsParticipateInTrial(value)}
        />

        <>
          {isParticipateInTrial === 'да' && (
            <FormInputWrapper
              name="isParticipateInTrialReasons"
              label="Укажите причины"
            />
          )}
        </>

        <FormRadioWrapper
          name="isFinancialSanctionsAppliedLastYear"
          label="Применялись ли к ИП экономические (финансовые) санкции в течение календарного года?"
          items={generateYesNoRadioItems()}
          extraOnChange={(value) =>
            setIsFinancialSanctionsAppliedLastYear(value)
          }
        />

        <>
          {isFinancialSanctionsAppliedLastYear === 'да' && (
            <FormInputWrapper
              name="isFinancialSanctionsAppliedLastYearReasons"
              label="Укажите причины"
            />
          )}
        </>

        <FormRadioWrapper
          name="isParticipateInBankruptEntities"
          label="Участие ИП в субъектах хозяйствования, находящихся в стадии ликвидации (банкротства)?"
          items={generateYesNoRadioItems()}
          extraOnChange={(value) => setIsParticipateInBankruptEntities(value)}
        />

        <>
          {isParticipateInBankruptEntities === 'да' && (
            <FormInputWrapper
              name="isParticipateInBankruptEntitiesReasons"
              label="Укажите причины"
            />
          )}
        </>

        <div>
          <FormLabel>Сведения о выручке за последние 12 месяцев:</FormLabel>
          <div className="gap-x grid grid-cols-2 gap-x-1 gap-y-1.5">
            <FormInputWrapper name="revenueLast12Month1" label="Октябрь 2023" />
            <FormInputWrapper name="revenueLast12Month2" label="Ноябрь 2023" />
            <FormInputWrapper name="revenueLast12Month3" label="Декабрь 2023" />
            <FormInputWrapper name="revenueLast12Month4" label="Январь 2024" />
            <FormInputWrapper name="revenueLast12Month5" label="Февраль 2024" />
            <FormInputWrapper name="revenueLast12Month6" label="Март 2024" />
            <FormInputWrapper name="revenueLast12Month7" label="Апрель 2024" />
            <FormInputWrapper name="revenueLast12Month8" label="Май 2024" />
            <FormInputWrapper name="revenueLast12Month9" label="Июнь 2024" />
            <FormInputWrapper name="revenueLast12Month10" label="Июль 2024" />
            <FormInputWrapper name="revenueLast12Month11" label="Август 2024" />
            <FormInputWrapper
              name="revenueLast12Month12"
              label="Сентябрь 2024"
            />
          </div>
        </div>
      </FormFieldsWrapper>
    </FormWrapper>
  )
}
