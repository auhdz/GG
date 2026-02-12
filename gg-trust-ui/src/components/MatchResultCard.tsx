import { useState } from 'react';
import type { MatchResult } from '../types';
import { PathBubbles } from './PathBubbles';
import { TrustPillsRow } from './TrustPillsRow';
import { TrustMeter } from './TrustMeter';
import './MatchResultCard.css';

interface MatchResultCardProps {
  result: MatchResult;
  onRequestIntro: () => void;
}

export function MatchResultCard({ result, onRequestIntro }: MatchResultCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="match-card">
      <div className="match-card-top">
        <div className="match-card-avatar">
          {result.name.charAt(0)}
        </div>
        <div className="match-card-identity">
          <h3 className="match-card-name">{result.name}</h3>
          <p className="match-card-role">{result.role} · {result.company}</p>
        </div>
      </div>

      <div className="match-card-path-row">
        <PathBubbles pathString={result.pathString} />
        <button
          className="match-card-expand"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-label="Show trust details"
        >
          <svg
            className={`match-card-chevron ${expanded ? 'expanded' : ''}`}
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M4 6l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {expanded && (
        <div className="match-card-details">
          <TrustPillsRow
            mutualContext={result.mutualContext}
            strengthLabel={result.strengthLabel}
            relevanceLabel={result.relevanceLabel}
            pathString={result.pathString}
          />
          <TrustMeter data={result.trustMeter} />
        </div>
      )}

      <div className="match-card-footer">
        <button className="match-card-intro-btn" onClick={onRequestIntro}>
          Request Intro
        </button>
        <span className="match-card-provenance">{result.provenanceLabel}</span>
      </div>
    </article>
  );
}
