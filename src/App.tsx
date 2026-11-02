import { Hero } from "./components/Hero";
import { SelectedWork } from "./components/SelectedWork";

function App() {
  return (
    <main>
      <Hero
        title="I BREAK THINGS."
        role="Senior QA Engineer"
        subtitle="So users don't have to."
      />
      <SelectedWork />
    </main>
  );
}

export default App;
