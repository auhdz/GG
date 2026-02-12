
export interface TrustMeterData {
  strength: 'Low' | 'Med' | 'High';
  recency: string;
  confidence: 'Low' | 'Med' | 'High';
}

export interface MatchResult {
  id: string;
  name: string;
  role: string;
  company: string;
  mutualContext: string;
  strengthLabel: string;
  relevanceLabel: string;
  pathString: string;
  trustMeter: TrustMeterData;
  provenanceLabel: string;
  askSummary: string;
}
