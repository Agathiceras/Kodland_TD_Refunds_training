# Refunds Training — multi-language build

Static training site for the "Understanding Refunds" tutor training, split into one page per language plus a shared engine — the same structure as `Attendance/attendance_2.0`. No build step, no framework, no backend.

Languages available now: **English (`en`)**, **Russian (`ru`)**, **Spanish (`es`)**, **Brazilian Portuguese (`pt`)**, **Italian (`it`)**, **Polish (`pl`)**, **Turkish (`tr`)**, **Indonesian (`id`)** and **Arabic (`ar`, right-to-left)**.

## Structure

```
index.html                 Language picker + intro, one panel per language. "Start Training" links to <lang>.html?start=1
en.html, ru.html, es.html, pt.html, it.html, pl.html, tr.html, id.html, ar.html
                           One page per language. Same markup for all of them — only the loaded content file differs.
assets/
  style.css                All CSS (includes the language switcher).
  engine.js                Shared logic: learning path, module pages, module checks (choice + sort), results, dev mode,
                           content helpers (co, doavoid, stepFlow, iconGrid, ...). All UI text comes from CONTENT.ui.
  content-<lang>.js        One content file per language: UI strings + the 9 modules (Introduction, Modules 1-7, Final Checklist).
Images/                    Photos used inside the modules (no text on them, shared by all languages).
Simulacion_BO_M2_Profile.html           Back Office simulation — student profile (English)
Simulacion_BO_M2_Progress.html          Back Office simulation — Progress view (English)
Simulacion_BO_M2_Profile_<LANG>.html    Same simulations translated: RU, ES, PT, IT, PL, TR, ID
Simulacion_BO_M2_Progress_<LANG>.html
```

Upload the whole folder to GitHub (it is ready to be the root of a repo, served with GitHub Pages). Keep the file and folder names exactly as they are.

## How it works

Each `<lang>.html` loads `assets/content-<lang>.js` first (it defines `PAGE_LANG` and `CONTENT`), then `assets/engine.js`.
`CONTENT` = `{ flag, dir, ui:{...}, buildModules(){ return [ ...module objects... ]; } }`. A module object has `id, numLabel, emoji, color, title, desc, obj, sections:[{t,html}], ix:{title,instr,items}` and, for the last one, `gateExam:true`.
Each module's check (`ix`) has `choice` items (answers are shuffled at runtime) and `sort` items.

- Progress is saved in the browser (`localStorage`, key `kl-rf-progress`) and is shared between languages: module ids are the same, so switching language keeps the progress.
- **Dev mode**: the 🔓 button on the learning-path screen unlocks every module; `Shift+D` three times toggles it too (and clears progress when switched off).
- The last module's button leads to the "Congratulations — complete the DST in the LMS" screen. (The old 14-question final exam, the feedback sliders and the "field card" were never reachable from the flow and are not part of this build; the final test will be designed separately.)
- Fonts: Baloo 2 has no Cyrillic glyphs, so `Nunito` is loaded as the automatic fallback for headings (Latin text is unaffected).
- Arabic: `CONTENT.dir='rtl'` makes the engine set `dir="rtl"` on the page.

## English version
`en.html` is the current English training (`Refunds/Materials/Refunds_Training.html`) with identical content, only split into the files above. The one wording change made in both: Introduction check, item 1, now reads *"In a big group, a student gets lost and isn't able to participate"*.

## Russian version
Text source: the proofread reviewer documents (Introduction + Modules 1-8). Their Russian is used verbatim. Texts that are **not** in those documents were translated separately and should be proofread by a native speaker — the list is in `Refunds/Translation_notes/RU_translated_for_review.md` (it is not needed on GitHub).
Differences from the English version that come from the reviewer documents (they are Russian-only; the English training was **not** changed):

- Introduction check: 7 items reworded; "He stopped submitting homework" now belongs to *"can adjust and report"* (tutor must report it through a BO assessment); the "family finances" feedback no longer says "be kind, expect nothing, don't chase it"; the "parent says they were promised something different" feedback follows the reviewer's note.
- Module 2: in BO a not-submitted assignment is **red** (the English text says orange); orange means *submitted, not yet checked*. The Russian Progress simulation uses this colour meaning (orange = to be reviewed, yellow = submitted after deadline).
- Module 6: the routing map sends tutors to "leave an assessment in BO" instead of the Team Leader in several rows; the "direct Team Leader / Client Service Slack channel" tip is not included.
- Module 7: 7.3 has three checklist items (no "loop in your Team Leader" item); 7.4 and 7.6 mention BO assessments; check question 1 no longer mentions the Team Leader.
- Module 8 (checklist): 9 items, three of them reworded (assessment in BO, explicit three patterns, "reported — followed up").
- The Russian text uses the formal «вы»; terms for Back Office vary between «БО», «BO» and «Бэкофис» exactly as in the reviewer documents.

## Spanish, Portuguese, Italian, Polish, Turkish, Indonesian, Arabic
Translated from the **English** source (not from the Russian one), so they follow the English content exactly — none of the Russian-only differences above apply. Each language was translated with the prompts in `Refunds/Translation_kit` and assembled with the same structure; every page was checked in a browser (all modules open, every check item answered, same number of sections, quiz items, options, zones, images and iframes as the English version). The translators' terminology and decision notes are in `Refunds/Translation_kit/Contenido/<Language>/<code>_NOTES.md` (not needed on GitHub); native-speaker proofreading is still recommended.

- **Simulations**: ES, PT, IT, PL, TR and ID have their own translated Back Office simulations (Module 2 loads `Simulacion_BO_M2_*_<LANG>.html`).
- **Arabic**: the Back Office simulations stay in **English** on purpose (Module 2 loads the English files).

### Videos
The six embedded videos (Modules 1, 3 and 4) still use the **English** video links in every language. Replace the `drive.google.com/file/d/…/preview` URLs inside `assets/content-<lang>.js` when localized videos are available.

## Adding another language
1. Copy `assets/content-en.js` to `assets/content-xx.js`; translate `ui` and the modules (keep ids, helpers, check-item structure and the `correct` / `correctZone` indexes); set `PAGE_LANG`, `flag`, `dir`.
2. Copy `en.html` to `xx.html` (change `lang` and the `content-xx.js` script). Add the language to the dropdown in the home screen of every `<lang>.html`, to `KNOWN_LANGS` in `engine.js`, and to `index.html` (button + panel).
3. Translate the two Back Office simulations (`Simulacion_BO_M2_Profile_XX.html`, `Simulacion_BO_M2_Progress_XX.html`) and point Module 2 of the new content file at them.
4. Images are shared; nothing to do.
