import { ReactElement } from 'react'

export default function FormWrapper({
  children,
}: {
  children: ReactElement | ReactElement[]
}) {
  return <div className="flex flex-col gap-y-[22px]">{children}</div>
}
