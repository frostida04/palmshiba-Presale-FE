import { useEffect, useState } from "react";
import Logo from "./Logo";

import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";

const Header = () => {
  const [stickyMenu, setStickyMenu] = useState(false);
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const { open } = useWeb3Modal();

  const account = useAccount();

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

  const handleConnectButtonClick = () => {
    open();
  };

  const dispHeroButton = () => {
    switch (account.status) {
      case "connecting":
        return (
          <svg className="h-6 w-6 animate-spin m-auto" viewBox="0 0 100 100">
            <circle
              fill="none"
              stroke-width="10"
              className="stroke-current opacity-40"
              cx="50"
              cy="50"
              r="40"
            />
            <circle
              fill="none"
              stroke-width="10"
              className="stroke-current"
              stroke-dasharray="250"
              stroke-dashoffset="210"
              cx="50"
              cy="50"
              r="40"
            />
          </svg>
        );
      case "disconnected":
        return "Wallet Connect";
      case "connected":
        return (
          account.address.substring(0, 5) +
          "..." +
          account.address.substring(
            account.address.length - 5,
            account.address.length
          )
        );
    }
  };

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
          } absolute right-0  bg-[#04011C]  z-9999 top-32 md:top-25 lg:hidden   w-[100%]  py-5 text-center }`}
        >
          <nav>
            <ul className="items-centerjustify-center font-holtwood  gap-10">
              <li className="mb-3">
                <a
                  href={`#about`}
                  className="text-white text-[20px] tracking-widest"
                >
                  About
                </a>
              </li>
              <li className="my-3">
                <a
                  href={`#howtobuy`}
                  className="text-white text-[20px] tracking-widest"
                >
                  How to buy
                </a>
              </li>
              <li className="my-3">
                <a
                  href={`#claim`}
                  className="text-white  text-[20px] tracking-widest"
                >
                  Claim
                </a>
              </li>
              <li className="my-3">
                <a
                  href={`#faq`}
                  className="text-white text-[20px] tracking-widest"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="hidden m-auto md:block rounded-lg p-[1.5px] bg-gradient-to-br from-[#E5B50A] to-[#FF17BD]">
          <button
            className={`font-helvetica ${
              account.status === "connecting" ? " flex justify-center " : " "
            } text-center rounded-[calc(0.5rem-1.5px)]  bg-slate-950 bg-opacity-90   text-[20px] w-[224px] h-[54px] text-white cursor-pointer`}
            onClick={() => handleConnectButtonClick()}
          >
            {dispHeroButton()}
            {account.status === "connecting" ? (
              <p className="m-auto">Connecting</p>
            ) : (
              ""
            )}
          </button>
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
