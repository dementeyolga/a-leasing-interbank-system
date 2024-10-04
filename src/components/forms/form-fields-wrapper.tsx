import { ReactElement } from 'react'

export default function FormFieldsWrapper({
  children,
}: {
  children: ReactElement | ReactElement[]
}) {
  return <fieldset className="flex flex-col gap-y-3">{children}</fieldset>
}
