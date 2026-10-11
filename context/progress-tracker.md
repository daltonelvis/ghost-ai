# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- Phase 1: Foundation

## Current Goal

- Add the design system and UI primitive components (feature spec 01).

## Completed

- 01 Design System: shadcn/ui setup (Button, Card, Dialog, Input, Tabs, Textarea, ScrollArea), lucide-react, `lib/utils.ts` `cn()` helper, dark theme alignment with `globals.css`.
  - Verified: `tsc` clean, `next build` passes, all 7 components render, `cn()` merges conflicting Tailwind classes, no light values in compiled CSS.

## In Progress

- None.

## Next Up

- Add the next planned feature unit here.

## Open Questions

- Add unresolved product or implementation questions here.

## Architecture Decisions

- shadcn/ui initialized with the `base-nova` style (Base UI primitives, `@base-ui/react`). `cn()` comes from shadcn's `cn` package (drop-in for clsx + tailwind-merge), re-exported from `lib/utils.ts`.
- Dark only: `globals.css` defines the `ui-context.md` tokens on `:root` and maps shadcn's semantic variables (`--background`, `--primary`, ...) onto them. There is no light palette. `<html>` always carries the `dark` class so the components' `dark:` variants apply.

## Session Notes

- Add context needed to resume work in the next session.
