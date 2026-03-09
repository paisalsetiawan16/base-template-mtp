# Deployment Guide

Panduan lengkap untuk deploy aplikasi ke berbagai platform.

## Web Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login ke Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Production deployment:
```bash
vercel --prod
```

### Netlify

1. Build project:
```bash
npm run build
```

2. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

3. Deploy:
```bash
netlify deploy --prod --dir=dist
```

### Manual Deployment

1. Build:
```bash
npm run build
```

2. Upload folder `dist/` ke hosting (Apache/Nginx)

3. Configure web server untuk SPA routing

Nginx config:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## Desktop Deployment (Electron)

### Windows

1. Build:
```bash
npm run electron:build
```

2. Installer akan ada di `out/` folder
3. Distribute `.exe` file

### macOS

1. Build di Mac:
```bash
npm run electron:build
```

2. DMG file akan ada di `out/` folder
3. Sign app untuk distribution (optional)

### Linux

1. Build:
```bash
npm run electron:build
```

2. AppImage akan ada di `out/` folder
3. Distribute AppImage file

### Auto-Update Setup

1. Install electron-updater:
```bash
npm install electron-updater
```

2. Configure di `electron/main.js`:
```js
const { autoUpdater } = require('electron-updater')

autoUpdater.checkForUpdatesAndNotify()
```

3. Setup GitHub Releases untuk hosting updates

## Mobile Deployment

### Android

1. Setup React Native environment
2. Build APK:
```bash
cd mobile
npx react-native run-android --variant=release
```

3. Generate signed APK:
```bash
cd android
./gradlew assembleRelease
```

4. APK location: `android/app/build/outputs/apk/release/`

5. Upload ke Google Play Console

### iOS

1. Setup Xcode dan Apple Developer account
2. Build:
```bash
cd mobile
npx react-native run-ios --configuration Release
```

3. Archive di Xcode
4. Upload ke App Store Connect

## Environment Variables

### Production

Create `.env.production`:
```env
VITE_API_URL=https://api.production.com
VITE_APP_NAME=TailAdmin
```

### Staging

Create `.env.staging`:
```env
VITE_API_URL=https://api.staging.com
VITE_APP_NAME=TailAdmin Staging
```

## CI/CD Setup

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - run: npm run test
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Performance Optimization

### Web

1. Enable gzip compression
2. Setup CDN (Cloudflare)
3. Optimize images
4. Enable caching headers
5. Use lazy loading

### Desktop

1. Minimize bundle size
2. Use asar packaging
3. Implement code splitting
4. Optimize assets

## Monitoring

### Web Analytics

1. Google Analytics:
```tsx
// Add to index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

2. Sentry for error tracking:
```bash
npm install @sentry/react
```

### Performance Monitoring

1. Lighthouse CI
2. Web Vitals
3. Custom performance metrics

## Security Checklist

- [ ] HTTPS enabled
- [ ] Environment variables secured
- [ ] API keys not exposed
- [ ] CSP headers configured
- [ ] XSS protection enabled
- [ ] CORS properly configured
- [ ] Authentication implemented
- [ ] Input validation
- [ ] SQL injection prevention
- [ ] Rate limiting

## Post-Deployment

1. Test all features
2. Check responsive design
3. Verify API connections
4. Test authentication flow
5. Monitor error logs
6. Check performance metrics
7. Setup backup system
8. Document deployment process

## Rollback Strategy

### Web
```bash
vercel rollback
```

### Desktop
- Keep previous versions available
- Implement version checking
- Allow manual downgrade

## Support

- Monitor user feedback
- Setup support email
- Create FAQ documentation
- Implement in-app feedback
