# Code Trail

A staircase of code fragments on brightly coloured bars, trailing the pointer across a plain plate. Rows stack down and left at roughly -35°, no gap between them, each one lapping over the row behind it so the stack reads as layered paper rather than a tiled grid.

## Why

The decision the whole effect rests on: each row eases toward the row *above* it, never toward wherever the cursor happened to be when it spawned. Stamp rows at the pointer instead and a zigzag path gives you a zigzag stack — the ribbon is then only ever as tidy as the person moving the mouse. Chaining resolves into a clean staircase no matter how badly the pointer moves, and it buys the whip through a turn for free: the head changes direction, the tail arrives late, and the ribbon curves like something with actual weight.

## How it's built

- **The chase rate ramps down the chain** — fast at the head, slow at the tail — rather than using one rate for every row. A single rate makes the stack move as a rigid object; the gradient is what makes it read as dragged. Rows are walked front to back each frame so every row reads its parent's already-updated position, or the lag never accumulates.
- **Rows are pushed by distance, never by time.** A new row appears once the head has travelled a fixed fraction of the card's width, so a still pointer can't bury the stack on one spot and a fast sweep lays a longer ribbon than a slow one, with no explicit speed term anywhere.
- **A row is a run of badges, not one badge** — one to three fragments butted edge to edge with zero gap, so a single line reads as visibly assembled out of differently-coloured pieces. Badge count follows a sine spindle by depth: one at the head, up to three through the belly, back down to one at the tail, so the ribbon has a shape instead of reading as a rectangle sheared over. Each row anchors by its right edge, so runs grow leftward and clip off the frame.
- **Colour pairs are stored combinations, never two independent rolls.** The text sits in another saturated colour where it has no business sitting — orange on lavender, dark red on mint — and legibility is deliberately uneven, because the eye is meant to land on two or three bars and read the rest as texture. Tuning every pair to the same contrast would flatten exactly that.
- **The code is two languages cut mid-expression.** Half GLSL, half Python, sharing one domain — noise, flow fields, pixel buffers — so however the bag shuffles, a row looks like it came from one project. Every fragment is a genuine cut: an open paren that never closes, an operator with nothing after it. Complete, balanced statements laid end to end would read as a list of tags instead of torn source.
- **Built as DOM, not canvas.** About thirty elements that only ever move, with transforms written straight to element style inside the animation loop rather than routed through component state — so the monospace text stays crisp at any pixel density for free, and the underlines and padding are just CSS.

## Stack

- **Framework:** Next.js (App Router), TypeScript, Tailwind CSS v4
- **Rendering:** plain DOM elements, positioned with `transform` in a `requestAnimationFrame` loop — a fixed pool of rows gets recycled (the oldest becomes the new head) so nothing mounts or unmounts while it runs
- **Font:** [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) for the code fragments, [Archivo](https://fonts.google.com/specimen/Archivo) for the surrounding page

The animation (`src/components/code-trail/`) doesn't import React beyond the thin component wrapper — `fragments.ts` holds the fragment bag and the slot-matching rules that keep adjacent pieces syntactically plausible, `palette.ts` holds the curated colour pairs, `engine.ts` is the chained-staircase math, and `code-trail-card.tsx` mounts it and watches for visibility, reduced-motion, and pointer position.

## Running it locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
