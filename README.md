# Testing App

This is a **Next.js** testing application that implements **Jest**, **React Testing Library**, and **Playwright** for comprehensive testing. The project is structured to support both unit and end-to-end testing.

---

## 📂 Folder Structure

```
__tests__/
│── e2e/               # End-to-end tests with Playwright
│   ├── example.spec.ts
│   ├── HomePage.test.tsx
│   ├── index.test.tsx
│   ├── LoginForm.test.tsx
│   ├── UserList.test.tsx
│   ├── UserProfile.test.tsx
│
.github/               # GitHub-related configurations
.next/                 # Next.js build output (generated after build)
.swc/                  # Next.js SWC (Speedy Web Compiler) cache
mocks/                 # Mock data for testing
node_modules/          # Installed dependencies
playwright-report/     # Reports for Playwright tests
public/                # Static assets
src/                   # Main application source code
│── app/               # Next.js pages and components
│── components/        # Reusable UI components
│   ├── Form.tsx
│   ├── LoginForm.tsx
│   ├── UserList.tsx
│   ├── UserProfile.tsx
│
test-results/          # Stores test results

.eslintrc.json         # ESLint configuration
.gitignore             # Git ignore file
eslint.config.mjs      # Extended ESLint configuration
jest.config.ts         # Jest configuration
jest.setup.ts          # Jest setup file
next-env.d.ts          # TypeScript definitions for Next.js
next.config.js         # Next.js configuration
package.json           # Project dependencies and scripts
package-lock.json      # Dependency lock file
```

---

## 🛠️ Technologies Used

- **Next.js 15** - The core framework
- **React 19** - UI components
- **Jest** - Unit and integration testing
- **React Testing Library** - Testing utilities for React components
- **Playwright** - End-to-end testing
- **ESLint** - Linting support
- **TypeScript** - Type safety

---

## 🔧 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-repo/testing-app.git
   cd testing-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Start the production server:**
   ```bash
   npm run start
   ```

---

## 🧪 Running Tests

### ✅ Unit & Integration Tests (Jest + React Testing Library)

Run all Jest tests:
```bash
npm test
```

Run Jest in watch mode:
```bash
npm run test:watch
```

### 🌐 End-to-End Tests (Playwright)

Run Playwright tests:
```bash
npx playwright test
```

Generate Playwright test report:
```bash
npx playwright show-report
```

---

## 📝 Notes

- All test files are documented with comments to explain their purpose and usage.
- Playwright test results are stored in the `playwright-report/` directory.
- Mocking is implemented using `msw` (Mock Service Worker) for API request testing.

---