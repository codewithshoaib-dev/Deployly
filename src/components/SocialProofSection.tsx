
import { useRef } from "react";

const brands = [
  "Loopkit — async team check-ins",
  "Formwise — flexible form builder for startups",
  "Shipline — automated release workflows",
  "Nural — visual project tracking",
  "Timely — lightweight scheduling for teams",
  "Beamboard — live dashboards for SaaS metrics",
  "Inboxly — shared team inbox made simple",
  "Draftive — collaborative docs for product teams",
  "Snipply — save and reuse code snippets",
  "ClarityHub — focused internal communication",
  "Stackform — customizable internal tools",
];

export default function SocialProof() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
 

 

  return (
    <section className="py-16 px-6 overflow-hidden bg-background">
      <p className="text-base text-foreground font-semibold text-center mb-8">
        Trusted by fast-growing SaaS teams
      </p>

      <div className="relative w-full overflow-hidden" ref={containerRef}>
        <div
          className="flex gap-6 whitespace-nowrap"
          ref={trackRef}
          style={{ willChange: "transform" }}
        >
          {[...brands, ...brands].map((brand, i) => (
            <span
              key={i}
              className="inline-block px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-neutral-100 rounded-full text-sm font-medium border border-neutral-700 text-center hover:scale-105 transition-transform shadow-sm"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
