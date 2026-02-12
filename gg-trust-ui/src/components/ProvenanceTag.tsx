import './ProvenanceTag.css';

interface ProvenanceTagProps {
  label: string;
}

export function ProvenanceTag({ label }: ProvenanceTagProps) {
  return <span className="provenance-tag">{label}</span>;
}
