import Grid from "../components/Grid";

const Footer = () => {
  return (
    <Grid
      className="mt-[100px] lg:px-20 z-10"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <div className="relative m-auto">
        <div
          id="outlined-text"
          className="text-center font-axiforma font-semibold absolute right-0 text-[72px]  text-shadow shadow-[#1EE0E1]"
        >
          Get in Touch
        </div>
        <div className="text-center font-axiforma  relative bottom-[3px] right-[3px] font-semibold text-[72px] text-white">
          Get in Touch
        </div>
      </div>
      <div className="gird md:flex mx-auto mt-[30px]">
        <div className="md:my-0 my-[20px]">
          <button className="mx-[20px] w-[125.89px] text-white text-[72px] font-bold bg-gradient-to-r h-[125.89px] rounded-full from-[#F56717] to-[#862D07]">
            f
          </button>
          <button className="mx-[20px] w-[125.89px] text-white text-[72px] font-bold bg-gradient-to-r h-[125.89px] rounded-full from-[#F56717] to-[#862D07]">
            in
          </button>
        </div>
        <div className="flex md:mt-0 mt-[20px]">
          <div className="w-[125.89px] cursor-pointer  mx-[20px] bg-gradient-to-r h-[125.89px] rounded-full from-[#F56717] to-[#862D07]">
            <img
              src="images/touch_1.PNG"
              className="w-[70%] mt-[30px] mx-auto"
            />
          </div>
          <div className="w-[125.89px] mx-[20px] bg-gradient-to-r h-[125.89px] rounded-full from-[#F56717] to-[#862D07]">
            <img
              src="images/touch_2.PNG"
              className="w-[70%] mt-[30px] mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="relative mt-[300px] lg:mt-[100px] mb-[150px] w-full h-[95px] border-t-2 border-t-white border-opacity-20">
        <p className="text-white text-[20px] font-helvetica absolute bottom-0">
          Copyright © 2024 PALMSHIBA. All Rights Reserved
        </p>
        <img
          src="images/shiba.png"
          className="absolute right-0 -top-[227px] w-[227px]"
        />
      </div>
    </Grid>
  );
};

export default Footer;
