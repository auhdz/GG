// Mirror of gg-trust-ui/src/components/inner-circle/mockData.ts
// See that file for canonical version.

export type KeyHolder = {
  name: string;
  relationship: string;
};

export type WarmPath = {
  path: string[];
  context: string;
  sources: string[];
};

export type SignalConfig = {
  type: string;
  label: string;
  description: string;
  placeholder: string;
};

export const signals: SignalConfig[] = [
  {
    type: 'hiring',
    label: 'Hiring',
    description: 'Quietly open to the right people.',
    placeholder: 'e.g. Senior engineer with infra experience, ideally from a Series B+ company',
  },
  {
    type: 'fundraising',
    label: 'Fundraising',
    description: 'Exploring conversations without broadcasting.',
    placeholder: 'e.g. Pre-seed or seed, looking for investors who understand developer tools',
  },
  {
    type: 'learning',
    label: 'Learning',
    description: 'Open to advice or warm connections.',
    placeholder: 'e.g. How to scale a sales team from 2 to 10, anyone who\'s done it recently',
  },
  {
    type: 'exploring',
    label: 'Exploring',
    description: 'No urgency. Just signal awareness.',
    placeholder: 'e.g. Curious about climate tech, open to meeting founders in the space',
  },
];

export const mockKeyHolders: KeyHolder[] = [
  { name: 'Clara G.', relationship: 'Direct' },
  { name: 'Sam T.', relationship: '2nd degree' },
  { name: 'Alex R.', relationship: 'Direct' },
  { name: 'Jordan M.', relationship: '2nd degree' },
  { name: 'Priya K.', relationship: 'Direct' },
];

export const mockWarmPaths: Record<string, WarmPath[]> = {
  hiring: [
    {
      path: ['You', 'Clara G.', 'Daniel W.'],
      context: 'Met Daniel 3× in last 60 days',
      sources: ['Calendar', 'Email verified'],
    },
    {
      path: ['You', 'Sam T.', 'Lena P.'],
      context: 'Sam introduced Lena at Founder Dinner',
      sources: ['CRM imported'],
    },
  ],
  fundraising: [
    {
      path: ['You', 'Alex R.', 'Michelle Y.'],
      context: 'Alex co-invested with Michelle in 2024',
      sources: ['Email verified', 'CRM imported'],
    },
    {
      path: ['You', 'Priya K.', 'Raj S.'],
      context: 'Priya and Raj share 4 mutual connections',
      sources: ['Calendar', 'Email verified'],
    },
  ],
  learning: [
    {
      path: ['You', 'Jordan M.', 'Chris B.'],
      context: 'Chris scaled sales 2→12 at Stripe',
      sources: ['Email verified'],
    },
  ],
  exploring: [
    {
      path: ['You', 'Clara G.', 'Nina L.'],
      context: 'Nina is building in climate + AI intersection',
      sources: ['Calendar', 'CRM imported'],
    },
  ],
};
