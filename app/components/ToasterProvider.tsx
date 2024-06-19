"use client";

import { Toaster } from "react-hot-toast";

interface ToasterProviderProps {
  children: React.ReactNode;
}

export default function ToasterProvider({ children }: ToasterProviderProps) {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
}
