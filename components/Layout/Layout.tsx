import React from "react";
import Header from "../Header";

interface LayoutProps {
  children: React.ReactChild | React.ReactChildren;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="max-w-[1024px] mx-auto px-6 sm:px-24 text-primary">
      <Header />
      {children}
    </main>
  );
};
