import React, { useState } from 'react';
import VisibilityPicker from './VisibilityPicker';
import EvidenceList from './EvidenceList';
import { mockWarmPaths } from './mockData';
import type { WarmPath } from './mockData';

type Urgency = 'Low' | 'Med' | 'High';

export type SignalState = {
  stage: 'draft' | 'compose' | 'ready' | 'active';
  note: string;
  urgency: Urgency;
};

type Props = {
  type: string;
  label: string;
  description: string;
  placeholder: string;
  state: SignalState;
  onChange: (next: SignalState) => void;
};

const urgencyOptions: Urgency[] = ['Low', 'Med', 'High'];

export default function SignalCard({
  type,
  label,
  description,
  placeholder,
  state,
  onChange,
}: Props) {
  const [evidencePaths, setEvidencePaths] = useState<WarmPath[] | null>(null);
  const [draftNote, setDraftNote] = useState(state.note);
  const [draftUrgency, setDraftUrgency] = useState<Urgency>(state.urgency);

  if (state.stage === 'draft') {
    return (
      <div className="ic-card">
        <div className="ic-card-top">
          <div>
            <h3 className="ic-card-label">{label}</h3>
            <p className="ic-card-desc">{description}</p>
          </div>
        </div>
        <div className="ic-card-actions">
          <button
            className="ic-btn ic-btn--activate"
            onClick={() => {
              setDraftNote(state.note);
              setDraftUrgency(state.urgency);
              onChange({ ...state, stage: 'compose' });
            }}
          >
            Set signal
          </button>
        </div>
        <p className="ic-card-quiet">Nothing runs until you activate.</p>
      </div>
    );
  }

  if (state.stage === 'compose') {
    return (
      <div className="ic-card ic-card--composing">
        <div className="ic-card-top">
          <div>
            <h3 className="ic-card-label">{label}</h3>
            <p className="ic-card-desc">{description}</p>
          </div>
        </div>
        <div className="ic-compose">
          <textarea
            className="ic-compose-textarea"
            placeholder={placeholder}
            value={draftNote}
            onChange={(e) => setDraftNote(e.target.value)}
            rows={3}
          />
          <div className="ic-compose-row">
            <div className="ic-chips">
              <span className="ic-chips-label">Urgency</span>
              {urgencyOptions.map((u) => (
                <button
                  key={u}
                  type="button"
                  className={`ic-chip${draftUrgency === u ? ' ic-chip--selected' : ''}`}
                  onClick={() => setDraftUrgency(u)}
                >
                  {u}
                </button>
              ))}
            </div>
            <VisibilityPicker />
          </div>
          <div className="ic-compose-actions">
            <button
              className="ic-btn ic-btn--confirm"
              onClick={() => {
                onChange({ ...state, stage: 'active', note: draftNote, urgency: draftUrgency });
                setEvidencePaths(null);
              }}
            >
              Activate signal
            </button>
            <button
              className="ic-btn ic-btn--activate"
              onClick={() => {
                onChange({ ...state, stage: 'ready', note: draftNote, urgency: draftUrgency });
                setEvidencePaths(null);
              }}
            >
              Save draft
            </button>
            <button
              className="ic-btn ic-btn--cancel"
              onClick={() => {
                setDraftNote(state.note);
                setDraftUrgency(state.urgency);
                onChange({ ...state, stage: state.note ? 'ready' : 'draft' });
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (state.stage === 'ready') {
    return (
      <div className="ic-card ic-card--ready">
        <div className="ic-card-top">
          <div>
            <h3 className="ic-card-label">
              {label}
              <span className="ic-status-pill ic-status-pill--ready">Ready</span>
            </h3>
            <p className="ic-card-desc">{description}</p>
          </div>
          <VisibilityPicker />
        </div>
        {state.note && <p className="ic-card-note">"{state.note}"</p>}
        <div className="ic-card-meta">
          <span className="ic-card-meta-item">Urgency: {state.urgency}</span>
        </div>
        <div className="ic-card-actions">
          <button className="ic-btn ic-btn--confirm" onClick={() => onChange({ ...state, stage: 'active' })}>
            Activate signal
          </button>
          <button className="ic-btn ic-btn--ghost" onClick={() => { setDraftNote(state.note); setDraftUrgency(state.urgency); onChange({ ...state, stage: 'compose' }); }}>
            Edit
          </button>
          <button className="ic-btn ic-btn--cancel" onClick={() => { onChange({ stage: 'draft', note: '', urgency: 'Low' }); setEvidencePaths(null); }}>
            Discard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="ic-card ic-card--active">
      <div className="ic-card-top">
        <div>
          <h3 className="ic-card-label">
            {label}
            <span className="ic-status-pill ic-status-pill--active">Active</span>
          </h3>
          <p className="ic-card-desc">{description}</p>
        </div>
        <VisibilityPicker active />
      </div>
      {state.note && <p className="ic-card-note">"{state.note}"</p>}
      <div className="ic-card-meta">
        <span className="ic-card-meta-item">Urgency: {state.urgency}</span>
      </div>
      <div className="ic-card-actions">
        {evidencePaths === null ? (
          <button className="ic-btn ic-btn--activate" onClick={() => setEvidencePaths(mockWarmPaths[type] ?? [])}>
            Run warm-path check
          </button>
        ) : (
          <span className="ic-card-check-done">Warm paths loaded</span>
        )}
        <button className="ic-btn ic-btn--ghost" onClick={() => { setDraftNote(state.note); setDraftUrgency(state.urgency); onChange({ ...state, stage: 'compose' }); setEvidencePaths(null); }}>
          Edit
        </button>
        <button className="ic-btn ic-btn--deactivate-text" onClick={() => { onChange({ stage: 'draft', note: '', urgency: 'Low' }); setEvidencePaths(null); }}>
          Deactivate
        </button>
      </div>
      <p className="ic-card-quiet">{evidencePaths === null ? 'Warm paths available (run check)' : ''}</p>
      {evidencePaths !== null && <EvidenceList paths={evidencePaths} />}
    </div>
  );
}
