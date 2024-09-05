import Logo from "./Logo";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4 bg-white">
        <div>
          <Logo />
        </div>

        <div className="hidden lg:flex">
          <ul className="flex gap-7">
            {["Home", "Blog", "Single Post", "Pages", "Contact"].map((menuItem, index) => (
              <li key={index}>
                <a className="font-medium font-sans cursor-pointer hover:text-blue-500">{menuItem}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:block">
          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
            </div>
            <input
              type="text"
              placeholder="Search"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            aria-label="Menu"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

      </nav>
    )
}