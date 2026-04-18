export default function Testimonials() {

    return (
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16 text-foreground">
          What Our Users Say
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <blockquote className="bg-neutral-200 p-6 rounded-2xl border border-neutral-800 shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg">
            <p className="italic text-neutral-900 text-lg leading-relaxed">
              “Deployly cut our deploy time by 90%. We moved off Heroku in a
              weekend.”
            </p>
            <footer className="mt-6 text-sm text-neutral-500">
              — Emma T., CTO @ Shipline
            </footer>
          </blockquote>

          <blockquote className="bg-neutral-200 p-6 rounded-2xl border border-neutral-800 shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg">
            <p className="italic text-neutral-900 text-lg leading-relaxed">
              “Honestly, I forgot how to ssh — and that’s a good thing.”
            </p>
            <footer className="mt-6 text-sm text-neutral-500">
              — Jordan C., Timely
            </footer>
          </blockquote>
        </div>
      </section>
    );
}