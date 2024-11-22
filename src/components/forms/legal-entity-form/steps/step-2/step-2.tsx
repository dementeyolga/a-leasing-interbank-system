import { type LegalEntityFormSchema as FormSchema } from '@/lib/schemas'
import { generateYesNoRadioItems } from '@/lib/utils'
import { Fragment, useEffect, useState } from 'react'
import { UseFormGetValues, UseFormSetValue } from 'react-hook-form'
import FormFieldsWrapper from '../../../form-fields-wrapper'
import FormHeading from '../../../form-heading'
import FormWrapper from '../../../form-wrapper'
import FormInputWrapper from '../../field-wrappers/form-input-wrapper'
import FormRadioWrapper from '../../field-wrappers/form-radio-wrapper'

interface Step2Props {
  currentSubStep: number
  legalAddressFields: (keyof FormSchema)[]
  actualAddressFields: (keyof FormSchema)[]
  setValue: UseFormSetValue<FormSchema>
  getValues: UseFormGetValues<FormSchema>
}

export default function Step2({
  currentSubStep,
  legalAddressFields,
  actualAddressFields,
  setValue,
  getValues,
}: Step2Props) {
  // Handle setting residence address values same as registration address
  const [sameAddress, setSameAddress] = useState(
    () => getValues('isActualAddressMatchLegal') || '',
  )

  const passLegalValuesToActualAddress = () => {
    const legalAddressValues = getValues(legalAddressFields)

    const concatActualAddressFields = actualAddressFields.slice(1)

    concatActualAddressFields.forEach((field, i) => {
      setValue(field, legalAddressValues[i], {
        shouldValidate: true,
      })
    })
  }

  useEffect(() => {
    if (sameAddress === 'да') passLegalValuesToActualAddress()
  }, [])

  const handleSameAddressChange = (value: string) => {
    setSameAddress(value)

    if (value === 'да') {
      passLegalValuesToActualAddress()
    }
  }

  return (
    <Fragment>
      {/* Substep 1 - Registration address */}
      {currentSubStep === 0 && (
        <FormWrapper>
          <FormHeading>Юридический адрес</FormHeading>
          <FormFieldsWrapper>
            <FormInputWrapper name="legalCountry" label="Страна" disabled />
            <FormInputWrapper
              name="legalSettlement"
              label="Населенный пункт"
              disabled
            />
            <FormInputWrapper
              name="legalStreetType"
              label="Тип улицы"
              disabled
            />
            <FormInputWrapper name="legalStreetName" label="Улица" disabled />
            <FormInputWrapper name="legalHouseNumber" label="Дом" disabled />
            <FormInputWrapper
              name="legalBuildingNumber"
              label="Строение/корпус (необязательно)"
              disabled
            />
            <FormInputWrapper
              name="legalOfficeNumber"
              label="Офис (необязательно)"
              disabled
            />
            <FormInputWrapper name="legalPostalCode" label="Индекс" disabled />
          </FormFieldsWrapper>
        </FormWrapper>
      )}

      {/* Substep 2 - Residential address */}
      {currentSubStep === 1 && (
        <div className="flex flex-col gap-y-[22px]">
          <FormWrapper>
            <FormHeading>Фактический адрес</FormHeading>
            <FormFieldsWrapper>
              <FormRadioWrapper
                name="isActualAddressMatchLegal"
                label="Фактический адрес совпадает с юридическим адресом?"
                items={generateYesNoRadioItems()}
                extraOnChange={handleSameAddressChange}
              />

              <FormInputWrapper
                name="actualCountry"
                label="Страна"
                disabled={sameAddress === 'да'}
              />
              <FormInputWrapper
                name="actualSettlement"
                label="Населенный пункт"
                disabled={sameAddress === 'да'}
              />
              <FormInputWrapper
                name="actualStreetType"
                label="Тип улицы"
                disabled={sameAddress === 'да'}
              />
              <FormInputWrapper
                name="actualStreetName"
                label="Улица"
                disabled={sameAddress === 'да'}
              />
              <FormInputWrapper
                name="actualHouseNumber"
                label="Дом"
                disabled={sameAddress === 'да'}
              />
              <FormInputWrapper
                name="actualBuildingNumber"
                label="Строение/корпус"
                disabled={sameAddress === 'да'}
              />
              <FormInputWrapper
                name="actualOfficeNumber"
                label="Офис"
                disabled={sameAddress === 'да'}
              />
              <FormInputWrapper
                name="actualPostalCode"
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
