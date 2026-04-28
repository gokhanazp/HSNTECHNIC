'use client';

import { useState } from 'react';
import { site, waLink } from '@/lib/site';
import { ArrowRightIcon } from './Icons';

const services = [
  'Endüstriyel Mutfak Ocak Tamiri',
  'Endüstriyel Fritöz Tamiri',
  'Endüstriyel Bulaşık Makinesi Tamiri',
  'Endüstriyel Izgara Tamiri',
  'Endüstriyel Benmari Tamiri',
  'Endüstriyel Fırın Tamiri',
  'Endüstriyel Davlumbaz Tamiri',
  'Endüstriyel Soğuk Oda Tamiri',
  'Periyodik Bakım',
  'Mutfak Kurulum / Proje',
  '2. El Ekipman Alım Satım',
  'Öztiryakiler Servisi',
  'Öztiryakiler Tamiri',
  'Öztiryakiler Bakımı',
  'Diğer',
];

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const ad = (formData.get('ad') || '').toString().trim();
    const tel = (formData.get('telefon') || '').toString().trim();
    const firma = (formData.get('firma') || '').toString().trim();
    const hizmet = (formData.get('hizmet') || '').toString().trim();
    const aciklama = (formData.get('aciklama') || '').toString().trim();

    if (!ad || !tel || !hizmet) {
      setStatus('Lütfen ad soyad, telefon ve hizmet türü alanlarını doldurun.');
      return;
    }

    const lines = [
      'Merhaba HSN TECHNIC,',
      '',
      'Servis talebim:',
      `• Ad Soyad: ${ad}`,
      `• Telefon: ${tel}`,
      firma ? `• Firma: ${firma}` : '',
      `• Hizmet Türü: ${hizmet}`,
      aciklama ? `• Açıklama: ${aciklama}` : '',
      '',
      'Geri dönüşünüzü rica ederim.',
    ].filter(Boolean);

    const text = lines.join('\n');
    setStatus('Talebiniz alındı. WhatsApp üzerinden hızlı iletişime yönlendiriliyorsunuz...');
    window.open(waLink(text), '_blank');
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className={`grid ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'} gap-4`}>
        <Field label="Ad Soyad" name="ad" required placeholder="Adınız ve soyadınız" />
        <Field label="Telefon" name="telefon" type="tel" required placeholder="0(5__) ___ __ __" />
      </div>

      {!compact && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Firma / İşletme" name="firma" placeholder="İşletme adınız (opsiyonel)" />
          <SelectField label="Hizmet Türü" name="hizmet" required options={services} />
        </div>
      )}

      {compact && <SelectField label="Hizmet Türü" name="hizmet" required options={services} />}

      <TextareaField
        label="Açıklama"
        name="aciklama"
        placeholder="Sorununuzu, ekipman markasını ve ihtiyaç duyduğunuz hizmeti detaylı olarak yazabilirsiniz."
      />

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 font-semibold text-base rounded-lg bg-brand-red text-white hover:bg-brand-red-dark transition-colors mt-2"
      >
        Servis Talebini Gönder
        <ArrowRightIcon className="w-[18px] h-[18px]" />
      </button>

      <p
        className={`text-[13px] text-center ${
          status && status.includes('alındı') ? 'text-navy font-semibold' : 'text-slate-500'
        }`}
      >
        {status || 'Form gönderildikten sonra hızlı iletişim için WhatsApp\'a yönlendirileceksiniz.'}
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-[13px] font-semibold text-slate-700 uppercase tracking-wide mb-2">
        {label} {required && <span className="text-brand-red">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="px-4 py-3.5 border-[1.5px] border-slate-200 rounded-[10px] text-[15px] bg-slate-50 text-slate-900 transition-all focus:outline-none focus:border-navy focus:bg-white focus:ring-4 focus:ring-navy/10"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  required = false,
  options,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: string[];
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-[13px] font-semibold text-slate-700 uppercase tracking-wide mb-2">
        {label} {required && <span className="text-brand-red">*</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="px-4 py-3.5 border-[1.5px] border-slate-200 rounded-[10px] text-[15px] bg-slate-50 text-slate-900 transition-all focus:outline-none focus:border-navy focus:bg-white focus:ring-4 focus:ring-navy/10"
      >
        <option value="" disabled>
          Seçiniz...
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextareaField({ label, name, placeholder }: { label: string; name: string; placeholder?: string }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-[13px] font-semibold text-slate-700 uppercase tracking-wide mb-2">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        rows={5}
        className="resize-y min-h-[120px] px-4 py-3.5 border-[1.5px] border-slate-200 rounded-[10px] text-[15px] bg-slate-50 text-slate-900 transition-all focus:outline-none focus:border-navy focus:bg-white focus:ring-4 focus:ring-navy/10"
      />
    </div>
  );
}
