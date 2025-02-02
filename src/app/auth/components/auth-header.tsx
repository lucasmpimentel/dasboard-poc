"use client";

interface AuthHeaderProps {
  label: string
  title: string
}

export default function AuthHeader({label, title}: AuthHeaderProps) {
  return (
    <div className="flex flex-col w-full gap-y-4 items-center justify-center">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  )
}
