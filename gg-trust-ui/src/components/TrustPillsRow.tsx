import './TrustPillsRow.css';

interface TrustPillsRowProps {
  mutualContext: string;
  strengthLabel: string;
  relevanceLabel: string;
  pathString: string;
}

export function TrustPillsRow({
  mutualContext,
  strengthLabel,
  relevanceLabel,
  pathString,
}: TrustPillsRowProps) {
  return (
    <div className="trust-pills-section">
      <p className="trust-pills-heading">WHY THIS MATCH</p>
      <ul className="trust-pills-details">
        <li>
          <span className="detail-label">Mutual context</span>
          <span className="detail-value">{mutualContext}</span>
        </li>
        <li>
          <span className="detail-label">Relationship</span>
          <span className="detail-value">{strengthLabel}</span>
        </li>
        <li>
          <span className="detail-label">Relevance</span>
          <span className="detail-value">{relevanceLabel}</span>
        </li>
        <li>
          <span className="detail-label">Path</span>
          <span className="detail-value">{pathString}</span>
        </li>
      </ul>
    </div>
  );
}
