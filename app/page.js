import { FadeIn } from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";


export default function Home() {
  return (
    <>
      <h1>Navbar</h1>

      <section className="bg-brand-gradient text-white">
        <FadeIn>
          <h1 className="text-5xl font-bold mb-6">
            Learn. LevelUp. Lead.
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Unlock your potential with a modern gamified learning
            platform designed for growth-driven teams. 
          </p>
          <div className="flex gap-4">
            <Button>Start Your Learning Journey</Button>
            <Button variant="secondary">Book A Demo</Button>
          </div>
        </FadeIn>
      </section>

      <h1>Footer</h1>
    </>
  );
}
