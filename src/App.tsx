import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Work } from './pages/Work/Work';
import { Skills } from './pages/Skills/Skills';
import { Resources } from './pages/Resources/Resources';
import { DeveloperSetup } from './pages/DeveloperSetup/DeveloperSetup';

export default function App() {
  return (
    <BrowserRouter>
      <header style={{ padding: 16, borderBottom: '1px solid #eee' }}>
        <nav style={{ display: 'flex', gap: 16 }}>
          <Link to="/">Home</Link>
          <Link to="/work">Work</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/dev-setup">Developer Setup</Link>
        </nav>
      </header>

      <main style={{ padding: 24 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/dev-setup" element={<DeveloperSetup />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
