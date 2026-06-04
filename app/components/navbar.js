import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 shadow">
      <h1 className="text-xl font-bold">Lex & Partners</h1>

      <div className="flex gap-5">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/practice-areas">Practice Areas</Link>
        <Link href="/lawyers">Lawyers</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}