import { ModeToggle } from "@/components/mode-toggle"

export function Header() {
  return (
    <header className="border-b h-16 fixed inset-x-0">
      <div className="container h-full items-center mx-auto flex justify-between">
        <h1 className="shrink-0 font-allura text-4xl tracking-tight lg:text-5xl">
          Maison de la mascotte
        </h1>
        <ModeToggle />
      </div>
    </header>
  )
}
