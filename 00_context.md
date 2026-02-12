# 00_context — Raw Notes & Inputs

This file is a raw, chronological dump of:
- Meetings
- Transcripts
- Ideas
- Questions
- Half-formed insights
- Reactions
- Constraints

Nothing in here has to be clean or correct.

---

### Meeting Notes

### Date:
Feb 2026 (video call)

### Who:
Clara Gold (Founder, GiGi)  
Adrian Hernandez (Product / Design)

### Context:
Introductory conversation to explore fit for a founding product/design role. Clara walked through her background, GiGi’s vision, core product mechanics (network agent, network key, permission graph), and expectations for intensity and execution. Ended with agreement to meet in person and complete a short product task/prototype within 2–3 days.

### Key quotes:
- “My biggest cheat code in life was the people I knew and who trusted me.”
- “In an AI-dominated world, trust will be the most valuable currency.”
- “We need to create a new social protocol.”
- “The network key should be a valuable asset.”
- “I don’t want design for design. Design serves the product.”
- “I expect people to design in Cursor. Figma-only doesn’t work anymore.”
- “This role is my right hand. You have to be intense.”
- “We need proprietary data that people would never put on LinkedIn.”

### What feels important:
- GG is not just a product; it’s an attempt to define a **new social protocol** for how people exchange access to their networks.
- The **network key** is the core primitive — both functional (query + intros) and symbolic (status, scarcity).
- Trust + permissioning are the real differentiators, not UI polish.
- Private signaling (what users are *actually* looking for) is the proprietary data moat.
- Clara is extremely product- and growth-driven; design is expected to directly serve PMF, conversion, retention, and network effects.
- The bar for intensity and ownership is very high; this is a “founder-like” role.
- Strong alignment on fast iteration, ambiguity, and building in public with users.

### What feels risky:
- The product relies on users sharing highly sensitive data (networks, intent, signals); trust UX must be exceptional or adoption will stall.
- Status / “secret society” mechanics could tip into cringe or exclusionary if not handled with taste.
- Permission complexity could overwhelm users if the mental model isn’t extremely clear.
- Heavy reliance on behavior change (new protocol vs LinkedIn norms).
- Small initial user base means cold-start and sparse-data UX is critical.
- Intensity expectations are extreme; risk of burnout or misalignment if not sustainable.

### What I don’t understand yet:
- How much of the permission graph is explicit vs inferred?
- Where the line is between manual approval and agent automation.
- How revocation works socially (what happens after an intro is declined or access is pulled).
- Whether keys are ever ranked or compared (explicitly or implicitly).
- How early users are onboarded without feeling “sold to” or confused.
- How success is measured in the first 3–6 months post–Series A.
- Exact mechanics of trust scoring, - How is “trust” inferred, stored, and updated?
- Is it explicit (user labels) or implicit (behavioral signals, interaction graphs)?
- Granularity of permissions Can users: Set per-contact visibility? Limit by relationship type (e.g., “investors vs close friends vs coworkers”)?
Control which signals vs which contacts are visible?
- When does the agent: Auto-suggest intros? Auto-send intros? Require explicit human approval every time?

---

## Product Observations

- GG is positioning itself as “Calendly for networks,” but with far more social and ethical complexity.
- The core loop is not content → engagement; it’s **intent → trusted access → outcome**.
- The permission graph is the product — UI is secondary but must make the graph legible.
- Querying people is less valuable than querying **paths** (warmest intro routes).
- NFC keys are as much a marketing and ritual device as a functional one.
- This is closer to a **social infrastructure layer** than a typical app.

---

## Design Ideas (unfiltered)

- “Why this match” cards under every query result (recency, trust strength, path).
- Concentric trust rings (Inner / Trusted / Limited) as the primary permission UI.
- Key ring metaphor: master key + sub-keys (VC key, Operator key, etc.).
- Two-tab query results: People vs Paths.
- Intro preview before request to reduce social anxiety.
- Permission receipts / audit log (“You granted X access on Y date”).
- Onboarding framed as “activating your network,” not “importing contacts.”
- NFC bump moment as a cinematic micro-interaction (haptics + animation).
- Private signals UI that feels more like journaling than posting.
-  shareable, minimal key profile: Shows: Your general domains (e.g., “AI infra, consumer social, growth”), A high-level “network strength” visual, Zero private contact details. Feels like a mysterious, premium card, not a LinkedIn page.

---

## Trust / Safety Thoughts

- Permission must be visible *everywhere* — users should never wonder “who can see this?”
- Default to least-privilege access; expand permissions consciously.
- Avoid opaque trust scores; explain signals in human terms.
- Make revocation instant and socially quiet.
- Emphasize consent language: “You’re seeing this because Clara allowed it.”
- Treat intros as social currency; add friction where necessary to prevent spam. (rate limits etc.)

---

## Questions to Revisit

