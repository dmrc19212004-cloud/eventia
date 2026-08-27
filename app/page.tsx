import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <section className="mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
          Eventos académicos
        </p>

        <h1 className="text-4xl font-bold text-slate-900 md:text-6xl">
          Encuentra eventos para aprender, conectar y crecer.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          Eventia es una plataforma para descubrir talleres, congresos,
          seminarios, charlas y eventos académicos.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/eventos"
            className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Explorar eventos
          </Link>

          <Link
            href="/register"
            className="rounded-lg border border-slate-300 px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Crear cuenta
          </Link>
        </div>
      </section>
    </main>
  );
}