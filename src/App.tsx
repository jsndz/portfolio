import Hero from "./components/Hero";
import Works from "./components/Works";
import Expertise from "./components/Expertise";
import Contact from "./components/Contact";
import { RoleProvider } from "./context/RoleContext";
function App() {
  return (
    <RoleProvider>
      <Hero />
      <Works />
      <Expertise />
      <Contact />
    </RoleProvider>
  );
}

export default App;
