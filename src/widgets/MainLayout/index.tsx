import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

interface IContent {
  children: React.ReactNode;
}
function MainLayout({ children }: IContent) {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
