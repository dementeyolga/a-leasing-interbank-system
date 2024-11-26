import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
interface TooltipProps {
  children: string
}

export default function PopoverWrapper({ children }: TooltipProps) {
  return (
    <Popover>
      <PopoverTrigger className="relative after:absolute after:h-2 after:w-2 data-[state=open]:after:bg-dialog-triangle data-[state=open]:after:animate-in data-[state=closed]:after:animate-out data-[state=closed]:after:fade-out-0 data-[state=open]:after:fade-in-0 data-[state=closed]:after:zoom-out-95 data-[state=open]:after:zoom-in-95">
        <div className="ml-2 flex h-3 w-3 items-center justify-center">
          <img src="/info-icon.svg" alt="" />
        </div>
      </PopoverTrigger>
      <PopoverContent>{children}</PopoverContent>
    </Popover>
  )
}
