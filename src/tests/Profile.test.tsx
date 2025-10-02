import { render, screen, fireEvent } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import Profile from '../components/Profile';
import '@testing-library/jest-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();
const mockSuccessHandler = jest.fn();

const Tree = (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Profile successHandler={mockSuccessHandler} />
    </QueryClientProvider>
  </BrowserRouter>
);

test('Profile component snapshot', () => {
  const tree = TestRenderer.create(Tree).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders logout button correctly', () => {
  render(Tree);
  const linkElement = screen.getByText('Logout');
  expect(linkElement).toBeInTheDocument();
});

test('calls successHandler on logout', () => {
  render(Tree);
  const logoutButton = screen.getByText('Logout');
  fireEvent.click(logoutButton);
  expect(mockSuccessHandler).toHaveBeenCalledTimes(1);
});
