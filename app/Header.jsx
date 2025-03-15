'use client';

export default function Header() {

    return(
        <header className="flex items-center justify-between w-full h-16 border-2 border-gray-500">
        <h1 className="p-2">Redux Auth</h1>
        <nav>
          <ul className="flex items-center justify-center gap-8">
            <li className="p-2">
              <a href='/'>My Products</a>
            </li>
            <li className="p-2">
              <a href='/'>My Sales</a>
            </li>
            <li className="p-2">
              <button>Logout</button>
            </li>
          </ul>
        </nav>
      </header>
    );
}