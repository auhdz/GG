import './PathBubbles.css';

interface PathBubblesProps {
  pathString: string; // e.g. "You → Sam → Alex"
}

const keyIconSrc =
  'https://www.figma.com/api/mcp/asset/69172f65-0a3e-409d-852b-340b3168b540';

function KeyIcon() {
  return (
    <img
      className="path-key-icon"
      src={keyIconSrc}
      alt="Your key"
      width={14}
      height={14}
    />
  );
}

export function PathBubbles({ pathString }: PathBubblesProps) {
  const nodes = pathString.split('→').map((s) => s.trim());

  return (
    <div className="path-bubbles">
      {nodes.map((name, i) => {
        const isYou = i === 0;
        const isTarget = i === nodes.length - 1;

        if (isYou) {
          return (
            <span key={i} className="path-node-group">
              <span className="path-key-node" title="Your key">
                <KeyIcon />
              </span>
            </span>
          );
        }

        const variant = isTarget ? 'target' : 'mid';

        return (
          <span key={i} className="path-node-group">
            <span className="path-connector" />
            <span className={`path-bubble path-bubble--${variant}`}>
              {name}
            </span>
          </span>
        );
      })}
    </div>
  );
}
