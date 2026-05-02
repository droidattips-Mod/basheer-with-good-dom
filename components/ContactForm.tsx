"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { PhoneCall } from "lucide-react";
import { DISPLAY_EMAIL, DISPLAY_PHONE, WHATSAPP_NUMBER } from "@/data/content";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-20">
      <div className="section-container grid gap-8 lg:grid-cols-2">
        <div className="card">
          <h2 className="text-2xl font-extrabold text-slate-900">اطلب عرض سعر الآن</h2>
          <p className="mt-2 text-sm text-slate-600">املأ النموذج وسيقوم فريقنا بالتواصل معك في أسرع وقت.</p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            {[
              { label: "الاسم", type: "text", name: "name" },
              { label: "رقم الجوال", type: "tel", name: "phone" },
              { label: "نوع المعدة", type: "text", name: "equipmentType" },
              { label: "مدة الإيجار", type: "text", name: "duration" },
              { label: "المدينة", type: "text", name: "city" }
            ].map((field) => (
              <div key={field.name}>
                <label htmlFor={field.name} className="mb-1 block text-sm font-semibold text-slate-700">
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                />
              </div>
            ))}
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-semibold text-slate-700">
                رسالة إضافية
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              إرسال الطلب
            </button>
          </form>

          {isSubmitted && <p className="mt-4 rounded-xl bg-emerald-100 p-3 text-sm font-semibold text-emerald-700">تم إرسال طلبك بنجاح. سنتواصل معك قريباً.</p>}
        </div>

        <div className="rounded-2xl bg-brand-navy p-8 text-white shadow-soft">
          <h3 className="text-3xl font-bold">تواصل معنا الآن</h3>
          <div className="mt-8 space-y-5 text-slate-200">
            <p>
              <span className="font-semibold text-white">الهاتف:</span> {DISPLAY_PHONE}
            </p>
            <p>
              <span className="font-semibold text-white">البريد:</span> {DISPLAY_EMAIL}
            </p>
            <p>
              <span className="font-semibold text-white">الموقع:</span> المملكة العربية السعودية
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <Image src="/whatsapp-icon.svg" alt="WhatsApp" width={20} height={20} />
              تواصل عبر واتساب
            </a>
            <a href="tel:0558204317" className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
              <PhoneCall size={18} />
              اتصال مباشر
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
