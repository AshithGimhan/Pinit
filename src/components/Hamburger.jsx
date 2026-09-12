import { X, LayoutDashboard, FileText, Map, Info } from 'lucide-react';

export function Hamburger({ onClose, currentLink, setCurrentLink }) {
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
              onClick={() => setCurrentLink('dashboard')}
              className={`${
                currentLink === 'dashboard'
                  ? 'bg-red-50 text-red-800'
                  : 'text-gray-700 hover:bg-gray-100'
              } flex w-full items-center gap-3 rounded-md px-3 py-3 text-sm font-medium`}
            >
              <LayoutDashboard size={19} />
              Dashboard
            </button>
          </li>

          <li>
            <button
              onClick={() => setCurrentLink('reports')}
              className={`${
                currentLink === 'reports'
                  ? 'bg-red-50 text-red-800 '
                  : 'text-gray-700 hover:bg-gray-100'
              } flex w-full items-center gap-3 rounded-md px-3 py-3 text-sm font-medium`}
            >
              <FileText size={19} />
              My Reports
            </button>
          </li>

          <li>
            <button
              onClick={() => setCurrentLink('map')}
              className={`${
                currentLink === 'map'
                  ? 'bg-red-50 text-red-800'
                  : 'text-gray-700 hover:bg-gray-100'
              } flex w-full items-center gap-3 rounded-md px-3 py-3 text-sm font-medium`}
            >
              <Map size={19} />
              Map
            </button>
          </li>

          <li>
            <button
              onClick={() => setCurrentLink('about')}
              className={`${
                currentLink === 'about'
                  ? 'bg-red-50 text-red-800'
                  : 'text-gray-700 hover:bg-gray-100'
              } flex  w-full items-center gap-3 rounded-md px-3 py-3 text-sm font-medium`}
            >
              <Info size={19} />
              About
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
