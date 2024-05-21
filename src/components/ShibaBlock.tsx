const ShibaBlock = () => {
  return (
    <div
      className="relative right-[50px] w-[600px] h-[500px] hidden lg:block"
      data-aos="fade-left"
    >
      <div className="w-[370px] right-0 h-[370px] bg-[#1B0C3D] rounded-full absolute">
        <img
          src="images/leaves.png"
          className="absolute bottom-25 left-4"
          alt="leaves image"
        />
        <img src="images/shiba.png " className="absolute" alt="shiba image" />
      </div>
      <img
        src="images/shiba_footprintf_filled.png"
        className="absolute rotate-[-8.3deg] w-[122.54px] opacity-[25%] h-[122.54px] top-[0px] left-0"
      />
    </div>
  );
};

export default ShibaBlock;
