'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// @project
import Movies from './movies';


const queryClient = new QueryClient();
export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Movies />
      </QueryClientProvider>
  );
}
