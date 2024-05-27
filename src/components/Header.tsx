import { useEffect, useState } from "react";
import Logo from "./Logo";

const Header = () => {
  const [stickyMenu, setStickyMenu] = useState(false);
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  //const pathUrl = "/"

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    if (stickyMenu) setStickyMenu(true);
  });

  return (
    <header
      className={`fixed left-0 top-0 z-999  h-32 md:h-auto w-full py-4 px-[10px] sm:px-[80px] bg-[#04011C] shadow-lg transition duration-100 rounded-sm`}
      data-aos="fade-down"
    >
      <div className="w-full max-w-full items-center justify-between lg:justify-between lg:items-center flex">
        <div className="flex py-5 items-center">
          <Logo />
        </div>

        <div className={`w-full lg:block hidden py-5 text-center }`}>
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
                  href={`#howtobuy`}
                  className="text-white text-[20px] font-helvetica"
                >
                  How to buy
                </a>
              </li>
              <li>
                <a
                  href={`#claim`}
                  className="text-white  text-[20px] font-helvetica"
                >
                  Claim
                </a>
              </li>
              <li>
                <a
                  href={`#faq`}
                  className="text-white text-[20px] font-helvetica"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute right-0  bg-[#04011C]   z-9999 top-32 md:top-25 lg:hidden   w-[100%]  py-5 text-center }`}
        >
          <nav>
            <ul className="items-centerjustify-center  gap-10">
              <li className="mb-3">
                <a
                  href={`#about`}
                  className="text-white text-[20px] font-helvetica"
                >
                  About
                </a>
              </li>
              <li className="my-3">
                <a
                  href={`#howtobuy`}
                  className="text-white text-[20px] font-helvetica"
                >
                  How to buy
                </a>
              </li>
              <li className="my-3">
                <a
                  href={`#claim`}
                  className="text-white  text-[20px] font-helvetica"
                >
                  Claim
                </a>
              </li>
              <li className="my-3">
                <a
                  href={`#faq`}
                  className="text-white text-[20px] font-helvetica"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="hidden m-auto md:block">
          <w3m-button />
        </div>
        <div className="lg:hidden m-auto md:static right-10 top-10">
          <button
            onClick={() => handleOpen()}
            type="button"
            className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            <svg className="h-10 w-10 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
