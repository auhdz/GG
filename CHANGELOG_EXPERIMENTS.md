# Experiments / Changes

## 2025-02-12 — Compact result cards
### Hypothesis
If we flatten MatchResultCard into a dense row (identity + path + provenance visible, trust details behind chevron), Result → Request Intro will increase because the decision surface shrinks and the CTA is immediately scannable.

### Target metric(s)
- Result → Request Intro conversion (8–15% target)

### Change
- Card layout: single row with avatar, name/role, path inline, provenance, and Request Intro button all visible at once.
- Trust pills + trust meter moved behind a shared chevron expand (opt-in per contract).
- Removed purple glow on card hover (contract: glow only in discovery, not verification).
- Avatar de-emphasized (neutral surface, not accent-colored).
- CTA button: ghost/outline style (calm, not marketing).
- List gap tightened from 14px → 8px.
- TrustPillsRow simplified: no internal toggle (card manages expand state).

### Expected outcome
- Faster scan → higher Request Intro rate.
- Cards feel like a curated list, not a dashboard.
- Expand rate stays healthy (30–60%) because path + provenance give enough at-a-glance trust.

### Rollback plan
- Revert MatchResultCard.tsx/.css and TrustPillsRow.tsx/.css to previous versions.
- Restore gap and glow tokens in App.css and index.css.

---

## 2025-02-12 — Visual polish: card spacing, path colors, gradient, logo, provenance
### Pre-flight
1) Metric: Result → Request Intro + Repeat query within 7 days
2) Fear: Red on target node signals danger (avoidance). Flat black bg feels like dev prototype. Cramped cards feel unfinished. Noisy provenance competes with CTA.
3) Smallest: Token swaps + CSS-only gradient + logo image swap + provenance truncation.

### Change
- **Target node color**: coral/red (#e85c5c) → blue (#4a9eed). Red = error/danger. Blue = destination/opportunity. Reduces unconscious avoidance of the person you want to meet.
- **Cards**: Single column, uniform width (max-width 480px). Padding increased from 16px → 18px/20px. Gap between sections inside card increased to 14px. Cards breathe.
- **Background**: Flat #0a0a0c → subtle tri-radial gradient (violet top-left, warm orange bottom-right, blue center). Matches GitHub reference image energy. Fixed attachment so cards float over it.
- **Card surface**: Solid #151518 → rgba(255,255,255,0.04) so the gradient shows through subtly.
- **Logo**: "GG" text → GiGi logo image in header (from attached brand asset).
- **Provenance**: font-size 10px → 9px, single line with overflow ellipsis, always right-aligned. Visible but never competes.
- **Path bubbles**: Slightly more padding (4px 11px), connectors widened 12→14px for breathing room.

### Expected outcome
- Blue target node feels inviting, not dangerous → fewer drop-offs at the path-reading step.
- Premium gradient + logo → higher return rate (product feels real).
- Better spacing → less cognitive friction → faster path to Request Intro.

### Rollback plan
- Revert index.css tokens (node-target color, surface, gradient).
- Revert App.tsx/App.css (logo, column layout).
- Revert MatchResultCard.css (padding/gap values).
- Revert PathBubbles.css (padding values).
