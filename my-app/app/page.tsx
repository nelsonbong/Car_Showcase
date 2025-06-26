'use client';

import { Suspense } from 'react';
import { Hero } from '@/components';
import CarCatalogue from '@/components/CarCatalogue';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Suspense fallback={<div>Loading cars...</div>}>
        <CarCatalogue />
      </Suspense>
    </main>
  );
}
