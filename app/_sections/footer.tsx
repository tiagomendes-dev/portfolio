"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="mx-4 my-10 text-sm text-zinc-400">
      &copy; {year} - &lrm;
      <Link
        href="https://github.com/tiagomendes-dev"
        className="text-primary hover:underline"
      >
        Tiago Mendes
      </Link>
    </div>
  );
}
