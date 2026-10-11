import { EditorShell } from "@/components/editor/editor-shell"

/** Wraps editor route content in the shared navbar and sidebar frame. */
export default function EditorLayout({ children }: LayoutProps<"/">) {
  return <EditorShell>{children}</EditorShell>
}
