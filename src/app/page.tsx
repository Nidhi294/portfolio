import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import Projects from '@/components/Projects';
import Intro from '@/components/Intro';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Intro />
      {/* 500vh container for the scrolling canvas section */}
      <section className="relative h-[500vh] w-full bg-[#121212]">
        <ScrollyCanvas />
        <Overlay />
      </section>
      
      {/* Post-scroll content */}
      <Projects />
    </main>
  );
}
