# Mobile Setup Guide - React Native

## Prerequisites untuk Android Development

### 1. Install Node.js
✅ Sudah terinstall (v20.11.1)

### 2. Install Java Development Kit (JDK)
Download dan install JDK 11 atau 17:
- https://www.oracle.com/java/technologies/downloads/

Verifikasi instalasi:
```bash
java -version
```

### 3. Install Android Studio
Download dari: https://developer.android.com/studio

Saat instalasi, pastikan install:
- Android SDK
- Android SDK Platform
- Android Virtual Device (AVD)

### 4. Setup Environment Variables

Tambahkan ke System Environment Variables:

```
ANDROID_HOME = C:\Users\[USERNAME]\AppData\Local\Android\Sdk
```

Tambahkan ke PATH:
```
%ANDROID_HOME%\platform-tools
%ANDROID_HOME%\emulator
%ANDROID_HOME%\tools
%ANDROID_HOME%\tools\bin
```

### 5. Verifikasi Setup

```bash
# Check Android SDK
adb version

# Check Java
java -version

# Check Node
node -v
```

## Setup React Native Project

### Option 1: Expo (Recommended untuk Quick Start)

Expo adalah cara tercepat untuk membuat mobile app dari React web app.

```bash
# Install Expo CLI
npm install -g expo-cli

# Create Expo project
npx create-expo-app mobile-app

# Navigate to project
cd mobile-app

# Start Expo
npx expo start
```

Kemudian:
1. Install Expo Go app di Android phone
2. Scan QR code dari terminal
3. App akan running di phone Anda

### Option 2: React Native CLI (Full Native)

Untuk full control dan native modules:

```bash
# Install React Native CLI
npm install -g react-native-cli

# Create React Native project
npx react-native init TailAdminMobile

# Navigate to project
cd TailAdminMobile

# Start Metro bundler
npx react-native start

# Run on Android (new terminal)
npx react-native run-android
```

## Mengkonversi Web App ke Mobile

### Struktur yang Direkomendasikan:

```
project/
├── web/                    # Web app (current)
├── mobile/                 # React Native app
│   ├── src/
│   │   ├── components/    # Shared components
│   │   ├── screens/       # Mobile screens
│   │   ├── navigation/    # Navigation
│   │   └── services/      # API services (shared)
│   └── App.tsx
└── shared/                # Shared code
    ├── types/
    ├── utils/
    └── constants/
```

## Quick Start dengan Expo

### 1. Install Expo
```bash
npm install -g expo-cli
```

### 2. Create Expo App
```bash
npx create-expo-app mobile
cd mobile
```

### 3. Install Dependencies
```bash
npm install @react-navigation/native
npm install @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context
npx expo install react-native-web react-dom @expo/webpack-config
```

### 4. Start Development
```bash
npx expo start
```

### 5. Run on Device
- Install "Expo Go" dari Play Store
- Scan QR code dari terminal
- App akan running di phone

## Alternatif: Progressive Web App (PWA)

Cara tercepat untuk mobile adalah mengkonversi ke PWA:

### 1. Install Vite PWA Plugin
```bash
npm install -D vite-plugin-pwa
```

### 2. Update vite.config.ts
```typescript
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'TailAdmin',
        short_name: 'TailAdmin',
        theme_color: '#3b82f6',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
```

### 3. Build PWA
```bash
npm run build
```

### 4. Deploy & Install
- Deploy ke hosting (Vercel/Netlify)
- Buka di mobile browser
- Klik "Add to Home Screen"
- App akan berfungsi seperti native app

## Rekomendasi

Untuk project ini, saya rekomendasikan:

### 🚀 Quick & Easy: PWA
- ✅ Tidak perlu setup Android SDK
- ✅ Works di semua platform
- ✅ Install dari browser
- ✅ Offline support
- ✅ Push notifications
- ⚠️ Limited native features

### 📱 Full Native: Expo
- ✅ Easy setup
- ✅ Fast development
- ✅ Good performance
- ✅ Access to native features
- ⚠️ Perlu Android Studio untuk build

### 🔧 Advanced: React Native CLI
- ✅ Full control
- ✅ All native features
- ✅ Best performance
- ⚠️ Complex setup
- ⚠️ Perlu Android SDK

## Next Steps

1. **Untuk PWA**: Saya bisa setup PWA sekarang (5 menit)
2. **Untuk Expo**: Install Expo CLI dan create project (15 menit)
3. **Untuk React Native**: Setup Android Studio dulu (1-2 jam)

Pilih mana yang Anda inginkan?
