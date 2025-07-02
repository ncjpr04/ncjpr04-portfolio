"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import LogoImage from "@/public/logo.png";

interface LogoProps {
  width: number;
  height: number;
  alt?: string;
}

export default function Logo({ width, height, alt = "logo" }: LogoProps) {
  const { systemTheme, theme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => setHasMounted(true), []);

  if (!hasMounted) {
    return (
      <div 
        className="animate-pulse bg-zinc-200 dark:bg-zinc-800 rounded"
        style={{ width, height }}
      />
    );
  }

  return (
    <Image 
      src={LogoImage} 
      width={width} 
      height={height} 
      alt={alt}
      className={currentTheme === "light" ? "brightness-0 opacity-70" : ""}
    />
  );
} 