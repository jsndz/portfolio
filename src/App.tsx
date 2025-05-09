import Hero from "./components/Hero";
import Works from "./components/Works";
import Awards from "./components/Awards";
import Expertise from "./components/Expertise";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Works />
      <Awards />
      <Expertise />
      <Contact />
    </div>
  );
}

export default App;
