# 🖥️ macOS-Style Portfolio Desktop

A fully interactive **macOS-inspired desktop portfolio** built with **React**, featuring draggable windows, window controls, a dock, Finder-like navigation, Safari-style browser, image viewer, PDF resume viewer, and dynamic state management.

This project mimics real desktop behavior while remaining a modern, performant web application.

---

## ✨ Features

- 🪟 **Window System**
  - Open, close, minimize, maximize windows
  - Proper z-index focus management
  - Smooth animations with GSAP
  - True fullscreen handling

- 🧭 **Finder-Style Navigation**
  - Folder & file hierarchy
  - Dynamic file opening based on file type
  - Image, text, PDF, and external links supported

- 🌐 **Safari-Like Browser**
  - Wikipedia search support
  - Embedded browsing where allowed
  - External site fallback for restricted domains

- 🖼️ **Photo Gallery**
  - Grid-based gallery layout
  - Click-to-open image viewer
  - Scrollable content area
  - Fullscreen-safe layout

- 📄 **Resume Viewer**
  - Multi-page PDF rendering
  - Scrollable content
  - Dynamic scaling in fullscreen

- 🎛️ **Dock**
  - Hover animations
  - App launching behavior
  - macOS-style interaction

- 🎥 **Video / Image Wallpaper Support**
  - Desktop background image
  - Optional video background support

---

## 🛠️ Tech Stack

- **React**
- **Vite**
- **Tailwind CSS**
- **GSAP + Draggable**
- **Zustand** (state management)
- **React-PDF**
- **Lucide Icons**

---

## 🚀 Getting Started

Follow the steps below to run the project locally.

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/cerebralstoic/macosportfolio.git
cd macosportfolio
```
### 2️⃣ Install Dependencies
```bash
npm install
```
### 3️⃣ Start the Development Server
```bash
npm run dev
```
## ⚙️ Customization Guide
This project is config-driven, allowing you to customize most content without modifying core logic.

### 🔧 Central Configuration File
All major customizations are handled from:
```
src/constants/index.js
```
Use this file to update:
- Contacts Link
- Docks App
- NavLinks
- WindowConfigs
- BlogPost
- Resume
- Techstack
- Project

  Just change the value in this index.js file
---
### 🎬 Boot Video & Wallpaper Customization
Boot Video
To change the macOS-style boot animation, replace the video file located at:
```
public/video/
```
Wallpaper
```
public/images/
```
 Ensure the filename matches the reference used in the application.
Somes images are directly used in the components itself so modify it accordingly or replace the images with the same name.





