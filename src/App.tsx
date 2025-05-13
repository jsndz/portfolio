import Hero from "./components/Hero";
import Works from "./components/Works";
import Awards from "./components/Awards";
import Expertise from "./components/Expertise";
import Contact from "./components/Contact";
import { RoleProvider } from "./lib/RoleContext";
function App() {
  return (
    <RoleProvider>
      <Hero />
      <Works />
      <Awards />
      <Expertise />
      <Contact />
    </RoleProvider>
  );
}

export default App;
