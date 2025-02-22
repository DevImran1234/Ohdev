import { Search, Sun, Bell, ChevronDown } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../images/logo.png";

export default function Navbar() {
  return (
    <header
      className="navbar navbar-expand-lg border-bottom px-4 py-2 w-100"
      style={{ backgroundColor: "#FFFFFF", zIndex: 1050 }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo Section */}
        <span className="navbar-brand mb-0 h1 d-flex align-items-center gap-2">
          <a href="#" className="text-decoration-none">
            <img src={logo} alt="Logo" className="logo" style={{ height: "40px" }} />
          </a>
          <span className="fw-bold">oheo</span>
        </span>

        {/* Floor Shop Button */}
        <button className="btn btn-dark d-flex align-items-center gap-2">
          Floor Shop <ChevronDown size={16} />
        </button>

        {/* Navigation Items - Always Visible */}
        <div className="d-flex align-items-center gap-3">
          {/* Search Bar */}
          <div className="position-relative">
            <Search className="position-absolute top-50 translate-middle-y ms-3" size={16} />
            <input
              type="search"
              placeholder="Search"
              className="form-control form-control-sm ps-5"
              aria-label="Search"
            />
          </div>

          {/* Icons */}
          <button className="btn btn-link p-2" aria-label="Toggle theme">
            <Sun size={20} />
          </button>
          <button className="btn btn-link p-2" aria-label="Notifications">
            <Bell size={20} />
          </button>
          
          {/* Profile Icon */}
          <img
            src="https://github.com/shadcn.png"
            alt="User"
            className="rounded-circle"
            width={32}
            height={32}
            aria-label="User profile"
          />
        </div>
      </div>
    </header>
  );
}
