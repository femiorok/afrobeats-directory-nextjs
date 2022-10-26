import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full h-8 bg-slate-900">
      <ul className="text-yellow-500 flex justify-around">
        <li className="hover:text-yellow-100">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-yellow-100">
          <Link href="/playlists">Playlists</Link>
        </li>
        <li className="hover:text-yellow-100">
          <Link href="/top-afrobeats-songs">Top Afrobeats</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
