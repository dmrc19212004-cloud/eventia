// components/EventosExternos.tsx
'use client';

import { useEffect, useState } from 'react';

interface Pais {
  name: { common: string };
  capital: string[];
  region: string;
  flags: { png: string };
}

// Datos de fallback si la API falla
const paisesFallback = [
  { name: { common: 'España' }, capital: ['Madrid'], region: 'Europe', flags: { png: 'https://flagcdn.com/w400/es.png' } },
  { name: { common: 'México' }, capital: ['Mexico City'], region: 'Americas', flags: { png: 'https://flagcdn.com/w400/mx.png' } },
  { name: { common: 'Argentina' }, capital: ['Buenos Aires'], region: 'Americas', flags: { png: 'https://flagcdn.com/w400/ar.png' } },
  { name: { common: 'Colombia' }, capital: ['Bogotá'], region: 'Americas', flags: { png: 'https://flagcdn.com/w400/co.png' } },
  { name: { common: 'Chile' }, capital: ['Santiago'], region: 'Americas', flags: { png: 'https://flagcdn.com/w400/cl.png' } },
  { name: { common: 'Perú' }, capital: ['Lima'], region: 'Americas', flags: { png: 'https://flagcdn.com/w400/pe.png' } },
];

export default function EventosExternos() {
  const [paises, setPaises] = useState<Pais[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPaises() {
      try {
        const res = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,flags', {
          cache: 'no-store',
        });
        
        if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);
        
        const data = await res.json();
        setPaises(data.slice(0, 6));
      } catch (err) {
        console.error('Error al cargar países, usando fallback:', err);
        // Usar datos de fallback si la API falla
        setPaises(paisesFallback);
      } finally {
        setLoading(false);
      }
    }

    fetchPaises();
  }, []);

  if (loading) {
    return (
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">🌍 Destinos Populares</h2>
        <p className="text-gray-500">Cargando países...</p>
      </div>
    );
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4">🌍 Destinos Populares (API Externa)</h2>
      <p className="text-sm text-gray-500 mb-4">
        Datos consumidos desde REST Countries API con fetch + async/await
      </p>
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