- What is the smallest permission model that still feels safe?
- How do we visually display trust in the core product?
- What do permission graphs look like and waht functions do they entail?
- How do we make this very complex problem easy to use?
- How do we teach users the mental model without documentation?
- When does the agent act autonomously vs ask for approval?
- How do we handle asymmetry (one person has much more valuable network)?
- What does “success” feel like to a user in week 1?
- How do we prevent GG from becoming another noisy GTM tool?

## Product Visions and Scope
Product Vision for GiGi, Core idea:
- GiGi is building a “network agent” that helps you leverage your trusted relationships at scale. It turns your personal network into something queryable, activatable, and collaborative, with trust as the core currency in an AI-saturated world.

Key elements: Network as a structured asset (like Calendly for contacts)
- Calendly turned a personal calendar (single-player utility) into a shareable, multiplayer asset.
GiGi wants to do the same for your network:
Aggregate your real network from Gmail, CRM, calendar tools (e.g., Reclaim, Cron, etc.), and other sources.
- Enrich contacts so you can quickly find “that person I met four months ago.”
Make everyone in your real orbit searchable and actionable.
Network Agent + Permission Graph

GiGi builds a network agent that:
Understands who you know, who trusts whom, and who is looking for what.
Acts as an overarching agent constantly matching:
- “Who should meet whom?”
- “Who can help with X?”
- “Who is the best intro path to this target person?”
- This is powered by a permission graph:
- you define who has permission to see or query which parts of your network.
The agent respects that permission layer while surfacing opportunities and intros.Focus on trust in an AI-dominated world

Clara’s thesis: as agents flood inboxes and DMs with automated outreach, cold outreach will stop working.
The scarce, valuable thing becomes:
- Trusted introductions
- Warm, permissioned access via people you actually know and trust
GiGi’s moat is:
Proprietary data — highly private “signals” about what you and your trusted contacts are actually looking for (things you’d never put on LinkedIn).
Network effects — more value as more high-trust networks and “keys” connect.
Premium, invite-only product with strong social status

GG is positioned as premium, invite-only, not a mass, open network.
The “key” becomes:
A social status symbol in the tech/Valley scene.
Something people are proud to show, share, and flex.
The experience needs to feel:
High-end, secretive, and aspirational.
More like an exclusive club / society than a generic SaaS tool.
Social Protocol: How GG Changes “How People Connect”
Clara talks about creating a new social protocol around network access, centered on the network key and NFC.

Network Key as a new unit of social capital

Each person gets a “network key” that represents:
The network they’re willing to expose/activate.
Their “network value” (who they know, how influential those connections are).
This key can be:
Shared in full: “Here’s my key; you can query my network via my agent and request intros.”
Shared in subsets: e.g., “Here’s just my VC list,” or “Here’s my operator/AI founder subset.”
Permissioned access, not open scraping

The protocol is about consensual, permissioned discovery:
You define which parts of your network are visible and to whom.
Other people’s agents can query your network through your key, but only along those permissions.
This creates a “permission graph”:
Who can see what.
Who can request what type of intro.
Who is considered “trusted” within your graph.
NFC chips and “bump-to-connect” ritual

GG wants to turn meeting someone into a physical, memorable ritual:
You get a physical NFC chip/card/key you can stick to your phone.
When you meet someone:
Instead of “How can I help?” or “What’s your LinkedIn?”
The new protocol is: “Bump phones, this gives you instant, permissioned access to my key.”
This:
Reinforces the premium / secretive / club-like feel.
Acts as marketing: people seeing keys, bumps, and wondering “What is that?”
Makes the network key feel like a 3D, collectible asset (with notions like gold/silver tiers based on network value).
Status and scarcity mechanics

Keys will differ by:
Current network value (who’s already inside).
Potential network value (who could be unlocked through you).
Some keys become highly desirable to hold (you want to be in “key people’s” keys):
Because being inside their key means access and opportunity.
This creates a social ladder and sense of scarcity.
On social media, GG wants:
Mysterious, motion-driven content (short cinematic clips).
Minimal explicit explanation but strong vibe of an elite, secretive group:
People sharing keys
Bumping phones
Subtle hints of the network power underneath.
Private signaling as fuel

Users are encouraged to input very private, high-signal data:
What they are truly looking for.
What types of intros they value.
Opportunities they’d never post on LinkedIn.
Because:
Their key people can then have their agents surface them to the right opportunities automatically.
This makes GG valuable enough to justify sharing those private signals, which then become the core proprietary data moat.
In short:
GG’s product vision is to build a network agent powered by proprietary, permissioned trust data that makes intros and opportunities flow automatically within trusted graphs.
The social protocol is built around network keys, permission graphs, and NFC “bump-to-connect” rituals, creating an elite, premium, somewhat secretive layer on top of your real-world relationships.

## Personal Reactions

(How I felt, what energized me, what felt off.)

- This feels dangerous because we don't know what success should look like
- We need this to feel premium and sought after but the inital cards dont look like that? 
- how do we display trust properly if its an agentic network
dont want to design the full app just this core experience

