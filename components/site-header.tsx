import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="container flex h-14 items-center">
        <div className="flex flex-1 items-center space-x-2 sm:space-x-4">
          <div className="text-2xl font-bold">formthing</div>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2 sm:space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
