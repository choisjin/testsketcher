/**
 * TestSketcher - Main App Component
 */

import React from 'react';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🎨 TestSketcher</h1>
        <p>Visual node-based test case editor for Robot Framework</p>
      </header>
      
      <main className="app-main">
        <div className="panel panel-keywords">
          <h2>Keywords</h2>
          <p>Coming soon...</p>
        </div>
        
        <div className="panel panel-canvas">
          <h2>Canvas</h2>
          <p>Node editor will be here</p>
        </div>
        
        <div className="panel panel-properties">
          <h2>Properties</h2>
          <p>Coming soon...</p>
        </div>
      </main>
    </div>
  );
}

export default App;
