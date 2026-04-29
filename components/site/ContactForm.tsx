"use client";

import { FormEvent, useState } from "react";
import { translations } from "@/data/content";
import type { Locale } from "@/types/site";

export default function ContactForm({ locale }: { locale: Locale }) {
  const t = translations[locale].contact;
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  };

  return (
    <div className="card">
      <h3 className="text-2xl font-extrabold text-[#004B26]">{t.formTitle}</h3>
      <form className="mt-6 space-y-4" onSubmit={onSubmit}>
        <input required placeholder={t.fields.name} className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-sm focus:border-[#006C35] focus:outline-none focus:ring-2 focus:ring-[#006C35]/20" />
        <input required placeholder={t.fields.mobile} className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-sm focus:border-[#006C35] focus:outline-none focus:ring-2 focus:ring-[#006C35]/20" />
        <input type="email" required placeholder={t.fields.email} className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-sm focus:border-[#006C35] focus:outline-none focus:ring-2 focus:ring-[#006C35]/20" />
        <input required placeholder={t.fields.equipmentType} className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-sm focus:border-[#006C35] focus:outline-none focus:ring-2 focus:ring-[#006C35]/20" />
        <input required placeholder={t.fields.city} className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-sm focus:border-[#006C35] focus:outline-none focus:ring-2 focus:ring-[#006C35]/20" />
        <input required placeholder={t.fields.duration} className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-sm focus:border-[#006C35] focus:outline-none focus:ring-2 focus:ring-[#006C35]/20" />
        <textarea placeholder={t.fields.details} rows={4} className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-sm focus:border-[#006C35] focus:outline-none focus:ring-2 focus:ring-[#006C35]/20" />
        <button type="submit" className="btn-primary w-full">
          {t.submit}
        </button>
      </form>
      {submitted && <p className="mt-4 rounded-xl bg-[#ECFDF3] p-3 text-sm font-semibold text-[#006C35]">{t.success}</p>}
    </div>
  );
}
