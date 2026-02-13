import React from 'react';
import type { WarmPath } from './mockData';

type Props = {
  paths: WarmPath[];
};

export default function EvidenceList({ paths }: Props) {
  if (paths.length === 0) {
    return (
      <div className="ic-evidence-empty">
        No warm paths found for this signal.
      </div>
    );
  }

  return (
    <div className="ic-evidence">
      <p className="ic-evidence-title">Warm paths</p>
      {paths.map((wp, i) => (
        <div key={i} className="ic-evidence-card">
          <div className="ic-evidence-path">
            {wp.path.map((node, j) => (
              <span key={j} className="ic-evidence-node-group">
                {j > 0 && <span className="ic-evidence-arrow">→</span>}
                <span
                  className={`ic-evidence-node${
                    j === 0
                      ? ' ic-evidence-node--you'
                      : j === wp.path.length - 1
                        ? ' ic-evidence-node--target'
                        : ' ic-evidence-node--mid'
                  }`}
                >
                  {node}
                </span>
              </span>
            ))}
          </div>
          <p className="ic-evidence-context">{wp.context}</p>
          <div className="ic-evidence-sources">
            {wp.sources.map((src) => (
              <span key={src} className="ic-evidence-tag">
                {src}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
