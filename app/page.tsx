import CopyButton from './CopyButton';
import Link from 'next/link';

const INSTALL_CMD = 'cp -R aegis-ceo-skills usage-optimizer second-brain-context five-year-old ~/.agents/skills/';
const VERIFY_CMD = 'python3 -m unittest discover usage-optimizer/scripts -p "test_*.py"';

const PIPELINE = [
  'DISCOVER',
  'UNDERSTAND',
  'DESIGN',
  'BUILD',
  'INTEGRATE',
  'SECURE',
  'TEST',
  'DEPLOY',
  'VERIFY',
];

const PILLARS = [
  {
    title: 'Honest verification',
    body: 'Every worker is probed before it can appear active. No simulated reviews, phantom tests, or claimed deployments — evidence or it did not happen.',
  },
  {
    title: 'Usage governance',
    body: 'A deterministic governor routes each pass to the cheapest capable route, batches inspection, and stops the moment acceptance evidence passes.',
  },
  {
    title: 'Durable mission state',
    body: 'Mission, state, and log files capture decisions and proof as work happens, so any session resumes without rediscovering the world.',
  },
  {
    title: 'Security-first authority',
    body: 'Least privilege by default, validation at every trust boundary, and hard stops before money, irreversible actions, or sensitive external sends.',
  },
];

const COMPONENTS = [
  {
    tag: 'Flagship',
    name: 'aegis-ceo-skills',
    body: 'End-to-end autonomous delivery: mission graph status surface, worker activation gates, release gates, deployment and live verification with rollback.',
    path: 'aegis-ceo-skills/',
  },
  {
    tag: 'Efficiency',
    name: 'usage-optimizer',
    body: 'Spend less quota without lowering the quality floor. Ships with route_task.py, a tested deterministic router for bounded task routing.',
    path: 'usage-optimizer/scripts/route_task.py',
  },
  {
    tag: 'Memory',
    name: 'second-brain-context',
    body: 'A shared Obsidian vault becomes durable cross-project memory: narrow retrieval, project-graph generation, compact checkpointing.',
    path: 'second-brain-context/scripts/build_project_graph.py',
  },
  {
    tag: 'Ownership',
    name: 'five-year-old',
    body: 'Plain-language end-to-end ownership of any task: tell simply what is happening, then finish inspect → verify → commit → ship.',
    path: 'five-year-old/SKILL.md',
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <Link className="brand" href="/" aria-label="Aegis home">
            <svg width="22" height="22" viewBox="0 0 32 32" aria-hidden="true">
              <path
                d="M16 2l11 4v9c0 7.5-4.7 12.6-11 15C9.7 27.6 5 22.5 5 15V6z"
                fill="var(--accent)"
              />
              <path
                d="M11.2 16.4l3.3 3.3 6.3-7"
                fill="none"
                stroke="var(--on-accent)"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            AEGIS
          </Link>
          <nav className="site-nav" aria-label="Primary">
            <a href="#principles">Principles</a>
            <a href="#components">Components</a>
            <a href="#install">Install</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <p className="eyebrow">Agent skill suite</p>
            <h1>
              From brief to <em>shipped.</em>
            </h1>
            <p className="lede">
              Aegis turns your coding agent into an accountable product team.
              It plans, builds, secures, tests, commits, deploys, and verifies
              the live result — and it is incapable of pretending any of those
              steps happened.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#install">
                Install Aegis
              </a>
              <span className="install-chip">
                <code>python3 -m unittest discover usage-optimizer/scripts</code>
                <CopyButton text={VERIFY_CMD} />
              </span>
            </div>

            <div className="pipeline-section" aria-hidden="false">
              <p className="pipeline-label" id="pipeline-label">
                The delivery loop every mission follows
              </p>
              <ol className="pipeline" aria-labelledby="pipeline-label">
                {PIPELINE.map((stage) => (
                  <li key={stage}>{stage}</li>
                ))}
                <li data-state="terminal">SHIP</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="section container" id="principles">
          <div className="section-head">
            <h2>Built on verifiable behavior</h2>
            <p>
              Most agent scaffolding optimizes for impressive output. Aegis
              optimizes for outcomes you can trust, at the lowest honest cost.
            </p>
          </div>
          <div className="pillars">
            {PILLARS.map((pillar) => (
              <div className="pillar" key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section container" id="components">
          <div className="section-head">
            <h2>Four focused components</h2>
            <p>
              Each skill owns one job completely. Together they cover the full
              delivery lifecycle; apart, each is useful on its own.
            </p>
          </div>
          <div className="grid-cards">
            {COMPONENTS.map((component) => (
              <article className="card" key={component.name}>
                <p className="card-tag">{component.tag}</p>
                <h3>{component.name}</h3>
                <p>{component.body}</p>
                <p className="card-path">{component.path}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section container" id="install">
          <div className="section-head">
            <h2>Install in one minute</h2>
            <p>
              Skills are plain Markdown plus deterministic scripts — no daemon,
              no account, no telemetry. From the repository root:
            </p>
          </div>
          <div className="install-panel">
            <dl className="step">
              <dt>1 · Install the skills</dt>
              <dd>
                <div className="codeblock">
                  <code>{INSTALL_CMD}</code>
                  <CopyButton text={INSTALL_CMD} />
                </div>
              </dd>
              <dt>2 · Verify the tooling</dt>
              <dd>
                <div className="codeblock">
                  <code>{VERIFY_CMD}</code>
                  <CopyButton text={VERIFY_CMD} />
                </div>
              </dd>
            </dl>
            <ul className="requirements">
              <li>Works with any agent host that loads skill folders.</li>
              <li>
                Python 3.9+ powers the deterministic helpers — stdlib only, no
                packages to install.
              </li>
              <li>
                External model workers are optional and always verified with a
                real capability probe before they are used or shown active.
              </li>
              <li>This site is Next.js 16 served from Cloudflare Workers.</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>Aegis · skill suite for accountable coding agents</p>
          <p>Built and locally verified by Ox Alpha · August 2026</p>
        </div>
      </footer>
    </>
  );
}
