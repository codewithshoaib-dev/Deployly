export default function Header({
  setModal,
}: {
  setModal: (value: boolean) => void;
}) {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur bg-background/80 border-b border-border px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-lg font-semibold text-foreground">Deployly</div>

      {/* Desktop Nav */}
      <nav className="hidden sm:flex items-center gap-2 text-sm">
        {/* Nav Links Container */}
        <div className="flex items-center gap-1 bg-card border border-border rounded-full px-2 py-1">
          <a
            href="#features"
            className="px-3 py-1.5 rounded-full text-muted transition-colors hover:text-foreground hover:bg-background"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="px-3 py-1.5 rounded-full text-muted transition-colors hover:text-foreground hover:bg-background"
          >
            Pricing
          </a>
          <a
            href="#"
            className="px-3 py-1.5 rounded-full text-muted transition-colors hover:text-foreground hover:bg-background"
          >
            Docs
          </a>
        </div>

        {/* CTA */}
        <button
          onClick={() => setModal(true)}
          className="ml-3 bg-primary text-primary-foreground px-4 py-2 rounded-full font-medium shadow-sm transition-transform hover:scale-105"
        >
          See how it works
        </button>
      </nav>

      {/* Mobile CTA */}
      <button
        onClick={() => setModal(true)}
        className="sm:hidden bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-sm transition-transform hover:scale-105"
      >
        Guide
      </button>
    </header>
  );
}
