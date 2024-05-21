interface TimeAtomicBlockProps {
  title: string;
  value: Number;
}

const TimeAtomicBlock: React.FC<TimeAtomicBlockProps> = ({ title, value }) => {
  return (
    <div className="relative mx-[5.42px]">
      <div className="absolute -top-4 right-0 font-shareTech text-white text-[85.29px]">
        {value.toString()}
      </div>
      <div className="rounded-md w-[100.28px] h-[42.37px] bg-[#F7A039]"></div>
      <div className="absolute left-[50%] top-[45%] ">
        <div
          className="flex justify-between relative left-[-50%] 
                 w-[111.12px] h-[10.84px] border-white"
        >
          <div className="rounded-full bg-[#24475B] w-[10.84px] h-[10.84px]"></div>
          <div className="m-auto relative bg-[#24475B] w-[94.86px] h-[2.71px]"></div>
          <div className="rounded-full bg-[#24475B] w-[10.84px] h-[10.84px]"></div>

          <div className="rounded-full bg-[#0D5239] absolute left-[10.84px] top-0  w-[2.71px] h-[2.71px] "></div>
          <div className="rounded-full bg-[#0D5239] absolute right-[10.84px] top-0  w-[2.71px] h-[2.71px] "></div>
          <div className="rounded-full bg-[#0D5239] absolute right-[10.84px] bottom-0  w-[2.71px] h-[2.71px] "></div>
          <div className="rounded-full bg-[#0D5239] absolute left-[10.84px] bottom-0  w-[2.71px] h-[2.71px] "></div>
        </div>
      </div>
      <div className="rounded-md w-[100.28px] h-[42.37px] bg-[#F7A039]"></div>
      <div className="text-center absolute -bottom-7 left-[50%]  font-shareTech text-[15.66px] text-white">
        <p className="relative -left-[50%]">{title}</p>
      </div>
    </div>
  );
};

export default TimeAtomicBlock;
