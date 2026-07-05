
# Google Family Link & YouTube Privacy Center

**High-fidelity clickable prototype** for the Vedantu Product Management Intern assignment.

## Live Demo
[→ View Live Prototype](https://vedantu-pm-phi.vercel.app/)

## Overview
This prototype showcases a **unified Family Privacy Center** inside Google Family Link — solving the fragmentation of data rights (access, export, and erasure) for supervised child accounts on YouTube, while aligning with India's **Digital Personal Data Protection (DPDP) Act**.

It empowers parents with one central place to manage their child's YouTube data with clear controls, confirmations, and transparency.

## Key Features
- Family Link supervision dashboard
- Unified **Family Privacy Center** hub
- Category-level and bulk data erasure with scope selection
- Parent validation step before destructive actions
- Activity logs, data export, and success confirmation across surfaces (YouTube, My Activity, Google Account)
- Permissions inspector drawer and recommendations reset

## Tech Stack
- React 18 + Vite
- Tailwind CSS

## Local Setup
```bash
git clone <https://github.com/archiik04/vedantu-pm>
cd <https://github.com/archiik04/vedantu-pm>
npm install
npm run dev
```

## Prototype Happy Path
1. Family Link Home → **Privacy & Data**
2. Open **Family Privacy Center**
3. View data categories → Export or Erase
4. Choose erasure scope → Confirm with validation
5. Processing → Success screen (erasure confirmed across 3 surfaces)

## Design
Premium dark theme with Proton-inspired surfaces, glassmorphism, smooth transitions, and Google-style UI elements.

## Assignment Alignment
- **Problem**: Fragmented data rights experience for parents of child accounts
- **Solution**: Unified Family Privacy Center
- **DPDP Focus**: Strong emphasis on user rights, children's data protection, transparency, purpose limitation, and verifiable parental control
