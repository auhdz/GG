import { useState } from 'react';
import { mockResults } from './mockData';
import type { MatchResult } from './types';
import { MatchResultCard } from './components/MatchResultCard';
import { IntroFrictionPreviewModal } from './components/IntroFrictionPreviewModal';
import './App.css';

function App() {
  const [introTarget, setIntroTarget] = useState<MatchResult | null>(null);

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header-inner">
          <img src="/gg-logo.png" alt="GiGi" className="app-logo-img" />
          <p className="app-tagline">Query Results</p>
        </div>
      </header>

      <main className="results-list">
        {mockResults.map((result) => (
          <MatchResultCard
            key={result.id}
            result={result}
            onRequestIntro={() => setIntroTarget(result)}
          />
        ))}
      </main>

      {introTarget && (
        <IntroFrictionPreviewModal
          result={introTarget}
          onClose={() => setIntroTarget(null)}
          onSubmit={() => {
            setIntroTarget(null);
          }}
        />
      )}
    </div>
  );
}

export default App;
