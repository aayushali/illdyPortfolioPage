import { Link, useLocation } from "react-router-dom";
const navlinks = [
  "Home",
  "About",
  "Portfolio",
  "Testimonials",
  "Services",
  "Blog",
  "Team",
  "Contact",
];
const Nav = () => {
  const location = useLocation();
  let textColor = "text-black";
  if (location.pathname === "/home") {
    textColor = "text-white";
  }

  let url = "#";
  return (
    <nav className={`absolute top-0 left-0 w-full mb-20 h-32`}>
      <div>
        <div className="max-w-7xl mx-auto pt-12">
          <div className="flex justify-between">
            <div className="flex space-x-4 items-center">
              <div>
                <a href={url} className="flex items-center py-2 px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 mr-2 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                  <span className="font-bold text-2xl text-Black">iLLDY</span>
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-1 text-xl font-semibold">
              {navlinks.map((list) => {
                return (
                  <Link
                    key={list}
                    to={list.toLowerCase()}
                    className={`px-3 hover:text-yellow-400 transition duration-3000 capitalize ${textColor}`}
                  >
                    {list}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
