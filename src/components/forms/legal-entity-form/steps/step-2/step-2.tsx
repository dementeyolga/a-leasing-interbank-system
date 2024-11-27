import { type LegalEntityFormSchema as FormSchema } from '@/lib/schemas'
import { generateYesNoRadioItems } from '@/lib/utils'
import { Fragment, useCallback, useEffect } from 'react'
import {
  UseFormGetValues,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form'
import FormFieldsWrapper from '../../../form-fields-wrapper'
import FormHeading from '../../../form-heading'
import FormWrapper from '../../../form-wrapper'
import FormInputWrapper from '../../field-wrappers/form-input-wrapper'
import FormRadioWrapper from '../../field-wrappers/form-radio-wrapper'
import { AllLegalEntityFormKeys } from '../../four-step-form'

interface Step2Props {
  currentSubStep: number
  legalAddressFields: AllLegalEntityFormKeys[]
  actualAddressFieldsWithSwitch: AllLegalEntityFormKeys[]
  setValue: UseFormSetValue<FormSchema>
  getValues: UseFormGetValues<FormSchema>
  watch: UseFormWatch<FormSchema>
}

export default function Step2({
  currentSubStep,
  legalAddressFields,
  actualAddressFieldsWithSwitch,
  setValue,
  getValues,
  watch,
}: Step2Props) {
  // Handle setting residence address values same as registration address
  const sameAddress = watch('isActualAddressMatchLegal')

  const passLegalValuesToActualAddress = useCallback(() => {
    const legalAddressValues = getValues(legalAddressFields)

    const actualAddressFields = actualAddressFieldsWithSwitch.slice(1)

    actualAddressFields.forEach((field, i) => {
      setValue(field, legalAddressValues[i], {
        shouldValidate: true,
      })
    })
  }, [legalAddressFields, actualAddressFieldsWithSwitch, getValues, setValue])

  const checkSameAddress = useCallback(() => {
    return sameAddress === 'да'
  }, [sameAddress])

  useEffect(() => {
    if (checkSameAddress()) passLegalValuesToActualAddress()
  }, [passLegalValuesToActualAddress, checkSameAddress])

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
              />

              <FormInputWrapper
                name="actualCountry"
                label="Страна"
                disabled={checkSameAddress()}
              />
              <FormInputWrapper
                name="actualSettlement"
                label="Населенный пункт"
                disabled={checkSameAddress()}
              />
              <FormInputWrapper
                name="actualStreetType"
                label="Тип улицы"
                disabled={checkSameAddress()}
              />
              <FormInputWrapper
                name="actualStreetName"
                label="Улица"
                disabled={checkSameAddress()}
              />
              <FormInputWrapper
                name="actualHouseNumber"
                label="Дом"
                disabled={checkSameAddress()}
              />
              <FormInputWrapper
                name="actualBuildingNumber"
                label="Строение/корпус"
                disabled={checkSameAddress()}
              />
              <FormInputWrapper
                name="actualOfficeNumber"
                label="Офис"
                disabled={checkSameAddress()}
              />
              <FormInputWrapper
                name="actualPostalCode"
                label="Индекс"
                disabled={checkSameAddress()}
              />
            </FormFieldsWrapper>
          </FormWrapper>
        </div>
      )}
    </Fragment>
  )
}
