export default function FormFieldsWrapper({
  children,
}: {
  children: JSX.Element | JSX.Element[]
}) {
  return <fieldset className="flex flex-col gap-y-3">{children}</fieldset>
}
