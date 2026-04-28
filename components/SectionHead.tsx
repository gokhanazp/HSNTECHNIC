interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  invert?: boolean;
}

export default function SectionHead({ eyebrow, title, subtitle, align = 'center', invert = false }: Props) {
  return (
    <div className={`${align === 'center' ? 'text-center mx-auto' : 'text-left'} max-w-[720px] mb-14`}>
      {eyebrow && (
        <span className="inline-block text-[13px] font-bold text-brand-red uppercase tracking-[2px] mb-3">
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-[clamp(26px,3.5vw,38px)] font-extrabold leading-tight tracking-tight mb-3.5 ${
          invert ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-[17px] leading-relaxed ${invert ? 'text-white/70' : 'text-slate-500'}`}>{subtitle}</p>
      )}
    </div>
  );
}
