import ThemeBtn from "@/components/header/theme-btn";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-header-background px-8 py-4 shadow-sm">
      <nav className="flex items-center justify-between">
        <div className="flex gap-6">
          <Link
            href="/"
            className="text-foreground no-underline hover:underline"
          >
            Home
          </Link>
          <Link
            href="/cv"
            className="text-foreground no-underline hover:underline"
          >
            CV
          </Link>
          <Link
            href="/blog"
            className="text-foreground no-underline hover:underline"
          >
            Blog
          </Link>
        </div>
        <ThemeBtn />
      </nav>
    </header>
  );
}
