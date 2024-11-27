import FormFieldsWrapper from '@/components/forms/form-fields-wrapper'
import FormHeading from '@/components/forms/form-heading'
import FormWrapper from '@/components/forms/form-wrapper'
import { FormLabel } from '@/components/ui/form'
import { servicingBanks } from '@/data/select-field-options'
import { type LegalEntityFormSchema as FormSchema } from '@/lib/schemas'
import { generateYesNoRadioItems } from '@/lib/utils'
import { UseFormWatch } from 'react-hook-form'
import FormInputWrapper from '../../../field-wrappers/form-input-wrapper'
import FormRadioWrapper from '../../../field-wrappers/form-radio-wrapper'
import FormSelectWrapper from '../../../field-wrappers/form-select-wrapper'

interface Substep4Props {
  watch: UseFormWatch<FormSchema>
}

export default function Substep4({ watch }: Substep4Props) {
  const hasNetLossLast3Month = watch('hasNetLossLast3Month')
  const hasNetLossLastQuarterlyDate = watch('hasNetLossLastQuarterlyDate')
  const hasCasesManagersCriminalResponsibility = watch(
    'hasCasesManagersCriminalResponsibility',
  )
  const isParticipateInTrial = watch('isParticipateInTrial')
  const isFinancialSanctionsAppliedLastYear = watch(
    'isFinancialSanctionsAppliedLastYear',
  )
  const isParticipateInBankruptEntities = watch(
    'isParticipateInBankruptEntities',
  )

  return (
    <FormWrapper>
      <FormHeading>Административно-финансовая информация</FormHeading>
      <FormFieldsWrapper>
        <FormSelectWrapper
          name="servicingBank"
          label="Обслуживающий банк"
          placeholder="Выберите банк"
          values={servicingBanks}
        />

        <FormRadioWrapper
          name="hasNetLossLast3Month"
          label="Наличие чистого убытка за 3 последних месяца"
          items={generateYesNoRadioItems()}
          tooltip="Для ИП, которые ведут бухгалтерский учет и используют упрощенную систему налогообложения"
        />
        <>
          {hasNetLossLast3Month === 'да' && (
            <FormInputWrapper
              name="netLossLast3MonthSum"
              label="Сумма убытка, BYN"
            />
          )}
        </>

        <FormRadioWrapper
          name="hasNetLossLastQuarterlyDate"
          label="Наличие чистого убытка на последнюю квартальную дату"
          items={generateYesNoRadioItems()}
        />
        <>
          {hasNetLossLastQuarterlyDate === 'да' && (
            <FormInputWrapper
              name="netLossLastQuarterlyDateSum"
              label="Сумма убытка, BYN"
            />
          )}
        </>

        <FormRadioWrapper
          name="hasCasesManagersCriminalResponsibility"
          label="Наличие случаев привлечения руководителей к уголовной ответсвенности"
          items={generateYesNoRadioItems()}
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
          label="Является ли организация ответчиком, должником в хозяйственном, уголовном процессе, гражданском судопроизводстве либо лицом, в отношении которого ведется административный процесс?"
          items={generateYesNoRadioItems()}
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
          label="Применялись ли к организации экономические (финансовые) санкции в течение календарного года? "
          items={generateYesNoRadioItems()}
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
          label="Участие организации, ее учредителей и руководителей в субъектах хозяйствования, находящихся в стадии ликвидации (банкротства)?"
          items={generateYesNoRadioItems()}
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
          <FormLabel>
            Сведения о выручке за последние 12 месяцев, BYN:
          </FormLabel>
          <div className="gap-x grid grid-cols-2 gap-x-1 gap-y-1.5">
            <FormInputWrapper
              name="revenueLast12Month1"
              label="Октябрь 2023, BYN"
            />
            <FormInputWrapper
              name="revenueLast12Month2"
              label="Ноябрь 2023, BYN"
            />
            <FormInputWrapper
              name="revenueLast12Month3"
              label="Декабрь 2023, BYN"
            />
            <FormInputWrapper
              name="revenueLast12Month4"
              label="Январь 2024, BYN"
            />
            <FormInputWrapper
              name="revenueLast12Month5"
              label="Февраль 2024, BYN"
            />
            <FormInputWrapper
              name="revenueLast12Month6"
              label="Март 2024, BYN"
            />
            <FormInputWrapper
              name="revenueLast12Month7"
              label="Апрель 2024, BYN"
            />
            <FormInputWrapper
              name="revenueLast12Month8"
              label="Май 2024, BYN"
            />
            <FormInputWrapper
              name="revenueLast12Month9"
              label="Июнь 2024, BYN"
            />
            <FormInputWrapper
              name="revenueLast12Month10"
              label="Июль 2024, BYN"
            />
            <FormInputWrapper
              name="revenueLast12Month11"
              label="Август 2024, BYN"
            />
            <FormInputWrapper
              name="revenueLast12Month12"
              label="Сентябрь 2024, BYN"
            />
          </div>
        </div>
      </FormFieldsWrapper>
    </FormWrapper>
  )
}
