'use client'

import { Form } from '@/components/ui/form'
import { initialDataIndividualEntrepreneur } from '@/data/initial-client-data'
import {
  type IndividuaEntrepreneurFormSchema as FormSchema,
  individualEntrepreneurFormSchema,
} from '@/lib/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { MoveLeft } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '../../ui/button'
import FormHeading from '../form-heading'
import FormSteps from '../form-steps'
import FormInputWrapper from './form-input-wrapper'
import FormRadioWrapper from './form-radio-wrapper'

export default function FourStepForm() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(individualEntrepreneurFormSchema),
    // TODO: Can fetch async default data:  defaultValues: async () => fetch('/api-endpoint');
    defaultValues: {
      ...initialDataIndividualEntrepreneur,
    },
  })

  function onSubmit(values: FormSchema) {
    console.log('Submitted values:', JSON.stringify(values, null, 2))
  }

  function onError() {
    console.log('Form has errors')
  }

  const [currentStep, setCurrentStep] = useState(0)

  const handleNextStep = () => {
    if (currentStep >= 3) return
    setCurrentStep((step) => step + 1)
  }
  const handlePrevStep = () => {
    if (currentStep <= 0) return
    setCurrentStep((step) => step - 1)
  }

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <section className="flex flex-col items-center gap-4">
          {/* Steps */}
          <FormSteps
            steps={['Личные данные', 'Адрес', 'Сведения об ИП', 'Документы']}
            currentStep={currentStep}
          />

          {/* Form */}
          <form
            onSubmit={form.handleSubmit(onSubmit, onError)}
            className="space-y-8"
          >
            {/* Step 1 */}
            {currentStep === 0 && (
              <div className="flex flex-col gap-y-[22px]">
                <FormHeading>
                  Личные данные и документ удостоверяющий личность
                </FormHeading>
                <fieldset className="flex flex-col gap-y-3">
                  <FormInputWrapper name="surname" label="Фамилия" />
                  <FormInputWrapper name="name" label="Имя" />
                  <FormInputWrapper name="patronymic" label="Отчество" />
                  <FormInputWrapper
                    name="formerSurname"
                    label="Предыдущая фамилия, если менялась"
                  />
                  <FormInputWrapper name="birthDate" label="Дата рождения" />
                  <FormInputWrapper name="phone" label="Мобильный телефон" />
                  <FormInputWrapper type="email" name="email" label="Email" />

                  <FormRadioWrapper
                    name="sex"
                    label="Пол"
                    items={[
                      {
                        id: 'sex-male',
                        value: 'мужской пол',
                        text: 'мужской',
                      },
                      {
                        id: 'sex-female',
                        value: 'женский пол',
                        text: 'женский',
                      },
                    ]}
                  />

                  <FormInputWrapper
                    name="identityDocumentType"
                    label="Тип документа"
                  />
                  <FormInputWrapper
                    name="identityDocumentNumber"
                    label="Серия и номер документа"
                  />
                  <FormInputWrapper
                    name="identificationNumber"
                    label="Идентификационный номер"
                  />
                  <FormInputWrapper
                    name="identityDocumentIssueDate"
                    label="Дата выдачи"
                  />
                  <FormInputWrapper
                    name="identityDocumentValidThrough"
                    label="Срок действия"
                  />
                  <FormInputWrapper
                    name="identityDocumentIssuingAuthority"
                    label="Орган, выдавший документ"
                  />

                  <FormRadioWrapper
                    name="isResidentOfBelarus"
                    label="Вы резидент Республики Беларусь?"
                    items={[
                      {
                        id: 'resident-belarus',
                        value: 'является резидентом РБ',
                        text: 'Да',
                      },
                      {
                        id: 'not-resident-belarus',
                        value: 'является резидентом РБ',
                        text: 'Нет',
                      },
                    ]}
                  />
                  <FormRadioWrapper
                    name="isTaxResidentOfUSA"
                    label="Вы налоговый резидент США?"
                    items={[
                      {
                        id: 'resident-usa',
                        value: 'является налоговым резидентом США',
                        text: 'Да',
                      },
                      {
                        id: 'not-resident-usa',
                        value: 'не является налоговым резидентом США',
                        text: 'Нет',
                      },
                    ]}
                  />
                </fieldset>
              </div>
            )}

            {/* Step 2 */}
            {currentStep === 1 && <fieldset>Step 2</fieldset>}

            {/* Step 3 */}
            {currentStep === 2 && <fieldset>Step 3</fieldset>}

            {/* Step 4 */}
            {currentStep === 3 && (
              <fieldset>
                <p>Step 4</p>
                <Button type="submit">Отправить форму</Button>
              </fieldset>
            )}
          </form>

          {/* Navigation buttons */}
          <div className="flex flex-col items-center">
            {currentStep < 2 && (
              <Button variant={'secondary'} asChild>
                <Link href={'/wrong-data'}>Данные неверны</Link>
              </Button>
            )}
            <Button onClick={handleNextStep}>Подтердить данные</Button>
            {currentStep > 0 && (
              <Button
                className="flex gap-1"
                variant={'secondary'}
                onClick={handlePrevStep}
              >
                <MoveLeft strokeWidth={1} />
                Вернуться назад
              </Button>
            )}
          </div>
        </section>
      </Form>
    </FormProvider>
  )
}
