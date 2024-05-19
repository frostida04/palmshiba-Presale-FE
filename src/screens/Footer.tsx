import Grid from "../components/Grid";

const Footer = () => {
  return (
    <Grid className="mt-[100px] px-20">
      <div className="relative m-auto">
        <div
          id="outlined-text"
          className="font-axiforma font-semibold absolute right-0 text-[72px]  text-shadow shadow-[#1EE0E1]"
        >
          Get in Touch
        </div>
        <div className="font-axiforma  relative bottom-[3px] right-[3px] font-semibold text-[72px] text-white">
          Get in Touch
        </div>
      </div>
      <div className="w-[629.74px] flex mx-auto mt-[30px]">
        <button className="w-[125.89px] text-white text-[72px] font-bold m-auto bg-gradient-to-r h-[125.89px] rounded-full from-[#F56717] to-[#862D07]">
          f
        </button>
        <button className="w-[125.89px] text-white text-[72px] font-bold m-auto bg-gradient-to-r h-[125.89px] rounded-full from-[#F56717] to-[#862D07]">
          in
        </button>
        <button className="w-[125.89px] m-auto bg-gradient-to-r h-[125.89px] rounded-full from-[#F56717] to-[#862D07]"></button>
        <button className="w-[125.89px] m-auto bg-gradient-to-r h-[125.89px] rounded-full from-[#F56717] to-[#862D07]"></button>
      </div>
      <div className="relative mt-[100px] mb-[150px] w-full h-[95px] border-t-2 border-t-white border-opacity-20">
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
