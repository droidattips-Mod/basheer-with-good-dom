import Stats from "./Stats";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center pt-28"
      style={{
        backgroundImage:
          "linear-gradient(rgba(5,10,25,.82), rgba(5,10,25,.82)), url('D:\00 websites\bunyan\first-pro\public\images\equipment\photo_2026-05-03_01-34-31.jpg')"
      }}
    >
      <div className="section-container flex min-h-[calc(100vh-7rem)] items-center">
        <div className="max-w-3xl">
          <p className="mb-4 inline-block rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-1 text-sm text-amber-300">
            حلول متكاملة للمعدات والرافعات
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            السامي للمقاولات وتأجير الرافعات
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            نوفر أحدث المعدات والرافعات لتنفيذ مشاريعكم بكفاءة وأمان في جميع أنحاء المملكة
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#equipment" className="btn-primary">
              تصفح المعدات
            </a>
            <a href="#contact" className="btn-secondary">
              تواصل معنا
            </a>
          </div>
          <Stats />
        </div>
      </div>
    </section>
  );
}
