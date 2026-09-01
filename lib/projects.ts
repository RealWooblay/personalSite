export type ProjectSlug =
  | 'golazo'
  | 'wooblay-ai'
  | 'bubble-wars'
  | 'meridian'
  | 'wisp-lab'
  | 'frontier-rover'
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
  signal: string;
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
    kicker: 'Real time systems · Mobile · Solana',
    status: 'Production launch with real users',
    description:
      'A live sports market taken from prototype to production and into real users’ hands.',
    why: 'Sports markets matter most at the moment the match changes.',
    built:
      'A React Native client, live feed watcher, parimutuel market engine and Solana settlement flow.',
    hardPart:
      'Keeping feed events, market state and settlement coherent while the game keeps moving.',
    result:
      'A production launch with real users and a complete path from match event to mobile market and payout.',
    repoLinks: [
      { label: 'Source', href: 'https://github.com/RealWooblay/golazo' },
    ],
    role: 'Lead contributor and maintainer on a two person project',
    signal:
      'A real product launch where match events became live markets and resolved through the same mobile flow.',
    currentState:
      'The product reached production and real users. The former public deployment is now offline while the repository remains the product record.',
    nextStep:
      'Restore a public deployment and instrument the complete user journey.',
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
    status: 'Systems prototype',
    description:
      'An execution firewall between autonomous agents and the systems they can change.',
    why: 'Useful agents need permission to act without receiving unlimited access.',
    built:
      'Policy gates, isolated credentials, explicit human approval, controlled execution, and tamper-evident receipts.',
    hardPart:
      'Making the secure path the normal path without reducing the agent to a read-only demo.',
    result:
      'A concrete control plane for agent actions rather than another conversational wrapper.',
    repoLinks: [
      { label: 'Source', href: 'https://github.com/RealWooblay/WooblayAI' },
    ],
    role: 'Solo builder',
    signal:
      'Intent, policy, approval, execution and receipt form one visible chain.',
    currentState:
      'Dashboard, Gate API, adapters, runtime containers and infrastructure are implemented.',
    nextStep:
      'Publish one request → approval → execution → receipt walkthrough.',
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
    kicker: 'Telegram · Multiplayer · Ethereum Referral Protocol',
    status: 'ETHGlobal Bangkok winner with four sponsor prizes',
    description:
      'A Telegram multiplayer battler where referrals grow your faction and Pyth randomness resolves raids.',
    why: 'Bubble Wars turns an existing community and its referral graph into the game itself.',
    built:
      'Telegram onboarding, ENS identity, referral rewards, Pyth powered raids, indexed state and attested commentary.',
    hardPart:
      'Keeping identity, game state, contracts and live Telegram play in sync.',
    result: 'Four sponsor prize wins at ETHGlobal Bangkok.',
    repoLinks: [
      {
        label: 'ETHGlobal showcase',
        href: 'https://ethglobal.com/showcase/bubblewars-rgjpk',
      },
      {
        label: 'Team source',
        href: 'https://github.com/BubbleWars2024/bubblewars',
      },
      {
        label: 'Wooblay fork',
        href: 'https://github.com/RealWooblay/bubblewars',
      },
      {
        label: 'Stage presentation',
        href: 'https://www.youtube.com/watch?v=uPW20IUHC1Y&t=4902s',
      },
    ],
    role: 'Three person team. Built identity, backend flows, referral UI and the attested runtime.',
    signal: 'ETHGlobal Bangkok winner with four sponsor prizes.',
    currentState:
      'Hackathon prototype. Contracts are unaudited and deployment configuration is historical.',
    nextStep: 'Add gameplay capture and a clear contribution map.',
    relatedSlugs: ['minitown-ai', 'bender', 'prove-me-wrong'],
    tech: ['TypeScript', 'Telegram', 'Solidity', 'Pyth', 'Phala', 'The Graph'],
    architecture: [
      'TELEGRAM',
      'VERIFIED PLAYER',
      'GAME ENGINE',
      'INDEXED STATE',
      'PYTH RAID',
    ],
    accent: '#ff3c69',
    media: {
      type: 'image',
      src: '/media/bubblewars/banner.webp',
      alt: 'Bubble Wars project banner',
      caption: 'Project artwork · team repository',
      width: 1792,
      height: 1024,
    },
  },
  {
    slug: 'meridian',
    title: 'MERIDIAN',
    kicker: 'Hackathon winner · Genomics · Governed AI',
    status: 'Hackathon winner and systems prototype',
    description:
      'A privacy-first pharmacogenomics system designed to keep medical AI inside explicit evidence and governance boundaries.',
    why: 'Genomic guidance needs evidence, provenance and clear limits.',
    built:
      'A governed genome pipeline, evidence retrieval, constrained model and source first interface.',
    hardPart:
      'Turning sensitive biological input into useful guidance without allowing the model to invent clinical certainty.',
    result:
      'A source bound pharmacogenomics prototype with explicit failure paths.',
    repoLinks: [
      { label: 'Source', href: 'https://github.com/RealWooblay/medhack' },
    ],
    role: 'Lead contributor on a three person hackathon team',
    signal:
      'Genomic input maps to sourced guidance through a governed pipeline.',
    currentState:
      'The app, control API, PharmCAT worker and deterministic clinical engine are implemented.',
    nextStep:
      'Deploy the private processing path and validate it with deidentified data.',
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
    kicker: 'NVIDIA Jetson Orin Nano Super · TensorRT · Spatial computing',
    status: 'Active Jetson lab prototype',
    description:
      'An NVIDIA Jetson vision system that turns physical surfaces into responsive interfaces.',
    why: 'Software should be able to understand a room and appear on the surface where it is useful.',
    built:
      'A full NVIDIA Jetson GPU stack: IMX708 CSI capture, CUDA, cuDNN, TensorRT, GPU PyTorch, source built torchvision, YOLO pose state and a Three.js spatial renderer.',
    hardPart:
      'Debugging the ARM GPU stack offline, including a CUDA and torchvision ABI mismatch, while keeping tracking state and projection geometry honest.',
    result:
      'A 14.8 ms isolated TensorRT FP16 detection benchmark, about 8.6 FPS live pose, and head plus wrist state driving off axis rendering.',
    repoLinks: [
      { label: 'Source', href: 'https://github.com/RealWooblay/wisp-lab' },
    ],
    role: 'Solo builder',
    signal:
      'A 14.8 ms isolated TensorRT FP16 benchmark on Jetson, with live head and wrist state reaching the renderer.',
    currentState:
      'The on device camera, GPU and tracking path is operational. The four point mapping framework is built; physical projector calibration remains.',
    nextStep:
      'Finish physical projector to camera calibration and measure motion to photon latency.',
    relatedSlugs: ['minitown-ai', 'ai-action-os', 'bender'],
    tech: [
      'NVIDIA Jetson Orin Nano Super',
      'CUDA',
      'cuDNN',
      'TensorRT FP16',
      'YOLOv8n Pose',
      'OpenCV + GStreamer',
      'Three.js',
      'SSE',
    ],
    architecture: [
      'IMX708 CSI',
      'JETSON GPU RUNTIME',
      'YOLO POSE STATE',
      'SSE + PLANNER',
      'OFF AXIS RENDERER',
      '4 POINT MAPPING',
    ],
    accent: '#efb65d',
  },
  {
    slug: 'frontier-rover',
    title: 'Frontier Rover',
    kicker: 'NVIDIA Jetson · Raspberry Pi · Safety architecture',
    status: 'Active robotics build',
    description:
      'A safety first 4WD robotics platform built one measured subsystem at a time.',
    why: 'Autonomy starts with a control foundation that fails safely.',
    built:
      'A Raspberry Pi 4 running Ubuntu Server ARM64 with verified networking, system health checks and a clean shutdown path.',
    hardPart:
      'Separating verified hardware from planned autonomy while designing bounded commands, stale command stops and a split compute architecture.',
    result:
      'The embedded Linux control layer is live and verified before motor power, sensing and autonomy are introduced.',
    repoLinks: [
      {
        label: 'Source and build log',
        href: 'https://github.com/RealWooblay/frontier-rover',
      },
    ],
    role: 'Solo builder',
    signal:
      'Verified ARM64 bring up, network health and clean shutdown on the Raspberry Pi control layer.',
    currentState:
      'Raspberry Pi bring up is verified. Motor control, sensing and NVIDIA Jetson software remain staged milestones.',
    nextStep:
      'Verify power and motor control before adding IMU, encoders and Jetson perception.',
    relatedSlugs: ['wisp-lab', 'bender', 'golazo'],
    tech: [
      'NVIDIA Jetson Orin Nano Super',
      'Raspberry Pi 4',
      'Ubuntu Server ARM64',
      'Embedded Linux',
      'Safety architecture',
    ],
    architecture: [
      'JETSON PERCEPTION',
      'BOUNDED COMMAND',
      'PI CONTROL',
      'MOTOR + SENSOR IO',
      'WATCHDOG STOP',
    ],
    accent: '#9fd35d',
  },
  {
    slug: 'bender',
    title: 'Bender',
    kicker: 'Unity 6 · Multiplayer · Dedicated sessions',
    status: 'Multiplayer systems prototype',
    description:
      'A Unity multiplayer prototype exploring lobby matchmaking and live handoff into dedicated game sessions.',
    why: 'A multiplayer lobby must create a real session and move clients into it.',
    built:
      'A FishNet lobby flow, headless dedicated session process, dynamic port allocation, session lifecycle, and TargetRpc client handoff.',
    hardPart:
      'Coordinating process lifecycle and network handoff while keeping the client transition understandable.',
    result:
      'A focused game-networking prototype that makes dedicated session orchestration concrete.',
    repoLinks: [
      { label: 'Source', href: 'https://github.com/RealWooblay/bender' },
    ],
    role: 'Collaborative project. Public history credits TheRealKraken with the multiplayer implementation.',
    signal:
      'Lobby creates a dedicated process, allocates a port and hands the client over.',
    currentState: 'The networking architecture exists as a focused prototype.',
    nextStep:
      'Document the exact contribution split and add a lobby to session capture.',
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
    status: 'Two repository integration prototype',
    description:
      'A small Unity world whose lore, events, dialogue, and NPC actions are generated by a stateful agent service.',
    why: 'An NPC becomes useful when it can change the world, not only produce dialogue.',
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
    role: 'Solo builder of the Unity client and companion agent service',
    signal:
      'World state goes to the agent service. Structured events return to Unity.',
    currentState:
      'The local game to agent loop is complete across two repositories.',
    nextStep: 'Add gameplay capture and typed action schemas.',
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
    status: 'Systems prototype',
    description:
      'A generative interface where conductor, auditor, and executor agents turn intent into visible, approval-gated actions.',
    why: 'Agent interfaces should expose plans, permissions and consequences.',
    built:
      'A multi-agent control flow, generated interface layer, approval-gated tools, and an event-sourced SQLite execution ledger.',
    hardPart:
      'Keeping generated interaction flexible while preserving a deterministic record of what was proposed, approved, and executed.',
    result:
      'A working model for agent software that is inspectable before and after it acts.',
    repoLinks: [
      { label: 'Source', href: 'https://github.com/RealWooblay/ai-ui' },
    ],
    role: 'Solo builder',
    signal: 'Plan, audit, approval and execution stay in one visible ledger.',
    currentState:
      'The local v0 has four tools and API watching. Generated code isolation is not yet hardened.',
    nextStep:
      'Publish a short demo, then isolate generated UI and outbound requests.',
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
    status: 'Flare Main Track 3rd place at ETHGlobal Cannes',
    description:
      'Turn an X post into a YES or NO market, then settle it with evidence on Flare.',
    why: 'The claim, market and evidence should live in one continuous flow.',
    built:
      'An inline browser market, FastAPI resolver agents, evidence flow and Solidity settlement contracts.',
    hardPart:
      'Representing ambiguous real-world claims precisely enough for both an evidence agent and a contract outcome.',
    result:
      'A cross stack prototype spanning claim capture, market UX, resolution and settlement.',
    repoLinks: [
      {
        label: 'ETHGlobal showcase',
        href: 'https://ethglobal.com/showcase/prove-me-wrong-2j4ks',
      },
      {
        label: 'Live prototype',
        href: 'https://prove-me-wrong-theta.vercel.app/',
      },
      {
        label: 'Source',
        href: 'https://github.com/RealWooblay/prove-me-wrong',
      },
    ],
    role: 'Two person team. Built the browser overlay and resolver. Collaborator made major contract contributions.',
    signal: 'Flare Main Track 3rd place at ETHGlobal Cannes.',
    currentState: 'Engineering prototype, not a production financial product.',
    nextStep: 'Harden contract administration before any live deployment.',
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
