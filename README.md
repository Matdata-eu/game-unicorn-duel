# Unicorn Duel

A gentle duelling game for two unicorns, as an installable web app (PWA). Pick one of six unicorns, send sparkles with your horn, hop over the sparkles coming your way and use your unicorn's own magic move. Nobody gets hurt: a unicorn who is sparkled just giggles, spins and bounces, and the other one earns a star. The first to the star limit wins.

**Play:** https://matdata-eu.github.io/game-unicorn-duel/

## Modes
- **Starter** (default): made for young players. Only run, jump, sparkle and magic. Sparkles fly slowly, duels go to 5 stars in 3 minutes, and a little bubble above your unicorn says when to jump, when to run from a shadow and when your magic is ready. The menu only asks for the opponent, the bot level and the unicorns.
- **Expert**: adds the bubble (blocks a sparkle; pop it just as the sparkle arrives and it bounces back), a big bouncing sparkle when you hold the sparkle button, faster sparkles and 5, 7 or 10 star duels.
- **Bot**: you (pink, left) against a bot (blue, right) on Easy (the default), Medium or Hard. Easier bots send fewer and slower sparkles, react later and hop less often.
- **2 Players**: two people on one device. Keyboard: Player 1 `A D` run, `W` jump, `S` sparkle, `Q` magic, `E` bubble. Player 2 `← →` run, `↑` jump, `↓` sparkle, `Enter` or `.` magic, `/` or right `Shift` bubble. Against the bot the arrows, `Space` (jump) and `Enter` or `F` (magic) work for you too. On a touchscreen each player gets big buttons on their side.

## The unicorns
| Unicorn | Magic move | What it does | How to get away |
|---|---|---|---|
| Rosie | Heart Shower | Three hearts float over, one after another. | Hop over each one. |
| Luna | Rainbow Drop | A rainbow lands where the other unicorn stands; a shadow follows her first, then stops. | Run away from the shadow. |
| Sunny | Flower Wave | She stomps and a wave of flowers rolls along the grass. | Jump over it. |
| Pip | Lullaby | A sleepy song makes the other unicorn doze off for a moment: she runs slowly and can't jump or sparkle. | Tap any button to wake up sooner. |
| Snowy | Snow Globe | For five seconds a snow globe around her bounces every sparkle back. | Don't sparkle into the globe. |
| Starla | Wishing Star | A friendly star chases the other unicorn along the grass for a few seconds. | Jump over it when it comes close. |

The rainbow bar under each name fills slowly during the duel, faster with every nice hop over a sparkle and a little when you are sparkled.

## How to play
| Control | What it does |
|---|---|
| Run | Left and right along the meadow. Bump into the other unicorn and you both bounce. |
| Jump | A big floaty hop. Sparkles fly low, so hop over them. |
| Sparkle | Sends a sparkle from your horn. Two at a time at most. |
| Hold sparkle (Expert) | A big sparkle that bounces up and down, harder to hop over. |
| Bubble (Expert) | A short bubble that blocks one sparkle. Popped just as the sparkle arrives, it bounces the sparkle back. |
| Magic | Your unicorn's own magic move, once the rainbow bar is full. |

Two sparkles that meet in the air turn into hearts. When time runs out the unicorn with the most stars wins; if it's a tie, it's a golden star and the next sparkle wins. A friendly voice calls "Ready, set, sparkle!" at the start and names the winner, using your browser's built-in speech when available. Glitter drifts through the air, and the unicorns sprinkle it as they run and jump.

## Install
Open the game in Chrome, Edge or Safari and choose "Install" or "Add to Home Screen". After the first load it works offline.

## Run locally
No build step. Serve the folder over `localhost` or HTTPS, for example:

```sh
python3 -m http.server 8000
```

Files: `index.html` (the whole game), `manifest.webmanifest`, `sw.js` (offline cache), `icons/`. Pushes to `main` deploy to GitHub Pages through `.github/workflows/pages.yml`.

## Support
Found a bug or have an idea? [Open an issue](https://github.com/Matdata-eu/game-unicorn-duel/issues).

## Credits
- Game, unicorns, graphics and sound effects: made from scratch in code (canvas drawing, Web Audio), no third-party assets. The narrator's voice is your browser's built-in speech when available.
- Fonts: [Fredoka](https://fonts.google.com/specimen/Fredoka) by Milena Brandão and Hafontia, and [Nunito](https://fonts.google.com/specimen/Nunito) by Vernon Adams and contributors, both under the SIL Open Font License, loaded from Google Fonts.
- Built by [Matdata](https://matdata.eu) with [Claude Code](https://claude.com/claude-code).

## License
[MIT](LICENSE)
