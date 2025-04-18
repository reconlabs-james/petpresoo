
import { Sparkles } from "lucide-react";
import Link from "next/link";

const Header = () => {

  return (
    <>
      <header className="bg-white flex flex-col">
        <nav className="w-full bg-white shadow-sm py-4 sticky top-0 z-50">
          <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
            <div className="flex-1">
              <Link href="/">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-100 via-sky-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                  <div className="relative">
                    <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 via-sky-500 to-purple-600 bg-clip-text text-transparent">
                      Pet<span className="text-sky-600">Presso</span>
                    </span>
                    <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400" />
                    </div>
                  </div>
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-sky-400 group-hover:w-4/5 transition-all duration-300"></div>
                </div>
              </Link>
            </div>
            <div className="flex flex-direction:row gap-4">
              {/* {isLoggedIn ? (
                <nav>
                  <ul className="flex gap-4">
                    <li>
                      <Link to="/">
                        <button onClick={storeLogout}>로그 아웃</button>
                      </Link>
                    </li>
                  </ul>
                </nav>
              ) : (
                <nav>
                  <ul className="flex gap-4">
                    <li>
                      <LoginModal />
                    </li>
                  </ul>
                </nav>
              )} */}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
