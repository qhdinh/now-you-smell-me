'use client';
import { useState } from 'react';

export interface Perfume {
  name: string;
  brand: string;
  notes: string[];
}

export default function PerfumeExplorer({ perfumes }: { perfumes: Perfume[] }) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Perfume | null>(null);

  const filtered = perfumes.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.notes.some((n) => n.toLowerCase().includes(query.toLowerCase()))
  );

  const recommended = selected
    ? perfumes.filter(
        (p) =>
          p.name !== selected.name &&
          p.notes.some((n) => selected.notes.includes(n))
      )
    : [];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Perfume Explorer</h1>
      <input
        type="text"
        placeholder="Search by name or note"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginBottom: '20px', padding: '8px', width: '100%' }}
      />
      <ul>
        {filtered.map((p) => (
          <li key={p.name} style={{ marginBottom: '10px' }}>
            <button
              onClick={() => setSelected(p)}
              style={{ fontWeight: 'bold', cursor: 'pointer' }}
            >
              {p.name}
            </button>{' '}
            by {p.brand}
            <ul>
              {p.notes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      {selected && (
        <div style={{ marginTop: '40px' }}>
          <h2>Similar to {selected.name}</h2>
          <ul>
            {recommended.map((p) => (
              <li key={p.name}>{p.name} by {p.brand}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
