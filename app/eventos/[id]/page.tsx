import Link from "next/link";

interface EventDetailPageProps {
  params: {
    id: string;
  };
}

export default function EventDetailPage({
  params,
}: EventDetailPageProps) {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <section className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-sm">
        <p className="text-sm font-medium text-blue-600">
          Evento #{params.id}
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Detalle del evento
        </h1>

        <p className="mt-4 text-slate-600">
          Aquí se mostrará la información completa del evento seleccionado.
        </p>

        <Link
          href="/eventos"
          className="mt-6 inline-block font-medium text-blue-600 hover:text-blue-800"
        >
          ← Volver a eventos
        </Link>
      </section>
    </main>
  );
}