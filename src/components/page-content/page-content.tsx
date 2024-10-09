import { ReactElement } from 'react'

interface PageContentProps {
  children: ReactElement | ReactElement[]
}

export default function PageContent({ children }: PageContentProps) {
  return <div className="mx-auto max-w-[450px] px-5 py-10">{children}</div>
}
