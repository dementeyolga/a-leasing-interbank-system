import { FormLabel } from '@/components/ui/form'
import { type IndividuaEntrepreneurFormSchema as FormSchema } from '@/lib/schemas'
import { generateYesNoRadioItems } from '@/lib/utils'
import { Fragment, useState } from 'react'
import { UseFormGetValues } from 'react-hook-form'
import FormFieldsWrapper from '../../form-fields-wrapper'
import FormHeading from '../../form-heading'
import FormWrapper from '../../form-wrapper'
import FormInputWrapper from '../field-wrappers/form-input-wrapper'
import FormRadioWrapper from '../field-wrappers/form-radio-wrapper'
import FormSelectWrapper from '../field-wrappers/form-select-wrapper'

interface Step3Props {
  currentSubStep: number
  getValues: UseFormGetValues<FormSchema>
}

export default function Step3({ currentSubStep, getValues }: Step3Props) {
  const [hasRecordedCriminalProsecutions, setHasRecordedCriminalProsecutions] =
    useState<string>(() => getValues('hasRecordedCriminalProsecutions') || '')
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
            <FormInputWrapper
              name="ieCoreActivity"
              label="Основной вид деятельности"
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
              values={['Альфа-Банк', 'МТБанк', 'Беларусбанк', 'Банк Дабрабыт']}
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
              extraOnChange={(value) =>
                setHasRecordedCriminalProsecutions(value)
              }
            />
            <>
              {hasRecordedCriminalProsecutions === 'да' && (
                <FormInputWrapper
                  name="hasRecordedCriminalProsecutionsReasons"
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
              extraOnChange={(value) =>
                setIsParticipateInBankruptEntities(value)
              }
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
      )}
    </Fragment>
  )
}
