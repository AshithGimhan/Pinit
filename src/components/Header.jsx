import { Pin, Menu } from 'lucide-react';
import { Hamburger } from './Hamburger';
import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentLink, setCurrentLink] = useState('dashboard');

  return (
    <div className="flex justify-between items-center my-4 mr-3 ml-1 border-b-2 pb-3">
      <div className="flex gap-1 items-center">
        <Pin strokeWidth={2.5} aria-hidden="true" />
        <h1 className="uppercase font-bold text-2xl">Pinit</h1>
      </div>

      <div>
        <Menu
          onClick={() => {
            setMenuOpen(true);
          }}
        />
      </div>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/30 z-9998"
            onClick={() => setMenuOpen(false)}
          />

          <Hamburger
            onClose={() => setMenuOpen(false)}
            currentLink={currentLink}
            setCurrentLink={setCurrentLink}
          />
        </>
      )}
    </div>
  );
}

export default Header;
