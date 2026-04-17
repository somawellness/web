export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.25em] text-primary">
      {children}
    </span>
  )
}
