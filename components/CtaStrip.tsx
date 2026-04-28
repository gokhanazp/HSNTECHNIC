import Link from 'next/link';
import { waLink } from '@/lib/site';

interface Props {
  title: string;
  description: string;
}

export default function CtaStrip({ title, description }: Props) {
  return (
    <section className="px-0 py-0">
      <div className="max-w-container mx-auto px-6 my-16">
        <div className="relative overflow-hidden bg-gradient-to-r from-navy to-navy-light rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-[1.5fr_auto] gap-8 items-center text-white">
          <span
            aria-hidden
            className="absolute -top-24 -right-24 w-[300px] h-[300px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(200, 16, 46, 0.3) 0%, transparent 70%)' }}
          />
          <div className="relative">
            <h3 className="text-2xl md:text-[26px] font-extrabold mb-2 tracking-tight">{title}</h3>
            <p className="text-white/85 text-base">{description}</p>
          </div>
          <div className="relative flex gap-3 flex-wrap">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 font-semibold text-base rounded-lg bg-whatsapp text-white hover:bg-whatsapp-dark transition-colors"
            >
              WhatsApp İletişim
            </a>
            <Link
              href="/servis-talep"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 font-semibold text-base rounded-lg bg-brand-red text-white hover:bg-brand-red-dark transition-colors"
            >
              Servis Talebi
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
