
export default function CTASection({setModal}: {setModal: (value: boolean) => void}) {
    return (
      <section className="py-24 px-6 text-center bg-background">
        <h3 className="section-heading mb-4">Ready to ship faster?</h3>
        <p className="section-subheading">Start deploying in minutes — fast setup, no stress.</p>
        <button
         onClick={() => setModal(true)} 
         className="bg-linear-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-xl text-white font-semibold hover:scale-105 transition">
          See how it works
        </button>
      </section>
    )
}