import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar sticky top-0 bg-amber-800 bg-clip-padding backdrop-filter backdrop-blur-6xl bg-opacity-40">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="link" href="/">
                Home
              </Link>
            </li>
            <li>
              <details>
                <summary>Products</summary>
                <ul className="p-2">
                  <li>
                    <Link href="/products/categories/categoryone">
                      Category 1
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/categories/categorytwo">
                      Category 2
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link className="link" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Link className="link text-2xl font-bold text-blue-600" href="/">
          MediGadget <span className="text-red-500">BD</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex text-blue">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="link text-white" href="/">
              Home
            </Link>
          </li>
          <li>
            <details>
              <summary className="text-white">Products</summary>
              <ul className="p-2">
                <li>
                  <Link href="/products/categories/categoryone">
                    Category 1
                  </Link>
                </li>
                <li>
                  <Link href="/products/categories/categorytwo">
                    Category 2
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link className="link text-white" href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          className="btn rounded-lg ... text-white bg-gradient-to-r from-blue-200 to-blue-600 hover:from-green-600 hover:to-green-200 ... border-none"
          href="/registration"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
