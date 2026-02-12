import type { TrustMeterData } from '../types';
import './TrustMeter.css';

interface TrustMeterProps {
  data: TrustMeterData;
}

function strengthClass(level: 'Low' | 'Med' | 'High'): string {
  return `meter-level meter-level--${level.toLowerCase()}`;
}

export function TrustMeter({ data }: TrustMeterProps) {
  return (
    <div className="trust-meter">
      <div className="trust-meter-row">
        <span className="trust-meter-label">Connection</span>
        <span className={strengthClass(data.strength)}>{data.strength}</span>
      </div>
      <div className="trust-meter-row">
        <span className="trust-meter-label">Recency</span>
        <span className="trust-meter-value">{data.recency}</span>
      </div>
      <div className="trust-meter-row">
        <span className="trust-meter-label">Confidence</span>
        <span className={strengthClass(data.confidence)}>{data.confidence}</span>
      </div>
    </div>
  );
}
