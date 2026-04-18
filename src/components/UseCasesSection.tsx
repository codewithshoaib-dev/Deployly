import FeatureCard from "./FeatureCard";
  import { Rocket, Settings, TimerReset } from 'lucide-react';

const useCasesData = [
    {
      title: "Indie Developers",
      description: "Ship faster without touching AWS or Docker.",
      icon: Rocket,
    },
    {
      title: "Startup CTOs",
      description: "Focus on features, not infrastructure.",
      icon: Settings,
    },
    {
      title: "Agencies",
      description: "Launch MVPs for clients in hours, not days.",
      icon: TimerReset,
    },
  ];

export default function UseCases() {

    return (
<section className="py-24 px-6 max-w-6xl mx-auto">
  <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
    Built for Real SaaS Teams
  </h2>
  
  <div  className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
  {useCasesData.map((uc, i) => {

    return (
    <FeatureCard
      key={i}
      Icon={uc.icon}
      title={uc.title}
      desc={uc.description}
    />)

      })}
     </div>
  
</section>

    )
}