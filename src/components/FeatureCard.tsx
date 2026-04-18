export default function FeatureCard({
  title,
  desc,
  Icon,
  note,
}: {
  title: string;
  desc: string;
  Icon?: React.ComponentType<{ className: string }>;
  note?: string;
}) {
  return (
    <div className="feature-card group">
      {/* Icon */}
      <div className="feature-card__icon">
        {Icon && <Icon className="w-5 h-5" />}
      </div>

      {/* Content */}
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__desc">{desc}</p>

      {note && <p className="feature-card__note">{note}</p>}
    </div>
  );
}
