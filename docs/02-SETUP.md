# Setup Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Visit http://localhost:5173

## Platform-Specific Setup

### Web Application

Already configured! Just run:
```bash
npm run dev
```

### Desktop Application (Electron)

1. Install Electron dependencies (already in package.json)
2. Run in development:
```bash
npm run electron:dev
```

3. Build for production:
```bash
npm run electron:build
```

Output will be in `out/` directory.

### Mobile Application (React Native)

For mobile support, you'll need to set up React Native:

1. Install React Native CLI:
```bash
npm install -g react-native-cli
```

2. Initialize React Native project in mobile folder:
```bash
npx react-native init mobile
```

3. Copy web components and adapt for React Native
4. Run on Android:
```bash
npm run mobile:android
```

5. Run on iOS (Mac only):
```bash
npm run mobile:ios
```

## Environment Setup

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Update environment variables:
```env
VITE_API_URL=your-api-url
```

## Development Tips

### Hot Reload
Vite provides instant hot module replacement (HMR) for fast development.

### TypeScript
All files use TypeScript for type safety. Check types with:
```bash
npx tsc --noEmit
```

### Linting
Run ESLint to check code quality:
```bash
npm run lint
```

### Dark Mode
Toggle dark mode using the moon/sun icon in the header.

### Responsive Design
Test responsive design by resizing browser or using DevTools device emulation.

## Troubleshooting

### Port Already in Use
If port 5173 is busy, Vite will automatically use the next available port.

### Electron Not Starting
Make sure to build the web app first:
```bash
npm run build
npm run electron:build
```

### Module Not Found
Clear node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

## Next Steps

1. Customize theme colors in `tailwind.config.js`
2. Add your API endpoints in `src/config/api.ts`
3. Create new pages in `src/pages/`
4. Add new components in `src/components/`
5. Configure routing in `src/App.tsx`

## Production Build

### Web
```bash
npm run build
```
Output: `dist/` directory

### Desktop
```bash
npm run electron:build
```
Output: `out/` directory

### Deploy Web App
Upload `dist/` folder to your hosting service (Vercel, Netlify, etc.)

## Support

For issues, check:
- README.md for documentation
- GitHub issues for known problems
- Stack Overflow for community help
