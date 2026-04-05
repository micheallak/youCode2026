# Safe Haven 🏠

> A 60-second, trauma-informed wellbeing check-in tool for women's shelters — built for the *Safe, Sound, and Seen* hackathon in partnership with Community Women's Initiative (CWI).

---

## What it does

Safe Haven gives women in shelters a quick, visually guided way to check in with how they're feeling — emotionally, physically, and nutritionally — and immediately provides a personalised prompt, exercise, or piece of advice matched to their responses.

The entire check-in takes under 60 seconds. It requires no account, no personal information, and no reading ability in any particular language. When the session ends, the screen clears automatically. Nothing is stored at the individual level.

Staff see only anonymous, aggregate trends: mood, energy, and food signal, based on time of day. The tool helps them understand the emotional climate of the shelter and respond proactively, without anyone having to disclose anything.

---

## The problem

> *"Education is not the bottleneck. Women often already know what supports their wellbeing. The barriers are structural."*
> — CWI Program Brief, 2026

Women in shelters face overlapping barriers to accessing wellbeing support:

- **No private moment** — shared spaces mean any screen can be seen by others
- **No personal device** — a shared tablet or front-desk computer
- **No energy for friction** — cognitive and emotional load
- **Language diversity** — residents come from every linguistic background; English-only tools exclude most of them

Safe Haven was designed against all four of these constraints from the first line of code.

---

## The check-in flow

Each screen is full-screen, icon-led, and requires a single tap. No text input is ever needed.

| Step | Screen | What the resident sees |
|---|---|---|
| 1 | Home | Safe Haven logo · "User Check In" · Enter button · Language dropdown |
| 2 | Time of day | Sun (morning) or Moon (evening) — two icons, one tap |
| 3 | Mood | Five emoji faces from happy to overwhelmed — one tap |
| 4 | Energy | One, two, or three battery icons (low / medium / full) — one tap |
| 5 | Food signal | "Have you eaten in the last few hours?" — green checkmark or red X |
| 6 | Personalised prompt | A matched exercise, coping technique, or gentle piece of advice |

The time-of-day question feeds the staff dashboard's morning/evening filter and modulates the matched response — a prompt for someone overwhelmed at 8am differs from one for someone overwhelmed at 10pm.

---

## Privacy by design

Safe Haven's privacy model is architectural. There is no system state that could accidentally expose individual data, because individual data is never captured.

| What happens | How |
|---|---|
| Individual responses | Never written to any database |
| Session auto-clear | Screen resets after 30 seconds of inactivity |
| What the backend receives | Mood index, energy index, food flag, time-of-day — no name, no device ID, no timestamp linked to a person |
| What is stored | Aggregate counts per period only |
| Staff access | Password-protected login; no resident can reach the dashboard |

---

## Staff dashboard

The staff view is a separate, password-protected page showing anonymous aggregate data.

**Metrics displayed:**
- **App engagement** — pie chart showing check-ins compared to total shelter attendance
- **Total Shelter Attendance** — Initially entered by staff
- **Total Check-ins** — count of completed sessions
- **Mood Trends** — bar chart: Sad / Numb / Okay / Good / Overwhelmed
- **Energy Trends** — bar chart: Okay / Good / Drained
- **Food Trends** — bar chart: Yes (eaten) / No (not eaten)

**Time filters:** Morning · Evening · Overall — lets staff see how the shelter's emotional climate shifts across the day without knowing who flagged what.

---

## Language support

A language dropdown is visible on every screen of the check-in flow. Switching language does not restart the session. The icon-based questions work without any language selection — visual-first design means the tool is usable by someone with no literacy in any supported language.

**Languages supported:**
- English
- French
- Punjabi 
- Tagalog
- Mandarin

To add a language: copy `config/languages/en.json`, translate the string values, and register the file in `config/languages/index.json`.

---

## Tech stack

| Layer | Choice |
|---|---|
| Frontend | HTML / CSS / JS |
| Offline support | Service Worker (PWA) |
| Matching logic | JS Json|
| Backend | Node.js + Express |
| Database | JS Json|
| Staff auth | Password-protected route |

---

## Getting started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
git clone https://github.com/your-org/safe-haven.git
cd safe-haven
npm install
```

### Run

```bash
npm start
```

### Offline / local network deploy

For shelters with unreliable internet, run on a Raspberry Pi on the local network:

```bash
# On the Pi
npm start
```
---

## Matching logic

The personalised prompt is determined by a static JSON lookup table mapping:

- Time of day (morning / evening)
- Mood (5 states)
- Energy (3 states)
- Food signal (yes / no)

The table is a plain JSON file — CWI staff can update or add practices without touching any code. The matching engine contains no machine learning and no external API calls. It works fully offline.

When the food signal is "no," a nourishment note is added to the matched prompt regardless of other inputs — always framed as a possibility ("if something is available") rather than an instruction.

---

## Roadmap

**Current Characteristics**
- [x] 5-tap check-in: time of day → mood → energy → food signal → personalised prompt
- [x] Works fully offline.
- [x] 30-second auto-clear on inactivity
- [x] Staff dashboard with Morning / Evening / Overall filters
- [x] Language dropdown (5 languages)
- [x] Password-protected staff login
- [x] Bar charts and engagement pie chart for quick analysis
- [x] Offline-capable PWA

**Future Add Ons**
- [ ] Full practice library covering all combinations
- [ ] Audio narration option for prompts
- [ ] Printable daily summary for staff
- [ ] Weekly and monthly trend views for staff
- [ ] Group activity suggestions from CWI's program library
- [ ] Additional languages (Somali, Arabic, Spanish)
- [ ] No-code practice editor for CWI staff

---

## Design principles

**Designed for the worst day, not the best.** Every interaction assumes the user is exhausted, has under 60 seconds, and may be in a shared space. If a screen takes more than one tap to understand, it gets redesigned.

**Visual first, text second.** The icons can be used to answer every question without reading a word. Language is a secondary layer on top of a system that works without it.

**Privacy is architecture, not policy.** There is no record of who used the app or what they selected. The 30-second auto-clear and the always-visible exit button are not just features but a safety design.

**Staff are part of the solution.** The tool reduces guesswork, not human care. The dashboard exists to help coordinators act on what the room is feeling, not to replace the necessary conversations.
