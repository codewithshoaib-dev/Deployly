


export default function Hero({setModal} : {setModal: (value: boolean) => void}) {
    

      const handleClick = () => {
    alert("This is a UI demo, full flow available on request.");
  };

    return (
     
<section className="pt-32 pb-20 px-6 text-center max-w-3xl mx-auto">
        <h1 className="section-heading">Instant Deployments. Zero DevOps.</h1>
        <p className="section-subheading">Deploy your SaaS product to production in seconds — with built-in CI/CD, rollback, and multi-region support.</p>
        <div className="flex justify-center space-x-4">
          <button 
          onClick={handleClick}
           className="btn-primary">Get Started Free</button>
          <button
           onClick={() => setModal(true)} 
           className="bg-primary px-5 py-2 rounded-xl font-semibold text-white hover:scale-105 transition">
            See how it works
          </button>
        </div>
      </section>
    
    )
}