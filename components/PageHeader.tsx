import Link from 'next/link';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb: { label: string; href?: string }[];
}

export default function PageHeader({ title, subtitle, breadcrumb }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy to-navy-dark text-white py-16 text-center">
      <span
        aria-hidden
        className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(200, 16, 46, 0.18) 0%, transparent 70%)' }}
      />
      <span aria-hidden className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red to-navy-light" />

      <div className="relative max-w-container mx-auto px-6">
        <nav className="text-[13px] text-white/70 mb-4" aria-label="Sayfa konumu">
          {breadcrumb.map((b, i) => (
            <span key={i}>
              {b.href ? (
                <Link href={b.href} className="text-white/90 hover:text-brand-red">
                  {b.label}
                </Link>
              ) : (
                <span>{b.label}</span>
              )}
              {i < breadcrumb.length - 1 && <span className="mx-2">›</span>}
            </span>
          ))}
        </nav>
        <h1 className="text-[clamp(28px,4vw,44px)] font-extrabold mb-3.5 tracking-tight">{title}</h1>
        {subtitle && <p className="text-[17px] text-white/80 max-w-[640px] mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}
