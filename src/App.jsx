// src/App.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import Home from './pages/Home';
import './styles/landing.css';

const App = () => {
  return (
    <div className="app">
      <Helmet>
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Ar2chive – Community Book Repertoire" />
        <meta property="og:description" content="archive of community-recommended books." />
        <meta property="og:image" content="https://i.pinimg.com/736x/12/1c/ee/121cee02940154b9f2b66c82fe2da874.jpg" />
        <meta property="og:url" content="https://ar2chive.vercel.app" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ar2chive – Community Book Repertoire" />
        <meta name="twitter:description" content="archive of community-recommended books." />
        <meta name="twitter:image" content="https://i.pinimg.com/736x/12/1c/ee/121cee02940154b9f2b66c82fe2da874.jpg" />

        {/* Optional: Set title and favicon */}
        <title>Ar2chive</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <Home />
    </div>
  );
};

export default App;
