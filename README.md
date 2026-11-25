# WebPentest101

A beginner-friendly educational website about **web application penetration testing**.
Final project for **INFO 250 - Web Development I**, American University of Phnom Penh.

> For education only. Only test systems you own or have written permission to test.

## Team
- Harry Vuthy
- Sovan Kanitha Sem
- Sokeng Yom

Instructor: Monyrath Buntoun

## Pages
| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Intro, what pentesting is, a video, and a contact form |
| Learning | `learning.html` + `learning/*.html` | 10 lessons, one per vulnerability |
| Cheatsheet | `cheatsheet.html` | Searchable, filterable testing examples with copy buttons and a summary table |
| Lab | `lab.html` | 5 downloadable practice labs (in `downloads/`, source in `labs/`) and a 6-question quiz |
| Roadmap | `roadmap.html` | A 4-stage study plan and resource list |

## Practice labs
The `labs/` folder holds 5 small practice websites, each with one built-in weakness
(SQL injection, reflected XSS, IDOR, broken access control, command injection).
Each lab runs entirely in the browser using a *simulated* database/server written in
plain JavaScript - there is no real backend and nothing touches the network, so the
labs are safe and cannot be used against real sites. Every lab has a Vulnerable/Fixed
toggle. Zipped copies for download are in `downloads/`.

## Design
The visual design is based on the **Hacker Plus theme** by Rinish Sam
(@CaptainIRS), MIT License - a classic hacker look: near-black background,
lime-green (`#b5e853`) accents, all-monospace text, a fixed left sidebar with
`./` and `~/` terminal prompts, and dashed-green rules. We rebuilt it in our own
plain CSS. See `NOTICE.md`.

## Built with
Mostly **HTML and CSS**, with a small amount of beginner JavaScript.
- External CSS stylesheet linked on every page, with `@import` for typography.
- Flexbox and CSS Grid for layout, media queries for responsive design.
- Styled table and form.
- The Cheatsheet category filter is done with radio buttons and the CSS `:checked`
  selector (no JavaScript).
- **Dark / light mode toggle** (`js/theme.js`): a button `onclick` that uses
  `classList.toggle`, as taught in the Media & Interactivity lesson. It remembers
  the choice with `localStorage` so every page stays the same.

The downloadable practice labs (`labs/`) each include their own small JavaScript file
that simulates the vulnerability.

## Running it
Open `index.html` in a browser, or run a local server:
```
python -m http.server 8000
```
then visit `http://localhost:8000`.

## Credits
See [`NOTICE.md`](NOTICE.md). Cheatsheet examples are based on
[PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings) (MIT License).

## AI usage declaration
AI assistance (Claude) was used to help review and build this project, in line with
the course GenAI guidelines. All content was checked against the professor's lessons
and the project guideline.
