"use client";

import { useNotFound } from "@/context/NotFoundContext";
import NotFoundPage from "@/pages/NotFoundPage";
import { useEffect } from "react";

export default function NotFound() {
  const context = useNotFound();

  useEffect(() => {
    if (!context?.setIsNotFound) return;

    context.setIsNotFound(true);

    return () => {
      context.setIsNotFound(false);
    };
  }, [context]);

  return <NotFoundPage />;
}