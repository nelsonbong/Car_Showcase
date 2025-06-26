'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { fetchCars } from '@/utils';
import { fuels, yearsOfProduction } from '@/constants';
import { CarCard, CustomFilter, SearchBar } from './';

export default function CarCatalogue() {
  const searchParams = useSearchParams();

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCars() {
      const manufacturer = searchParams.get('manufacturer') || '';
      const year = parseInt(searchParams.get('year') || '2022');
      const fuel = searchParams.get('fuel') || '';
      const model = searchParams.get('model') || '';

      const allCars = await fetchCars({ manufacturer, year, fuel, model });
      setCars(allCars);
      setLoading(false);
    }

    loadCars();
  }, [searchParams]);

  const isDataEmpty = !Array.isArray(cars) || cars.length < 1;

  return (
    <div className="mt-12 padding-x padding-y max-width" id="discover">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
        <p>Explore the cars you might like</p>
      </div>
      <div className="home__filters max-h-screen">
        <SearchBar />
        <div className="home__filter-container">
          <CustomFilter title="fuel" options={fuels} />
          <CustomFilter title="year" options={yearsOfProduction} />
        </div>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : !isDataEmpty ? (
        <section>
          <div className="home__cars-wrapper">
            {cars.map((car, index) => (
              <CarCard key={index} car={car} />
            ))}
          </div>
        </section>
      ) : (
        <div className="home_error-container">
          <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          <p>No cars found.</p>
        </div>
      )}
    </div>
  );
}
