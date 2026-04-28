import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sayfa Bulunamadı (404)',
  description: 'Aradığınız sayfa bulunamadı. HSN TECHNIC ana sayfaya dönerek diğer hizmetlerimizi inceleyebilirsiniz.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-[640px] mx-auto px-6 text-center">
        <div className="text-[120px] font-extrabold text-navy leading-none mb-3">404</div>
        <h1 className="text-3xl font-extrabold text-navy mb-3">Sayfa Bulunamadı</h1>
        <p className="text-slate-600 text-base leading-relaxed mb-8">
          Aradığınız sayfa taşınmış, kaldırılmış veya hiç var olmamış olabilir. Ana sayfadan diğer hizmetlerimizi
          inceleyebilirsiniz.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-7 py-4 font-semibold text-base rounded-lg bg-brand-red text-white hover:bg-brand-red-dark transition-colors"
          >
            Ana Sayfaya Dön
          </Link>
          <Link
            href="/hizmetler"
            className="inline-flex items-center justify-center px-7 py-4 font-semibold text-base rounded-lg border-2 border-slate-300 text-navy hover:border-navy transition-colors"
          >
            Hizmetler
          </Link>
        </div>
      </div>
    </section>
  );
}
