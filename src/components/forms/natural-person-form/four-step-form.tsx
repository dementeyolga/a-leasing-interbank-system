'use client'

import { Form } from '@/components/ui/form'
import { initialDataLegalEntity } from '@/data/initial-client-data'
import {
  type LegalEntityFormSchema as FormSchema,
  legalEntityFormSchema,
} from '@/lib/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { MoveLeft } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { FieldName, FormProvider, useForm } from 'react-hook-form'
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

const steps: {
  name: string
  fields: (keyof FormSchema)[][]
  getSubstepsQuantity(): number
}[] = [
  {
    name: 'Данные ЮЛ',

    fields: [
      [
        'fullName',
        'payerAccountingNumber',
        'registrationNumber',
        'registrationDate',
        'registrationAuthority',
        'coreActivity',
        'CCEACode',
        'otherActivity',
        'dateOfActivityBeginning',
        'licenceValidThrough',
        'wasReorganized',
        'reorganizationType',
        'reorganizationDate',
        'oldFullNameAndLegalForm',
        'oldPayerAccountingNumber',
      ],
    ],
    getSubstepsQuantity() {
      return this.fields.length
    },
  },
  {
    name: 'Адрес',
    fields: [
      [
        'legalCountry',
        'legalSettlement',
        'legalStreetType',
        'legalStreetName',
        'legalHouseNumber',
        'legalBuildingNumber',
        'legalOfficeNumber',
        'legalPostalCode',
      ],
      [
        'isActualAddressMatchLegal',
        'actualCountry',
        'actualSettlement',
        'actualStreetType',
        'actualStreetName',
        'actualHouseNumber',
        'actualBuildingNumber',
        'actualOfficeNumber',
        'actualPostalCode',
      ],
    ],
    getSubstepsQuantity() {
      return this.fields.length
    },
  },
  {
    name: 'Сведения о ЮЛ',
    fields: [
      [
        'organizationManagementType',
        'managerPosition',
        'managerSurname',
        'managerName',
        'managerPatronymic',
        'managerSex',
        'managerCitizenship',
        'managerBirthdate',
        'managerBirthPlace',
        'managerIdentityDocumentType',
        'managerIdentityDocumentNumber',
        'managerIdentificationNumber',
        'managerIdentityDocumentIssueDate',
        'managerIdentityDocumentValidThrough',
        'managerIdentityDocumentIssuingAuthority',
        'managerPhone',
        'managerRegistrationCountry',
        'managerRegistrationSettlement',
        'managerRegistrationStreetType',
        'managerRegistrationStreetName',
        'managerRegistrationHouseNumber',
        'managerRegistrationBuildingNumber',
        'managerRegistrationApartmentNumber',

        'ieName',
        'iePayerAccountingNumber',
        'ieRegistrationNumber',
        'ieRegistrationDate',
        'ieRegistrationAuthority',
        'ieLocation',
        'ieManagerPosition',
        'ieManagerSurname',
        'ieManagerName',
        'ieManagerPatronymic',
        'ieManagerSex',
        'ieManagerCitizenship',
        'ieManagerBirthdate',
        'ieManagerBirthPlace',
        'ieManagerIdentityDocumentType',
        'ieManagerIdentityDocumentNumber',
        'ieManagerIdentificationNumber',
        'ieManagerIdentityDocumentIssueDate',
        'ieManagerIdentityDocumentValidThrough',
        'ieManagerIdentityDocumentIssuingAuthority',
        'ieManagerPhone',
        'ieManagerRegistrationCountry',
        'ieManagerRegistrationRegion',
        'ieManagerRegistrationSettlement',
        'ieManagerRegistrationStreetType',
        'ieManagerRegistrationStreetName',
        'ieManagerRegistrationHouseNumber',
        'ieManagerRegistrationBuildingNumber',
        'ieManagerRegistrationApartmentNumber',

        'leName',
        'lePayerAccountingNumber',
        'leRegistrationNumber',
        'leRegistrationDate',
        'leRegistrationAuthority',
        'leLocation',
        'leManagerPosition',
        'leManagerSurname',
        'leManagerName',
        'leManagerPatronymic',
        'leManagerSex',
        'leManagerCitizenship',
        'leManagerBirthdate',
        'leManagerBirthPlace',
        'leManagerIdentityDocumentType',
        'leManagerIdentityDocumentNumber',
        'leManagerIdentificationNumber',
        'leManagerIdentityDocumentIssueDate',
        'leManagerIdentityDocumentValidThrough',
        'leManagerIdentityDocumentIssuingAuthority',
        'leManagerPhone',
        'leManagerRegistrationCountry',
        'leManagerRegistrationRegion',
        'leManagerRegistrationSettlement',
        'leManagerRegistrationStreetType',
        'leManagerRegistrationStreetName',
        'leManagerRegistrationHouseNumber',
        'leManagerRegistrationBuildingNumber',
        'leManagerRegistrationApartmentNumber',

        'leAccountantPosition',
        'leAccountantSurname',
        'leAccountantName',
        'leAccountantPatronymic',
        'leAccountantSex',
        'leAccountantCitizenship',
        'leAccountantBirthdate',
        'leAccountantBirthPlace',
        'leAccountantIdentityDocumentType',
        'leAccountantIdentityDocumentNumber',
        'leAccountantIdentificationNumber',
        'leAccountantIdentityDocumentIssueDate',
        'leAccountantIdentityDocumentValidThrough',
        'leAccountantIdentityDocumentIssuingAuthority',
        'leAccountantPhone',
        'leAccountantRegistrationCountry',
        'leAccountantRegistrationRegion',
        'leAccountantRegistrationSettlement',
        'leAccountantRegistrationStreetType',
        'leAccountantRegistrationStreetName',
        'leAccountantRegistrationHouseNumber',
        'leAccountantRegistrationBuildingNumber',
        'leAccountantRegistrationApartmentNumber',
      ],
      [
        'accountingManagementType',

        'accountingManagerPosition',
        'accountingManagerSurname',
        'accountingManagerName',
        'accountingManagerPatronymic',
        'accountingManagerSex',
        'accountingManagerCitizenship',
        'accountingManagerBirthdate',
        'accountingManagerBirthPlace',
        'accountingManagerIdentityDocumentType',
        'accountingManagerIdentityDocumentNumber',
        'accountingManagerIdentificationNumber',
        'accountingManagerIdentityDocumentIssueDate',
        'accountingManagerIdentityDocumentValidThrough',
        'accountingManagerIdentityDocumentIssuingAuthority',
        'accountingManagerPhone',
        'accountingManagerRegistrationCountry',
        'accountingManagerRegistrationRegion',
        'accountingManagerRegistrationSettlement',
        'accountingManagerRegistrationStreetType',
        'accountingManagerRegistrationStreetName',
        'accountingManagerRegistrationHouseNumber',
        'accountingManagerRegistrationBuildingNumber',
        'accountingManagerRegistrationApartmentNumber',

        'accountingManagementCompanyName',
        'accountingManagementCompanyPayerAccountingNumber',
      ],
      ['beneficialOwners', 'participantsInformation'],
      [
        'servicingBank',
        'hasNetLossLast3Month',
        'netLossLast3MonthSum',
        'hasNetLossLastQuarterlyDate',
        'netLossLastQuarterlyDateSum',
        'hasCasesManagersCriminalResponsibility',
        'hasCasesManagersCriminalResponsibilityReasons',
        'isParticipateInTrial',
        'isParticipateInTrialReasons',
        'isFinancialSanctionsAppliedLastYear',
        'isFinancialSanctionsAppliedLastYearReasons',
        'isParticipateInBankruptEntities',
        'isParticipateInBankruptEntitiesReasons',
        'revenueLast12Month1',
        'revenueLast12Month2',
        'revenueLast12Month3',
        'revenueLast12Month4',
        'revenueLast12Month5',
        'revenueLast12Month6',
        'revenueLast12Month7',
        'revenueLast12Month8',
        'revenueLast12Month9',
        'revenueLast12Month10',
        'revenueLast12Month11',
        'revenueLast12Month12',
      ],
    ],
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
    getSubstepsQuantity() {
      return this.fields.length
    },
  },
]

