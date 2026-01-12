# copypastapp

A lightweight, cross-platform application for managing and quickly accessing your frequently used text snippets and links.

[![Tauri](https://img.shields.io/badge/Tauri-FFC131?style=for-the-badge&logo=Tauri&logoColor=black)](https://tauri.app/)
[![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Rust](https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white)](https://www.rust-lang.org/)

## Live Demo

The web demo at [copypastapp.vercel.app](https://copypastapp.vercel.app)

## Features

### Currently Implemented (v0.1.1)
- **Quick Copy Interface**: Tap to copy transport card numbers
- **Cross-Platform**: Built with Tauri for desktop and mobile compatibility
- **External Links**: Direct links to top-up pages open in your default browser/app
- **Responsive Design**: Adapts to mobile and desktop screen sizes

### Planned Features (See Roadmap Below)
- **Multiple Projects**: Organize snippets into different categories/contexts
- **Display Modes**: Toggle between different views of your data
- **NFC Integration**: Read transport card numbers by tapping (mobile)
- **OCR Scanning**: Capture card numbers using your device's camera
- **Multi-language Support**: Switch between different locales

## Technology Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Frontend** | Vue 3 + TypeScript | Reactive UI components |
| **Backend** | Rust (Tauri) | System integration & performance |
| **Build Tool** | Vite | Fast development & bundling |
| **Packaging** | Tauri | Cross-platform desktop/mobile builds |
| **Deployment** | Vercel | Web deployment & hosting |

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- Rust and Cargo (for Tauri)
- System dependencies for Tauri: [Follow the official guide](https://tauri.app/v1/guides/getting-started/prerequisites)

## Roadmap

### Branch prefix (separated by `-`). The letters/absence stand for:
1. `w/t/` `website/tauri/all`
1. `m/d/` `mobile/desktop/all`

### Steps=branches:
- [x] `0.1.0` Concept illustration, using a single project of transport cards and link to the top up page as an example
---
- [x] `docs/roadmap` the changes to the current file
- [x] `fix/wm-height` the page shows extra size after hiding and showing back navigation bar (vh -> dvh)
- [x] `feat/items-list` move the items to a variable, so the attributes are easily accessible, and then saved as a **project**
- [x] `feat/notification-design` the toast container appears under the top bar on mobile, the design should be more compact
- [x] `fix/tm-external-links` neither http nor https links are working (open in external app)
- [x] `0.1.1` Concept illustration with external links working in the mobile app
---
- [ ] `fix/items-list-add-order` make the order in app respect the order in the attribute
- [ ] `feat/settings-menu` add settings. to be set on project level
- [ ] `feat/locale-switch` add locale switch to the settings
- [ ] `feat/display-modes` add the option to display the copyText and a switch controlling that
- [ ] `0.1.2`
---
- [ ] `feat/projects` add the functionality of other lists of things to copied
- [ ] `0.2.0`
---
- [ ] `test/add-e2e-tests`
- [ ] `feat/nfc-read-card-num` add the functionality of reading card number by touching the card by NFC
- [ ] `feat/ocr-read-card-num` add the functionality of reading card number by using device camera / image
