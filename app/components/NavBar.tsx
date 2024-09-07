"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false); // State for toggling search input
  const pathname = usePathname(); // Get current pathname

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log(`Searching for: ${searchQuery}`);
      // Example: router.push(`/search?q=${searchQuery}`);
    }
  };

  const toggleSearch = () => {
    setShowSearch((prev) => !prev); // Toggle search input visibility
  };

  // Function to check if the current link is active
  const isActive = (href: string) => pathname === href;

  return (
    <div className="container mx-auto p-4">
      <div className="navbar bg-base-100">
        {/* Left: Brand */}
        <div className="navbar-start flex items-center">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            <Image src="/canaez.png" alt="canaez logo" width={120} height={120} />
          </Link>
        </div>

        {/* Center: Hidden on small screens */}
        <div className="navbar-center lg:hidden">
          <button className="btn btn-ghost btn-circle" onClick={toggleSearch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        {/* Right: Navigation Links, Search Input and Menu */}
        <div className="navbar-end flex items-center space-x-4">
          {/* Navigation Links */}
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link
                  href="/"
                  className={`${isActive("/") ? "active-link" : ""}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`${isActive("/about") ? "active-link" : ""}`}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={`${isActive("/services") ? "active-link" : ""}`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/product"
                  className={`${isActive("/product") ? "active-link" : ""}`}
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  href="/partnership"
                  className={`${isActive("/partnership") ? "active-link" : ""}`}
                >
                  Partnership
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`${isActive("/contact") ? "active-link" : ""}`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Conditionally Render Search Input or Icon */}
          {showSearch ? (
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="input input-bordered input-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-ghost btn-circle ml-2" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>
          ) : (
            <button className="btn btn-ghost btn-circle" onClick={toggleSearch}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          )}

          {/* Hamburger Menu Icon */}
          <div className="dropdown dropdown-end lg:hidden">
            <button tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/product">Product</Link></li>
              <li><Link href="/partnership">Partnership</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
