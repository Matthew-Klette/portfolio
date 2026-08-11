export default function SectionEyebrow({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="mb-10 flex items-baseline gap-4">
      <span className="font-heading text-5xl leading-none text-fg sm:text-6xl">
        {number}
      </span>
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-fg-muted">
        [{label}]
      </span>
    </div>
  );
}
