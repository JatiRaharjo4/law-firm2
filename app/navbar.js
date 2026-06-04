export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between">
        <h1 className="font-bold text-xl">
          Law Firm
        </h1>

        <ul className="flex gap-6">
          <li>Home</li>
          <li>About</li>
          <li>Practice Areas</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}