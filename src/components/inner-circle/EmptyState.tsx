// src/components/inner-circle/EmptyState.tsx

import React from 'react';

export default function EmptyState() {
  return (
    <div className="ic-empty">
      <p className="ic-empty-line">No active signals.</p>
      <p className="ic-empty-line">Activate one when you're ready for better routing.</p>
    </div>
  );
}
