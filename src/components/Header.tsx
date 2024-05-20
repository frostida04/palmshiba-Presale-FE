import { useEffect, useState } from "react";
import Logo from "./Logo";

const Header = () => {
  const [stickyMenu, setStickyMenu] = useState(false);

  //const pathUrl = "/"

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    if (stickyMenu) setStickyMenu(true);
  });

  return (
    <header
      className={`fixed  left-0 top-0 z-99999 w-full py-4 px-[80px] bg-[#04011C] shadow-lg transition duration-100 rounded-sm`}
    >
      <div className="max-w-full items-center lg:flex">
        <div className="flex py-5 mr-19 items-center">
          <Logo />
        </div>

        <div className={`w-full py-5 text-center }`}>
          <nav>
            <ul className="flex items-center justify-center  gap-10">
              <li>
                <a
                  href={`#about`}
                  className="text-white text-[20px] font-helvetica"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href={`#about`}
                  className="text-white text-[20px] font-helvetica"
                >
                  How to buy
                </a>
              </li>
              <li>
                <a
                  href={`#about`}
                  className="text-white  text-[20px] font-helvetica"
                >
                  Claim
                </a>
              </li>
              <li>
                <a
                  href={`#about`}
                  className="text-white text-[20px] font-helvetica"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="ml-5">
          <button className=" w-full py-3 px-5 text-white border bg-opacity-15  border-[#E5B50A] font-helvetica text-[20px] rounded-lg gap-2">
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
