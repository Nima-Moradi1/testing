import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    // we ensure TypeScript files are transformed
    '^.+\\.(ts|tsx)$': 'ts-jest', 
  }
};

export default createJestConfig(customJestConfig);