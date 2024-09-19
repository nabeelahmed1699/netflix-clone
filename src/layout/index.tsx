'use client';
import React, { FC, ReactNode } from 'react';
import { Toaster } from 'sonner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// @project
import Header from './header';

interface MainLayoutProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Toaster />
      <main>{children}</main>
    </QueryClientProvider>
  );
};

export default MainLayout;
