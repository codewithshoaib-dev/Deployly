export default function Hero({
  setModal,
}: {
  setModal: (value: boolean) => void;
}) {
  const handleClick = () => {
    alert("This is a UI demo, full flow available on request.");
  };

  return (
    <section className="pt-28 pb-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-semibold text-foreground leading-tight">
          Instant deployments. Zero DevOps.
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-lg md:text-2xl text-muted">
          Deploy your SaaS to production in seconds with built-in CI/CD,
          rollback, and multi-region support.
        </p>

        {/* CTA */}
        <div className="mt-8 flex justify-center items-center gap-3">
          {/* Secondary action */}
          <button
            onClick={handleClick}
            className="px-5 py-2.5 rounded-full shadow-sm bg-card border border-border text-foreground font-medium transition-transform hover:scale-105"
          >
            Get started
          </button>

          {/* Primary action */}
          <button
            onClick={() => setModal(true)}
            className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium shadow-sm transition-transform hover:scale-105"
          >
            See how it works
          </button>
        </div>
      </div>
    </section>
  );
}
