import Link from "next/link";

const events = [
  {
    id: "1",
    title: "Taller de Desarrollo Web",
    category: "Tecnología",
    location: "Quito",
    date: "15 de septiembre de 2026",
  },
  {
    id: "2",
    title: "Seminario de Bases de Datos",
    category: "Ingeniería",
    location: "Quito",
    date: "20 de septiembre de 2026",
  },
  {
    id: "3",
    title: "Charla de Inteligencia Artificial",
    category: "Tecnología",
    location: "Virtual",
    date: "25 de septiembre de 2026",
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <section className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold text-slate-900">
          Explorar eventos
        </h1>

        <p className="mt-2 text-slate-600">
          Encuentra talleres, seminarios y actividades académicas.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.id}
              className="rounded-xl bg-white p-6 shadow-sm"
            >
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                {event.category}
              </span>

              <h2 className="mt-4 text-xl font-bold text-slate-900">
                {event.title}
              </h2>

              <p className="mt-2 text-slate-600">{event.location}</p>

              <p className="mt-1 text-slate-600">{event.date}</p>

              <Link
                href={`/eventos/${event.id}`}
                className="mt-5 inline-block font-medium text-blue-600 hover:text-blue-800"
              >
                Ver detalle →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}