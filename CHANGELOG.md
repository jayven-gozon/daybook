# Daybook changelog

All notable changes to Daybook, newest first.
Daybook © 2026 jayvengozon™. Dates before 12 Nov 2026 were not recorded.

## 1.12.0 (2026-11-12)
### Changed
- Appearance now offers three backgrounds: **Dark** (a true dark navy), **Gray** (the original gray-blue), and **White**. Dark is the new default, and no longer depends on your phone's dark-mode setting.
- If you had previously used the "Dark" button, which showed the gray look, your app now shows the real dark theme. Choose Gray to get the old look back.

## 1.11.2 (2026-11-12)
### Fixed
- The Home Screen app now picks up new versions reliably: it asks the server for the latest files each time it opens (falling back to its saved copy when offline), and no longer installs a stale copy from the browser's cache.
### Added
- "A new version is ready. Reload" bar when an update arrives while the app is open.
- More → About: version number and a Check for updates button. The app also checks for updates each time you return to it.

## 1.11.1 (2026-11-12)
### Changed
- Appearance: the "Current" button is now labeled "Dark". Its colors are unchanged.

## 1.11.0 (2026-11-12)
### Added
- Appearance setting on More: choose the background color, Current (the existing gray-blue, which still follows your phone's dark mode) or White. Your choice is remembered and included in backups.

## 1.10.0 (2026-11-12)
### Added
- Daily check-in: when you answer Yes for breakfast, lunch, or dinner, a box appears to write what you ate. It saves as you type and is cleared if you change the answer to No.

## 1.9.0 (2026-11-12)
### Added
- Daily check-in question: "How many glasses of water have you drunk today?" with a number box and − / + buttons (0–30).
- Water average added to the weekly summary on More.
- Version number shown in the footer of Home and More.
- This changelog.
### Removed
- Safety plan: removed the "What I can say to my wife when I am overwhelmed" field. Any text already saved there stays in your data (and backups) but is no longer shown.

## 1.8.0
### Added
- "Summary of my day" box on the Journal tab, saved automatically for each day.
- Daily check-in page (button on the Journal tab) with coffee (Yes/No plus cups), alcoholic drinks (Yes/No plus drinks), and breakfast, lunch, and dinner (Yes/No).
- Weekly summary lines for coffee, alcohol, and meals.

## 1.7.1
### Fixed
- Scrolled content no longer shows above the pinned header (header now sits at the very top).

## 1.7.0
### Added
- Save backup file (share sheet, Save to Files) and Restore from a backup file.
- Backup reminder on Home when the last backup is over 7 days old or none exists.
- "Last backup" date and storage-protection status on More.
- Notice on Home when the journal is empty, pointing to restore.

## 1.6.0
### Changed
- Coping toolbox and Triggers and tags in the entry form are now multi-select dropdowns with a built-in "add new" box.
- Selected coping options are saved on the entry and shown as a "Coping:" line; they count toward "Coping used most".
- Tags and Coping options on More are collapsible.
### Added
- Calm-down toolkit section on More (open guides, add, remove).

## 1.5.0
### Added
- Calm-down guides: Mindful walking (9 steps), Pomodoro technique (working timer), Sleep hygiene (10-habit checklist).

## 1.4.0
### Changed
- Drawers replaced by full-screen pages with a header, a Back button, a scrolling middle, and a fixed bottom button bar (safety plan, new/edit entry, add date, calm-down guides).
- Safety plan Back and Close save what you typed.

## 1.3.1
### Fixed
- Pages and pages-in-progress no longer stretch or bounce past the top or bottom, and cannot be dragged sideways.
- Form fields, time and date pickers fit the screen width.

## 1.3.0
### Added
- Pinned headers (title, date switcher) on Home, Journal, Checklist, and More.

## 1.2.0
### Added
- Calm-down toolkit guides: Box breathing (animated), Progressive muscle relaxation (guided timer), Sensory grounding (tap-to-count), STOP (step by step).
- Add a technique from a built-in list or create your own; remove any technique.

## 1.1.0
### Added
- Safety plan: call buttons for your contacts, NCMH 1553 and 911 shortcuts, warning signs, triggers, step-away plan, things I can do on my own, next therapy and psychiatric appointment dates.
- 4-digit PIN lock with a crisis-help link on the lock screen and a "Forgot PIN" reset.
- jayvengozon™ trademark footer.

## 1.0.0
### Added
- Installable iPhone Home Screen web app (works offline).
- Journal data saved on the device with a second copy in IndexedDB; asks iOS for persistent storage.
- Sleep and energy check, weekly summary, Copy backup / Restore.

## 0.x (first version, Claude artifact)
- Emotion and Activity entries with notes, tags, and a coping toolbox.
- Daily checklist and "every day" checklist items.
- Calendar-style Home, one-tap mood check-in, color palette.
