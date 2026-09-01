export type ProjectSlug =
  | 'golazo'
  | 'wooblay-ai'
  | 'bubble-wars'
  | 'meridian'
  | 'wisp-lab'
  | 'bender'
  | 'minitown-ai'
  | 'ai-action-os'
  | 'prove-me-wrong';

export type Project = {
  slug: ProjectSlug;
  title: string;
  kicker: string;
  status: string;
  description: string;
  why: string;
  built: string;
  hardPart: string;
  result: string;
  repoLinks: { label: string; href: string }[];
  role: string;
  proof: string;
  currentState: string;
  nextStep: string;
  relatedSlugs: ProjectSlug[];
  tech: string[];
  architecture: string[];
  accent: string;
  media?: {
    type: 'image' | 'video';
    src: string;
    alt: string;
    caption: string;
    width?: number;
    height?: number;
    poster?: string;
  };
};

export const projects: Project[] = [
  {
    slug: 'golazo',
    title: 'Golazo',
    kicker: 'Real-time systems · Mobile · Solana',
    status: 'Working engineering prototype',
    description:
      'A live event-market engine built for the seconds when a match changes.',
    why: 'Sports markets become most interesting at the exact moment the underlying event moves. Golazo tests what a product looks like when detection, pricing, participation, and payout all happen in that window.',
    built:
      'A React Native client, AI-assisted feed watcher, tested parimutuel core, live market state, and Solana settlement flow.',
    hardPart:
      'Keeping event detection, market state, pricing, and settlement coherent while the game keeps moving.',
    result:
      'A complete mobile, feed, market, and payout code path with 12 passing core tests and real product capture.',
    repoLinks: [
      { label: 'Source', href: 'https://github.com/RealWooblay/golazo' },
    ],
    role: 'Lead repository contributor and maintainer on a two-contributor project',
    proof:
      '12 passing core tests, strict typecheck, a complete mobile/feed/market code path, and real product capture.',
    currentState:
      'The core engine and simulated feed are verified. iOS and Anchor builds still require their native toolchains; live counterparty-fill automation was disabled as the project wound down.',
    nextStep:
      'Verify the iOS and Anchor builds and record one complete live feed → market → payout → settlement run.',
    relatedSlugs: ['prove-me-wrong', 'bubble-wars', 'ai-action-os'],
    tech: [
      'TypeScript',
      'React Native',
      'Fastify',
      'Solana',
      'AI event detection',
    ],
    architecture: [
      'LIVE FEED',
      'EVENT WATCHER',
      'MARKET ENGINE',
      'MOBILE CLIENT',
      'SETTLEMENT',
    ],
    accent: '#d66e22',
    media: {
      type: 'video',
      src: '/media/golazo/golazo_hero_vertical.mp4',
      alt: 'Golazo live market product capture',
      caption: 'Real product capture',
      width: 1080,
      height: 1920,
      poster: '/media/golazo/screen-live-match.svg',
    },
  },
  {
    slug: 'wooblay-ai',
    title: 'Wooblay AI',
    kicker: 'Agent security · Policy · Infrastructure',
    status: 'Implemented systems prototype',
    description:
      'An execution firewall between autonomous agents and the systems they can change.',
    why: 'Agents become useful when they can act. That same step creates the real engineering problem: permissions, credentials, approval, and proof of what happened.',
    built:
      'Policy gates, isolated credentials, explicit human approval, controlled execution, and tamper-evident receipts.',
    hardPart:
      'Making the secure path the normal path without reducing the agent to a read-only demo.',
    result:
      'A concrete control plane for agent actions rather than another conversational wrapper.',
    repoLinks: [
      { label: 'Source', href: 'https://github.com/RealWooblay/WooblayAI' },
    ],
    role: 'Solo repository author and builder',
    proof:
      'Policy engine, encrypted vault, approval queue, isolated execution specs, and an ed25519/SHA-256 receipt chain.',
    currentState:
      'The dashboard, Gate API, adapters, runtime containers, and Terraform are implemented and documented; there is no public end-to-end demo or independent production verification.',
    nextStep:
      'Publish a reproducible request → policy → approval → isolated execution → signed receipt walkthrough with test results.',
    relatedSlugs: ['ai-action-os', 'minitown-ai', 'wisp-lab'],
    tech: [
      'TypeScript',
      'Policy engine',
      'Credential isolation',
      'Audit receipts',
    ],
    architecture: [
      'AGENT INTENT',
      'POLICY GATE',
      'HUMAN APPROVAL',
      'ISOLATED EXECUTION',
      'RECEIPT',
    ],
    accent: '#d9ff43',
  },
  {
    slug: 'bubble-wars',
    title: 'Bubble Wars',
    kicker: 'Hackathon winner · Telegram · On-chain game',
    status: 'Completed hackathon-winning team prototype',
    description:
      'A collaborative strategy game that turns verified Telegram communities into on-chain factions.',
    why: 'Most on-chain games begin with wallets and mechanics. Bubble Wars began with an existing social graph and made identity, collaboration, raids, and state part of one playable loop.',
    built:
      'Verified user identity, referral and faction mechanics, randomised raids, indexed contract state, and a trusted AI runtime inside a Telegram-native flow.',
    hardPart:
      'Coordinating social identity, probabilistic game logic, cross-service state, and on-chain settlement inside a hackathon clock.',
    result:
      'A working project, an ETHGlobal Bangkok prize, and a live stage presentation.',
    repoLinks: [
      { label: 'Source', href: 'https://github.com/RealWooblay/bubblewars' },
      {
        label: 'Stage presentation',
        href: 'https://www.youtube.com/watch?v=uPW20IUHC1Y&t=4902s',
      },
    ],
    role: 'Co-builder on a three-person team · trusted AI runtime, ENS identity, backend/user flows, referral integration, and front-end game behaviour',
    proof:
      'ETHGlobal Bangkok winner with signed Telegram identity, referral contracts, Pyth-randomised raids, indexed state, and an attested AI runtime.',
    currentState:
      'Published as a personal fork of the team repository; contracts are unaudited and deployment configuration is historical.',
    nextStep:
      'Add gameplay capture and a contribution map; contract review, replay controls, observability, and reproducible dependencies are prerequisites to revival.',
    relatedSlugs: ['minitown-ai', 'bender', 'prove-me-wrong'],
    tech: ['TypeScript', 'Telegram', 'Solidity', 'Chainlink', 'AI runtime'],
    architecture: [
      'TELEGRAM',
      'VERIFIED PLAYER',
      'GAME ENGINE',
      'INDEXED STATE',
      'CONTRACTS',
    ],
    accent: '#ff3c69',
    media: {
      type: 'image',
      src: '/media/bubblewars/banner.webp',
      alt: 'Bubble Wars project banner',
      caption: 'Project artwork · repository source',
      width: 1792,
      height: 1024,
    },
  },
  {
    slug: 'meridian',
    title: 'MERIDIAN',
    kicker: 'Hackathon winner · Genomics · Governed AI',
    status: 'Completed hackathon prototype with undeployed cloud components',
    description:
      'A privacy-first pharmacogenomics system designed to keep medical AI inside explicit evidence and governance boundaries.',
    why: 'Genomic guidance is a bad place for unconstrained generation. MERIDIAN asks how useful AI can remain when provenance, privacy, and clinical boundaries are first-class system requirements.',
    built:
      'A governed genome-processing flow, evidence-bound guidance, constrained medical AI, and an interface that exposes sources instead of hiding them.',
    hardPart:
      'Turning sensitive biological input into useful guidance without allowing the model to invent clinical certainty.',
    result:
      'A governed hackathon prototype with deterministic source mapping, explicit failure paths, and pinned PharmCAT examples.',
    repoLinks: [
      { label: 'Source', href: 'https://github.com/RealWooblay/medhack' },
    ],
    role: 'Lead repository contributor on a three-person hackathon team · exact responsibility split is not documented',
    proof:
      'Pinned official PharmCAT examples and digests, deterministic source mapping, explicit failure paths, and governed genome processing.',
    currentState:
      'The app, private control API, PharmCAT worker, and deterministic clinical engine are implemented; Cloud Run, the IAM-protected model endpoint, and one planned evidence release are incomplete.',
    nextStep:
      'Deploy the private processing path and protected model endpoint, then validate with de-identified test data before making any clinical-use claim.',
    relatedSlugs: ['wooblay-ai', 'ai-action-os', 'bubble-wars'],
    tech: ['TypeScript', 'Python', 'Genomics', 'Retrieval', 'Guardrailed AI'],
    architecture: [
      'GENOME INPUT',
      'GOVERNED PROCESSING',
      'EVIDENCE RETRIEVAL',
      'CONSTRAINED MODEL',
      'GUIDANCE',
    ],
    accent: '#78a8ff',
  },
  {
    slug: 'wisp-lab',
    title: 'WISP Lab',
    kicker: 'Jetson · Perception · Spatial computing',
    status: 'Active hardware/software prototype',
    description:
      'An embedded spatial computer that uses perception, projection, and interaction to put useful software onto physical surfaces.',
    why: 'A screen is not the only place software can live. WISP explores a local device that can understand a room, choose a surface, project an interface, and correct itself through camera feedback.',
    built:
      'A Jetson perception service, head-tracked renderer, hand interaction, planner boundary, and four-corner projection calibration.',
    hardPart:
      'Keeping perception latency, head geometry, interaction state, and projector alignment honest enough to survive outside a screen demo.',
    result:
      'YOLOv8n detection at 31.6 FPS with TensorRT FP16, a working head/hand state stream, and a renderer ready for physical projector calibration.',
    repoLinks: [
      { label: 'Source', href: 'https://github.com/RealWooblay/wisp-lab' },
    ],
    role: 'Solo builder and maintainer',
    proof:
      '31.6 FPS YOLOv8n TensorRT FP16 detection, approximately 8.6 FPS pose, and implemented head/hand streaming and four-corner calibration.',
    currentState:
      'The Jetson and camera runtime is operational; final projector-camera calibration, camera intrinsics, and end-to-end motion-latency measurement remain.',
    nextStep:
      'Calibrate camera and projector on a physical surface, export the pose model to TensorRT, and measure end-to-end motion latency.',
    relatedSlugs: ['minitown-ai', 'ai-action-os', 'bender'],
    tech: [
      'NVIDIA Jetson',
      'Python',
      'TensorRT',
      'YOLO',
      'SSE',
      'Projection mapping',
    ],
    architecture: [
      'IMX708 CAMERA',
      'TENSORRT POSE',
      'STATE STREAM',
      'PLANNER',
      'PROJECTED SURFACE',
    ],
    accent: '#efb65d',
    media: {
      type: 'image',
      src: '/media/wisp/wisp-hero-real-1600.webp',
      alt: 'WISP spatial computing device concept',
      caption: 'Concept render · runtime benchmarked on Jetson',
      width: 1600,
      height: 800,
    },
  },
  {
    slug: 'bender',
    title: 'Bender',
    kicker: 'Unity 6 · Multiplayer · Dedicated sessions',
    status: 'Completed multiplayer systems prototype',
    description:
      'A Unity multiplayer prototype exploring lobby matchmaking and live handoff into dedicated game sessions.',
    why: 'Multiplayer architecture becomes real when a lobby must allocate a session, start it, and move connected clients without hiding the lifecycle.',
    built:
      'A FishNet lobby flow, headless dedicated session process, dynamic port allocation, session lifecycle, and TargetRpc client handoff.',
    hardPart:
      'Coordinating process lifecycle and network handoff while keeping the client transition understandable.',
    result:
      'A focused game-networking prototype that makes dedicated session orchestration concrete.',
    repoLinks: [
      { label: 'Source', href: 'https://github.com/RealWooblay/bender' },
    ],
    role: 'Collaborative Unity project · public history credits TheRealKraken with the substantive multiplayer/session implementation; Wooblay initialized and documented the repository',
    proof:
      'Unity 6/FishNet source implements a stable lobby, headless session process, dynamic ports, and TargetRpc handoff.',
    currentState:
      'The networking architecture exists as a focused prototype; it is not a finished game and has no public gameplay or handoff capture.',
    nextStep:
      'Confirm and document Wooblay’s exact engineering contribution, then add a short lobby-to-session capture and reproducible Unity build notes.',
    relatedSlugs: ['minitown-ai', 'bubble-wars', 'golazo'],
    tech: ['Unity 6', 'C#', 'FishNet', 'Dedicated servers'],
    architecture: [
      'UNITY CLIENT',
      'LOBBY :7777',
      'SESSION MANAGER',
      'DYNAMIC PORT',
      'GAME SESSION',
    ],
    accent: '#b38cff',
  },
  {
    slug: 'minitown-ai',
    title: 'MiniTown AI',
    kicker: 'Unity · Agent world model · AI NPCs',
    status: 'Completed two-repository integration prototype',
    description:
      'A small Unity world whose lore, events, dialogue, and NPC actions are generated by a stateful agent service.',
    why: 'An AI NPC is more interesting when it changes the world instead of only producing a line of dialogue.',
    built:
      'A Unity client that sends world state and applies structured events, plus a Flask/LangGraph backend for lore, decisions, dialogue, and blockchain-aware tools.',
    hardPart:
      'Turning probabilistic model output into bounded, structured events the game can actually execute.',
    result:
      'A complete game-to-agent loop split cleanly between simulation and reasoning services.',
    repoLinks: [
      {
        label: 'Unity client',
        href: 'https://github.com/RealWooblay/minitown-ai-game',
      },
      {
        label: 'Agent service',
        href: 'https://github.com/RealWooblay/ai-npcs-cdp',
      },
    ],
    role: 'Solo builder of the Unity integration and companion agent service',
    proof:
      'Unity serializes world state; the agent service returns lore, dialogue, and event data; the client validates known entities before NPC movement.',
    currentState:
      'The complete local game-to-agent loop is implemented across two repositories; both describe the work as completed and not under active development.',
    nextStep:
      'Add gameplay capture and enforce typed model-output schemas and per-action authorization before any networked deployment.',
    relatedSlugs: ['bender', 'ai-action-os', 'wisp-lab'],
    tech: ['Unity', 'C#', 'Python', 'Flask', 'LangGraph', 'CDP AgentKit'],
    architecture: [
      'WORLD STATE',
      'AGENT SERVICE',
      'LORE + EVENT',
      'STRUCTURED ACTION',
      'UNITY WORLD',
    ],
    accent: '#70d6a6',
  },
  {
    slug: 'ai-action-os',
    title: 'AI Action OS',
    kicker: 'Generative UI · Agents · Approval',
    status: 'Working v0 systems prototype',
    description:
      'A generative interface where conductor, auditor, and executor agents turn intent into visible, approval-gated actions.',
    why: 'Agent interfaces should expose plans, permissions, and consequences—not hide them behind a typing indicator.',
    built:
      'A multi-agent control flow, generated interface layer, approval-gated tools, and an event-sourced SQLite execution ledger.',
    hardPart:
      'Keeping generated interaction flexible while preserving a deterministic record of what was proposed, approved, and executed.',
    result:
      'A working model for agent software that is inspectable before and after it acts.',
    repoLinks: [
      { label: 'Source', href: 'https://github.com/RealWooblay/ai-ui' },
    ],
    role: 'Solo builder and maintainer',
    proof:
      'Live-generated TSX, conductor/auditor/executor flow, explicit tool approval, an event-sourced SQLite ledger, and a repository test suite.',
    currentState:
      'The local v0 has four tools and API watching; generated-code containment and outbound HTTP controls are explicitly not hardened production boundaries.',
    nextStep:
      'Publish a short working demo and test result, then isolate generated UI by origin or worker and enforce DNS/IP destination controls.',
    relatedSlugs: ['wooblay-ai', 'minitown-ai', 'meridian'],
    tech: [
      'TypeScript',
      'React',
      'SQLite',
      'Agent orchestration',
      'Tool approval',
    ],
    architecture: [
      'USER INTENT',
      'CONDUCTOR',
      'AUDITOR',
      'APPROVAL',
      'EXECUTOR',
      'LEDGER',
    ],
    accent: '#ffda68',
  },
  {
    slug: 'prove-me-wrong',
    title: 'Prove Me Wrong',
    kicker: 'Browser extension · Resolution agents · Solidity',
    status: 'Completed hackathon-era cross-stack prototype',
    description:
      'A prediction-market experiment that lets claims emerge from the browser and resolves them through evidence-seeking agents.',
    why: 'Predictions are usually separated from the place the claim was made. This prototype closes that gap and makes evidence collection part of settlement.',
    built:
      'A browser overlay, product interface, FastAPI resolution agents, evidence flow, and Solidity settlement contracts.',
    hardPart:
      'Representing ambiguous real-world claims precisely enough for both an evidence agent and a contract outcome.',
    result:
      'A cross-stack prototype spanning capture, market UX, agent resolution, and settlement.',
    repoLinks: [
      {
        label: 'Source',
        href: 'https://github.com/RealWooblay/prove-me-wrong',
      },
    ],
    role: 'Co-builder on a two-person project · browser overlay/extension and AI generator/resolver work; collaborator made substantial contract contributions',
    proof:
      'A working browser overlay, FastAPI generator/resolver services, explicit YES/NO/INSUFFICIENT_EVIDENCE states, and Solidity contracts.',
    currentState:
      'The integration exists as an engineering prototype, not a production financial product; deployed settlement status is not documented.',
    nextStep:
      'Record the claim → market → evidence → settlement flow and harden administrative and contract paths before any live deployment.',
    relatedSlugs: ['golazo', 'wooblay-ai', 'meridian'],
    tech: ['TypeScript', 'Browser extensions', 'FastAPI', 'Agents', 'Solidity'],
    architecture: [
      'WEB CLAIM',
      'BROWSER OVERLAY',
      'MARKET',
      'EVIDENCE AGENT',
      'SETTLEMENT',
    ],
    accent: '#ff835c',
  },
];

export const projectBySlug = Object.fromEntries(
  projects.map((project) => [project.slug, project]),
);
