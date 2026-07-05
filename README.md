# 🛡️ Google Family Link & YouTube Privacy Center Prototype

A high-fidelity, interactive single-page application (SPA) prototype recreating the **Google Family Link** dashboard and **YouTube Privacy Center**. The visual design system has been reverse-engineered from the desktop version of **Proton Pass** to deliver a sleek, premium, production-ready dark-themed interface.

---

## 🚀 Live Vercel Deployment

*   **Production Deployment URL:** [https://vedantu-pm-phi.vercel.app](https://vedantu-pm-phi.vercel.app)
*   **Preview Build URL:** [https://vedantu-c0qs0fwho-archi-kanungos-projects.vercel.app](https://vedantu-c0qs0fwho-archi-kanungos-projects.vercel.app)
*   **Deployment Status:** `Active / Healthy`
*   **Routing Configuration:** Supported by Vercel redirection rules (`vercel.json`) rewriting all SPA paths to `index.html` to allow direct page reloads.

---

## 🎨 Visual System & Aesthetics (Proton-Inspired)

*   **Color Tokens:**
    *   **Background:** `#090909` (Matte black overlaid with a coordinates grid pattern and a top-radial glow).
    *   **Surface:** `#131313` (Used on sidebar navigation drawers and sub-menu containers).
    *   **Card Containers:** `#1B1B1B` (Sculpted dashboard widgets with vertical lighting accents).
    *   **Elevated Lists/Rows:** `#242424` / `#181818` (List item containers and hover targets).
    *   **Borders:** `rgba(255, 255, 255, 0.05)` (Glassmorphism borders).
    *   **Typography Colors:** `#F7F7F7` (Primary), `#A8A8A8` (Secondary), `#777777` (Muted).
*   **Indicator Chip Design:** Features rectangular desaturated cards (`rounded-lg`) containing a colored dot on the left and white text on the right (e.g. Green dot + `Allowed` or Orange dot + `Filtered`), removing bulky emojis.

---

## 🛠️ High-Fidelity Features

1.  **Overview Supervision Banner:** Displays real-time location metrics, screen time trackers, and YouTube logs.
2.  **Privacy Health Audit Card:** Features a custom SVG coordinates trend graph matching the style of Proton's Dark Web monitoring cards.
3.  **Parental Data Deletion Flow:**
    *   **Step 1:** Location-based scopes ("This device only", "YouTube activity only", "Everything Google has on this child").
    *   **Step 2:** Acme-style red-highlight warning box, target child profile specifications, and typed parent validation inputs.
    *   **Step 3:** Independent verified stamps for the YouTube App, `myactivity.google.com`, and Google Account.
4.  **Permissions Inspector Drawer:** Rows have soft transition lifts on hover, opening a slide-out drawer from the right to toggle device capabilities.

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── Header.jsx        # YouTube search and profile triggers
│   ├── Sidebar.jsx       # Collapsible left navigation bar
│   └── Toast.jsx         # Proton-aligned notification toast
├── pages/
│   ├── YouTubeHome.jsx   # Main video feed and category chips
│   ├── VideoPlayer.jsx   # Recommendation sidebar and watch player
│   └── FamilyLink/
│       ├── FamilyLinkLayout.jsx  # Route tab manager layout
│       └── tabs/
│           ├── OverviewTab.jsx          # Family dashboard widgets
│           ├── PrivacyTab.jsx           # Audit graph and activity timeline
│           ├── HistoryTab.jsx           # Pause Watch/Search controls
│           ├── RecommendationsTab.jsx   # Reset suggestions trigger
│           ├── DownloadsTab.jsx         # Data export package tables
│           ├── PermissionsTab.jsx       # Slide drawer settings sheet
│           ├── SettingsTab.jsx          # General accounts documentation
│           └── DeleteDataTab.jsx        # Location-based erasure wizard
```

<!-- Trigger Vercel Integration Status -->
