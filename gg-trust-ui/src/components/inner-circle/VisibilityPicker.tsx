import { useState, useEffect, useRef } from 'react';
import { mockKeyHolders } from './mockData';

type Props = {
  active?: boolean;
};

export default function VisibilityPicker({ active = false }: Props) {
  const [showPreview, setShowPreview] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showPreview) return;

    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setShowPreview(false);
      }
    }

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showPreview]);

  return (
    <div className="ic-vis-picker" ref={ref}>
      <button
        className={`ic-vis-trigger${active ? ' ic-vis-trigger--active' : ''}`}
        onClick={() => setShowPreview(!showPreview)}
        type="button"
      >
        <span className="ic-vis-dot" />
        <span>Key holders</span>
        <span className="ic-vis-caret">{showPreview ? '▴' : '▾'}</span>
      </button>

      {showPreview && (
        <div className="ic-vis-popover">
          <p className="ic-vis-popover-title">Visible to</p>
          <ul className="ic-vis-popover-list">
            {mockKeyHolders.map((kh) => (
              <li key={kh.name} className="ic-vis-popover-item">
                <span className="ic-vis-popover-name">{kh.name}</span>
                <span className="ic-vis-popover-rel">{kh.relationship}</span>
              </li>
            ))}
          </ul>
          <p className="ic-vis-popover-note">
            Only these people can see this signal.
          </p>
        </div>
      )}
    </div>
  );
}
