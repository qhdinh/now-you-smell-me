import PerfumeExplorer, { Perfume } from '@/components/PerfumeExplorer';
import perfumesData from '../../perfumes.json';

const perfumes: Perfume[] = (perfumesData as { perfumes: Perfume[] }).perfumes;

export default function Home() {
  return <PerfumeExplorer perfumes={perfumes} />;
}
