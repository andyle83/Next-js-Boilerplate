import Link from 'next/link';
import type { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="drawer">
    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content bg-base-200">
      <div className="container flex h-screen flex-col bg-base-200">
        {props.meta}
        {/* Navigation */}
        <nav>
          <div className="navbar bg-base-200">
            <div className="navbar-start">
              <div className="flex-none md:hidden">
                <label
                  htmlFor="my-drawer-3"
                  className="btn btn-ghost hover:bg-base-300 active:bg-base-300"
                >
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
                </label>
              </div>
              <a
                href="/tailwindcss-101"
                className="btn btn-primary btn-circle lg:mx-4"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  ></path>
                </svg>
              </a>
              <div className="hidden md:block">
                <ul className="menu menu-horizontal">
                  <li>
                    <a>Trending</a>
                  </li>
                  <li tabIndex={0}>
                    <a>
                      Products
                      <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                      </svg>
                    </a>
                    <ul className="bg-base-100 p-2">
                      <li>
                        <a>Drink</a>
                      </li>
                      <li>
                        <a>Book</a>
                      </li>
                      <li>
                        <a>Accessories</a>
                      </li>
                      <li>
                        <a>Digital</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>Business</a>
                  </li>
                  <li>
                    <a>Support</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="navbar-end gap-2">
              <div className="form-control relative hidden w-64 md:block">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="gray"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Search your product"
                  className="input-bordered input w-full pl-10 pr-4"
                />
              </div>
              <div className="dropdown-end dropdown">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
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
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">8</span>
                  </div>
                </label>
              </div>
              <div className="dropdown-end dropdown">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src="https://api.lorem.space/image/face?hash=33791"
                      alt="Profile Image"
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu menu-compact mt-3 w-52 bg-base-100 p-2 shadow drop-shadow-md"
                >
                  <li>
                    <a className="justify-between">
                      Wallet
                      <span className="badge ">$30 cUSD</span>
                    </a>
                  </li>
                  <li>
                    <a className="justify-between">
                      Inbox
                      <span className="badge ">2 messages</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <button className="btn btn-sm mt-2 rounded-none">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        {/* Page Content */}
        <div className="content py-5 text-xl">{props.children}</div>

        {/* Footer */}
        <footer className="footer footer-center mt-5 gap-4 p-2 text-base-content">
          <div>Copyright © 2022 - DaisyUI Collection</div>
          <div className="grid grid-flow-col gap-4">
            <Link href="/">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
            </Link>
            <Link href="/">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
            </Link>
            <Link href="/">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  </div>
);

export { Main };
