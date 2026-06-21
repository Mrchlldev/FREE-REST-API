'use client'
import * as Dialog from '@radix-ui/react-dialog'
import { cn } from '@/lib/utils'

export const Sheet = Dialog.Root
export const SheetTrigger = Dialog.Trigger
export const SheetClose = Dialog.Close
export const SheetContent = ({className, children, ...p}: React.ComponentProps<typeof Dialog.Content>) => (
  <Dialog.Portal>
    <Dialog.Overlay className="fixed inset-0 z-50 bg-background/55 backdrop-blur-xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
    <Dialog.Content className={cn('fixed left-0 top-0 z-50 h-full w-80 max-w-[90vw] border-r bg-card shadow-2xl shadow-primary/10 outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left', className)} {...p}>
      {children}
    </Dialog.Content>
  </Dialog.Portal>
)
