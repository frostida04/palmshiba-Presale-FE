import { useEffect } from "react";

import Grid from "../components/Grid";
import TimeBlock from "../components/TimeBlock";
import ShibaBlock from "../components/ShibaBlock";

// import { toast } from "react-toastify";
// import Notification from "../components/Notification";

import { ToastContainer } from "react-toastify";

const Hero = () => {
  useEffect(() => {}, []);

  return (
    <section className="bg-[#04011C] mt-[300px] sm:mt-[300px] lg:mt-[50px] xl:mt-[50px] md:mt-[300px]">
      <div className=" grid grid-cols-1  md:grid-cols-2 px-0 md:px-20 lg:py-[10%] p-4 gap-20 md:gap-0 max-w-full">
        <Grid
          className="z-1 bg-[#141746] sm:w-full md:w-[600px] w-full  rounded-[45px] border-[9px] border-[#1B0C3D] justify-center items-center"
          data-aos="fade-down"
          data-aos-easing="ease-in"
        >
          <Grid className=" shadow-md gap-6 py-8">
            <Grid className="items-center gap-4 px-4">
              <h2 className="text-[40px] font-holtwood font-bold text-white">
                BUY <span className="text-[#F7A039]">PALSHIBA</span>
              </h2>
              <p className="text-white font-shareTech text-[25.24px]">
                TIME REMAINING
              </p>
            </Grid>

            <TimeBlock />

            <button className="bg-[#0D0B33] h-[53px] tracking-wider font-shareTech text-[20px] w-full rounded-lg font-normal text-white">
              Connect Wallet
            </button>
            <button className="bg-[#0D0B33] h-[53px] tracking-wider  font-shareTech text-[20px] w-full rounded-lg font-normal text-white">
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
