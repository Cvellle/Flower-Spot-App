export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // <-- must point here
  testMatch: ['<rootDir>/src/**/*.{test,spec}.{ts,tsx}'],
};
