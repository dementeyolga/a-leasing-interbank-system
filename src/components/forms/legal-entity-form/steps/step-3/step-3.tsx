import { type LegalEntityFormSchema as FormSchema } from '@/lib/schemas'
import { Fragment } from 'react'
import { UseFormWatch } from 'react-hook-form'
import Substep1 from './substep-1/substep-1'
import Substep2 from './substep-2/substep-2'
import Substep3 from './substep-3/substep-3'
import Substep4 from './substep-4/substep-4'

interface Step3Props {
  currentSubStep: number
  watch: UseFormWatch<FormSchema>
}

export default function Step3({ currentSubStep, watch }: Step3Props) {
  return (
    <Fragment>
      {/* Substep 1 - Information about the management */}
      {currentSubStep === 0 && <Substep1 watch={watch} />}

      {/* Substep 2 - Information about the accounting management */}
      {currentSubStep === 1 && <Substep2 watch={watch} />}

      {/* Substep 3 - Information about beneficial owners */}
      {currentSubStep === 2 && <Substep3 />}

      {/* Substep 4 - Administrative and financial information */}
      {currentSubStep === 3 && <Substep4 watch={watch} />}
    </Fragment>
  )
}
