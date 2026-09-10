import { Pin } from 'lucide-react';

function Header() {
  return (
    <div className="flex justify-between my-4 mr-3 ml-1 border-b-2 pb-3">
      <div className="flex gap-1 items-center">
        <Pin strokeWidth={2.5} aria-hidden="true" />
        <h1 className="uppercase font-bold text-2xl">Pinit</h1>
      </div>
      <button className="bg-black text-white p-2 text-xs hover:bg-red-80 cursor-pointer">
        + Report Issue
      </button>
    </div>
  );
}

export default Header;
