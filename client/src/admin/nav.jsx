import { Link } from "react-router-dom"
export default function Nav() {
    return (
        <nav className="bg-gray-800 p-5">
            <div className="tags flex flex-row justify-around w-1/2">
                <Link className="text-white" to="/admincustomer">Customers</Link>
                <Link className="text-white" to="/adminland">Home</Link>
                <Link className="text-white" to="/adminworker">Workers</Link>
                <Link className="text-white" to="/adminbroadcast">Broadcast</Link>
            </div>

        </nav>
    )
}

{/* <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="text-white font-bold text-xl">
                LOCALLY
              </a>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  to="/adminland"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/admincustomer"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Customers
                </Link>
                <Link
                  to="/adminworker"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Workers
                </Link>
                <Link
                  to="/adminbroadcast"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Broadcast
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <Link
              to="/"
              className="bg-red-500 text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </nav> */}