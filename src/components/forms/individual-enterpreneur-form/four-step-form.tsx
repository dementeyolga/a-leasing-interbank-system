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
import { Fragment, useEffect, useState } from 'react'
import { FieldName, FormProvider, useForm } from 'react-hook-form'
import { Button } from '../../ui/button'
import FormFieldsWrapper from '../form-fields-wrapper'
import FormHeading from '../form-heading'
import FormSteps from '../form-steps'
import FormWrapper from '../form-wrapper'
import FormInputWrapper from './form-input-wrapper'
import FormRadioWrapper from './form-radio-wrapper'

const steps = [
  {
    name: 'Личные данные',
    fields: [
      [
        'surname',
        'name',
        'patronymic',
        'formerSurname',
        'birthDate',
        'phone',
        'email',
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
    getSubstepsQuantity() {
      return this.fields.length
    },
  },
  {
    name: 'Адрес',
    fields: [
      [
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
    getSubstepsQuantity() {
      return this.fields.length
    },
  },
  {
    name: 'Сведения об ИП',
    fields: [
      [
        'payerAccountingNumber',
        'ieRegistrationNumber',
        'ieRegistrationDate',
        'ieRegistrationAuthority',
        'ieCoreActivity',
        'ieCCEACode',
        'ieOtherActivity',
        'isPublicOfficial',
      ],
      [''],
    ],
    getSubstepsQuantity() {
      return this.fields.length
    },
  },
  {
    name: 'Документы',
    fields: [[''], [''], ['']],
    getSubstepsQuantity() {
      return this.fields.length
    },
  },
]

const stepNames = steps.map((step) => step.name)

export default function FourStepForm() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(individualEntrepreneurFormSchema),
    // TODO: Can fetch async default data:  defaultValues: async () => fetch('/api-endpoint');
    defaultValues: {
      ...initialDataIndividualEntrepreneur,
    },
    mode: 'onChange',
  })

  const { trigger } = form

  function onSubmit(values: FormSchema) {
    console.log('Submitted values:', JSON.stringify(values, null, 2))
    setFormSuccess(true)
  }

  function onError() {
    console.log('Form has errors')
  }

  const [sameAddress, setSameAddress] = useState(
    initialDataIndividualEntrepreneur.isResidenceAddressMatchRegistration,
  )

  const passRegistrationValuesToResidenceAddress = () => {
    const registrationAddressValues = form.getValues([
      'registrationCountry',
      'registrationSettlement',
      'registrationStreetType',
      'registrationStreetName',
      'registrationHouseNumber',
      'registrationBuildingNumber',
      'registrationApartmentNumber',
      'registrationPostalCode',
    ])

    const residenceAddressFields: (
      | 'residenceCountry'
      | 'residenceSettlement'
      | 'residenceStreetType'
      | 'residenceStreetName'
      | 'residenceHouseNumber'
      | 'residenceBuildingNumber'
      | 'residenceApartmentNumber'
      | 'residencePostalCode'
    )[] = [
      'residenceCountry',
      'residenceSettlement',
      'residenceStreetType',
      'residenceStreetName',
      'residenceHouseNumber',
      'residenceBuildingNumber',
      'residenceApartmentNumber',
      'residencePostalCode',
    ]

    residenceAddressFields.forEach((field, i) => {
      form.setValue(field, registrationAddressValues[i], {
        shouldValidate: true,
      })
    })
  }

  useEffect(() => {
    if (sameAddress) passRegistrationValuesToResidenceAddress()
  }, [])

  const handleSameAddressChange = (value: string) => {
    setSameAddress(value)

    if (value === 'да') {
      passRegistrationValuesToResidenceAddress()
    }
  }

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
              {currentStep === 0 && (
                <div className="flex flex-col gap-y-[22px]">
                  <FormHeading>
                    Личные данные и документ, удостоверяющий личность
                  </FormHeading>
                  <fieldset className="flex flex-col gap-y-3">
                    <FormInputWrapper name="surname" label="Фамилия" disabled />
                    <FormInputWrapper name="name" label="Имя" disabled />
                    <FormInputWrapper
                      name="patronymic"
                      label="Отчество"
                      disabled
                    />
                    <FormInputWrapper
                      name="formerSurname"
                      label="Предыдущая фамилия, если менялась"
                      disabled
                    />
                    <FormInputWrapper
                      name="birthDate"
                      label="Дата рождения"
                      disabled
                    />
                    <FormInputWrapper
                      name="phone"
                      label="Мобильный телефон"
                      disabled
                    />
                    <FormInputWrapper type="email" name="email" label="Email" />

                    <FormRadioWrapper
                      name="sex"
                      label="Пол"
                      items={[
                        {
                          id: crypto.randomUUID(),
                          value: 'мужской',
                          text: 'мужской',
                        },
                        {
                          id: crypto.randomUUID(),
                          value: 'женский',
                          text: 'женский',
                        },
                      ]}
                      disabled
                    />

                    <FormInputWrapper
                      name="identityDocumentType"
                      label="Тип документа"
                    />
                    <FormInputWrapper
                      name="identityDocumentNumber"
                      label="Серия и номер документа"
                      disabled
                    />
                    <FormInputWrapper
                      name="identificationNumber"
                      label="Идентификационный номер"
                      disabled
                    />
                    <FormInputWrapper
                      name="identityDocumentIssueDate"
                      label="Дата выдачи"
                      disabled
                    />
                    <FormInputWrapper
                      name="identityDocumentValidThrough"
                      label="Срок действия"
                      disabled
                    />
                    <FormInputWrapper
                      name="identityDocumentIssuingAuthority"
                      label="Орган, выдавший документ"
                      disabled
                    />

                    <FormRadioWrapper
                      name="isResidentOfBelarus"
                      label="Вы резидент Республики Беларусь?"
                      disabled
                      items={[
                        {
                          id: crypto.randomUUID(),
                          value: 'да',
                          text: 'Да',
                        },
                        {
                          id: crypto.randomUUID(),
                          value: 'нет',
                          text: 'Нет',
                        },
                      ]}
                    />
                    <FormRadioWrapper
                      name="isTaxResidentOfUSA"
                      label="Вы налоговый резидент США?"
                      disabled
                      items={[
                        {
                          id: crypto.randomUUID(),
                          value: 'да',
                          text: 'Да',
                        },
                        {
                          id: crypto.randomUUID(),
                          value: 'нет',
                          text: 'Нет',
                        },
                      ]}
                    />
                  </fieldset>
                </div>
              )}

              {/* Step 2 - Address*/}
              {currentStep === 1 && (
                <Fragment>
                  {/* Substep 1 - Registration address */}
                  {currentSubStep === 0 && (
                    <FormWrapper>
                      <FormHeading>
                        Адрес регистрации (юридический адрес)
                      </FormHeading>
                      <FormFieldsWrapper>
                        <FormInputWrapper
                          name="registrationCountry"
                          label="Страна"
                          disabled
                        />
                        <FormInputWrapper
                          name="registrationSettlement"
                          label="Населенный пункт"
                          disabled
                        />
                        <FormInputWrapper
                          name="registrationStreetType"
                          label="Тип улицы"
                          disabled
                        />
                        <FormInputWrapper
                          name="registrationStreetName"
                          label="Улица"
                          disabled
                        />
                        <FormInputWrapper
                          name="registrationHouseNumber"
                          label="Дом"
                          disabled
                        />
                        <FormInputWrapper
                          name="registrationBuildingNumber"
                          label="Строение/корпус (необязательно)"
                          disabled
                        />
                        <FormInputWrapper
                          name="registrationApartmentNumber"
                          label="Квартира (необязательно)"
                          disabled
                        />
                        <FormInputWrapper
                          name="registrationPostalCode"
                          label="Индекс"
                          disabled
                        />
                      </FormFieldsWrapper>
                    </FormWrapper>
                  )}

                  {/* Substep 2 - Residential address */}
                  {currentSubStep === 1 && (
                    <div className="flex flex-col gap-y-[22px]">
                      <FormWrapper>
                        <FormHeading>Адрес проживания</FormHeading>
                        <FormFieldsWrapper>
                          <FormRadioWrapper
                            name="isResidenceAddressMatchRegistration"
                            label="Адрес проживания совпадает с адресом регистрации?"
                            items={[
                              {
                                id: crypto.randomUUID(),
                                value: 'да',
                                text: 'да',
                              },
                              {
                                id: crypto.randomUUID(),
                                value: 'нет',
                                text: 'нет',
                              },
                            ]}
                            extraOnChange={handleSameAddressChange}
                          />

                          <FormInputWrapper
                            name="residenceCountry"
                            label="Страна"
                            disabled={sameAddress === 'да'}
                          />
                          <FormInputWrapper
                            name="residenceSettlement"
                            label="Населенный пункт"
                            disabled={sameAddress === 'да'}
                          />
                          <FormInputWrapper
                            name="residenceStreetType"
                            label="Тип улицы"
                            disabled={sameAddress === 'да'}
                          />
                          <FormInputWrapper
                            name="residenceStreetName"
                            label="Улица"
                            disabled={sameAddress === 'да'}
                          />
                          <FormInputWrapper
                            name="residenceHouseNumber"
                            label="Дом"
                            disabled={sameAddress === 'да'}
                          />
                          <FormInputWrapper
                            name="residenceBuildingNumber"
                            label="Строение/корпус (необязательно)"
                            disabled={sameAddress === 'да'}
                          />
                          <FormInputWrapper
                            name="residenceApartmentNumber"
                            label="Квартира (необязательно)"
                            disabled={sameAddress === 'да'}
                          />
                          <FormInputWrapper
                            name="residencePostalCode"
                            label="Индекс"
                            disabled={sameAddress === 'да'}
                          />
                        </FormFieldsWrapper>
                      </FormWrapper>
                    </div>
                  )}
                </Fragment>
              )}

              {/* Step 3 - Information about the sole proprietor */}
              {currentStep === 2 && (
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
                          items={[
                            {
                              id: crypto.randomUUID(),
                              value: 'да',
                              text: 'да',
                            },
                            {
                              id: crypto.randomUUID(),
                              value: 'нет',
                              text: 'нет',
                            },
                          ]}
                        />
                      </FormFieldsWrapper>
                    </FormWrapper>
                  )}

                  {/* Substep 2 - Administrative and financial information */}
                  {currentSubStep === 1 && (
                    <div className="flex flex-col gap-y-[22px]">
                      <FormWrapper>
                        <FormHeading>
                          Административно-финансовая информация
                        </FormHeading>
                        <FormFieldsWrapper>
                          <p>Substep 2</p>
                        </FormFieldsWrapper>
                      </FormWrapper>
                    </div>
                  )}
                </Fragment>
              )}

              {/* Step 4 - Documents */}
              {currentStep === 3 && (
                <Fragment>
                  {/* Substep 1 - Signing documents */}
                  {currentSubStep === 0 && (
                    <FormWrapper>
                      <FormHeading>Подписание документов</FormHeading>
                      <FormFieldsWrapper>
                        <p>Substep 1</p>
                      </FormFieldsWrapper>
                    </FormWrapper>
                  )}

                  {/* Substep 2 - Getting code */}
                  {currentSubStep === 1 && (
                    <div className="flex flex-col gap-y-[22px]">
                      <FormWrapper>
                        <FormHeading>Подписание документов</FormHeading>
                        <FormFieldsWrapper>
                          <p>Substep 2</p>
                        </FormFieldsWrapper>
                      </FormWrapper>
                    </div>
                  )}
                </Fragment>
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
      ) : (
        <FormWrapper>
          <FormHeading>
            Спасибо! Ваша заявка направлена менеджеру. Как только ваши документы
            будут рассмотрены, мы сразу свяжемся с вами
          </FormHeading>
          <Button>
            <Link href={'http://client.a-leasing.by/'}>Сайт А-Лизинг</Link>
          </Button>
        </FormWrapper>
      )}
    </FormProvider>
  )
}
