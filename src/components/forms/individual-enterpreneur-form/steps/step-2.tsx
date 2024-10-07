import { generateYesNoRadioItems } from '@/lib/utils'
import { Fragment } from 'react'
import FormFieldsWrapper from '../../form-fields-wrapper'
import FormHeading from '../../form-heading'
import FormWrapper from '../../form-wrapper'
import FormInputWrapper from '../field-wrappers/form-input-wrapper'
import FormRadioWrapper from '../field-wrappers/form-radio-wrapper'

interface Step2Props {
  currentSubStep: number
  handleSameAddressChange: (value: string) => void
  sameAddress: string
}

export default function Step2({
  currentSubStep,
  handleSameAddressChange,
  sameAddress,
}: Step2Props) {
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
  )
}
