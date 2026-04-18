import FeatureCard from "./FeatureCard";
import { ShieldCheck, Globe, Undo, ScrollText } from "lucide-react";


const featuresData = [
    {
      title: "1-Click Rollbacks",
      description: "Revert broken deploys instantly",
      note: "Avoid downtime with instant rollback",
      icon: Undo,
    },

    {
      title: "Global Edge Deployments",
      description: "Superfast load times everywhere",
      note: "Backed by our global CDN",
      icon: Globe,
    },

    {
      title: "Secrets & Access Control",
      description: "Secure by default",
      note: "Granular permissions and secret vault",
      icon: ScrollText,
    },

    {
      title: "Audit Logging",
      description: "Complete visibility into every deploy",
      note: "Track who deployed what, and when",
      icon: ShieldCheck,
    },
  ];


export default function Features() {
 
    return (
      <section
        id="features"
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      >
        <h2 className="section-heading text-center mb-16">
          Why Teams Choose Us
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {featuresData.map((feature, i) => {
            return (
              <FeatureCard
                key={i}
                title={feature.title}
                desc={feature.description}
                note={feature.note}
                Icon={feature.icon}
              />
            );
          })}
        </div>
      </section>
    );
}