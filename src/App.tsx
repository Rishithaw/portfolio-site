import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Work } from "./pages/Work/Work";
import { Skills } from "./pages/Skills/Skills";
import { Resources } from "./pages/Resources/Resources";
import { DeveloperSetup } from "./pages/DeveloperSetup/DeveloperSetup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/dev-setup" element={<DeveloperSetup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
