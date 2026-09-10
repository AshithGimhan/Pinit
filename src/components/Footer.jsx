import { Pin } from 'lucide-react';

function Footer() {
  return (
    <div className="mt-6 border-t border-gray-200 px-4 py-3">
      <div className="flex items-center justify-center gap-1.5 text-gray-700">
        <Pin size={16} strokeWidth={2.5} aria-hidden="true" />
        <span className="text-sm font-bold uppercase tracking-wide">Pinit</span>
      </div>
      <p className="mt-2 text-center text-xs text-gray-500">
        &copy; Pinit. Making communities better, together.
      </p>
    </div>
  );
}

export default Footer;
