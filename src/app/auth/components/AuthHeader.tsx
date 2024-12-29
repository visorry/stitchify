"use client";

import { LogIn } from "lucide-react";
import Link from "next/link";

interface AuthHeaderProps {
  title: string;
  subtitle: string;
  linkText: string;
  linkHref: string;
}

export function AuthHeader({
  title,
  subtitle,
  linkText,
  linkHref,
}: AuthHeaderProps) {
  return (
    <div className="text-center mb-8">
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center">
          <LogIn className="w-6 h-6 text-emerald-500" />
        </div>
      </div>
      <h1 className="text-3xl font-script font-bold mb-2">{title}</h1>
      <p className="mb-4">{subtitle}</p>
      <Link
        href={linkHref}
        className="text-emerald-500 hover:text-emerald-600 font-medium"
      >
        {linkText}
      </Link>
    </div>
  );
}
