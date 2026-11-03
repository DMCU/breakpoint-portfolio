import { Hero } from "./components/Hero";
import { SelectedWork } from "./components/SelectedWork";
import { SmoothScroll } from "./components/SmoothScroll";
import { About } from "./components/About";
import { TechStack } from "./components/TechStack";

function App() {
  return (
    <main>
      <SmoothScroll />
      <Hero
        title="I BREAK THINGS."
        role="Senior QA Engineer"
        subtitle="So users don't have to."
      />
      <SelectedWork />
      <About />
      <TechStack />
    </main>
  );
}

export default App;
