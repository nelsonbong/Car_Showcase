import { Hero } from "@/components";
import CarCatalogue from "@/components/CarCatalogue"; // new client component

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <CarCatalogue />
    </main>
  );
}
