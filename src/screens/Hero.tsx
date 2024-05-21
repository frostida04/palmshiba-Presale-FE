import { useEffect, useState } from "react";

import Grid from "../components/Grid";
import ShibaBlock from "../components/ShibaBlock";
import TimeAtomicBlock from "../components/TimeAtomicBlock";

import { toast } from "react-toastify";
import Notification from "../components/Notification";

import { ToastContainer } from "react-toastify";
import { useAccount, useBalance } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import Web3 from "web3";
import { ethers } from "ethers";

///////////////      RPC URLs     ///////////////
const ETHEREUM_RPC_URL = "wss://ethereum-rpc.publicnode.com";
const BINANCE_RPC_URL = "https://bsc-rpc.publicnode.com";

/////////////// Token contract constants   ///////////////////////
import BINANCE_TOKEN_CONTRACT_ABI from "../utils/binanceABI.json";
import ETHEREUM_TOKEN_CONTRACT_ABI from "../utils/ethereumABI.json";

// const BINANCE_TOKEN_CONTRACT_ADDRESS = "0xF6a43c94C28cb98f06D86F174b3A7d337c4A3436"; //Test
const ETHEREUM_TOKEN_CONTRACT_ADDRESS =
  "0xBA0029C20FDF1b2dD1Cb5c6aF51E1dEa3D5ae8A1";
const BINANCE_TOKEN_CONTRACT_ADDRESS =
  "0xb222719234E8F63cf067Cdc00b2024E0f61431D2"; //REAL

//USDT token address
const USDT_ADDRESS_ON_ETHEREUM = "0xdac17f958d2ee523a2206206994597c13d831ec7";
const USDT_ADDRESS_ON_BINANCE = "0x55d398326f99059ff775485246999027b3197955";

