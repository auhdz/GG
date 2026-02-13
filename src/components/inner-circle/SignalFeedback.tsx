// src/components/inner-circle/SignalFeedback.tsx

import React from 'react';

const feedbackByType: Record<string, { lines: string[]; note: string }> = {
  hiring: {
    lines: [
      '3 warm paths detected in your network',
      'Matching paused until you confirm scope',
    ],
    note: 'Only visible to your key holders.',
  },
  fundraising: {
    lines: [
      '2 investor paths available through trusted contacts',
      'No outreach initiated',
    ],
    note: 'Signal stays private until you choose to share.',
  },
  learning: {
    lines: [
      '5 connections with relevant experience identified',
      'Waiting for your signal preferences',
    ],
    note: 'Connections are never notified without your approval.',
  },
  exploring: {
    lines: [
      'Passive matching active across your graph',
      'No urgency signals sent',
    ],
    note: 'This runs silently. You control when it surfaces.',
  },
};

type Props = {
  type: string;
};

export default function SignalFeedback({ type }: Props) {
  const data = feedbackByType[type] ?? {
    lines: ['Signal registered'],
    note: 'You control visibility.',
  };

  return (
    <div className="ic-feedback">
      {data.lines.map((line, i) => (
        <div key={i} className="ic-feedback-line">
          <span className="ic-feedback-dot" />
          <span>{line}</span>
        </div>
      ))}
      <p className="ic-feedback-note">{data.note}</p>
    </div>
  );
}
