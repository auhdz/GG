import { useState } from 'react';
import type { MatchResult } from '../types';
import './IntroFrictionPreviewModal.css';

interface IntroFrictionPreviewModalProps {
  result: MatchResult;
  onClose: () => void;
  onSubmit: () => void;
}

export function IntroFrictionPreviewModal({
  result,
  onClose,
  onSubmit,
}: IntroFrictionPreviewModalProps) {
  const [includeContext, setIncludeContext] = useState(false);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-sheet" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">REQUEST INTRO</h2>

        <p className="modal-subtitle">
          {result.pathString.split(' → ')[1] ?? 'Your contact'} will receive:
        </p>

        <ul className="modal-details">
          <li>
            <span className="modal-detail-label">Target:</span>{' '}
            {result.name} ({result.role})
          </li>
          <li>
            <span className="modal-detail-label">Your ask:</span>{' '}
            {result.askSummary}
          </li>
          {includeContext && (
            <li>
              <span className="modal-detail-label">Context note:</span>{' '}
              <em className="modal-context-placeholder">Optional</em>
            </li>
          )}
        </ul>

        <label className="modal-toggle">
          <input
            type="checkbox"
            checked={includeContext}
            onChange={(e) => setIncludeContext(e.target.checked)}
          />
          <span className="toggle-track">
            <span className="toggle-knob" />
          </span>
          <span className="toggle-label">Include context note</span>
        </label>

        <div className="modal-actions">
          <button className="btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-primary" onClick={onSubmit}>
            Request Intro
          </button>
        </div>
      </div>
    </div>
  );
}
