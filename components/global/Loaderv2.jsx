const Loaderv2 = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#00000015] backdrop-blur-[12px]">
      <div className="relative size-16">
        <div
          className="absolute inset-0 rounded-full border-4 border-transparent 
                       border-t-[#1A2B6D] border-r-[#1A2B6D]
                       animate-spin"
        ></div>
      </div>
    </div>
  );
};

export default Loaderv2;
