import type { ReactNode } from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface EditorDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description?: string
  /** Action buttons rendered in the footer, e.g. Cancel + Confirm. */
  footer?: ReactNode
  children?: ReactNode
}

/**
 * Shared dialog shell for editor flows (create, rename, delete, ...).
 * Styles the shadcn Dialog with the Ghost AI tokens; concrete dialogs
 * supply their own body and footer actions.
 */
export function EditorDialog({
  open,
  onOpenChange,
  title,
  description,
  footer,
  children,
}: EditorDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="gap-5 rounded-3xl border border-surface-border bg-elevated p-6 text-copy-primary ring-0 sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-copy-primary">{title}</DialogTitle>
          {description && (
            <DialogDescription className="text-copy-muted">
              {description}
            </DialogDescription>
          )}
        </DialogHeader>
        {children}
        {footer && (
          <DialogFooter className="-mx-6 -mb-6 rounded-b-3xl border-surface-border bg-surface px-6 py-4">
            {footer}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}
