import { useState } from 'react';
import InnerCircleHeader from './InnerCircleHeader';
import BeliefSignalCard from './BeliefSignalCard';
import EmptyState from './EmptyState';

type Signal = {
  type: string;
  label: string;
  description: string;
};

const signals: Signal[] = [
  {
    type: 'hiring',
    label: 'Hiring',
    description: 'Quietly open to the right people.',
  },
  {
    type: 'fundraising',
    label: 'Fundraising',
    description: 'Exploring conversations without broadcasting.',
  },
  {
    type: 'learning',
    label: 'Learning',
    description: 'Open to advice or warm connections.',
  },
  {
    type: 'exploring',
    label: 'Exploring',
    description: 'No urgency. Just signal awareness.',
  },
];

export default function InnerCirclePage() {
  const [activeSignals, setActiveSignals] = useState<Set<string>>(new Set());

  function toggleSignal(type: string) {
    setActiveSignals((prev) => {
      const next = new Set(prev);
      if (next.has(type)) {
        next.delete(type);
      } else {
        next.add(type);
      }
      return next;
    });
  }

  const hasActive = activeSignals.size > 0;

  return (
    <div className="ic-page">
      <InnerCircleHeader />

      <section className="ic-signal-list">
        {signals.map((s) => (
          <BeliefSignalCard
            key={s.type}
            type={s.type}
            label={s.label}
            description={s.description}
            active={activeSignals.has(s.type)}
            onToggle={() => toggleSignal(s.type)}
          />
        ))}
      </section>

      {!hasActive && <EmptyState />}
    </div>
  );
}
