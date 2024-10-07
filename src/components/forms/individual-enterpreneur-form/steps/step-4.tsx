import { Fragment } from 'react'
import FormFieldsWrapper from '../../form-fields-wrapper'
import FormHeading from '../../form-heading'
import FormWrapper from '../../form-wrapper'

interface Step4Props {
  currentSubStep: number
}

export default function Step4({ currentSubStep }: Step4Props) {
  return (
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
  )
}
