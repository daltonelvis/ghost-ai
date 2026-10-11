# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- Phase 1: Foundation

## Current Goal

- Build the editor chrome: top navbar, floating project sidebar, and the dialog pattern (feature spec 02).

## Completed

- 01 Design System: shadcn/ui setup (Button, Card, Dialog, Input, Tabs, Textarea, ScrollArea), lucide-react, `lib/utils.ts` `cn()` helper, dark theme alignment with `globals.css`.
  - Verified: `tsc` clean, `next build` passes, all 7 components render, `cn()` merges conflicting Tailwind classes, no light values in compiled CSS.

- 02 Editor chrome (`context/feature-specs/02-editor.md`):
  - [x] `components/editor/editor-navbar.tsx` — fixed-height top bar, left/center/right sections, sidebar toggle (`PanelLeftOpen` / `PanelLeftClose`), empty right section, dark background with subtle bottom border.
  - [x] `components/editor/project-sidebar.tsx` — floating overlay that slides in from the left without pushing content, `isOpen` prop, `Projects` header with close button, `My Projects` / `Shared` tabs with empty states, full-width `New Project` button with `Plus` icon.
  - [x] Dialog pattern — `components/editor/editor-dialog.tsx`, token-styled wrapper supporting title, description, and footer actions (no concrete dialogs yet).
  - [x] Verify: `tsc` clean, `eslint` clean, `next build` passes, prerendered `/` contains navbar toggle, sidebar header, both tabs, empty state, and New Project button.

## In Progress

- None.

## Next Up

- Add the next planned feature unit here.

## Open Questions

- Add unresolved product or implementation questions here.

## Architecture Decisions

- shadcn/ui initialized with the `base-nova` style (Base UI primitives, `@base-ui/react`). `cn()` comes from shadcn's `cn` package (drop-in for clsx + tailwind-merge), re-exported from `lib/utils.ts`.
- Editor chrome: `components/editor/editor-shell.tsx` is the only client component; it owns sidebar open state and renders `EditorNavbar` + `ProjectSidebar`, which stay hook-free. The shell is applied through the `app/(editor)/layout.tsx` route-group layout, so every page placed under `app/(editor)/` gets the navbar and sidebar without changing its URL; routes that should not have editor chrome (e.g. sign-in) live outside the group. The home page `/` currently sits in the group as an empty placeholder.
- Dialogs: build every dialog on `EditorDialog` (title, optional description, body as children, `footer` for actions) instead of styling the shadcn `Dialog` per use. `components/ui/dialog.tsx` stays unmodified; styling is applied through `className` overrides.
- Dark only: `globals.css` defines the `ui-context.md` tokens on `:root` and maps shadcn's semantic variables (`--background`, `--primary`, ...) onto them. There is no light palette. `<html>` always carries the `dark` class so the components' `dark:` variants apply.

## Session Notes

- Add context needed to resume work in the next session.
