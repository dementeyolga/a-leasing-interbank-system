'use client'

import { Form } from '@/components/ui/form'
import { initialDataNaturalPerson } from '@/data/initial-client-data'
import { MAIN_WEBSITE_LINK } from '@/data/links'
import {
  type NaturalPersonFormSchema as FormSchema,
  naturalPersonFormSchema,
} from '@/lib/schemas'
import { KeysOfUnion } from '@/lib/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { MoveLeft } from 'lucide-react'
import Link from 'next/link'
import { useCallback, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '../../ui/button'
import FormFieldsWrapper from '../form-fields-wrapper'
import FormHeading from '../form-heading'
import FormSteps from '../form-steps'
import FormWrapper from '../form-wrapper'
import FormCheckboxWrapper from './field-wrappers/form-checkbox-wrapper'
import Step1 from './steps/step-1/step-1'
import Step2 from './steps/step-2/step-2'
import Step3 from './steps/step-3/step-3'
import Step4 from './steps/step-4/step-4'

export type AllNaturalPersonFormKeys = KeysOfUnion<FormSchema>

const steps: {
  name: string
  fields: AllNaturalPersonFormKeys[][]
  subsStepsWithWrongDataButton: number[]
  getSubstepsQuantity(): number
}[] = [
  {
    name: 'Личные данные',
    fields: [
      [
        'surname',
        'name',
        'patronymic',
        'formerSurname',
        'birthDate',
        'sex',
        'identityDocumentType',
        'identityDocumentNumber',
        'identificationNumber',
        'identityDocumentIssueDate',
        'identityDocumentValidThrough',
        'identityDocumentIssuingAuthority',
        'isResidentOfBelarus',
        'isTaxResidentOfUSA',
      ],
    ],
    subsStepsWithWrongDataButton: [0],
    getSubstepsQuantity() {
      return this.fields.length
    },
  },
  {
    name: 'Адрес',
    fields: [
      [
        'registrationCountry',
        'registrationSettlement',
        'registrationStreetType',
        'registrationStreetName',
        'registrationHouseNumber',
        'registrationBuildingNumber',
        'registrationApartmentNumber',
        'registrationPostalCode',
      ],
      [
        'isResidenceAddressMatchRegistration',
        'residenceCountry',
        'residenceSettlement',
        'residenceStreetType',
        'residenceStreetName',
        'residenceHouseNumber',
        'residenceBuildingNumber',
        'residenceApartmentNumber',
        'residencePostalCode',
      ],
    ],
    subsStepsWithWrongDataButton: [0],
    getSubstepsQuantity() {
      return this.fields.length
    },
  },
  {
    name: 'Доход',
    fields: [
      [
        'maritalStatus',
        'drivingExperience',
        'ownsProperty',
        'typesOfProperty',
        'ownsCar',
        'carBrand',
        'carManufactureYear',
      ],
      [
        'jobType',
        'jobOrganization',
        'jobOrganizationAddress',
        'jobAccountingOrHRDeptPhone',
        'jobPosition',
        'jobStartDate',
        'worksUnderContract',
        'contractEndDate',
        'mainIncomeSum',
        'spouseMainIncome',
        'partTimeWorkIncome',
        'contractArgeementIncome',
        'otherIncome',
        'hasAdditionalUnconfirmedIncome',
        'additionalIncomeSource',
        'additionalIncomeSum',
        'totalWorkExperience',
        'educationType',
        'numberOfDependents',
        'loansPaymentAmount',
        'installmentsPaymentAmount',
        'writOfExecutionPaymentAmount',
        'alimonyPaymentAmount',
      ],
      ['phone', 'trustedPersonPhone', 'additionalPhone', 'email'],
    ],
    subsStepsWithWrongDataButton: [],
    getSubstepsQuantity() {
      return this.fields.length
    },
  },
  {
    name: 'Документы',
    fields: [
      [
        'consentApplicationFormForLeasing',
        'consentCreditReport',
        'consentAdvertisingAndNewsletter',
      ],
      ['signDocsOTP'],
    ],
    subsStepsWithWrongDataButton: [],
    getSubstepsQuantity() {
      return this.fields.length
    },
  },
]

const stepNames = steps.map((step) => step.name)

export default function FourStepForm() {
  // Init react-hook-forms helpers
  const form = useForm<FormSchema>({
    resolver: zodResolver(naturalPersonFormSchema),
    mode: 'onChange',
    // TODO: Can fetch async default data:  defaultValues: async () => fetch('/api-endpoint');
    defaultValues: {
      ...initialDataNaturalPerson,
    },
  })

  const { trigger, watch, setValue, getValues, handleSubmit } = form

  function onSubmit(values: FormSchema) {
    console.log('Submitted values:', JSON.stringify(values, null, 2))
    setFormSuccess(true)
  }

  function onError() {
    console.log('Form has errors')
  }

  // Handle form steps change
  const [currentStep, setCurrentStep] = useState(0)
  const [currentSubStep, setCurrentSubStep] = useState(0)
  const [formSuccess, setFormSuccess] = useState(false)

  const getCurrentStepProgress = useCallback(() => {
    return (currentSubStep / steps[currentStep].getSubstepsQuantity()) * 100
  }, [currentStep, currentSubStep])

  const isValidFormStep = async (): Promise<boolean> => {
    const fields = steps[currentStep].fields[currentSubStep]
    return await trigger(fields, {
      shouldFocus: true,
    })
  }

  const handleNextStep = async () => {
    const fieldsValid = await isValidFormStep()

    if (!fieldsValid) return

    const substepsQuantity = steps[currentStep].getSubstepsQuantity()

    if (
      currentStep === steps.length - 1 &&
      currentSubStep === substepsQuantity - 1
    ) {
      return
    } else if (currentSubStep !== substepsQuantity - 1) {
      setCurrentSubStep((substep) => substep + 1)
      window.scrollTo(0, 0)
    } else if (currentSubStep === substepsQuantity - 1) {
      setCurrentStep((step) => step + 1)
      setCurrentSubStep(0)
      window.scrollTo(0, 0)
    }
  }

  const handlePrevStep = () => {
    if (currentStep === 0 && currentSubStep === 0) {
      return
    } else if (currentSubStep !== 0) {
      setCurrentSubStep((substep) => substep - 1)
      window.scrollTo(0, 0)
    } else if (currentSubStep === 0) {
      setCurrentStep((step) => step - 1)
      setCurrentSubStep(steps[currentStep - 1].getSubstepsQuantity() - 1)
      window.scrollTo(0, 0)
    }
  }

  const isLastStep = () => {
    return (
      currentStep === steps.length - 1 &&
      currentSubStep === steps[currentStep].getSubstepsQuantity() - 1
    )
  }

  const isSubstepWithWrongDataButton = () => {
    return steps[currentStep].subsStepsWithWrongDataButton.includes(
      currentSubStep,
    )
  }

  return (
    <FormProvider {...form}>
      {!formSuccess ? (
        <Form {...form}>
          <section className="flex flex-col gap-[30px]">
            <div className="flex justify-center">
              <img src="logo-a-leasing-red.svg" alt="" width={140} />
            </div>

            {/* Steps */}
            <FormSteps
              steps={stepNames}
              currentStep={currentStep}
              progress={getCurrentStepProgress()}
            />

            {/* Form */}
            <form
              onSubmit={handleSubmit(onSubmit, onError)}
              className="space-y-8"
            >
              {/* Step 1 - Personal data*/}
              {currentStep === 0 && <Step1 />}

              {/* Step 2 - Address*/}
              {currentStep === 1 && (
                <Step2
                  currentSubStep={currentSubStep}
                  setValue={setValue}
                  getValues={getValues}
                  watch={watch}
                  registrationAddressFields={steps[1].fields[0]}
                  residenceAddressFieldsWithSwitch={steps[1].fields[1]}
                />
              )}

              {/* Step 3 - Information about the sole proprietor */}
              {currentStep === 2 && (
                <Step3 currentSubStep={currentSubStep} watch={watch} />
              )}

              {/* Step 4 - Documents */}
              {currentStep === 3 && (
                <Step4
                  currentSubStep={currentSubStep}
                  getValues={getValues}
                  setValue={setValue}
                />
              )}

              {/* Navigation buttons */}
              <div className="flex flex-col items-center">
                {isSubstepWithWrongDataButton() && (
                  <Button variant={'secondary'} asChild>
                    <Link href={'/wrong-data'}>Данные неверны</Link>
                  </Button>
                )}

                <Button
                  type={'button'}
                  onClick={
                    !isLastStep()
                      ? handleNextStep
                      : handleSubmit(onSubmit, onError)
                  }
                >
                  {!isLastStep() ? 'Подтвердить данные' : 'Подписать документы'}
                </Button>

                {(currentStep > 0 || currentSubStep > 0) && (
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
            </form>
          </section>
        </Form>
      ) : (
        <FormWrapper>
          <div className="space-y-1">
            <FormHeading>Спасибо!</FormHeading>
            <FormHeading>Ваша заявка направлена менеджеру.</FormHeading>
            <FormHeading>
              Как только ваши документы будут рассмотрены, мы сразу свяжемся с
              вами
            </FormHeading>
          </div>

          <FormFieldsWrapper>
            <div className="flex flex-col gap-y-3">
              <FormCheckboxWrapper
                name="consentApplicationFormForLeasing"
                label="Заявление-анкета на лизинг"
                disabled={true}
                icon={<img src="/download-icon.svg" alt="" />}
              />

              <FormCheckboxWrapper
                name="consentCreditReport"
                label="Согласие на предоставление кредитного отчета"
                disabled={true}
                icon={<img src="/download-icon.svg" alt="" />}
              />

              <FormCheckboxWrapper
                name="consentAdvertisingAndNewsletter"
                label="Согласие на рекламно-информационную рассылку об услугах А-Лизинг"
                disabled={true}
                icon={<img src="/download-icon.svg" alt="" />}
              />
            </div>

            <div className="mt-6 flex justify-center">
              <Button>
                <Link href={MAIN_WEBSITE_LINK}>Сайт А-Лизинг</Link>
              </Button>
            </div>
          </FormFieldsWrapper>
        </FormWrapper>
      )}
    </FormProvider>
  )
}
