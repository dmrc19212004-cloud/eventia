// app/eventos/[id]/page.tsx
import Link from 'next/link';

// Datos de ejemplo (mismos que en la página principal)
const eventos = [
  {
    id: 1,
    titulo: 'Concierto de Rock',
    fecha: '2025-09-15',
    lugar: 'Estadio Nacional',
    descripcion: 'Gran concierto de rock con bandas locales e internacionales.',
  },
  {
    id: 2,
    titulo: 'Festival de Jazz',
    fecha: '2025-10-20',
    lugar: 'Teatro Municipal',
    descripcion: 'Noche inolvidable con los mejores artistas del jazz.',
  },
  {
    id: 3,
    titulo: 'Obra de Teatro',
    fecha: '2025-11-05',
    lugar: 'Centro Cultural',
    descripcion: 'Presentación de la obra clásica contemporánea.',
  },
];

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EventoDetalle({ params }: PageProps) {
  const { id } = await params;
  const evento = eventos.find((e) => e.id === Number(id));

  if (!evento) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Evento no encontrado</h1>
        <Link href="/eventos" className="text-blue-600 hover:underline">
          ← Volver a eventos
        </Link>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{evento.titulo}</h1>
      
      <div className="space-y-3 mb-6">
        <p>
          <strong>📅 Fecha:</strong> {evento.fecha}
        </p>
        <p>
          <strong>📍 Lugar:</strong> {evento.lugar}
        </p>
        <p>
          <strong>📝 Descripción:</strong> {evento.descripcion}
        </p>
      </div>

      <Link
        href="/eventos"
        className="inline-block bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
      >
        ← Volver a eventos
      </Link>
    </div>
  );
}