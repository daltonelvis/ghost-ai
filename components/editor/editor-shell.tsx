"use client"

import { useRef, useState, type ReactNode } from "react"

import { EditorNavbar } from "@/components/editor/editor-navbar"
import { ProjectSidebar } from "@/components/editor/project-sidebar"

interface EditorShellProps {
  children?: ReactNode
}

/** Full-viewport editor frame: navbar on top, floating sidebar over the canvas area. */
export function EditorShell({ children }: EditorShellProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const sidebarToggleRef = useRef<HTMLButtonElement>(null)

  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-base">
      <EditorNavbar
        sidebarToggleRef={sidebarToggleRef}
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen((open) => !open)}
      />
      <main className="relative flex-1 overflow-hidden">
        <ProjectSidebar
          isOpen={isSidebarOpen}
          onClose={() => {
            setIsSidebarOpen(false)
            sidebarToggleRef.current?.focus()
          }}
        />
        {children}
      </main>
    </div>
  )
}
