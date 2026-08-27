// components/EventosExternos.tsx
'use client';

import { useEffect, useState } from 'react';

interface Pais {
  name: { common: string };
  capital: string[];
  region: string;
  flags: { png: string };
}

export default function EventosExternos() {
  const [paises, setPaises] = useState<Pais[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPaises() {
      try {
        const res = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,flags');
        if (!res.ok) throw new Error('Error al cargar países');
        const data = await res.json();
        setPaises(data.slice(0, 6)); // Solo los primeros 6
      } catch (err) {
        setError('No se pudieron cargar los países');
      } finally {
        setLoading(false);
      }
    }

    fetchPaises();
  }, []);

  if (loading) return <p>Cargando países...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4">🌍 Destinos Populares</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {paises.map((pais) => (
          <div key={pais.name.common} className="border rounded-lg p-3 text-center bg-gray-50">
            <img src={pais.flags.png} alt={pais.name.common} className="w-16 mx-auto mb-2" />
            <h3 className="font-semibold text-sm">{pais.name.common}</h3>
            <p className="text-xs text-gray-600">{pais.capital?.[0] || 'N/A'}</p>
            <p className="text-xs text-gray-500">{pais.region}</p>
          </div>
        ))}
      </div>
    </div>
  );
}