# TestSketcher

> Visual node-based test case editor for Robot Framework

![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)
![Version](https://img.shields.io/badge/version-0.1.0-green.svg)
![Status](https://img.shields.io/badge/status-in%20development-orange.svg)

## 🎯 Overview

TestSketcher is a visual programming tool that allows you to create Robot Framework test cases using a node-based diagram interface. Drag, drop, and connect nodes to build test flows without writing code manually.

## ✨ Features (Planned)

- 🎨 **Visual Node Editor** - Create test cases by connecting nodes
- 🔍 **Keyword Browser** - Search and explore Robot Framework keywords
- ⚡ **Smart Input** - Auto-completion and type-aware argument inputs
- 📝 **Live Preview** - See generated Robot Framework code in real-time
- ▶️ **Integrated Runner** - Execute tests directly from the editor
- 📊 **Result Visualization** - View test results with node highlighting

## 🖼️ Preview

```
┌─────────────────────────────────────────────────────────┐
│  📁 Keywords          │  🎨 Canvas            │ 📋 Props │
│ ──────────────────────│───────────────────────│──────────│
│  🔍 Search...         │                       │          │
│                       │  ┌─────────────┐      │ Open     │
│  📂 SeleniumLibrary   │  │ Open Browser│──┐   │ Browser  │
│    ├─ Open Browser    │  └─────────────┘  │   │ ──────── │
│    ├─ Click Button    │         │         │   │ url:     │
│    ├─ Input Text      │         ▼         │   │ [____]   │
│    └─ ...             │  ┌─────────────┐  │   │          │
│                       │  │ Input Text  │──┘   │ browser: │
│  📂 BuiltIn           │  └─────────────┘      │ [chrome▼]│
│    ├─ Log             │         │             │          │
│    ├─ Sleep           │         ▼             │          │
│    └─ ...             │  ┌─────────────┐      │          │
│                       │  │ Click Button│      │          │
│                       │  └─────────────┘      │          │
└─────────────────────────────────────────────────────────┘
```

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript
- **Node Editor**: React Flow
- **State Management**: Zustand
- **Desktop App**: Electron
- **Build Tool**: Vite
- **Backend Integration**: Python (Robot Framework parsing)

## 📦 Installation

> ⚠️ This project is currently in development. Installation instructions will be available after the first release.

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/testsketcher.git
cd testsketcher

# Install dependencies
npm install

# Run in development mode
npm run electron:dev
```

## 🚀 Roadmap

### Phase 1: Foundation
- [ ] Project setup (Electron + React + Vite)
- [ ] Basic node editor with React Flow
- [ ] Custom keyword node component

### Phase 2: Keyword Loading
- [ ] Python script for parsing RF libraries
- [ ] Keyword browser panel
- [ ] Drag & drop to canvas

### Phase 3: Code Generation
- [ ] Node graph → Robot Framework code
- [ ] Auto-generate imports
- [ ] Code preview panel

### Phase 4: Execution
- [ ] Run tests from editor
- [ ] Real-time log streaming
- [ ] Result visualization on nodes

### Phase 5: Advanced Features
- [ ] Control flow nodes (IF, FOR)
- [ ] Variable nodes
- [ ] Import existing .robot files
- [ ] Project save/load

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Robot Framework](https://robotframework.org/) - The amazing test automation framework
- [React Flow](https://reactflow.dev/) - Powerful node-based UI library
- [Electron](https://www.electronjs.org/) - Cross-platform desktop apps

---

Made with ❤️ for the QA community
