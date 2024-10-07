import { FormLabel } from '@/components/ui/form'
import { generateYesNoRadioItems } from '@/lib/utils'
import { Fragment } from 'react'
import FormFieldsWrapper from '../../form-fields-wrapper'
import FormHeading from '../../form-heading'
import FormWrapper from '../../form-wrapper'
import FormInputWrapper from '../field-wrappers/form-input-wrapper'
import FormRadioWrapper from '../field-wrappers/form-radio-wrapper'
import FormSelectWrapper from '../field-wrappers/form-select-wrapper'

interface Step3Props {
  currentSubStep: number
}

export default function Step3({ currentSubStep }: Step3Props) {
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
            />
            <FormRadioWrapper
              name="isParticipateInTrial"
              label="Является ли ИП ответчиком, должником в хозяйственном, уголовном процессе, гражданском судопроизводстве либо лицом, в отношении которого ведется административный процесс?"
              items={generateYesNoRadioItems()}
            />
            <FormRadioWrapper
              name="isFinancialSanctionsAppliedLastYear"
              label="Применялись ли к ИП экономические (финансовые) санкции в течение календарного года?"
              items={generateYesNoRadioItems()}
            />
            <FormRadioWrapper
              name="isParticipateInBankruptEntities"
              label="Участие ИП в субъектах хозяйствования, находящихся в стадии ликвидации (банкротства)?"
              items={generateYesNoRadioItems()}
            />

            <div>
              <FormLabel>Сведения о выручке за последние 12 месяцев:</FormLabel>
              <div className="gap-x grid grid-cols-2 gap-x-1 gap-y-1.5">
                <FormInputWrapper
                  name="revenueLast12Month1"
                  label="Октябрь 2023"
                />
                <FormInputWrapper
                  name="revenueLast12Month2"
                  label="Ноябрь 2023"
                />
                <FormInputWrapper
                  name="revenueLast12Month3"
                  label="Декабрь 2023"
                />
                <FormInputWrapper
                  name="revenueLast12Month4"
                  label="Январь 2024"
                />
                <FormInputWrapper
                  name="revenueLast12Month5"
                  label="Февраль 2024"
                />
                <FormInputWrapper
                  name="revenueLast12Month6"
                  label="Март 2024"
                />
                <FormInputWrapper
                  name="revenueLast12Month7"
                  label="Апрель 2024"
                />
                <FormInputWrapper name="revenueLast12Month8" label="Май 2024" />
                <FormInputWrapper
                  name="revenueLast12Month9"
                  label="Июнь 2024"
                />
                <FormInputWrapper
                  name="revenueLast12Month10"
                  label="Июль 2024"
                />
                <FormInputWrapper
                  name="revenueLast12Month11"
                  label="Август 2024"
                />
                <FormInputWrapper
                  name="revenueLast12Month12"
                  label="Сентябрь 2024"
                />
              </div>
            </div>
          </FormFieldsWrapper>
        </FormWrapper>
      )}
    </Fragment>
  )
}
