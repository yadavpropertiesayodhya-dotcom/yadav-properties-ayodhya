import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-yellow-400">
  Yadav Properties Ayodhya
</h1>  
        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/properties">Properties</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}