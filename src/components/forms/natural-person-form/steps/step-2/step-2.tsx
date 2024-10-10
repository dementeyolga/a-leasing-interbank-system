import FormFieldsWrapper from '@/components/forms/form-fields-wrapper'
import FormHeading from '@/components/forms/form-heading'
import FormWrapper from '@/components/forms/form-wrapper'
import { type NaturalPersonFormSchema as FormSchema } from '@/lib/schemas'
import { generateYesNoRadioItems } from '@/lib/utils'
import { Fragment, useEffect, useState } from 'react'
import { UseFormGetValues, UseFormSetValue } from 'react-hook-form'
import FormInputWrapper from '../../field-wrappers/form-input-wrapper'
import FormRadioWrapper from '../../field-wrappers/form-radio-wrapper'

interface Step2Props {
  currentSubStep: number
  setValue: UseFormSetValue<FormSchema>
  getValues: UseFormGetValues<FormSchema>
  registrationAddressFields: (keyof FormSchema)[]
  residenceAddressFields: (keyof FormSchema)[]
}

export default function Step2({
  currentSubStep,
  setValue,
  getValues,
  registrationAddressFields,
  residenceAddressFields,
}: Step2Props) {
  // Handle setting residence address values same as registration address
  const [sameAddress, setSameAddress] = useState(
    getValues('isResidenceAddressMatchRegistration') || '',
  )

  const passRegistrationValuesToResidenceAddress = () => {
    const legalAddressValues = getValues(registrationAddressFields)

    const slicedResidenceAddressFields = residenceAddressFields.slice(1)

    slicedResidenceAddressFields.forEach((field, i) => {
      setValue(field, legalAddressValues[i], {
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

  return (
    <Fragment>
      {/* Substep 1 - Registration address */}
      {currentSubStep === 0 && (
        <FormWrapper>
          <FormHeading>Адрес регистрации</FormHeading>
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
              label="Строение/корпус"
              disabled
            />
            <FormInputWrapper
              name="registrationApartmentNumber"
              label="Квартира"
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
                items={generateYesNoRadioItems()}
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
                label="Строение/корпус"
                disabled={sameAddress === 'да'}
              />
              <FormInputWrapper
                name="residenceApartmentNumber"
                label="Квартира"
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
  )
}
