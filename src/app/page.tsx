import {
  ExceptOne,
  ExceptTwo,
  HeroSection,
  Playground,
  SelectedWorks,
  WorkSection,
} from "@/components";
import { Reviews } from "@/components/Pages/Home/Reviews";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ExceptOne />
      <WorkSection />
      <SelectedWorks />
      <Reviews />
      <Playground />
    </main>
  );
}
