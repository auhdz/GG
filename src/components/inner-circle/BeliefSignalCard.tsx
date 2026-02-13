// src/components/inner-circle/BeliefSignalCard.tsx

import React, { useState } from 'react';
import SignalFeedback from './SignalFeedback';
import VisibilityBadge from './VisibilityBadge';

type Props = {
  type: string;
  label: string;
  description: string;
  active: boolean;
  onToggle: () => void;
};

export default function BeliefSignalCard({
  type,
  label,
  description,
  active,
  onToggle,
}: Props) {
  const [confirming, setConfirming] = useState<'activate' | 'deactivate' | null>(null);
  const [hovering, setHovering] = useState(false);

  function handleActivateClick() {
    if (active) {
      setConfirming('deactivate');
    } else {
      setConfirming('activate');
    }
  }

  function handleConfirm() {
    onToggle();
    setConfirming(null);
  }

  function handleCancel() {
    setConfirming(null);
  }

  return (
    <div className={`ic-card${active ? ' ic-card--active' : ''}`}>
      <div className="ic-card-top">
        <div>
          <h3 className="ic-card-label">{label}</h3>
          <p className="ic-card-desc">{description}</p>
        </div>
        <VisibilityBadge audience="Key holders" active={active} />
      </div>

      <div className="ic-card-actions">
        {!active ? (
          <button
            className="ic-btn ic-btn--activate"
            onClick={handleActivateClick}
          >
            Activate
          </button>
        ) : (
          <button
            className={`ic-btn ${hovering ? 'ic-btn--deactivate' : 'ic-btn--active'}`}
            onClick={handleActivateClick}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            {hovering ? 'Deactivate' : 'Active'}
          </button>
        )}
      </div>

      {confirming && (
        <div className="ic-confirm">
          <span className="ic-confirm-text">
            {confirming === 'activate'
              ? 'Signal will be visible to your key holders.'
              : 'This will remove the signal. No one is notified.'}
          </span>
          <button className="ic-btn ic-btn--confirm" onClick={handleConfirm}>
            {confirming === 'activate' ? 'Confirm' : 'Remove'}
          </button>
          <button className="ic-btn ic-btn--cancel" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      )}

      {active && !confirming && <SignalFeedback type={type} />}
    </div>
  );
}
