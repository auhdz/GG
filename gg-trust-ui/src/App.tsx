import { useState } from 'react';
import { mockResults } from './mockData';
import type { MatchResult } from './types';
import { MatchResultCard } from './components/MatchResultCard';
import { IntroFrictionPreviewModal } from './components/IntroFrictionPreviewModal';
import InnerCirclePage from './components/inner-circle/InnerCirclePage';
import './components/inner-circle/inner-circle.css';
import './App.css';

type Page = 'query' | 'inner-circle';

function App() {
  const [page, setPage] = useState<Page>('query');
  const [introTarget, setIntroTarget] = useState<MatchResult | null>(null);

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header-inner">
          <img src="/gg-logo.png" alt="GiGi" className="app-logo-img" />
          <nav className="app-nav">
            <button
              className={`app-nav-btn${page === 'query' ? ' app-nav-btn--active' : ''}`}
              onClick={() => setPage('query')}
            >
              Query Results
            </button>
            <button
              className={`app-nav-btn${page === 'inner-circle' ? ' app-nav-btn--active' : ''}`}
              onClick={() => setPage('inner-circle')}
            >
              Inner Circle
            </button>
          </nav>
        </div>
      </header>

      {page === 'query' && (
        <>
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
        </>
      )}

      {page === 'inner-circle' && <InnerCirclePage />}
    </div>
  );
}

export default App;
