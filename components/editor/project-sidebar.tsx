import { FolderOpen, Plus, Users, X, type LucideIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
}

/**
 * Renders a floating project panel with placeholder tabs and a New Project
 * button that has no action yet. When `isOpen` is false, the panel stays mounted
 * but slides out of view, is inert, and is hidden from assistive technology.
 * The close button calls `onClose`; the parent must update `isOpen`.
 */
export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <aside
      aria-label="Projects"
      aria-hidden={!isOpen}
      inert={!isOpen}
      className={cn(
        "absolute top-3 bottom-3 left-3 z-40 flex w-72 flex-col rounded-2xl border border-surface-border bg-surface/90 shadow-2xl backdrop-blur-md transition-transform duration-200 ease-out",
        isOpen ? "translate-x-0" : "-translate-x-[calc(100%+1.5rem)]"
      )}
    >
      <div className="flex items-center justify-between px-4 pt-4 pb-3">
        <h2 className="text-sm font-medium text-copy-primary">Projects</h2>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onClose}
          aria-label="Close sidebar"
          className="rounded-xl text-copy-muted hover:text-copy-primary"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="my-projects" className="min-h-0 flex-1 px-4">
        <TabsList className="w-full">
          <TabsTrigger value="my-projects">My Projects</TabsTrigger>
          <TabsTrigger value="shared">Shared</TabsTrigger>
        </TabsList>
        <TabsContent value="my-projects" className="flex">
          <EmptyState
            icon={FolderOpen}
            title="No projects yet"
            description="Create a project to start designing."
          />
        </TabsContent>
        <TabsContent value="shared" className="flex">
          <EmptyState
            icon={Users}
            title="Nothing shared yet"
            description="Projects others share with you will appear here."
          />
        </TabsContent>
      </Tabs>

      <div className="border-t border-surface-border p-4">
        <Button size="lg" className="w-full rounded-xl">
          <Plus className="h-5 w-5" />
          New Project
        </Button>
      </div>
    </aside>
  )
}

interface EmptyStateProps {
  icon: LucideIcon
  title: string
  description: string
}

/** Renders a centered icon and message for a project tab's empty state. */
function EmptyState({ icon: Icon, title, description }: EmptyStateProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2 px-2 text-center">
      <Icon className="h-8 w-8 text-copy-faint" />
      <p className="text-sm font-medium text-copy-secondary">{title}</p>
      <p className="text-xs text-copy-muted">{description}</p>
    </div>
  )
}
