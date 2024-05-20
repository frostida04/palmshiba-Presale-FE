const HowToBuy = () => {
  return (
    <section className="mt-[200px] px-20">
      <h2 className="text-center mb-[100px] font-holtwood text-[40px] text-white">
        How to <span className="text-[#F7A039]">BUY</span> PALMSHIBA
      </h2>
      <div className="lg:flex grid justify-between">
        <div className="my-10 lg:my-0 lg:mx-2 md:w-2/3 mx-auto lg:w-1/3 h-[300px] font-helvetica relative rounded-md bg-[#0D0B33] p-7">
          <div className="w-[115px] h-[97px] -top-[20%] right-0 absolute bg-[#141746] rounded-xl border border-white">
            <img
              src="images/howto_1.png"
              className="w-[68px] h-[68px] mt-[10px] mx-auto"
            />
          </div>
          <p className="text-[#F04C25] text-[22px]">
            STEP 1. <br />
            Set Up Your Wallet
          </p>
          <p className="text-white text-[20px]">
            Find the presale widget at the top of this web page and connect your
            preferred wallet. There are various options to choose from.
          </p>
        </div>
        <div className="my-10 lg:my-0 lg:mx-2 md:w-2/3 mx-auto  lg:w-1/3 h-[300px] font-helvetica relative rounded-md bg-[#0D0B33] p-7">
          <div className="w-[115px] h-[97px] -top-[20%] right-0 absolute bg-[#141746] rounded-xl border border-white">
            <img
              src="images/howto_21.png"
              className="w-[46.23px] h-[46.23px] absolute left-2 top-3"
            />
            <img
              src="images/howto_22.png"
              className="w-[79.11px] h-[85.34px] absolute -right-3 -top-2"
            />
            <img
              src="images/howto_23.png"
              className="w-[64px] h-[64px] absolute left-7 bottom-0"
            />
          </div>
          <p className="text-[#F04C25] text-[22px]">
            Step 2 <br />
            Select Network
          </p>
          <p className="text-white text-[20px]">
            Once connected, you can participate in the presale on Ethereum or
            BNB Chain. PALMSHIBA is multichain right from the start!
          </p>
        </div>
        <div className="my-10 lg:my-0 lg:mx-2 md:w-2/3 mx-auto  lg:w-1/3 h-[300px] font-helvetica relative rounded-md bg-[#0D0B33] p-7">
          <div className="w-[115px] h-[97px] -top-[20%] right-0 absolute bg-[#141746] rounded-xl border border-white">
            <img
              src="images/howto_3.png"
              className="w-[68px] h-[68px] mt-[10px] mx-auto"
            />
          </div>
          <p className="text-[#F04C25] text-[22px]">
            Step 3 <br /> Buy Tokens
          </p>
          <p className="text-white text-[20px]">
            Enter the amount of ETH, BNB, USDT or USDC. you wish to swap for
            $pshiba and confirm the transaction in your wallet.
          </p>
        </div>
      </div>

      <div className="lg:flex grid justify-between mt-[100px]">
        <div className="my-10 lg:my-0 lg:mx-2 md:w-2/3 mx-auto lg:w-1/3 h-[300px] font-helvetica relative rounded-md bg-[#0D0B33] p-7">
          <div className="w-[115px] h-[97px] -top-[20%] right-0 absolute bg-[#141746] rounded-xl border border-white">
            <img
              src="images/howto_1.png"
              className="w-[68px] h-[68px] mt-[10px] mx-auto"
            />
          </div>
          <p className="text-[#F04C25] text-[22px]">
            STEP 4. <br />
            Claim on Chain
          </p>
          <p className="text-white text-[20px]">
            Once the presale concludes, you will be able to claim your $pshiba
            tokens using the same wallet and chain you used to buy.
          </p>
        </div>
        <div className="my-10 lg:my-0 lg:mx-2 md:w-2/3 mx-auto  lg:w-1/3 h-[300px] font-helvetica relative rounded-md bg-[#0D0B33] p-7">
          <div className="w-[115px] h-[97px] -top-[20%] right-0 absolute bg-[#141746] rounded-xl border border-white">
            <img
              src="images/howto_21.png"
              className="w-[46.23px] h-[46.23px] absolute left-2 top-3"
            />
            <img
              src="images/howto_22.png"
              className="w-[79.11px] h-[85.34px] absolute -right-3 -top-2"
            />
            <img
              src="images/howto_23.png"
              className="w-[64px] h-[64px] absolute left-7 bottom-0"
            />
          </div>
          <p className="text-[#F04C25] text-[22px]">
            Step 5 <br />
            Bridge or Trade
          </p>
          <p className="text-white text-[20px]">
            $pshiba will be tradable on all major chains and DEXs. Simply use
            the PALMSHIBA Bridge to easily switch tokens between chains.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
