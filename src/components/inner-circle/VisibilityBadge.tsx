// src/components/inner-circle/VisibilityBadge.tsx

import React from 'react';

type Props = {
  audience: string;
  active?: boolean;
};

export default function VisibilityBadge({ audience, active = false }: Props) {
  return (
    <span className={`ic-visibility${active ? ' ic-visibility--active' : ''}`}>
      <span className="ic-visibility-dot" />
      {audience}
    </span>
  );
}
