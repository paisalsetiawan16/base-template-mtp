# Contributing Guide

Terima kasih atas minat Anda untuk berkontribusi! Berikut panduan untuk berkontribusi pada project ini.

## Getting Started

1. Fork repository
2. Clone fork Anda:
```bash
git clone https://github.com/your-username/react-tailadmin-multiplatform.git
```

3. Install dependencies:
```bash
npm install
```

4. Create branch baru:
```bash
git checkout -b feature/your-feature-name
```

## Development Workflow

1. Buat perubahan di branch Anda
2. Test perubahan:
```bash
npm run dev
```

3. Lint code:
```bash
npm run lint
```

4. Commit dengan pesan yang jelas:
```bash
git commit -m "feat: add new feature"
```

5. Push ke fork Anda:
```bash
git push origin feature/your-feature-name
```

6. Buat Pull Request

## Commit Convention

Gunakan conventional commits:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

Examples:
```
feat: add user authentication
fix: resolve sidebar toggle issue
docs: update API documentation
style: format code with prettier
refactor: simplify table component
test: add unit tests for utils
chore: update dependencies
```

## Code Style

### TypeScript
- Use TypeScript untuk semua file
- Define interfaces untuk props
- Avoid `any` type
- Use type inference when possible

### React
- Use functional components
- Use hooks untuk state management
- Keep components small and focused
- Extract reusable logic ke custom hooks

### Styling
- Use Tailwind CSS classes
- Follow existing design patterns
- Ensure responsive design
- Support dark mode

### File Naming
- Components: PascalCase (e.g., `Button.tsx`)
- Utilities: camelCase (e.g., `formatters.ts`)
- Hooks: camelCase with 'use' prefix (e.g., `useDebounce.ts`)
- Types: PascalCase (e.g., `User.ts`)

## Project Structure

```
src/
├── components/     # Reusable UI components
├── layouts/        # Layout components
├── pages/          # Page components
├── hooks/          # Custom hooks
├── services/       # API services
├── store/          # State management
├── utils/          # Utility functions
├── types/          # TypeScript types
└── config/         # Configuration
```

## Adding New Features

### New Component

1. Create component file di `src/components/`
2. Add TypeScript interface untuk props
3. Implement component dengan proper styling
4. Export dari `src/components/index.ts`
5. Add documentation di `COMPONENTS.md`

Example:
```tsx
// src/components/NewComponent.tsx
interface NewComponentProps {
  title: string
  onClick?: () => void
}

export default function NewComponent({ title, onClick }: NewComponentProps) {
  return (
    <div onClick={onClick}>
      {title}
    </div>
  )
}
```

### New Page

1. Create page file di `src/pages/`
2. Add route di `src/App.tsx`
3. Add menu item di `src/layouts/Sidebar.tsx`
4. Update documentation

### New Hook

1. Create hook file di `src/hooks/`
2. Follow React hooks rules
3. Add TypeScript types
4. Document usage

### New Service

1. Create service file di `src/services/`
2. Define TypeScript interfaces
3. Implement API calls
4. Add error handling
5. Document in `API.md`

## Testing

### Unit Tests
```bash
npm run test
```

### E2E Tests
```bash
npm run test:e2e
```

### Manual Testing
- Test di berbagai browser
- Test responsive design
- Test dark mode
- Test all user flows

## Pull Request Guidelines

### Before Submitting

- [ ] Code follows style guidelines
- [ ] All tests pass
- [ ] No console errors
- [ ] Documentation updated
- [ ] Responsive design works
- [ ] Dark mode works
- [ ] No TypeScript errors

### PR Description

Include:
- What changes were made
- Why changes were needed
- Screenshots (if UI changes)
- Testing steps
- Related issues

Example:
```markdown
## Description
Added user profile page with edit functionality

## Changes
- Created ProfilePage component
- Added profile API service
- Implemented form validation
- Added profile route

## Screenshots
[Add screenshots here]

## Testing
1. Navigate to /profile
2. Edit profile information
3. Submit form
4. Verify changes saved

## Related Issues
Closes #123
```

## Code Review Process

1. Maintainer akan review PR Anda
2. Address feedback jika ada
3. Setelah approved, PR akan di-merge
4. Branch akan di-delete

## Questions?

- Open issue untuk pertanyaan
- Join Discord community
- Email: support@example.com

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
