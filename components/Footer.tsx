import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e5e5e5] px-6 lg:px-8 py-10 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-black">
            Geek Brain Studio
          </span>
          <span className="text-[#e5e5e5]">·</span>
          <span className="text-sm text-[#a3a3a3]">
            © {year} geekbrainstudio.com
          </span>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="#about"
            className="text-sm text-[#a3a3a3] hover:text-black transition-colors"
          >
            About
          </Link>
          <Link
            href="#products"
            className="text-sm text-[#a3a3a3] hover:text-black transition-colors"
          >
            Products
          </Link>
          <a
            href="mailto:geekbrainstudio@gmail.com"
            className="text-sm text-[#a3a3a3] hover:text-black transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

