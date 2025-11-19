"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-purple-100 shadow-md text-black pr-5">
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/">
          <Image
            src={"/assets/Windiecity.gif"}
            width={200}
            height={100}
            alt="Windie"
          />
        </Link>
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>

        <ul className="hidden md:flex gap-6 text-lg">
          <li>
            <Link href="/users" className="hover:text-purple-800">
              Users
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-purple-800">
              About
            </Link>
          </li>
        </ul>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col px-6 pb-4 gap-3 text-lg">
          <li>
            <Link
              href="/users"
              className="hover:text-purple-800"
              onClick={() => setOpen(false)}
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-purple-800"
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
