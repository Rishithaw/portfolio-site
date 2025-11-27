import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Work } from './pages/Work/Work';
import { Skills } from './pages/Skills/Skills';
import { Resources } from './pages/Resources/Resources';
import { DeveloperSetup } from './pages/DeveloperSetup/DeveloperSetup';
import Footer from './Components/Footer/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <header
        style={{
          // padding: '20px 40px',
          backgroundColor: '#ffffff',
          borderBottom: '2px solid #e0e0e0',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
        }}
      >
        <nav
          style={{
            display: 'flex',
            gap: '32px',
            maxWidth: '1200px',
            margin: '0 auto',
            alignItems: 'center',
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              color: '#1a1a1a',
              fontSize: '16px',
              fontWeight: '500',
              padding: '8px 16px',
              borderRadius: '6px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#f5f5f5';
              e.currentTarget.style.color = '#007bff';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#1a1a1a';
            }}
          >
            Home
          </Link>

          <Link
            to="/work"
            style={{
              textDecoration: 'none',
              color: '#1a1a1a',
              fontSize: '16px',
              fontWeight: '500',
              padding: '8px 16px',
              borderRadius: '6px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#f5f5f5';
              e.currentTarget.style.color = '#007bff';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#1a1a1a';
            }}
          >
            Work
          </Link>

          <Link
            to="/skills"
            style={{
              textDecoration: 'none',
              color: '#1a1a1a',
              fontSize: '16px',
              fontWeight: '500',
              padding: '8px 16px',
              borderRadius: '6px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#f5f5f5';
              e.currentTarget.style.color = '#007bff';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#1a1a1a';
            }}
          >
            Skills
          </Link>

          <Link
            to="/resources"
            style={{
              textDecoration: 'none',
              color: '#1a1a1a',
              fontSize: '16px',
              fontWeight: '500',
              padding: '8px 16px',
              borderRadius: '6px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#f5f5f5';
              e.currentTarget.style.color = '#007bff';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#1a1a1a';
            }}
          >
            Resources
          </Link>

          <Link
            to="/dev-setup"
            style={{
              textDecoration: 'none',
              color: '#1a1a1a',
              fontSize: '16px',
              fontWeight: '500',
              padding: '8px 16px',
              borderRadius: '6px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#f5f5f5';
              e.currentTarget.style.color = '#007bff';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#1a1a1a';
            }}
          >
            Developer Setup
          </Link>
        </nav>
      </header>

      <main
        style={{
          minHeight: 'calc(100vh - 80px)',
          backgroundColor: '#fafafa',
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/dev-setup" element={<DeveloperSetup />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
