import yaml
import sys

INPUT = sys.argv[1] if len(sys.argv) > 1 else "user_flow.yaml"
OUTPUT = sys.argv[2] if len(sys.argv) > 2 else "USER_FLOW.generated.md"

with open(INPUT, "r") as f:
    doc = yaml.safe_load(f)

states = doc.get("states", {})
edges = []
types = {}

def add_edge(a, b, label=None):
    if a and b:
        edges.append((a, b, label))

for name, cfg in states.items():
    types[name] = cfg.get("type", "state")

    if "next" in cfg:
        add_edge(name, cfg["next"])

    if "yes" in cfg:
        add_edge(name, cfg["yes"], "yes")
    if "no" in cfg:
        add_edge(name, cfg["no"], "no")

    if "branches" in cfg:
        for k, v in cfg["branches"].items():
            add_edge(name, v, k)

with open(OUTPUT, "w") as out:
    out.write("```mermaid\n")
    out.write("flowchart TD\n")

    out.write("classDef start fill:#d8ff5a,stroke:#333,color:#111;\n")
    out.write("classDef decision fill:#a9b6ff,stroke:#333,color:#111;\n")
    out.write("classDef hub fill:#a9b6ff,stroke:#333,color:#111;\n")
    out.write("classDef action fill:#111,stroke:#aaa,color:#eee;\n")
    out.write("classDef system fill:#111,stroke:#aaa,color:#eee;\n")
    out.write("classDef terminal fill:#222,stroke:#666,color:#eee;\n")
    out.write("classDef state fill:#111,stroke:#666,color:#eee;\n")

    for a, b, label in edges:
        if label:
            out.write(f'{a} -->|{label}| {b}\n')
        else:
            out.write(f"{a} --> {b}\n")

    for name, t in types.items():
        out.write(f"class {name} {t};\n")

    out.write("```\n")

print(f"Mermaid generated → {OUTPUT}")
