import React, { useState } from 'react';
import InnerCircleHeader from '../../components/inner-circle/InnerCircleHeader';
import SignalCard from '../../components/inner-circle/SignalCard';
import type { SignalState } from '../../components/inner-circle/SignalCard';
import { signals } from '../../components/inner-circle/mockData';
import '../../components/inner-circle/inner-circle.css';

type SignalStates = Record<string, SignalState>;

const initialStates: SignalStates = Object.fromEntries(
  signals.map((s) => [s.type, { stage: 'draft' as const, note: '', urgency: 'Low' as const }])
);

export default function InnerCirclePage() {
  const [signalStates, setSignalStates] = useState<SignalStates>(initialStates);

  function updateSignal(type: string, next: SignalState) {
    setSignalStates((prev) => ({ ...prev, [type]: next }));
  }

  return (
    <main className="ic-page">
      <InnerCircleHeader />

      <section className="ic-signal-list">
        {signals.map((s) => (
          <SignalCard
            key={s.type}
            type={s.type}
            label={s.label}
            description={s.description}
            placeholder={s.placeholder}
            state={signalStates[s.type]}
            onChange={(next) => updateSignal(s.type, next)}
          />
        ))}
      </section>
    </main>
  );
}
