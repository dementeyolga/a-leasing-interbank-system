import FormFieldsWrapper from '@/components/forms/form-fields-wrapper'
import FormHeading from '@/components/forms/form-heading'
import FormWrapper from '@/components/forms/form-wrapper'
import { type NaturalPersonFormSchema as FormSchema } from '@/lib/schemas'
import { generateYesNoRadioItems } from '@/lib/utils'
import { useState } from 'react'
import { UseFormGetValues } from 'react-hook-form'
import FormInputWrapper from '../../../field-wrappers/form-input-wrapper'
import FormRadioWrapper from '../../../field-wrappers/form-radio-wrapper'
import FormSelectWrapper from '../../../field-wrappers/form-select-wrapper'

interface Substep1Props {
  getValues: UseFormGetValues<FormSchema>
}

export default function Substep1({ getValues }: Substep1Props) {
  const [ownsProperty, setOwnsProperty] = useState(
    () => getValues('ownsProperty') || '',
  )
  const [ownsCar, setOwnsCar] = useState(() => getValues('ownsCar') || '')

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
          extraOnChange={(value) => setOwnsProperty(value)}
        />
        <>
          {ownsProperty === 'да' && (
            <FormSelectWrapper
              name="typesOfProperty"
              label="Недвижимое имущество в собственности"
              placeholder="Выберите несколько вариантов"
              values={['квартира', 'офис', 'склад']}
            />
          )}
        </>

        <FormRadioWrapper
          name="ownsCar"
          label="Имеете ли в собственности автомобиль?"
          items={generateYesNoRadioItems()}
          extraOnChange={(value) => setOwnsCar(value)}
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
