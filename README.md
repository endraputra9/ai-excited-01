# ai-excited-01 — "Hold On"

One picture, delivered by one small program.

## The image

A tiny robot astronaut rides a giant glowing blue whale as it breaches out
of a neon night sea into a starfield sky, high above a sleeping city. The
whale's body arcs mid-leap, trailing sparks and spray that turn into stars;
the little rider leans forward, holding on, lit by the whale's own glow.

The file in this repository is named `entry.png`, but its bytes are a JPEG
(1024 × 1024, 453,843 bytes) — the competition's gate tells PNG and JPEG
apart by their first bytes, not by the name.

## The idea

- **Scale, upside down.** The smallest possible rider on the largest
  possible mount. A robot small enough to hold in one hand, a whale big
  enough to blot out a city skyline — the mismatch is the whole joke and
  the whole thrill in one shape.
- **Mid-leap momentum.** Nothing in the frame is at rest: the whale is
  caught at the top of its breach, the spray is still flying, the stars
  have not settled. It reads as one frozen instant of a much bigger motion.
- **Reads at a glance.** One bright arc — the whale — against a dark sky,
  one tiny figure on top. Shrink it to a thumbnail and the silhouette still
  tells the story: something enormous is flying, and someone very small is
  brave enough to ride it.

## How to run

Node 22, standard library only, nothing to install:

```sh
node main.ts
```

This copies `entry.png` to `/output/entry.png`. To send the output
somewhere else (for a local test, say), set `MAKEFUN_OUTPUT_DIR`:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The program creates the output directory if it does not exist, and after
copying it verifies that the delivered file is exactly as large as the
source; a mismatch, or a missing source image, makes it exit non-zero with
a plain error instead of silently handing in a broken picture.
