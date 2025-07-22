
# React Router v7 CRUD Example

This project is a modern CRUD (Create, Read, Update, Delete) application built with React Router v7, Supabase, and TailwindCSS.

## Features

- ⚡️ Full CRUD operations with Supabase backend
- 🚀 Server-side rendering (SSR) by default
- 🔄 Data loading, mutations, and optimistic UI
- 🎨 TailwindCSS for rapid styling
- 🛠️ TypeScript for type safety
- 🗂️ Vite for fast development and builds
- 🐳 Docker support for easy deployment

## Getting Started

### Installation

Install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root and add your Supabase credentials:

```
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### Development

Start the development server:

```bash
npm run dev
```

Visit `http://localhost:5173` to view the app.

## Building for Production

Create a production build:

```bash
npm run build
```

## Project Structure

```
├── app/
│   ├── routes/         # CRUD pages (items, item, new-item)
│   ├── supabase-client.ts # Supabase client config
│   ├── root.tsx        # App root component
│   └── app.css         # TailwindCSS theme
├── public/
├── .env
├── package.json
├── tsconfig.json
├── vite.config.ts
├── react-router.config.ts
└── Dockerfile
```

## Tech Stack

- [React Router v7](https://reactrouter.com/)
- [Supabase](https://supabase.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)

---

Built with ❤️ using React Router, Supabase, and Vite.
