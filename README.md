# PICUS Frontend Repository
This repository contains the frontend code for the PICUS project, a web application designed to provide a seamless user experience with a focus on performance and maintainability.

## 🚀 Tech Stack
- React (Vite)

- TypeScript

- React Router

- TanStack Query (React Query)

- Emotion (CSS-in-JS)

## 📂 Project Structure (FSD)

```aiignore
src/
├── app/        # Entry, 라우팅, provider, 글로벌 설정
├── pages/      # Route 단위 Page 컴포넌트
├── widgets/    # Page를 구성하는 주요 UI 컴포넌트(기능 단위)
└── shared/     # 공통 컴포넌트, 유틸, 타입, 훅, 이미지, 아이콘 등 정적 리소스
```

## 🛠️ 주요 개발 도구 및 설정
- Vite: 빠른 번들링 및 HMR
- ESLint & Prettier: 코드 품질 자동화, 스타일 일관성
- TanStack Query: 서버 상태 관리, 비동기 캐싱
- Emotion: 타입 지원, 동적 스타일링, 글로벌 스타일
- React Router: SPA 라우팅
- 환경별 설정: .env, vite.config.ts

## ⚡️ Getting Started
1. install dependencies:
   ```bash
   npm install
   ```
2. Run development server:
   ```bash
   npm run dev
   ```
