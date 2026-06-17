# SM Shariah Calculators

**Developer:** Dr. Sajid Mahmood  
**Department:** Islamic & Religious Studies, Hazara University Mansehra  
**WhatsApp:** 0300-9080730 | **Email:** sajidzbi@gmail.com

---

## Features
- Zakat Calculator (full asset & liability based)
- Zakat Masail — Key rules per Hanafi Fiqh
- Fidya Calculator (prayers & fasts)
- Iddah Calculator (now with Hijri date & weekday)
- Shariah Scales Converter (weight, capacity, length)
- 3 Languages: Urdu, English, Arabic
- Fully Offline (no internet needed after install)

---

## v1.3.0 — Changelog (this update)

- **Header redesigned:** the long "Dr. Sajid Mahmood • Dept. of Islamic &
  Religious Studies, Hazara University Mansehra" line under the app title
  (which wrapped to 3 lines and looked oversized on phones) has been
  removed — that information is already in the About tab and the footer.
  It is replaced with a short tagline: "Zakat • Fidya • Iddah • Shariah
  Scales". The title and logo are also slightly smaller on mobile screens
  for a more compact header.
- **Header & footer direction:** confirmed/locked to always render
  left-to-right in English, regardless of whether Urdu, English, or Arabic
  is selected.
- **Iddah Calculator:** the result now also shows the **day of the week**
  and the equivalent **Hijri (Islamic) date** under the main Gregorian
  date, e.g. "Wednesday • 14 Rajab 1447 AH" / "بدھ • 14 رجب 1447 ھ".
- **New Arabic font:** the **KFGQPC Uthman Taha Naskh** font (the font you
  sent) is now embedded and used as the primary font whenever Arabic is
  selected — including the Zakat Masail / Fiqh reference text — with Noto
  Naskh Arabic as a fallback.

---

## v1.2.0 — Changelog

- **Fixed:** Chitank (چھٹانک) weight was showing **32.58g**, corrected to the
  proper **58.32g** in all three languages (Urdu / English / Arabic) on the
  Shariah Scales page.
- **Fixed:** the "Install App" / "Update Available" banners were defined in
  the loader screen but disappeared the moment the real app loaded, so the
  install prompt and the offline-update notice never actually appeared.
  Both banners now live inside the app itself and work correctly.
- **Added:** an "Add to Home Screen" instruction banner for iPhone/iPad
  (Safari). iOS does not support the automatic install prompt that
  Android/Chrome uses, so users on iPhone now get a clear tap‑by‑tap guide
  (Share ⬆ → Add to Home Screen).
- **Added:** Noto Naskh Arabic font is now embedded directly in the app
  (offline), so Arabic Fiqh references (Fatawa Hindiyya, Durr al-Mukhtar,
  etc.) display correctly with no internet connection.
- **Fixed:** the Jameel Noori Nastaleeq font link pointed to a version
  (`@1.0.5`) that does not exist, so it was silently failing and falling back
  to the embedded Noto Nastaliq Urdu font. The link now points to a valid
  version (`@1.1.2`) and the Service Worker caches it on first run for
  offline use afterwards.
- **Redesigned:** the "About" tab — Developer, Department & Institution,
  WhatsApp, and Email are now combined into a single unified card instead of
  five separate boxes.

> **Note on the Jameel Noori Nastaleeq font:** the font file itself is
> ~9.8 MB (even after trimming to only Urdu/Arabic characters it is still
> ~7 MB), which is too large to embed directly inside `index.html` without
> making the file extremely heavy to load. It is instead downloaded once
> from the CDN and cached by the Service Worker (`sw.js`) for offline use on
> every visit after that — see the note at the end of this file if you'd
> like a fully-embedded version instead.

---

## How to Deploy on GitHub Pages

1. Create a new GitHub repository (e.g. `sm-shariah-calculator`)
2. Upload all files from this ZIP into the repository root
3. Go to **Settings → Pages → Branch: main → Save**
4. Your app will be live at:
   `https://[your-username].github.io/sm-shariah-calculator/`

---

## How Updates Work

1. Replace `index.html` (and `sw.js` if changed) with the new version on GitHub
2. Users who open the app will automatically see:
   **"Update available — tap to get the latest version."**
3. They tap **Update Now** — done.

---

## Installing as an App

- **Android / Chrome:** open the link — after a moment a banner appears with
  an **Install** button. Tapping it adds the app icon to the home screen and
  it then opens full-screen, fully offline.
- **iPhone / iPad (Safari):** open the link — a banner explains: tap the
  **Share ⬆** icon, then **"Add to Home Screen"**. (Apple does not allow
  automatic install prompts, so this one extra tap is required.)
- Once installed, the app will **not** ask to install again.

---

## Files
| File | Purpose |
|------|---------|
| `index.html` | Main app (obfuscated & protected) |
| `manifest.json` | PWA configuration |
| `sw.js` | Service Worker (offline + auto-update) |
| `icon-192.png` | App icon (small) |
| `icon-512.png` | App icon (large) |
