import FormFieldsWrapper from '@/components/forms/form-fields-wrapper'
import FormHeading from '@/components/forms/form-heading'
import FormWrapper from '@/components/forms/form-wrapper'
import { typesOfProperty } from '@/data/select-field-options'
import { type NaturalPersonFormSchema as FormSchema } from '@/lib/schemas'
import { generateYesNoRadioItems } from '@/lib/utils'
import { UseFormWatch } from 'react-hook-form'
import FormInputWrapper from '../../../field-wrappers/form-input-wrapper'
import FormMultiSelectWrapper from '../../../field-wrappers/form-multi-select-wrapper'
import FormRadioWrapper from '../../../field-wrappers/form-radio-wrapper'
import FormSelectWrapper from '../../../field-wrappers/form-select-wrapper'

interface Substep1Props {
  watch: UseFormWatch<FormSchema>
}

export default function Substep1({ watch }: Substep1Props) {
  const ownsProperty = watch('ownsProperty')
  const ownsCar = watch('ownsCar')

  return (
    <FormWrapper>
      <FormHeading>Семейное положение и имущество в собственности</FormHeading>
      <FormFieldsWrapper>
        <FormSelectWrapper
          name="maritalStatus"
          label="Семейное положение"
          values={['женат/замужем', 'не женат/не замужем']}
        />

        <FormInputWrapper
          name="drivingExperience"
          label="Водительский стаж, лет"
        />

        <FormRadioWrapper
          name="ownsProperty"
          label="Имеете ли имущество в собственности?"
          items={generateYesNoRadioItems()}
        />
        <>
          {ownsProperty === 'да' && (
            <>
              <FormMultiSelectWrapper
                name="typesOfProperty"
                label="Недвижимое имущество в собственности"
                placeholder="Выберите один или несколько вариантов"
                options={typesOfProperty}
              />
            </>
          )}
        </>

        <FormRadioWrapper
          name="ownsCar"
          label="Имеете ли в собственности автомобиль?"
          items={generateYesNoRadioItems()}
        />
        <>
          {ownsCar === 'да' && (
            <>
              <FormInputWrapper name="carBrand" label="Марка авто" />
              <FormInputWrapper
                name="carManufactureYear"
                label="Год выпуска авто"
              />
            </>
          )}
        </>
      </FormFieldsWrapper>
    </FormWrapper>
  )
}
