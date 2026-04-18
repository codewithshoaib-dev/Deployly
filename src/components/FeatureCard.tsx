

export default function FeatureCard({ title, desc, Icon, note }: { title: string; desc: string; Icon?: React.ComponentType<{ className: string }>; note?: string }) {
  return (
  <div className="bg-neutral-200 border border-neutral-300 rounded-2xl p-6 h-full shadow-sm hover:shadow-md hover:border-blue-600 transition-all group">
    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600/10 text-blue-500 mb-4">
      {Icon && <Icon className="w-6 h-6" />}
    </div>
    <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
    <p className="text-sm text-foreground mb-2">{desc}</p>
    {note && <p className="text-xs text-neutral-400">{note}</p>}
  </div>
  )
};
