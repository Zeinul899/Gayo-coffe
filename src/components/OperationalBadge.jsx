import { useState, useEffect } from 'react';

/**
 * OperationalBadge — Gayo Kedai Kopi is 24 hours, so always open.
 */
export default function OperationalBadge() {
  return (
    <div className="flex items-center gap-2 rounded-full border border-[#383838] bg-ebony px-3 py-1.5 text-xs font-medium font-body">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-pulse-dot" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      <span className="text-pure-white font-semibold">
        Buka 24 Jam
      </span>
    </div>
  );
}
