import { waLink } from '@/lib/site';
import { WhatsAppIcon, PhoneIcon } from './Icons';
import { site } from '@/lib/site';

export default function WhatsAppFloat() {
  return (
    <>
      {/* Floating WhatsApp - desktop */}
      <a
        href={waLink()}
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp ile iletişim"
        className="hidden md:grid fixed bottom-7 right-7 w-[60px] h-[60px] bg-whatsapp text-white rounded-full place-items-center shadow-[0_8px_24px_rgba(37,211,102,0.4)] z-[99] hover:bg-whatsapp-dark hover:scale-105 transition-all animate-pulse-wa"
      >
        <WhatsAppIcon className="w-[30px] h-[30px]" />
      </a>

      {/* Mobile sticky bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-3.5 py-2.5 z-[98] shadow-[0_-4px_16px_rgba(0,0,0,0.06)] flex gap-2.5">
        <a
          href={`tel:${site.phone.href}`}
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 font-semibold text-sm rounded-lg bg-navy text-white"
        >
          <PhoneIcon className="w-[18px] h-[18px]" /> Hemen Ara
        </a>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener"
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 font-semibold text-sm rounded-lg bg-whatsapp text-white"
        >
          <WhatsAppIcon className="w-[18px] h-[18px]" /> WhatsApp
        </a>
      </div>
    </>
  );
}
