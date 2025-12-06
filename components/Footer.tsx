// components/Footer.tsx
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Koleys Technology Ltd. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <span>Registered in England &amp; Wales.</span>
          <Link
            href="https://tusharkoley.com"
            className="hover:text-sky-400 transition-colors"
          >
            Personal site
          </Link>
          <Link
            href="https://tradezens.com"
            className="hover:text-sky-400 transition-colors"
          >
            TradeZens
          </Link>
        </div>
      </div>
    </footer>
  );
}
