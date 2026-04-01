import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const [dashOpen, setDashOpen] = useState(true);
  const [pagesOpen, setPagesOpen] = useState(true);

  const linkClass = ({ isActive }) =>
    `block py-1.5 pl-8 text-sm rounded transition-colors ${
      isActive ? "text-white bg-gray-700" : "text-gray-400 hover:text-white"
    }`;

  return (
    <div className="bg-gray-900 text-white h-screen flex w-screen">
      <nav className="w-1/5 bg-gray-800 p-4 overflow-y-auto">
        <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">
          Pages
        </p>

        {/* Dashboards */}
        <button
          onClick={() => setDashOpen(!dashOpen)}
          className="flex items-center justify-between w-full text-sm text-gray-300 hover:text-white py-2"
        >
          <span className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.573-1.066z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Dashboards
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-3 w-3 transition-transform ${dashOpen ? "rotate-90" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        {dashOpen && (
          <div className="ml-2 space-y-1">
            <NavLink to="/" className={linkClass}>
              → Analytics
            </NavLink>
            <NavLink to="/dashboard-ecommerce" className={linkClass}>
              → E-Commerce
            </NavLink>
            <NavLink to="/dashboard-crypto" className={linkClass}>
              → Crypto
            </NavLink>
          </div>
        )}

        {/* Pages */}
        <button
          onClick={() => setPagesOpen(!pagesOpen)}
          className="flex items-center justify-between w-full text-sm text-gray-300 hover:text-white py-2 mt-2"
        >
          <span className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Pages
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-3 w-3 transition-transform ${pagesOpen ? "rotate-90" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        {pagesOpen && (
          <div className="ml-2 space-y-1">
            <NavLink to="/pages-settings" className={linkClass}>
              Settings
            </NavLink>
            <NavLink to="/pages-projects" className={linkClass}>
              Projects
            </NavLink>
            <NavLink to="/pages-clients" className={linkClass}>
              Profile
            </NavLink>
            <NavLink to="/pages-orders" className={linkClass}>
              Orders
            </NavLink>
            <NavLink to="/pages-pricing" className={linkClass}>
              Pricing
            </NavLink>
            <NavLink to="/pages-chats" className={linkClass}>
              Chats
            </NavLink>
          </div>
        )}
        <NavLink to="/profile" className={linkClass} >
          <span className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 inline"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Profile
          </span>
        </NavLink>
        <NavLink to="/invoice" className={linkClass}>
          <span className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 inline"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Invoice
          </span>
        </NavLink>
        <NavLink to="/tasks" className={linkClass}>
          <span className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 inline"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            Tasks
          </span>
        </NavLink>
        <NavLink to="/calendar" className={linkClass}>
          <span className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 inline"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Calendar
          </span>
        </NavLink>
      </nav>
      <div className="flex-1 overflow-y-auto">
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
