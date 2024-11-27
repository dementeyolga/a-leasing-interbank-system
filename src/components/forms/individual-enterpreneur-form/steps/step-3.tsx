import { FormLabel } from '@/components/ui/form'
import { coreActivityTypes, servicingBanks } from '@/data/select-field-options'
import { type IndividuaEntrepreneurFormSchema as FormSchema } from '@/lib/schemas'
import { generateYesNoRadioItems } from '@/lib/utils'
import { Fragment } from 'react'
import { UseFormWatch } from 'react-hook-form'
import FormFieldsWrapper from '../../form-fields-wrapper'
import FormHeading from '../../form-heading'
import FormWrapper from '../../form-wrapper'
import FormInputWrapper from '../field-wrappers/form-input-wrapper'
import FormRadioWrapper from '../field-wrappers/form-radio-wrapper'
import FormSelectWrapper from '../field-wrappers/form-select-wrapper'
import FormTextareaWrapper from '../field-wrappers/form-textarea-wrapper'

interface Step3Props {
  currentSubStep: number
  watch: UseFormWatch<FormSchema>
}

export default function Step3({ currentSubStep, watch }: Step3Props) {
  const hasRecordedCriminalProsecutions = watch(
    'hasRecordedCriminalProsecutions',
  )
  const isParticipateInTrial = watch('isParticipateInTrial')
  const isFinancialSanctionsAppliedLastYear = watch(
    'isFinancialSanctionsAppliedLastYear',
  )
  const isParticipateInBankruptEntities = watch(
    'isParticipateInBankruptEntities',
  )

  return (
    <Fragment>
      {/* Substep 1 - Information about the activities */}
      {currentSubStep === 0 && (
        <FormWrapper>
          <FormHeading>Сведения о деятельности ИП</FormHeading>
          <FormFieldsWrapper>
            <FormInputWrapper
              name="payerAccountingNumber"
              label="УНП"
              disabled
            />
            <FormInputWrapper
              name="ieRegistrationNumber"
              label="Регистрационный номер"
              disabled
            />
            <FormInputWrapper
              name="ieRegistrationDate"
              label="Дата регистрации"
              disabled
            />
            <FormInputWrapper
              name="ieRegistrationAuthority"
              label="Наименование регистрирующего органа"
              disabled
            />
            <FormSelectWrapper
              name="ieCoreActivity"
              label="Основной вид деятельности"
              values={coreActivityTypes}
            />
            <FormInputWrapper name="ieCCEACode" label="Код ОКЭД" />
            <FormInputWrapper
              name="ieOtherActivity"
              label="Другие фактически осуществляемые виды деятельности"
            />
            <FormRadioWrapper
              name="isPublicOfficial"
              label="Являетесь ли публичным должностным лицом?"
              items={generateYesNoRadioItems()}
              tooltip="иностранные публичные должностные лица, должностные лица публичных международных организаций, лица, занимающие должности, включенные в определяемый Президентом РБ перечень государственных должностей Республики Беларусь, члены их семей и приближенные к ним лица"
            />
          </FormFieldsWrapper>
        </FormWrapper>
      )}

      {/* Substep 2 - Administrative and financial information */}
      {currentSubStep === 1 && (
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

            <FormRadioWrapper
              name="hasRecordedCriminalProsecutions"
              label="Наличие случаев привлечения к уголовной ответсвенности"
              items={generateYesNoRadioItems()}
            />
            <>
              {hasRecordedCriminalProsecutions === 'да' && (
                <FormTextareaWrapper
                  name="hasRecordedCriminalProsecutionsReasons"
                  label="Укажите причины"
                />
              )}
            </>

            <FormRadioWrapper
              name="isParticipateInTrial"
              label="Является ли ИП ответчиком, должником в хозяйственном, уголовном процессе, гражданском судопроизводстве либо лицом, в отношении которого ведется административный процесс?"
              items={generateYesNoRadioItems()}
            />
            <>
              {isParticipateInTrial === 'да' && (
                <FormTextareaWrapper
                  name="isParticipateInTrialReasons"
                  label="Укажите причины"
                />
              )}
            </>

            <FormRadioWrapper
              name="isFinancialSanctionsAppliedLastYear"
              label="Применялись ли к ИП экономические (финансовые) санкции в течение календарного года?"
              items={generateYesNoRadioItems()}
            />
            <>
              {isFinancialSanctionsAppliedLastYear === 'да' && (
                <FormTextareaWrapper
                  name="isFinancialSanctionsAppliedLastYearReasons"
                  label="Укажите причины"
                />
              )}
            </>

            <FormRadioWrapper
              name="isParticipateInBankruptEntities"
              label="Участие ИП в субъектах хозяйствования, находящихся в стадии ликвидации (банкротства)?"
              items={generateYesNoRadioItems()}
            />
            <>
              {isParticipateInBankruptEntities === 'да' && (
                <FormTextareaWrapper
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
      )}
    </Fragment>
  )
}
