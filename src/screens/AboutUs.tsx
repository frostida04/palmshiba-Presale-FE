const AboutUs = () => {
  return (
    <section className="mt-[100px] px-5 md:px-20">
      <h2 className="text-center mb-[100px] font-holtwood text-[40px] text-[#F04C25]">
        ABOUT US
      </h2>
      <div className="grid md:flex justify-between w-full">
        <div className="mx-auto w-[370px] h-[370px] relative">
          <img
            src="images/leaves.png"
            className="absolute bottom-[30%] left-[5%]"
            alt="leaves image"
          />
          <img src="images/shiba.png " className="absolute" alt="shiba image" />
        </div>
        <div className="md:w-[50%]">
          <h3 className="font-holtwood mb-[30px] text-white text-[40px] text-left">
            MEET PALMSHIBA
          </h3>
          <div className="text-white text-justify font-helvetica text-[24px]">
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