const Hero = () => {
  /////////////// State & variables       ////////////////////////////
  const [isBuyWithOpened, setIsBuyWithOpened] = useState<boolean>(false);
  const [selectedBuyMethod, setSelectedBuyMethod] = useState<string>("USDT");
  const [buyAmount, setBuyAmount] = useState<string>("");
  const [receiveAmount, setReceiveAmount] = useState<Number>(0.0);
  const [connectedNetworkName, setConnectedNetworkName] =
    useState<string>("None");

  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [shibaPrice, setShibaPrice] = useState<Number>(0.0);
  const [totalCap, setTotalCap] = useState<Number>(0.0);
  const [ethPrice, setEthPrice] = useState<Number>(0.0);
  const [bnbPrice, setBnbPrice] = useState<Number>(0.0);
  const [hasPresaleStarted, setHasPresaleStarted] = useState<Boolean>(false);
  const [timeRemained, setTimeRemained] = useState<Number>(0);
  const [daysRemained, setDaysRemained] = useState<Number>(0);
  const [hoursRemained, setHoursRemained] = useState<Number>(0);
  const [minutesRemained, setMinutesRemained] = useState<Number>(0);
  const [secondsRemained, setSecondRemained] = useState<Number>(0);

  ///////////////  hook                   /////////////////////////////
  const { open } = useWeb3Modal();
  const { address, isConnected, chainId } = useAccount();
  const balance = useBalance({
    address: address,
  });

  const usdtBalance = useBalance({
    address: address,
    token:
      connectedNetworkName === "ETHEREUM"
        ? USDT_ADDRESS_ON_ETHEREUM
        : USDT_ADDRESS_ON_BINANCE,
  });

  ///////////////   helper functions      ////////////////////////////
  const myRound = (valueToBeRounded: any): any => {
    let tmpVal = Math.round(parseFloat(valueToBeRounded) * 10 ** 4);
    return tmpVal / 10 ** 4;
  };

  const getETHPrice = async () => {
    if (web3 === null || web3 === undefined) return -1;
    try {
      const uniswapPairAddress = "0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852";
      // Connect to Ethereum
      const provider = new ethers.WebSocketProvider(ETHEREUM_RPC_URL);

      // Load Uniswap's ETH/USDT pair contract
      const uniswapPairContract = new ethers.Contract(
        uniswapPairAddress,
        [
          "function getReserves() view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)",
        ],
        provider
      );

      // Get reserves (in this case, ETH and USDT reserves)
      const reserves = await uniswapPairContract.getReserves();
      const reserveETH = reserves.reserve0;
      const reserveUSDT = reserves.reserve1;

      // Calculate ETH price in terms of USDT
      const ethPriceInUSDT = (reserveUSDT * ethers.WeiPerEther) / reserveETH;
      setEthPrice(Number(ethPriceInUSDT) / 10 ** 6);
    } catch (err) {
      console.log(err);
    }
  };

  const getBNBPrice = async () => {
    if (web3 === null || web3 === undefined) return -1;
    try {
      const uniswapPairAddress = "0x1b96b92314c44b159149f7e0303511fb2fc4774f";
      // Connect to Ethereum
      const provider = new ethers.WebSocketProvider(BINANCE_RPC_URL);

      // Load Uniswap's ETH/USDT pair contract
      const uniswapPairContract = new ethers.Contract(
        uniswapPairAddress,
        [
          "function getReserves() view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)",
        ],
        provider
      );

      // Get reserves (in this case, ETH and USDT reserves)
      const reserves = await uniswapPairContract.getReserves();
      const reserveBNB = reserves.reserve0;
      const reserveUSDT = reserves.reserve1;

      // Calculate ETH price in terms of USDT
      const bnbPriceInUSDT = (reserveUSDT * BigInt(10 ** 6)) / reserveBNB;
      setBnbPrice(Number(bnbPriceInUSDT) / 10 ** 6);
    } catch (err) {
      console.log(err);
    }
  };

  ////////////// Core functions      //////////////////////////////
  const calcReceiveAmount = async () => {
    if (!isConnected || (chainId !== 1 && chainId !== 56) || web3 === null)
      return;
    const tmpBuyAmount = parseFloat(buyAmount);
    if (isNaN(tmpBuyAmount) || tmpBuyAmount <= 0) {
      setReceiveAmount(0.0);
      return;
    }
    let contract;
    if (chainId === 1)
      contract = new web3.eth.Contract(
        ETHEREUM_TOKEN_CONTRACT_ABI,
        ETHEREUM_TOKEN_CONTRACT_ADDRESS
      );
    else if (chainId === 56)
      contract = new web3.eth.Contract(
        BINANCE_TOKEN_CONTRACT_ABI,
        BINANCE_TOKEN_CONTRACT_ADDRESS
      );
    const tmpTotalCap = await contract?.methods.totalCap().call();
    setTotalCap(Number(tmpTotalCap));
    let price;
    switch (selectedBuyMethod) {
      case "BSC":
        price = await contract?.methods.getCurrentTokenPrice().call();
        price = Number(price) / 10 ** 4;
        let tmpBnbReceiveAmount = (Number(bnbPrice) * tmpBuyAmount) / price;
        setReceiveAmount(myRound(tmpBnbReceiveAmount));
        break;
      case "ETH":
        price = await contract?.methods.getCurrentTokenPrice().call();
        price = Number(price) / 10 ** 4;
        let tmpEthReceiveAmount = (Number(ethPrice) * tmpBuyAmount) / price;
        setReceiveAmount(myRound(tmpEthReceiveAmount));
        break;
      case "USDT":
        price = await contract?.methods.getCurrentTokenPrice().call();
        price = Number(price) / 10 ** 4;
        let tmpUsdtReceiveAmount = tmpBuyAmount / price;
        setReceiveAmount(myRound(tmpUsdtReceiveAmount));
        break;
    }
    setShibaPrice(Number(price));
  };

  const doBuyTokens = async () => {
    if (!isConnected || (chainId !== 1 && chainId !== 56) || web3 === null)
      return;
    const tmpBuyAmount = parseFloat(buyAmount);
    if (isNaN(tmpBuyAmount) || tmpBuyAmount <= 0) {
      setReceiveAmount(0.0);
      return;
    }
    let contract;
    if (chainId === 1)
      contract = new web3.eth.Contract(
        ETHEREUM_TOKEN_CONTRACT_ABI,
        ETHEREUM_TOKEN_CONTRACT_ADDRESS
      );
    else if (chainId === 56)
      contract = new web3.eth.Contract(
        BINANCE_TOKEN_CONTRACT_ABI,
        BINANCE_TOKEN_CONTRACT_ADDRESS
      );
    switch (selectedBuyMethod) {
      case "BSC":
        contract?.methods
          .buyTokenWithBNB()
          .send({ from: address, value: buyAmount })
          .on("transactionHash", function (hash) {
            toast(
              <Notification
                type={"success"}
                msg={`Successfully Purchased.\n ${hash}`}
              />
            );
          })
          .on("error", function (error) {
            toast(<Notification type={"fails"} msg={`${error}`} />);
          });

        break;
      case "ETH":
        contract?.methods
          .buyTokenWithETH()
          .send({ from: address, value: buyAmount })
          .on("transactionHash", function (hash) {
            toast(
              <Notification
                type={"success"}
                msg={`Successfully Purchased.\n ${hash}`}
              />
            );
          })
          .on("error", function (error) {
            toast(<Notification type={"fails"} msg={`${error}`} />);
          });
        break;
      case "USDT":
        // alert(address + " " + buyAmount + " ");
        contract?.methods
          .buyTokenWithUSDT({ _usdtAmount: BigInt(buyAmount) })
          .send({ from: address, value: buyAmount })
          .on("transactionHash", function (hash) {
            toast(
              <Notification
                type={"success"}
                msg={`Successfully Purchased.\n ${hash}`}
              />
            );
          })
          .on("error", function (error) {
            toast(<Notification type={"fails"} msg={`${error}`} />);
          });
        break;
    }
  };

  const getPresaleStatus = async () => {
    if (!isConnected || (chainId !== 1 && chainId !== 56) || web3 === null)
      return;
    let contract;
    if (chainId === 1)
      contract = new web3.eth.Contract(
        ETHEREUM_TOKEN_CONTRACT_ABI,
        ETHEREUM_TOKEN_CONTRACT_ADDRESS
      );
    else if (chainId === 56)
      contract = new web3.eth.Contract(
        BINANCE_TOKEN_CONTRACT_ABI,
        BINANCE_TOKEN_CONTRACT_ADDRESS
      );
    const tmpStarted = await contract?.methods.presaleStarted().call();
    setHasPresaleStarted(Boolean(tmpStarted));
    if (!tmpStarted) {
      setTimeRemained(0);
      return;
    }
    const tmpTimeRemained = await contract?.methods
      .calculateRemainingTime()
      .call();
    setTimeRemained(Number(tmpTimeRemained));
  };

  /////////////// UI EVENT HANDLE SECTION /////////////////////////////
  const handleBuyWithSelected = (chainName: string) => {
    setSelectedBuyMethod(chainName);
    setBuyAmount("0");
    setReceiveAmount(0);
    switch (chainName) {
      case "BSC":
        break;
      case "ETH":
        break;
      case "USDT":
        break;
    }
    setIsBuyWithOpened(false);
  };

  const getBuyWithMethodImageUrl = () => {
    return "images/" + selectedBuyMethod + ".png";
  };

  const handleBuyWithButtonClicked = () => {
    setIsBuyWithOpened(!isBuyWithOpened);
  };

  const handleBuyAmountChanged = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBuyAmount(e.target.value);
    calcReceiveAmount();
  };

  const handleBuyTokens = () => {
    doBuyTokens();
  };

  /////////// UI helper function ////////////
  const TimeAtomicBlockSepeateComp = () => {
    return (
      <div className="m-auto w-[5.42px] h-[18.97px] flex justify-between flex-col">
        <div className="bg-white w-[5.42px] h-[5.42px] rounded-full"></div>
        <div className="bg-white w-[5.42px] h-[5.42px] rounded-full"></div>
      </div>
    );
  };

  const dispCoreButton = () => {
    if (isConnected) {
      return (selectedBuyMethod === "USDT" &&
        Number(buyAmount) * 10 ** 6 < Number(usdtBalance.data?.value)) ||
        (selectedBuyMethod !== "USDT" &&
          Number(buyAmount) * 10 ** 18 < Number(balance.data?.value)) ? (
        <button
          onClick={() => handleBuyTokens()}
          className=" bg-[#0D0B33] h-[53px] tracking-wider font-shareTech mx-auto sm:mx-0 text-[20px] w-[90%] sm:w-full rounded-lg font-normal text-white"
        >
          Buy Now
        </button>
      ) : (
        <button
          disabled
          className="bg-gray-900 h-[53px] tracking-wider font-shareTech mx-auto sm:mx-0 text-[20px] w-[90%] sm:w-full rounded-lg font-normal text-white"
        >
          Insufficient Amount
        </button>
      );
    } else {
      return (
        <button
          onClick={() => open()}
          className="bg-[#0D0B33] h-[53px] tracking-wider font-shareTech mx-auto sm:mx-0 text-[20px] w-[90%] sm:w-full rounded-lg font-normal text-white"
        >
          Connect Wallet
        </button>
      );
    }
  };

  const dispPresaleStatus = () => {
    if (hasPresaleStarted) return "TIME REMAINING";
    return "HAS NOT STARTED YET";
  };

  const updateCount = () => {
    if (timeRemained === 0) return;
    setTimeRemained(Number(timeRemained) - Number(1));
    setDaysRemained(Number(timeRemained) / (60 * 60 * 24));
    setHoursRemained((Number(timeRemained) % (60 * 60 * 24)) / (60 * 60));
    setMinutesRemained((Number(timeRemained) % (60 * 60)) / 60);
    setSecondRemained(Number(timeRemained) % 60);
  };

  useEffect(() => {
    if (!isConnected) return;
    if (chainId === 1) {
      setConnectedNetworkName("ETHEREUM");
      setWeb3(new Web3(ETHEREUM_RPC_URL));
      setSelectedBuyMethod("ETH");
      getETHPrice();
    } else if (chainId === 56) {
      setConnectedNetworkName("BINANCE");
      setWeb3(new Web3(BINANCE_RPC_URL));
      setSelectedBuyMethod("BSC");
      getBNBPrice();
    }
    setBuyAmount("0.0");
    setReceiveAmount(0.0);
    getPresaleStatus();

    const intervalId = setInterval(updateCount, 1000);

    return () => clearInterval(intervalId);
  }, [isConnected, chainId]);

  useEffect(() => {
    calcReceiveAmount();
  }, [buyAmount]);

  return (
    <section className="mt-[150px] lg:mt-[50px]">
      <div className="flex justify-between px-4 sm:px-15 md:px-20 lg:pt-[10%]">
        <Grid
          className="z-1 bg-[#141746] sm:w-full  lg:w-[600px] w-full md:m-auto lg:m-0 rounded-[45px] border-[9px] border-[#1B0C3D] justify-center items-center"
          // data-aos-easing="ease-in"
          // data-aos="flip-up"
        >
          <Grid className=" shadow-md gap-6 py-8">
            <Grid className="items-center gap-4 px-4">
              <h2 className="text-[35px] sm:text-[40px] text-center text-pretty font-holtwood font-bold text-white">
                BUY{" "}
                <span className="text-[#F7A039] block sm:inline">PALSHIBA</span>
              </h2>
              <p className="text-white font-shareTech text-[25.24px]">
                {dispPresaleStatus()}
              </p>
            </Grid>

            <div>
              <div className="flex justify-center">
                <TimeAtomicBlock title="days" value={daysRemained} />
                <TimeAtomicBlockSepeateComp />
                <TimeAtomicBlock title="hours" value={hoursRemained} />
                <TimeAtomicBlockSepeateComp />
                <TimeAtomicBlock title="minutes" value={minutesRemained} />
                <TimeAtomicBlockSepeateComp />
                <TimeAtomicBlock title="days" value={secondsRemained} />
              </div>
              <div className="pt-7 mt-5 sm:mt-0">
                <div className="sm:flex sm:justify-between grid justify-center">
                  <p className="font-shareTech sm:mx-0 mx-auto my-auto text-white text-[32px]">
                    RAISED:
                  </p>
                  <p className="font-shareTech my-auto text-[#F7A039] text-[24px]">
                    $ {totalCap.toString()}/$2,000,000
                  </p>
                </div>
                <div className="flex justify-between">
                  <div className="sm:block hidden w-[125px] border my-auto border-white"></div>
                  <p className="h-[23px] mx-auto sm:mx-0 text-[#F7A039] font-shareTech text-[20px] text-center">
                    1 BCF = ${shibaPrice.toString()}
                  </p>
                  <div className="sm:block hidden w-[125px] border my-auto border-white"></div>
                </div>
                <div className="mt-7 sm:mt-0 grid sm:flex sm:justify-between">
                  <div className="text-center sm:text-left">
                    <p className="font-shareTech  text-white text-[20px]">
                      Amount you pay
                    </p>
                    <div className="relative flex justify-between mx-auto sm:mx-0 w-[90%] sm:w-[182px] h-[53px] rounded-[8px] bg-[#0D0B33]">
                      <div className="m-auto">
                        <input
                          type="text"
                          value={buyAmount}
                          onChange={(e) => handleBuyAmountChanged(e)}
                          className="text-[#F7A039] pl-3 font-poppins outline-none w-[115px] bg-transparent text-[20px]"
                        />
                      </div>
                      <div className="flex justify-between m-auto">
                        <div className="m-auto h-[34px] w-0 border border-gray-700"></div>
                        <div
                          className="m-auto"
                          onClick={() => handleBuyWithButtonClicked()}
                        >
                          <img
                            src={getBuyWithMethodImageUrl()}
                            className="w-[50px]"
                          />
                        </div>
                      </div>
                      <div
                        className={`${
                          isBuyWithOpened ? "block" : "hidden"
                        } absolute z-20 rounded-md top-[53px] left-0 w-[100%] sm:w-[182px] bg-[#0D0B33] drop-shadow-[2px_3px_3px_rgba(255,255,255,0.55)]`}
                      >
                        <p className="text-white ml-[20px] font-poppins text-[20px]">
                          Buy with
                        </p>
                        <div
                          onClick={() => handleBuyWithSelected("BSC")}
                          className={`${
                            connectedNetworkName === "ETHEREUM"
                              ? "hidden"
                              : "block"
                          } cursor-pointer flex text-left`}
                        >
                          <div className="m-auto w-[38px] h-[38px]">
                            <img
                              src="images/BSC.png"
                              className="w-[38px] h-[38px]"
                            />
                          </div>
                          <p className="pl-[10px] my-auto w-[144px] font-poppins text-white text-[16px]">
                            Binance Token
                          </p>
                        </div>
                        <div
                          onClick={() => handleBuyWithSelected("ETH")}
                          className={`${
                            connectedNetworkName === "BINANCE"
                              ? "hidden"
                              : "block"
                          } cursor-pointer flex text-left`}
                        >
                          <div className="m-auto w-[38px] h-[38px]">
                            <img
                              src="images/ETH.png"
                              className="w-[38px] h-[38px]"
                            />
                          </div>
                          <p className="pl-[10px] my-auto w-[144px] font-poppins text-white text-[16px]">
                            Ethereum
                          </p>
                        </div>
                        <div
                          onClick={() => handleBuyWithSelected("USDT")}
                          className="cursor-pointer flex text-left"
                        >
                          <div className="m-auto w-[38px] h-[38px]">
                            <img
                              src="images/USDT.png"
                              className="w-[37px] h-[37px]"
                            />
                          </div>
                          <p className="pl-[10px] my-auto w-[144px] font-poppins text-white text-[16px]">
                            USDT
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-0 text-center sm:text-left">
                    <p className="font-shareTech text-white text-[20px]">
                      PALMSHIBA you receive
                    </p>
                    <div className="flex justify-between mx-auto sm:mx-0 w-[90%] sm:w-[182px] h-[53px] rounded-[8px] bg-[#0D0B33]">
                      <div className="m-auto">
                        <input
                          type="text"
                          value={receiveAmount.toString()}
                          readOnly={true}
                          className="text-[#F7A039] bg-transparent outline-none w-[115px]  pl-3 font-poppins text-[20px]"
                        />
                      </div>

                      <div className="m-auto">
                        <img
                          src="images/palmshiba_icon.png"
                          className="w-[50px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {dispCoreButton()}

            <button className="bg-[#0D0B33] h-[53px] tracking-wider mx-auto sm:mx-0 font-shareTech text-[20px] w-[90%] sm:w-full rounded-lg font-normal text-white">
              How to buy
            </button>
          </Grid>
        </Grid>
        <ShibaBlock />
      </div>

      <ToastContainer autoClose={3000} style={{ paddingTop: "90px" }} />
    </section>
  );
};

export default Hero;
