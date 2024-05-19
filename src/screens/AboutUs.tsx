const AboutUs = () => {
  return (
    <section className="">
      <h2 className="text-center mb-[100px] font-holtwood text-[40px] text-[#F04C25]">
        ABOUT US
      </h2>
      <div className="flex justify-between w-full">
        <div className="w-[370px] h-[370px] relative">
          <img
            src="images/leaves.png"
            className="absolute bottom-25 left-4"
            alt="leaves image"
          />
          <img src="images/shiba.png " className="absolute" alt="shiba image" />
        </div>
        <div className="w-[50%]">
          <h3 className="font-holtwood mb-[30px] text-white text-[40px] text-left">
            MEET PALMSHIBA
          </h3>
          <div className="text-white font-helvetica text-[24px]">
            Palmshiba is more than a mascot; it's the heart of Palmshiba. A
            symbol of playfulness and loyalty, Palmshiba is a community-driven
            crypto adventure. Dive into a world where memes meet finance, and
            join us as we redefine the crypto experience with Palmshiba charm.
            Prepare for a tail-spinning adventure as you dive into the world of
            Palmshiba. Our fluffy mascot, Palmshiba, is not just a dog; he's the
            alpha of the crypto kennel!
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
