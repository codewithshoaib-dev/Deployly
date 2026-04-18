export default function Testimonials() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Background accent */}
      <div className="testimonials-bg" />

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Loved by teams shipping fast
          </h2>
          <p className="mt-3 text-muted">
            Real results from real SaaS teams using Deployly.
          </p>
        </div>

        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Main testimonial */}
          <div className="space-y-6">
            <p className="text-lg md:text-2xl leading-snug text-foreground font-medium">
              “Deployly cut our deploy time by 90%. We moved off Heroku in a
              weekend.”
            </p>
            <footer className="text-sm text-muted">
              — Emma T., CTO @ Shipline
            </footer>
          </div>

          {/* Floating stack */}
          <div className="relative h-55">
            <div className="testimonial-float top-0 left-6">
              “Honestly, I forgot how to ssh — and that’s a good thing.”
              <span>— Jordan C., Timely</span>
            </div>

            <div className="testimonial-float bottom-0 right-6">
              “Setup took minutes. Scaling took care of itself.”
              <span>— Alex R., Beamboard</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
