# Quick Start Guide

Panduan cepat untuk memulai development dalam 5 menit!

## Prerequisites

- Node.js 18+ installed
- npm atau yarn
- Code editor (VSCode recommended)

## Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

Buka browser di http://localhost:5173

That's it! 🎉

## What's Included

### Pages
- Dashboard - Statistics dan overview
- Tables - Data table dengan sorting
- Forms - Form dengan validation
- Charts - Chart placeholders
- Settings - App settings

### Components
Semua component sudah siap pakai:
- Button, Input, Card
- Table, Modal, Dropdown
- Badge, Alert, Tabs
- Pagination, Spinner
- Breadcrumb

### Features
- ✅ Dark mode
- ✅ Responsive design
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ State management
- ✅ API integration ready
- ✅ Electron ready
- ✅ Mobile ready

## Quick Customization

### 1. Change Theme Colors

Edit `tailwind.config.js`:
```js
colors: {
  primary: {
    600: '#your-color',
  }
}
```

### 2. Add New Page

```tsx
// src/pages/NewPage.tsx
export default function NewPage() {
  return <div>New Page</div>
}

// src/App.tsx
<Route path="/new" element={<NewPage />} />
```

### 3. Add Menu Item

Edit `src/layouts/Sidebar.tsx`:
```tsx
{ label: 'New Page', icon: <Icon />, path: '/new' }
```

### 4. Connect API

Edit `.env`:
```env
VITE_API_URL=http://your-api-url
```

## Next Steps

1. Read [README.md](README.md) untuk overview lengkap
2. Check [COMPONENTS.md](COMPONENTS.md) untuk component docs
3. See [ARCHITECTURE.md](ARCHITECTURE.md) untuk struktur project
4. Read [API.md](API.md) untuk API integration
5. Check [DEPLOYMENT.md](DEPLOYMENT.md) untuk deployment

## Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run preview         # Preview production build

# Desktop
npm run electron:dev    # Start Electron
npm run electron:build  # Build desktop app

# Code Quality
npm run lint            # Run ESLint
```

## Need Help?

- Check documentation files
- Open issue on GitHub
- Read inline code comments

## Tips

1. Use VSCode extensions (recommended in `.vscode/extensions.json`)
2. Enable format on save
3. Use TypeScript for type safety
4. Follow component patterns
5. Keep components small and reusable

Happy coding! 🚀
