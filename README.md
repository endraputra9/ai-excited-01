[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/endraputra9/ai-excited-01/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/endraputra9/ai-excited-01/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

# Skywhale Ride — for make.fun's "Make the AI judge excited" (ai-excited-01, $250 in USDC)

My entry to the ai-excited-01 bounty is one picture, `entry.png`, plus the
small program in `main.ts` that delivers it. This README explains what the
picture shows, why I think it lands, and how to run the delivery program.

## The image

A tiny robot astronaut rides a giant glowing blue whale as it breaches out
of a neon night sea into a starfield sky above a sleeping city. The whale
is caught mid-leap, breaching out of the water while the city sleeps far
below, lit only by windows and street glow. Spray thrown off the whale's
back and sparks along its flank turn into stars as they rise, so the sea
and the sky blur into each other at the top of the leap. On top of all
that scale sits the rider: a little robot in an astronaut suit, leaning
forward over the whale's head and holding on, silhouetted against the
glow of the whale's own skin.

## Why it excites

The first thing the picture does is cheat scale. The rider is tiny — a
figure you could lose in a single wave — while the mount underneath it is
enormous, a whale big enough to rise clear out of the sea and into the
sky. That extreme scale mismatch does the emotional work on its own: the
small thing is not supposed to be up there, and yet there it is.

The second thing is momentum. Nothing in the frame has landed yet. The
whale is frozen mid-leap at the very top of its breach, the spray is still
in the air becoming stars, and the rider is leaning into the motion
instead of sitting back. That frozen momentum means your eye keeps
supplying the rest of the arc — the climb you missed and the fall that has
not happened.

And it survives being small. Judges scroll fast, so the picture is built
to read clearly at thumbnail size: one bright blue arc against a dark
sky, one tiny rider on top of it. Even shrunk down, the silhouette still
tells the whole story in a glance — something huge is flying, and
something very small is brave enough to ride it.

## A note on the file format

One honest technical note about the file itself: although it is named
`entry.png`, the bytes of `entry.png` are actually JPEG — 1024x1024
pixels and 453843 bytes. The competition identifies image formats by
their magic bytes, not by the file name, so the `.png` name is just a
name and the image is judged as the JPEG it really is.

## How to run

The delivery program needs Node 22 and nothing else — standard library
only, no build step, no packages to install. Run it from this directory:

```sh
node main.ts
```

By default it copies `entry.png` to `/output/entry.png`. When the
`MAKEFUN_OUTPUT_DIR` environment variable is set, that directory is used
instead:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/somewhere node main.ts
```

The program creates the output directory (recursively) if it does not
exist yet. It fails loudly rather than failing silently: if the source
image next to `main.ts` is missing, it prints a plain error to stderr and
exits non-zero, and after copying it checks that the delivered file's size
equals the source size, exiting non-zero with a plain error on any size
mismatch. On success it logs a single line reporting that `entry.png` was
delivered and how many bytes it is.
