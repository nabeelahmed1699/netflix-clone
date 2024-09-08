import React, { FC, ReactNode } from 'react';
import { Toaster } from 'sonner';

// @project
import Header from './header';

interface MainLayoutProps {
  children: ReactNode;
}
const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <Toaster />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
