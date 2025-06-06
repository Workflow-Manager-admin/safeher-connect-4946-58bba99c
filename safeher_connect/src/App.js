import React from 'react';
import './App.css';

// PUBLIC_INTERFACE
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
            <h2 id="sos-title" className="visually-hidden">SOS: Instant Location Sharing</h2>
            <button className="sos-btn" aria-label="Send SOS and share my location">
              <span className="sos-icon" role="img" aria-label="SOS">🆘</span>
              <span>SOS</span>
            </button>
            <div className="sos-caption">Instantly share your live location with trusted contacts</div>
          </section>

          {/* Two-column area: Live Map & AI Tips */}
          <section className="panels-area">
            {/* Live Crime Map (placeholder for now) */}
            <div className="panel map-panel" aria-labelledby="live-map-title">
              <h3 id="live-map-title" className="panel-title">Live Crime Map</h3>
              <div className="map-placeholder">
                {/* Placeholder: In production, an interactive map component will go here */}
                <div className="map-img" aria-label="Map showing local crime updates">
                  <span className="map-label">[Map placeholder]</span>
                </div>
                <p className="map-desc">Stay aware of recent incidents in your area, updated in real-time.</p>
              </div>
            </div>

            {/* AI Safety Advice Card */}
            <div className="panel aiadvice-panel" aria-labelledby="advice-title">
              <h3 id="advice-title" className="panel-title">AI Safety Advice</h3>
              <div className="ai-advice-card">
                <div className="ai-advice-tip">
                  {/* Placeholder for AI-generated safety advice */}
                  "Walk confidently and stick to well-lit routes. Always let someone know your ETA."
                </div>
                <div className="ai-advice-meta">
                  <span role="img" aria-label="AI">🤖</span>
                  Personalized safety tip
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;