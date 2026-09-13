import {
  X,
  LayoutDashboard,
  FileText,
  FileArchiveIcon,
  Info,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hamburger({
  onClose,
  currentLink,
  setMenuOpen,
  
}) {
  return (
    <div className="fixed top-0 right-0 h-full w-70 bg-white z-[9999] shadow-xl">
      <div className="flex items-center justify-between border-b border-gray-200 px-4 py-5">
        <h2 className="text-xl font-bold text-red-800">Pinit</h2>

        <button className="text-gray-600 hover:text-black">
          <X size={22} onClick={onClose} />
        </button>
      </div>

      <nav className="px-3 py-5">
        <ul className="space-y-2">
          <li>
            <button
              className={`${
                currentLink === '/'
                  ? 'bg-red-50 text-red-800'
                  : 'text-gray-700 hover:bg-gray-100'
              } flex w-full items-center gap-3 rounded-md px-3 py-3 text-sm font-medium`}
            >
              <LayoutDashboard size={19} />
              <Link
                onClick={() => {
                  setMenuOpen(false);
                }}
                to="/"
                className="w-full text-start"
              >
                Dashboard
              </Link>
            </button>
          </li>

          <li>
            <button
              className={`${
                currentLink === '/submit-report'
                  ? 'bg-red-50 text-red-800 '
                  : 'text-gray-700 hover:bg-gray-100'
              } flex w-full items-center gap-3 rounded-md px-3 py-3 text-sm font-medium`}
            >
              <FileText size={19} />
              <Link
                onClick={() => {
                  setMenuOpen(false);
                }}
                to="/submit-report"
                className="w-full text-start"
              >
                Submit report
              </Link>
            </button>
          </li>

          <li>
            <button
              className={`${
                currentLink === '/my-reports'
                  ? 'bg-red-50 text-red-800'
                  : 'text-gray-700 hover:bg-gray-100'
              } flex w-full items-center gap-3 rounded-md px-3 py-3 text-sm font-medium`}
            >
              <FileArchiveIcon size={19} />

              <Link
                onClick={() => {
                  setMenuOpen(false);
                }}
                to="/my-reports"
                className="w-full text-start"
              >
                My Reports
              </Link>
            </button>
          </li>

          <li>
            <button
              className={`${
                currentLink === '/about'
                  ? 'bg-red-50 text-red-800'
                  : 'text-gray-700 hover:bg-gray-100'
              } flex  w-full items-center gap-3 rounded-md px-3 py-3 text-sm font-medium`}
            >
              <Info size={19} />
              <Link
                onClick={() => {
                  setMenuOpen(false);
                }}
                to="/about"
                className="w-full text-start"
              >
                About
              </Link>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
