import { CodeTrailCard } from "@/components/code-trail/code-trail-card";

const BUILT_FROM = [
  "The stack is a chain, not a record of the path: each row eases toward the row above it, never toward where the cursor was when it spawned. Stamping rows at the pointer gives you a zigzag stack exactly as messy as the path; chaining resolves into a clean staircase no matter how badly the mouse moves, and gets the whip through a turn for free.",
  "The chase rate ramps down the chain — fast at the head, slow at the tail — rather than using one rate for every row. A single rate makes the stack move as a rigid object; the gradient is what makes it read as dragged.",
  "Rows are pushed by distance travelled, never by time, so a still pointer can't bury the stack on one spot and a fast sweep lays a longer ribbon than a slow one with no explicit speed term anywhere.",
  "Badge count follows a sine spindle by depth — one at the head, up to three through the belly, back down to one at the tail — so the ribbon has a shape instead of reading as a rectangle sheared over.",
];

const CONSTRAINTS = [
  "Colour pairs are stored combinations, never two independent rolls — a curated list gets the good accident every time, where independent rolls give mud most of the time and a good accident occasionally. Legibility is deliberately uneven: a few pairs are comfortable, most are not, because the eye is meant to land on two or three bars and read the rest as texture.",
  "Every fragment is a cut, not a line — an open paren that never closes, an operator with nothing after it. That's what lets any two fragments butt together and still look like source that got sliced; complete statements laid end to end would read as a list of tags.",
  "Fragments are drawn from a shuffled bag without replacement, not a per-draw random pick, so the same string can't turn up twice in a visible stack and give the illusion away.",
  "Built as DOM, not canvas: about thirty elements that only ever move, with transforms written straight to element style inside the animation loop rather than routed through component state — so the mono text stays crisp at any pixel density for free.",
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-8">
        <span className="text-sm font-bold tracking-tight">Code Trail</span>
        <a
          href="https://github.com/prashantkoirala465/code-trail"
          className="text-sm text-muted transition-colors hover:text-foreground"
        >
          GitHub
        </a>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 pb-16">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
            A staircase of code that follows your cursor.
          </h1>
          <p className="mt-4 leading-relaxed text-muted">
            Rows of code fragments on brightly coloured bars stack down and
            left with no gap between them, each one chasing the row above it
            rather than the pointer itself — so the ribbon resolves into a
            clean diagonal staircase no matter how the cursor moves, and
            whips through a turn like something with actual weight.
          </p>
        </div>

        <CodeTrailCard />

        <p className="text-sm text-muted">
          Move your pointer across it — the staircase follows and settles
          into a stair each time it pauses.
        </p>
      </main>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-muted">
              How it&apos;s built
            </h2>
            <ul className="mt-4 flex flex-col gap-4 text-sm leading-relaxed">
              {BUILT_FROM.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-muted">
              Constraints
            </h2>
            <ul className="mt-4 flex flex-col gap-4 text-sm leading-relaxed">
              {CONSTRAINTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer className="border-t border-line px-6 py-8 text-sm text-muted">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <span>© {year} Prashant Koirala</span>
          <a
            href="https://github.com/prashantkoirala465/code-trail"
            className="transition-colors hover:text-foreground"
          >
            Source
          </a>
        </div>
      </footer>
    </div>
  );
}
