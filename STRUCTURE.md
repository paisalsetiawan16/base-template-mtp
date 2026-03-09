# 📁 Project Structure

Complete overview of the project file structure and organization.

## 📂 Root Directory

```
react-tailadmin-multiplatform/
├── docs/                      # 📚 Documentation files
├── electron/                  # 🖥️ Electron desktop app files
├── public/                    # 📦 Static assets
├── src/                       # 💻 Source code
├── .vscode/                   # ⚙️ VSCode settings
├── node_modules/              # 📦 Dependencies (gitignored)
├── dist/                      # 🏗️ Build output (gitignored)
├── .env.example               # 🔐 Environment variables template
├── .eslintrc.cjs             # 📏 ESLint configuration
├── .gitignore                # 🚫 Git ignore rules
├── .prettierrc               # 💅 Prettier configuration
├── electron-builder.json     # 📦 Electron builder config
├── index.html                # 🌐 HTML entry point
├── LICENSE                   # 📄 MIT License
├── package.json              # 📦 NPM dependencies & scripts
├── postcss.config.js         # 🎨 PostCSS configuration
├── README.md                 # 📖 Main documentation
├── STRUCTURE.md              # 📁 This file
├── tailwind.config.js        # 🎨 Tailwind CSS config
├── tsconfig.json             # 🔧 TypeScript config
├── tsconfig.node.json        # 🔧 TypeScript Node config
└── vite.config.ts            # ⚡ Vite configuration
```

## 📚 Documentation (`docs/`)

```
docs/
├── README.md                    # Documentation index
├── 00-PROJECT-SUMMARY.md       # Project overview
├── 01-QUICKSTART.md            # Quick start guide
├── 02-SETUP.md                 # Setup instructions
├── 03-ARCHITECTURE.md          # Architecture documentation
├── 04-COMPONENTS.md            # Component reference
├── 05-API.md                   # API integration guide
├── 06-DEPLOYMENT.md            # Deployment guide
├── 07-MOBILE-SETUP.md          # Mobile setup guide
├── 08-PWA-ANDROID.md           # PWA Android guide
├── 09-ANDROID-QUICK-TEST.md    # Quick Android test
├── 10-CONTRIBUTING.md          # Contributing guidelines
└── 11-CHANGELOG.md             # Version history
```

**Purpose**: All project documentation organized by topic with numbered prefixes for easy navigation.

## 💻 Source Code (`src/`)

```
src/
├── components/              # 🧩 Reusable UI components
│   ├── Alert.tsx           # Alert notifications
│   ├── Badge.tsx           # Status badges
│   ├── Breadcrumb.tsx      # Navigation breadcrumb
│   ├── Button.tsx          # Button component
│   ├── Card.tsx            # Card container
│   ├── Dropdown.tsx        # Dropdown menu
│   ├── Input.tsx           # Form input
│   ├── Modal.tsx           # Modal dialog
│   ├── Pagination.tsx      # Pagination controls
│   ├── Spinner.tsx         # Loading spinner
│   ├── Table.tsx           # Data table
│   ├── Tabs.tsx            # Tab navigation
│   └── index.ts            # Component exports
│
├── layouts/                # 📐 Layout components
│   ├── DefaultLayout.tsx   # Main layout wrapper
│   ├── Header.tsx          # Top header bar
│   └── Sidebar.tsx         # Side navigation
│
├── pages/                  # 📄 Page components
│   ├── Dashboard.tsx       # Dashboard page
│   ├── Tables.tsx          # Tables page
│   ├── Forms.tsx           # Forms page
│   ├── Charts.tsx          # Charts page
│   └── Settings.tsx        # Settings page
│
├── hooks/                  # 🎣 Custom React hooks
│   ├── useLocalStorage.ts  # LocalStorage hook
│   └── useDebounce.ts      # Debounce hook
│
├── services/               # 🔌 API services
│   └── api.ts              # Axios instance & interceptors
│
├── store/                  # 🗄️ State management
│   ├── themeStore.ts       # Theme state (Zustand)
│   └── sidebarStore.ts     # Sidebar state (Zustand)
│
├── utils/                  # 🛠️ Utility functions
│   ├── cn.ts               # Classname utility
│   └── formatters.ts       # Format functions
│
├── types/                  # 📝 TypeScript types
│   └── index.ts            # Type definitions
│
├── config/                 # ⚙️ Configuration
│   └── api.ts              # API configuration
│
├── assets/                 # 🎨 Static assets (empty)
│
├── App.tsx                 # 🎯 Main App component
├── main.tsx                # 🚀 Entry point
└── index.css               # 🎨 Global styles
```

## 🖥️ Electron (`electron/`)

