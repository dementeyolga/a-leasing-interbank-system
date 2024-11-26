import FormFieldsWrapper from '@/components/forms/form-fields-wrapper'
import FormWrapper from '@/components/forms/form-wrapper'
import { Button } from '@/components/ui/button'
import { type LegalEntityFormSchema as FormSchema } from '@/lib/schemas'

import FormHeading from '@/components/forms/form-heading'
import { Separator } from '@/components/ui/separator'
import { templateBeneficialOwnerData } from '@/data/template-client-data'
import { generateYesNoRadioItems } from '@/lib/utils'
import { CirclePlus, CircleX } from 'lucide-react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import FormInputWrapper from '../../../field-wrappers/form-input-wrapper'
import FormRadioWrapper from '../../../field-wrappers/form-radio-wrapper'
import FormTextareaWrapper from '../../../field-wrappers/form-textarea-wrapper'

export default function Substep3() {
  const { control } = useFormContext<FormSchema>()
  const { fields, append, remove } = useFieldArray<FormSchema>({
    name: 'beneficialOwners',
    control,
  })

  return (
    <FormWrapper>
      <FormHeading>Сведения о бенифициарных владельцах </FormHeading>
      <div className="flex flex-col gap-y-5">
        {fields.map((field, index, arr) => (
          <FormFieldsWrapper key={field.id}>
            <>
              {index !== 0 && (
                <Button
                  variant={'dotted'}
                  size={'smLong'}
                  onClick={() => remove(index)}
                >
                  Удалить
                  <div className="ml-2">
                    <CircleX strokeWidth={1.5} />
                  </div>
                </Button>
              )}
            </>

            <FormInputWrapper
              name={`beneficialOwners.${index}.beneficialOwnerSurname`}
              label="Фамилия"
            />
            <FormInputWrapper
              name={`beneficialOwners.${index}.beneficialOwnerName`}
              label="Имя"
            />
            <FormInputWrapper
              name={`beneficialOwners.${index}.beneficialOwnerPatronymic`}
              label="Отчество"
            />
            <FormInputWrapper
              name={`beneficialOwners.${index}.beneficialOwnerRole`}
              label="Роль (учредитель, участник, член, иное лицо)"
            />
            <FormInputWrapper
              name={`beneficialOwners.${index}.beneficialOwnerFraction`}
              label="Доля % в УФ"
            />
            <FormInputWrapper
              name={`beneficialOwners.${index}.beneficialOwnerCitizenship`}
              label="Гражданство"
            />
            <FormInputWrapper
              name={`beneficialOwners.${index}.beneficialOwnerBirthdate`}
              label="Дата рождения"
            />
            <FormInputWrapper
              name={`beneficialOwners.${index}.beneficialOwnerBirthPlace`}
              label="Место рождения"
            />
            <FormInputWrapper
              name={`beneficialOwners.${index}.beneficialOwnerIdentityDocumentType`}
              label="Тип документа"
            />
            <FormInputWrapper
              name={`beneficialOwners.${index}.beneficialOwnerIdentityDocumentNumber`}
              label="Серия и номер документа"
            />
            <FormInputWrapper
              name={`beneficialOwners.${index}.beneficialOwnerIdentificationNumber`}
              label="Идентификационный номер"
            />
            <FormInputWrapper
              name={`beneficialOwners.${index}.beneficialOwnerIdentityDocumentIssueDate`}
              label="Дата выдачи"
            />
            <FormInputWrapper
              name={`beneficialOwners.${index}.beneficialOwnerIdentityDocumentValidThrough`}
              label="Срок действия"
            />
            <FormInputWrapper
              name={`beneficialOwners.${index}.beneficialOwnerIdentityDocumentIssuingAuthority`}
              label="Орган выдавший документ"
            />
            <FormInputWrapper
              name={`beneficialOwners.${index}.beneficialOwnerPhone`}
              label="Мобильный телефон"
            />
            <FormRadioWrapper
              name={`beneficialOwners.${index}.beneficialOwnerIsPublicOfficial`}
              label="Является ли данное лицо публичным должностным лицом?"
              items={generateYesNoRadioItems()}
              tooltip="иностранные публичные должностные лица, должностные лица публичных международных организаций, лица, занимающие должности, включенные в определяемый Президентом РБ перечень государственных должностей Республики Беларусь, члены их семей и приближенные к ним лица"
            />

            <FormHeading>Адрес регистрации</FormHeading>

            <>
              <FormInputWrapper
                name={`beneficialOwners.${index}.beneficialOwnerRegistrationCountry`}
                label="Страна"
              />
              <FormInputWrapper
                name={`beneficialOwners.${index}.beneficialOwnerRegistrationRegion`}
                label="Область"
              />
              <FormInputWrapper
                name={`beneficialOwners.${index}.beneficialOwnerRegistrationSettlement`}
                label="Населенный пункт"
              />
              <FormInputWrapper
                name={`beneficialOwners.${index}.beneficialOwnerRegistrationStreetType`}
                label="Тип улицы"
              />
              <FormInputWrapper
                name={`beneficialOwners.${index}.beneficialOwnerRegistrationStreetName`}
                label="Улица"
              />
              <FormInputWrapper
                name={`beneficialOwners.${index}.beneficialOwnerRegistrationHouseNumber`}
                label="Дом"
              />
              <FormInputWrapper
                name={`beneficialOwners.${index}.beneficialOwnerRegistrationBuildingNumber`}
                label="Строение/корпус"
              />
              <FormInputWrapper
                name={`beneficialOwners.${index}.beneficialOwnerRegistrationApartmentNumber`}
                label="Квартира"
              />
            </>

            <>
              {index !== arr.length - 1 && <Separator className="mb-4 mt-5" />}
            </>
          </FormFieldsWrapper>
        ))}
      </div>

      <Button
        variant={'dotted'}
        size={'smLong'}
        onClick={() => append(templateBeneficialOwnerData)}
      >
        Добавить еще
        <div className="ml-2">
          <CirclePlus strokeWidth={1.5} />
        </div>
      </Button>

      <FormTextareaWrapper
        name="participantsInformation"
        label="Сведения об участниках, дающих обязательные указания"
      />
    </FormWrapper>
  )
}
