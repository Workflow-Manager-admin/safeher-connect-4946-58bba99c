// App.js: Main container for SafeHer Connect
import React from 'react';
import './App.css';
import LocationSharing from './LocationSharing';
import CrimeUpdates from './CrimeUpdates';
import SafetyAdvice from './SafetyAdvice';

/**
 * PUBLIC_INTERFACE
 * Main container app layout with integrated core feature stubs for:
 *  - LocationSharing
 *  - CrimeUpdates
 *  - SafetyAdvice
 */
function App() {
  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="container navbar-content">
          <div className="logo">
            <span className="logo-symbol">&#9733;</span> SafeHer Connect
          </div>
          {/* Navigation can be expanded here if needed */}
        </div>
      </nav>

      {/* Main container for Home Layout */}
      <main className="main-container">
        <div className="container main-flex">
          {/* Prominent SOS Button Area */}
          <section className="sos-section" aria-labelledby="sos-title">
            <h2 id="sos-title" className="visually-hidden">
              SOS: Instant Location Sharing
            </h2>
            <button className="sos-btn" aria-label="Send SOS and share my location">
              <span className="sos-icon" role="img" aria-label="SOS">
                🆘
              </span>
              <span>SOS</span>
            </button>
            <div className="sos-caption">
              Instantly share your live location with trusted contacts
            </div>
          </section>

          {/* Panels Area: Three core features */}
          <section className="panels-area">
            {/* Location Sharing Feature Panel */}
            <div className="panel" aria-labelledby="location-sharing-title">
              <h3 id="location-sharing-title" className="panel-title">
                Location Sharing
              </h3>
              <LocationSharing />
            </div>
            {/* Crime Updates Feature Panel */}
            <div className="panel" aria-labelledby="crime-updates-title">
              <h3 id="crime-updates-title" className="panel-title">
                Crime Updates
              </h3>
              <CrimeUpdates />
            </div>
            {/* Safety Advice Feature Panel */}
            <div className="panel" aria-labelledby="safety-advice-title">
              <h3 id="safety-advice-title" className="panel-title">
                Safety Advice
              </h3>
              <SafetyAdvice />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;