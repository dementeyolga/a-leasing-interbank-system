import { CheckboxInput } from '@/components/checkbox/checkbox'
import TimerWithLink from '@/components/countdown-timer/timer-with-link'
import { type NaturalPersonFormSchema as FormSchema } from '@/lib/schemas'
import { cn } from '@/lib/utils'
import { Fragment, useState } from 'react'
import { UseFormGetValues, UseFormSetValue } from 'react-hook-form'
import FormFieldsWrapper from '../../../form-fields-wrapper'
import FormHeading from '../../../form-heading'
import FormWrapper from '../../../form-wrapper'
import FormCheckboxWrapper from '../../field-wrappers/form-checkbox-wrapper'
import FormOTPInputWrapper from '../../field-wrappers/form-otp-input-wrapper'

interface Step4Props {
  currentSubStep: number
  getValues: UseFormGetValues<FormSchema>
  setValue: UseFormSetValue<FormSchema>
}

export default function Step4({
  currentSubStep,
  getValues,
  setValue,
}: Step4Props) {
  const [consentCreditReport, setConsentCreditReport] = useState(() =>
    getValues('consentCreditReport'),
  )

  const setAllChecked = () => {
    setValue('consentCreditReport', true, {
      // shouldValidate: true,
    })
    setConsentCreditReport(true)
    setValue('consentAdvertisingAndNewsletter', true, { shouldValidate: true })
  }

  const setAllUnchecked = () => {
    setValue('consentCreditReport', false, { shouldValidate: true })
    setConsentCreditReport(false)
    setValue('consentAdvertisingAndNewsletter', false, { shouldValidate: true })
  }

  return (
    <Fragment>
      {/* Substep 1 - Signing documents */}
      {currentSubStep === 0 && (
        <FormWrapper>
          <FormHeading>Подписание документов</FormHeading>
          <FormFieldsWrapper>
            <div
              className={cn(
                'flex flex-col gap-y-2 rounded-sm px-4 py-3 text-xs',
                consentCreditReport
                  ? 'bg-success text-success-foreground'
                  : 'bg-warning text-warning-foreground',
              )}
            >
              <p> Уважаемый клиент!</p>

              {consentCreditReport ? (
                <p>
                  Вы собираетесь подписать все необходимые для оформления
                  онлайн-заявки документы.
                </p>
              ) : (
                <>
                  <p>
                    Для оформления онлайн-заявки необходимо подписать согласия:{' '}
                  </p>
                  <p className="flex items-center gap-1">
                    <span className="text-lg text-primary">✖</span> Согласие на
                    подписание кредитного отчета
                  </p>

                  <p>
                    Если Вы продолжите без предоставления всех обязательных
                    согласий, Вы сможете подписать их в офисе компании.
                  </p>
                </>
              )}
            </div>

            <div className="flex flex-col gap-y-3">
              <FormCheckboxWrapper
                name="consentApplicationFormForLeasing"
                label="Заявление-анкета на лизинг"
                icon={<img src="/watch-icon.svg" />}
                disabled={true}
              />

              <FormCheckboxWrapper
                name="consentCreditReport"
                label="Согласие на предоставление кредитного отчета"
                icon={<img src="/watch-icon.svg" />}
                extraOnChange={(checked) => setConsentCreditReport(checked)}
              />

              <FormCheckboxWrapper
                name="consentAdvertisingAndNewsletter"
                label="Согласие на рекламно-информационную рассылку об услугах А-Лизинг"
                icon={<img src="/watch-icon.svg" />}
              />

              <div className="px-6">
                <CheckboxInput
                  id={crypto.randomUUID()}
                  label="Выбрать все документы"
                  onCheckedChange={(checked) =>
                    checked ? setAllChecked() : setAllUnchecked()
                  }
                />
              </div>
            </div>
          </FormFieldsWrapper>
        </FormWrapper>
      )}

      {/* Substep 2 - Getting code */}
      {currentSubStep === 1 && (
        <div className="flex flex-col gap-y-[22px]">
          <FormWrapper>
            <FormHeading>Подписание документов</FormHeading>
            <FormFieldsWrapper>
              <p className="text-center text-sm">
                На ваш номер телефона <br />
                +375 (44) 123-45-67
                <br />
                выслан смс-код подтверждения.
                <br />
                Введите код
              </p>

              <FormOTPInputWrapper name="signDocsOTP" />

              <TimerWithLink />
            </FormFieldsWrapper>
          </FormWrapper>
        </div>
      )}
    </Fragment>
  )
}
