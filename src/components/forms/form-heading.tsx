export default function FormHeading({ children }: { children: string }) {
  return (
    <h3 className="text-center text-lg font-semibold leading-none">
      {children}
    </h3>
  )
}
