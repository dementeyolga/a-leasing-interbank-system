import { type IndividuaEntrepreneurFormSchema as FormSchema } from '@/lib/schemas'
import { generateYesNoRadioItems } from '@/lib/utils'
import { Fragment, useCallback, useEffect } from 'react'
import {
  UseFormGetValues,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form'
import FormFieldsWrapper from '../../form-fields-wrapper'
import FormHeading from '../../form-heading'
import FormWrapper from '../../form-wrapper'
import FormInputWrapper from '../field-wrappers/form-input-wrapper'
import FormRadioWrapper from '../field-wrappers/form-radio-wrapper'
import { AllIndividualEnterpreneurFormKeys } from '../four-step-form'

interface Step2Props {
  currentSubStep: number
  setValue: UseFormSetValue<FormSchema>
  getValues: UseFormGetValues<FormSchema>
  watch: UseFormWatch<FormSchema>
  registrationAddressFields: AllIndividualEnterpreneurFormKeys[]
  residenceAddressFieldsWithSwitch: AllIndividualEnterpreneurFormKeys[]
}

export default function Step2({
  currentSubStep,
  setValue,
  getValues,
  watch,
  registrationAddressFields,
  residenceAddressFieldsWithSwitch,
}: Step2Props) {
  // Handle setting residence address values same as registration address
  const sameAddress = watch('isResidenceAddressMatchRegistration')

  const passRegistrationValuesToResidenceAddress = useCallback(() => {
    const registrationAddressValues = getValues(registrationAddressFields)

    const residenceAddressFields = residenceAddressFieldsWithSwitch.slice(1)

    residenceAddressFields.forEach((field, i) => {
      setValue(field, registrationAddressValues[i], {
        shouldValidate: true,
      })
    })
  }, [
    registrationAddressFields,
    residenceAddressFieldsWithSwitch,
    getValues,
    setValue,
  ])

  const checkSameAddress = useCallback(() => {
    return sameAddress === 'да'
  }, [sameAddress])

  useEffect(() => {
    if (checkSameAddress()) passRegistrationValuesToResidenceAddress()
  }, [checkSameAddress, passRegistrationValuesToResidenceAddress])

  return (
    <Fragment>
      {/* Substep 1 - Registration address */}
      {currentSubStep === 0 && (
        <FormWrapper>
          <FormHeading>Адрес регистрации (юридический адрес)</FormHeading>
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
              />

              <FormInputWrapper
                name="residenceCountry"
                label="Страна"
                disabled={checkSameAddress()}
              />
              <FormInputWrapper
                name="residenceSettlement"
                label="Населенный пункт"
                disabled={checkSameAddress()}
              />
              <FormInputWrapper
                name="residenceStreetType"
                label="Тип улицы"
                disabled={checkSameAddress()}
              />
              <FormInputWrapper
                name="residenceStreetName"
                label="Улица"
                disabled={checkSameAddress()}
              />
              <FormInputWrapper
                name="residenceHouseNumber"
                label="Дом"
                disabled={checkSameAddress()}
              />
              <FormInputWrapper
                name="residenceBuildingNumber"
                label="Строение/корпус"
                disabled={checkSameAddress()}
              />
              <FormInputWrapper
                name="residenceApartmentNumber"
                label="Квартира"
                disabled={checkSameAddress()}
              />
              <FormInputWrapper
                name="residencePostalCode"
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
