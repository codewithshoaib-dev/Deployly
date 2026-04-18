const brands = [
  "Loopkit",
  "Formwise",
  "Shipline",
  "Nural",
  "Timely",
  "Beamboard",
  "Inboxly",
  "Draftive",
  "Snipply",
  "ClarityHub",
  "Stackform",
];

export default function SocialProof() {
  return (
    <section className="py-16 px-6 bg-background">
      <p className="text-base text-foreground font-medium text-center mb-8">
        Trusted by fast-growing SaaS teams
      </p>

      <div className="marquee">
        <div className="marquee__track">
          {[...brands, ...brands].map((brand, i) => (
            <span key={i} className="brand-pill">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
