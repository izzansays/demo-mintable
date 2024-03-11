import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  let host = window.location.host;
  let parts = host.split(".");
  let home = "";

  if (parts.length >= 2) {
    home = parts[1];
  } else {
    home = host;
  }

  return (
    <nav className="relative z-20 bg-white w-full md:static md:text-sm md:border-none shadow-lg rounded-b-xl md:shadow-none">
      <div className="items-center gap-x-14 px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a href={home}>
            <img
              className="aspect-square w-14"
              src="https://mintable.com/static/media/mintable-logo-new.e2bd394114ffcecad16c.png"
            />
          </a>
        </div>
        <div className="nav-menu flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 block">
          <ul className="items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            <li>
              <span className="block text-gray-700 hover:text-indigo-600 cursor-pointer">
                Browse
              </span>
            </li>
            <li>
              <span className="block text-gray-700 hover:text-indigo-600 cursor-pointer">
                Mint
              </span>
            </li>
            <li>
              <span className="block text-gray-700 hover:text-indigo-600 cursor-pointer">
                Resources
              </span>
            </li>

            <div className="flex-1 items-center justify-end gap-x-6 space-y-3 md:flex md:space-y-0">
              <SignedOut>
                <li>
                  <span className="block py-3 px-4 font-medium text-center hover:text-indigo-600 cursor-pointer">
                    Sign up
                  </span>
                </li>
                <SignInButton>
                  <li>
                    <span className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow md:inline cursor-pointer">
                      Log in
                    </span>
                  </li>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton
                  userProfileMode="navigation"
                  userProfileUrl="/user"
                />
              </SignedIn>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
