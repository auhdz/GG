> Source of truth: `user_flow.yaml`.
> This doc explains intent + metrics + UX rationale.
> Diagram is generated: USER_FLOW.generated.md


## GG — User Flow (MVP)

```mermaid
flowchart TD
  Start([Start]) --> Connect[Connect data source]
  Connect --> Permissions{Permissions granted?}

  Permissions -- Yes --> Home[Home / Query]
  Permissions -- No --> FixPerms[Fix permissions] --> Connect

  Home --> Query[Enter query]
  Query --> Results[Results list]
  Results --> Inspect{Inspect "Why this match"?}

  Inspect -- Yes --> Why[Why this match (evidence)]
  Inspect -- No --> Request[Request intro]

  Why --> Request[Request intro]
  Request --> Preview[Intro preview]
  Preview --> Confirm{Confirm send?}

  Confirm -- Yes --> Sent[Intro sent]
  Confirm -- No --> Results

## Mermaid (derived from YAML)

```mermaid
flowchart TD
  start --> connect_sources
  connect_sources --> permissions_check
  permissions_check -- yes --> home
  permissions_check -- no --> fix_permissions
  fix_permissions --> connect_sources

  home --> query
  query --> results

  results -- no_path --> empty_state
  results -- has_path --> inspect_trust

  inspect_trust --> request_intro
  request_intro --> intro_preview

  intro_preview -- yes --> sent
  intro_preview -- no --> results
