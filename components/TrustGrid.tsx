import { ShieldIcon, BoltIcon, WrenchIcon, BuildingIcon, RefreshCheckIcon } from './Icons';

const items = [
  { icon: ShieldIcon, title: 'Yetkili Servis Deneyimi', desc: 'Yılların tecrübesiyle uzman çözümler' },
  { icon: BoltIcon, title: 'Hızlı Müdahale', desc: 'Aynı gün servis ve hızlı çözüm' },
  { icon: WrenchIcon, title: 'Profesyonel Teknik Ekip', desc: 'Sertifikalı ve eğitimli teknisyenler' },
  { icon: BuildingIcon, title: 'Kurumsal Çözüm', desc: 'İşletmenize özel sözleşmeli hizmet' },
  { icon: RefreshCheckIcon, title: 'Periyodik Bakım', desc: 'Düzenli kontrol ve önleyici bakım' },
];

export default function TrustGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
      {items.map((it) => (
        <article
          key={it.title}
          className="bg-white p-7 rounded-[10px] text-center border border-slate-200 transition-all hover:-translate-y-1 hover:shadow-lg2 hover:border-navy"
        >
          <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-navy to-navy-light rounded-2xl grid place-items-center text-white">
            <it.icon className="w-[26px] h-[26px]" />
          </div>
          <h3 className="text-base font-bold text-navy mb-1.5">{it.title}</h3>
          <p className="text-sm text-slate-500 leading-relaxed">{it.desc}</p>
        </article>
      ))}
    </div>
  );
}
