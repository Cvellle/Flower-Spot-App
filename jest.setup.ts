import '@testing-library/jest-dom';

// Mock your api config
jest.mock('./src/config/api.ts', () => ({
  getApiBase: () => process.env.VITE_API_BASE_URL || '/api',
}));