```
electron/
├── main.js                 # Electron main process
└── preload.js              # Preload script
```

**Purpose**: Desktop application files for Electron.

## 📦 Public (`public/`)

```
public/
└── vite.svg                # Vite logo (placeholder icon)
```

**Purpose**: Static files served directly without processing.

## ⚙️ VSCode (`.vscode/`)

```
.vscode/
├── extensions.json         # Recommended extensions
└── settings.json           # Workspace settings
```

**Purpose**: VSCode editor configuration for consistent development experience.

## 📋 Configuration Files

### Package Management
- **`package.json`** - NPM dependencies, scripts, and metadata
- **`package-lock.json`** - Locked dependency versions

### Build Tools
- **`vite.config.ts`** - Vite bundler configuration
- **`electron-builder.json`** - Electron packaging config

### TypeScript
- **`tsconfig.json`** - TypeScript compiler options
- **`tsconfig.node.json`** - TypeScript for Node.js files

### Styling
- **`tailwind.config.js`** - Tailwind CSS configuration
- **`postcss.config.js`** - PostCSS plugins

### Code Quality
- **`.eslintrc.cjs`** - ESLint rules
- **`.prettierrc`** - Prettier formatting rules

### Environment
- **`.env.example`** - Environment variables template
- **`.env`** - Local environment variables (gitignored)

### Git
- **`.gitignore`** - Files to ignore in git

## 🎯 Key Directories Explained

### `/src/components/`
Reusable UI components that can be used across multiple pages. Each component is self-contained with its own props interface.

### `/src/layouts/`
Layout components that wrap pages and provide consistent structure (header, sidebar, etc).

### `/src/pages/`
Page-level components that represent different routes in the application.

### `/src/hooks/`
Custom React hooks for reusable logic (localStorage, debounce, etc).

### `/src/services/`
API integration layer with Axios configuration and interceptors.

### `/src/store/`
Zustand stores for global state management (theme, sidebar, etc).

### `/src/utils/`
Utility functions for common operations (formatting, classnames, etc).

### `/src/types/`
TypeScript type definitions and interfaces.

### `/docs/`
All project documentation organized by topic with numbered prefixes.

## 📊 File Count

- **Total Files**: ~50+ files
- **Components**: 12 files
- **Pages**: 5 files
- **Hooks**: 2 files
- **Stores**: 2 files
- **Documentation**: 12 files
- **Configuration**: 10+ files

## 🔍 Finding Files

### By Feature
- **UI Components**: `src/components/`
- **Pages**: `src/pages/`
- **API**: `src/services/` & `src/config/`
- **State**: `src/store/`
- **Utilities**: `src/utils/` & `src/hooks/`

### By Platform
- **Web**: `src/`, `public/`, `index.html`
- **Desktop**: `electron/`
- **Mobile**: `docs/07-MOBILE-SETUP.md`, `docs/08-PWA-ANDROID.md`

### By Purpose
- **Development**: `src/`, `.vscode/`
- **Configuration**: Root config files
- **Documentation**: `docs/`, `README.md`
- **Build Output**: `dist/`, `out/` (gitignored)

## 🚀 Adding New Files

### New Component
```
src/components/NewComponent.tsx
```

### New Page
```
src/pages/NewPage.tsx
```

### New Hook
```
src/hooks/useNewHook.ts
```

### New Service
```
src/services/newService.ts
```

### New Documentation
```
docs/12-NEW-TOPIC.md
```

## 📝 Naming Conventions

- **Components**: PascalCase (e.g., `Button.tsx`)
- **Utilities**: camelCase (e.g., `formatters.ts`)
- **Hooks**: camelCase with 'use' prefix (e.g., `useDebounce.ts`)
- **Types**: PascalCase (e.g., `User.ts`)
- **Config**: kebab-case (e.g., `vite.config.ts`)
- **Docs**: UPPERCASE with numbers (e.g., `01-QUICKSTART.md`)

## 🎨 Import Aliases

Path aliases configured in `tsconfig.json` and `vite.config.ts`:

```typescript
@/           → src/
@components/ → src/components/
@layouts/    → src/layouts/
@pages/      → src/pages/
@hooks/      → src/hooks/
@services/   → src/services/
@store/      → src/store/
@utils/      → src/utils/
@types/      → src/types/
@config/     → src/config/
@assets/     → src/assets/
```

## 📦 Build Output

### Web Build (`dist/`)
```
dist/
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── ...
├── index.html
└── manifest.webmanifest
```

### Desktop Build (`out/`)
```
out/
├── win-unpacked/
├── TailAdmin Setup.exe
└── ...
```

---

**This structure is designed for scalability, maintainability, and ease of navigation.** 🚀
