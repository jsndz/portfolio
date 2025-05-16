import Hero from "./components/Hero";
import Works from "./components/Works";
import Expertise from "./components/Expertise";
import Contact from "./components/Contact";
import { RoleProvider } from "./context/RoleContext";
import About from "./components/About";
function App() {
  return (
    <RoleProvider>
      <Hero />
      <About></About>
      <Works />
      <Expertise />
      <Contact />
    </RoleProvider>
  );
}

export default App;
