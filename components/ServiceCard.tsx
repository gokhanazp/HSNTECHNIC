import Link from 'next/link';
import { iconByKey } from './Icons';

interface Props {
  title: string;
  short: string;
  iconKey?: string;
  href?: string;
}

export default function ServiceCard({ title, short, iconKey = 'kitchen', href }: Props) {
  const Icon = iconByKey[iconKey] || iconByKey.kitchen;
  return (
    <article className="group relative overflow-hidden bg-white border border-slate-200 rounded-2xl p-7 transition-all hover:-translate-y-1.5 hover:shadow-lg2 hover:border-transparent">
      <span
        aria-hidden
        className="absolute top-0 left-0 h-1 w-0 bg-brand-red transition-all duration-300 group-hover:w-full"
      />
      <div className="w-16 h-16 bg-slate-100 text-navy rounded-xl grid place-items-center mb-5 transition-colors group-hover:bg-navy group-hover:text-white">
        <Icon className="w-[30px] h-[30px]" />
      </div>
      <h3 className="text-[19px] font-bold text-navy mb-2.5">{title}</h3>
      <p className="text-slate-500 text-[15px] leading-relaxed mb-4">{short}</p>
      {href && (
        <Link href={href} className="text-sm font-semibold text-brand-red inline-flex items-center gap-1.5">
          Detayları Gör →
        </Link>
      )}
    </article>
  );
}
