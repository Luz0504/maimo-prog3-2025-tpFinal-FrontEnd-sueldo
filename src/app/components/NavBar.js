"use client";

import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md text-black">
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/">
          <h1 className="text-xl font-semibold">WindieCity</h1>
        </Link>

        {/* Botón hamburguesa mobile */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>

        {/* Menú desktop */}
        <ul className="hidden  md:flex gap-6 text-lg">
          <li>
            <Link href="/users" className="hover:text-blue-600">
              Users
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>
          </li>
        </ul>
      </div>

      {/* Menú mobile */}
      {open && (
        <ul className="md:hidden flex flex-col px-6 pb-4 gap-3 text-lg">
          <li>
            <Link
              href="/users"
              className="hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
