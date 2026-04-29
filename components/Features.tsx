import { Award, BadgeDollarSign, Zap } from "lucide-react";
import { features } from "@/data/siteData";

const icons = [Award, Zap, BadgeDollarSign];

export default function Features() {
  return (
    <section id="about" className="bg-slate-50 py-20">
      <div className="section-container">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = icons[index];
            return (
              <article key={feature.title} className="card transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 inline-flex rounded-xl bg-amber-100 p-3 text-amber-600">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
