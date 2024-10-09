import PopoverWrapper from '../popover/popover-wrapper'

interface FormHeadingProps {
  children: string
  tooltip?: string
}

export default function FormHeading({ children, tooltip }: FormHeadingProps) {
  return (
    <h3 className="text-center text-lg font-semibold leading-none">
      {children}
      {tooltip && <PopoverWrapper>{tooltip}</PopoverWrapper>}
    </h3>
  )
}
