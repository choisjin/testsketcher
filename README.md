# TestSketcher

> Visual node-based test case editor for Robot Framework  
> Robot Framework를 위한 비주얼 노드 기반 테스트케이스 에디터

![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)
![Version](https://img.shields.io/badge/version-0.1.0-green.svg)
![Status](https://img.shields.io/badge/status-in%20development-orange.svg)

[English](#-overview) | [한국어](#-개요)

---

## 🎯 Overview

TestSketcher is a visual programming tool that allows you to create Robot Framework test cases using a node-based diagram interface. Drag, drop, and connect nodes to build test flows without writing code manually.

### ✨ Features (Planned)

- 🎨 **Visual Node Editor** - Create test cases by connecting nodes
- 🔍 **Keyword Browser** - Search and explore Robot Framework keywords
- ⚡ **Smart Input** - Auto-completion and type-aware argument inputs
- 📝 **Live Preview** - See generated Robot Framework code in real-time
- ▶️ **Integrated Runner** - Execute tests directly from the editor
- 📊 **Result Visualization** - View test results with node highlighting

---

## 🎯 개요

TestSketcher는 노드 기반 다이어그램 인터페이스로 Robot Framework 테스트케이스를 만들 수 있는 비주얼 프로그래밍 도구입니다. 코드를 직접 작성하지 않고 노드를 드래그, 드롭, 연결하여 테스트 흐름을 구성할 수 있습니다.

### ✨ 주요 기능 (개발 예정)

- 🎨 **비주얼 노드 에디터** - 노드를 연결하여 테스트케이스 작성
- 🔍 **키워드 브라우저** - Robot Framework 키워드 검색 및 탐색
- ⚡ **스마트 입력** - 자동완성 및 타입별 인자 입력 지원
- 📝 **실시간 미리보기** - 생성되는 Robot Framework 코드 실시간 확인
- ▶️ **통합 실행** - 에디터에서 바로 테스트 실행
- 📊 **결과 시각화** - 노드 하이라이트로 테스트 결과 확인

---

## 🖼️ Preview / 미리보기

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

---

## 🛠️ Tech Stack / 기술 스택

| Category | Technology |
|----------|------------|
| Frontend | React + TypeScript |
| Node Editor | React Flow |
| State Management | Zustand |
| Desktop App | Electron |
| Build Tool | Vite |
| Backend Integration | Python (Robot Framework parsing) |

---

## 📦 Installation / 설치

> ⚠️ This project is currently in development.  
> ⚠️ 현재 개발 중인 프로젝트입니다.

```bash
# Clone the repository / 저장소 복제
git clone https://github.com/choisjin/testsketcher.git
cd testsketcher

# Install dependencies / 의존성 설치
npm install

# Run in development mode / 개발 모드 실행
npm run electron:dev
```

---

## 🚀 Roadmap / 로드맵

### Phase 1: Foundation / 기반 구축
- [ ] Project setup (Electron + React + Vite)
- [ ] Basic node editor with React Flow
- [ ] Custom keyword node component

### Phase 2: Keyword Loading / 키워드 로딩
- [ ] Python script for parsing RF libraries
- [ ] Keyword browser panel
- [ ] Drag & drop to canvas

### Phase 3: Code Generation / 코드 생성
- [ ] Node graph → Robot Framework code
- [ ] Auto-generate imports
- [ ] Code preview panel

### Phase 4: Execution / 실행
- [ ] Run tests from editor
- [ ] Real-time log streaming
- [ ] Result visualization on nodes

### Phase 5: Advanced Features / 고급 기능
- [ ] Control flow nodes (IF, FOR)
- [ ] Variable nodes
- [ ] Import existing .robot files
- [ ] Project save/load

---

## 🤝 Contributing / 기여하기

Contributions are welcome! Please feel free to submit a Pull Request.

기여를 환영합니다! Pull Request를 자유롭게 제출해주세요.

---

## 📄 License / 라이선스

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

이 프로젝트는 Apache License 2.0 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

---

## 🙏 Acknowledgments / 감사의 말

- [Robot Framework](https://robotframework.org/) - The amazing test automation framework
- [React Flow](https://reactflow.dev/) - Powerful node-based UI library
- [Electron](https://www.electronjs.org/) - Cross-platform desktop apps

---

Made with ❤️ for the QA community  
QA 커뮤니티를 위해 ❤️를 담아 만들었습니다