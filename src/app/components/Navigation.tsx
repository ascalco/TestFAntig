import { Link, useLocation } from "react-router";

export function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="border-b border-[#DCE1E5]">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link
            to="/"
            className="text-[#0C2050] font-semibold text-lg tracking-tight"
          >
            UX & CX Research
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm transition-colors ${
                isActive("/")
                  ? "text-[#0592D1]"
                  : "text-[#0D162E] hover:text-[#0592D1]"
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`text-sm transition-colors ${
                isActive("/services")
                  ? "text-[#0592D1]"
                  : "text-[#0D162E] hover:text-[#0592D1]"
              }`}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`text-sm transition-colors ${
                isActive("/about")
                  ? "text-[#0592D1]"
                  : "text-[#0D162E] hover:text-[#0592D1]"
              }`}
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className={`text-sm transition-colors ${
                isActive("/portfolio")
                  ? "text-[#0592D1]"
                  : "text-[#0D162E] hover:text-[#0592D1]"
              }`}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className={`text-sm transition-colors ${
                isActive("/contact")
                  ? "text-[#0592D1]"
                  : "text-[#0D162E] hover:text-[#0592D1]"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>

        <a
          href="#book-call"
          className="bg-[#0592D1] text-white px-6 py-2.5 rounded-md text-sm hover:bg-[#047AB5] transition-colors"
        >
          Book a Call
        </a>
      </div>
    </nav>
  );
}
