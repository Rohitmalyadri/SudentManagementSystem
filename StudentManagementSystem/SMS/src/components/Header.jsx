import { NavLink } from 'react-router-dom';
import { useState } from 'react';


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-100 via-white to-blue-200 shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-extrabold text-blue-700 tracking-tight">SMS</span>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          <NavLink to="/" className={({ isActive }) => `transition px-3 py-2 rounded-lg font-medium hover:bg-blue-50 hover:text-blue-700 ${isActive ? 'bg-blue-200 text-blue-800' : 'text-gray-700'}`} end>Home</NavLink>
          <NavLink to="/add" className={({ isActive }) => `transition px-3 py-2 rounded-lg font-medium hover:bg-blue-50 hover:text-blue-700 ${isActive ? 'bg-blue-200 text-blue-800' : 'text-gray-700'}`}>Add Student</NavLink>
          <NavLink to="/" className={({ isActive }) => `transition px-3 py-2 rounded-lg font-medium hover:bg-blue-50 hover:text-blue-700 ${isActive ? 'bg-blue-200 text-blue-800' : 'text-gray-700'}`}>View All</NavLink>
        </div>
        <button className="md:hidden flex items-center px-3 py-2 border rounded text-blue-700 border-blue-300 hover:bg-blue-50 transition" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </nav>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-blue-100 animate-fade-in-down">
          <div className="flex flex-col gap-2 p-4">
            <NavLink to="/StudentList" className={({ isActive }) => `transition px-3 py-2 rounded-lg font-medium hover:bg-blue-50 hover:text-blue-700 ${isActive ? 'bg-blue-200 text-blue-800' : 'text-gray-700'}`} end onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/add" className={({ isActive }) => `transition px-3 py-2 rounded-lg font-medium hover:bg-blue-50 hover:text-blue-700 ${isActive ? 'bg-blue-200 text-blue-800' : 'text-gray-700'}`} onClick={() => setMenuOpen(false)}>Add Student</NavLink>
            <NavLink to="/" className={({ isActive }) => `transition px-3 py-2 rounded-lg font-medium hover:bg-blue-50 hover:text-blue-700 ${isActive ? 'bg-blue-200 text-blue-800' : 'text-gray-700'}`} onClick={() => setMenuOpen(false)}>View All</NavLink>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;