const stepNames = steps.map((step) => step.name)

export default function FourStepForm() {
  // Init react-hook-forms helpers
  const form = useForm<FormSchema>({
    resolver: zodResolver(legalEntityFormSchema),
    // TODO: Can fetch async default data:  defaultValues: async () => fetch('/api-endpoint');
    defaultValues: {
      ...initialDataLegalEntity,
    },
    mode: 'onChange',
  })

  const { trigger, setValue, getValues } = form

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

  const isValidFormStep = async (): Promise<boolean> => {
    const fields = steps[currentStep].fields[currentSubStep]
    return await trigger(fields as FieldName<FormSchema>[], {
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
    } else if (currentSubStep === substepsQuantity - 1) {
      setCurrentStep((step) => step + 1)
      setCurrentSubStep(0)
    }
  }

  const handlePrevStep = () => {
    if (currentStep === 0 && currentSubStep === 0) {
      return
    } else if (currentSubStep !== 0) {
      setCurrentSubStep((substep) => substep - 1)
    } else if (currentSubStep === 0) {
      setCurrentStep((step) => step - 1)
      setCurrentSubStep(steps[currentStep - 1].getSubstepsQuantity() - 1)
    }
  }

  const isLastStep = () => {
    return (
      currentStep === steps.length - 1 &&
      currentSubStep === steps[currentStep].getSubstepsQuantity() - 1
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
            <FormSteps steps={stepNames} currentStep={currentStep} />

            {/* Form */}
            <form
              onSubmit={form.handleSubmit(onSubmit, onError)}
              className="space-y-8"
            >
              {/* Step 1 - Personal data*/}
              {currentStep === 0 && <Step1 getValues={getValues} />}

              {/* Step 2 - Address*/}
              {currentStep === 1 && (
                <Step2
                  currentSubStep={currentSubStep}
                  setValue={setValue}
                  getValues={getValues}
                  legalAddressFields={steps[1].fields[0]}
                  actualAddressFields={steps[1].fields[1]}
                />
              )}

              {/* Step 3 - Information about the sole proprietor */}
              {currentStep === 2 && (
                <Step3 currentSubStep={currentSubStep} getValues={getValues} />
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
                {currentStep < 2 && (
                  <Button variant={'secondary'} asChild>
                    <Link href={'/wrong-data'}>Данные неверны</Link>
                  </Button>
                )}
                <Button
                  type={isLastStep() ? 'submit' : 'button'}
                  onClick={handleNextStep}
                >
                  {currentStep < 3
                    ? 'Подтердить данные'
                    : 'Подписать документы'}
                </Button>
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
              />

              <FormCheckboxWrapper
                name="consentCreditReport"
                label="Согласие на предоставление кредитного отчета"
                disabled={true}
              />

              <FormCheckboxWrapper
                name="consentAdvertisingAndNewsletter"
                label="Согласие на рекламно-информационную рассылку об услугах А-Лизинг"
                disabled={true}
              />
            </div>

            <div className="mt-6 flex justify-center">
              <Button>
                <Link href={'http://client.a-leasing.by/'}>Сайт А-Лизинг</Link>
              </Button>
            </div>
          </FormFieldsWrapper>
        </FormWrapper>
      )}
    </FormProvider>
  )
}
