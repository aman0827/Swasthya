export default function Navbar() {
  return (
   <nav className="flex items-center justify-between border-b border-zinc-800 bg-black px-8 py-5">
      {/* Logo */}
     <h1 className="text-2xl font-bold text-white">
  🩺 Swasthya
</h1>

      {/* Navigation Links */}
      <div className="flex gap-8">
        <a href="#" className="hover:text-blue-600">
          Features
        </a>

        <a href="#" className="hover:text-blue-600">
          About
        </a>

        <a href="#" className="hover:text-blue-600">
          Contact
        </a>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="px-4 py-2 rounded-lg border">
          Login
        </button>

        <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </nav>
  );
}