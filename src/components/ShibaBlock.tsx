const ShibaBlock = () => {
  return (
    <div
      className="relative max-w-[600px] h-[500px] hidden lg:block"
      data-aos=""
    >
      <div className="w-[370px] right-0 h-[370px] bg-[#1B0C3D] rounded-full absolute">
        <img
          src="images/leaves.png"
          className="absolute bottom-25 left-4"
          alt="leaves image"
        />
        <img src="images/shiba.png " className="absolute" alt="shiba image" />
      </div>
    </div>
  );
};

export default ShibaBlock;
