# ReconLabas Projects
이 프로젝트는 Next.js와 TypeScript를 사용한 웹 애플리케이션입니다.

## Tech Stack
- Next.js 15.0.0
- React 19.0.0
- TypeScript 5.7.2
- TailwindCSS 4.0.13
- Node 22.13.10

## Project Structure
```
├── app/              # 페이지 및 라우팅
│   ├── favicon.ico   # 파비콘
│   ├── globals.css   # 글로벌 스타일
│   ├── layout.tsx    # 레이아웃
│   └── page.tsx      # 메인 페이지
├── data/             # 데이터 파일
│   └── data.json     # JSON 데이터
├── public/           # 정적 파일
│   ├── file.svg      # 아이콘
│   ├── globe.svg     # 아이콘
│   ├── next.svg      # Next.js 로고
│   ├── vercel.svg    # Vercel 로고
│   └── window.svg    # 아이콘
├── eslint.config.mjs # ESLint 설정
├── next.config.ts    # Next.js 설정
├── package.json      # 프로젝트 의존성
├── postcss.config.mjs # PostCSS 설정
└── tsconfig.json     # TypeScript 설정
```

## Project Setting

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 린트 실행
npm run lint
```

## Documentation
- [작업 목록](tasks.md)
- [변경 로그](change-log.md)
