const Gallery = () => {
  return (
    <section className="mt-[100px] px-20">
      <h2 className="text-center mb-[100px] font-holtwood text-[40px] text-[#E1931E]">
        GALLERY
      </h2>
      <div className="">
        <div className="flex h-[416px] mb-[30px]">
          <img
            src="images/gal_1.png"
            alt="gal_1"
            className="w-1/3 rounded-2xl mr-[30px]"
          />
          <img
            src="images/gal_2.jpg"
            alt="gal_1"
            className="w-2/3 rounded-2xl"
          />
        </div>
        <div className="flex h-[416px]">
          <img
            src="images/gal_3.png"
            alt="gal_3"
            className="w-2/3 rounded-2xl mr-[30px]"
          />
          <img
            src="images/gal_4.jpg"
            alt="gal_4"
            className="w-1/3 rounded-2xl "
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
