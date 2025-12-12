import Loading from "./Loading";

const Skeleton = ({ className }) => (
  <div className={`animate-pulse bg-gray-400 rounded ${className}`} />
);

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[999999999999] flex items-center justify-center bg-white">
      
      <div className="absolute inset-0 flex flex-col items-center px-6 py-10 gap-6 opacity-50 overflow-y-auto">
        <Skeleton className="w-full max-w-2xl h-64 rounded-xl" />
        <Skeleton className="w-56 h-8 mt-4 mr-auto md:mx-auto" />
        <div className="flex flex-col gap-3 w-full max-w-2xl mr-auto md:mx-auto">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-11/12" />
        </div>
        <Skeleton className="w-64 h-7 mt-6 mr-auto md:mx-auto" />
        <div className="flex flex-col gap-3 w-full max-w-2xl mr-auto md:mx-auto">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-11/12" />
          <Skeleton className="h-4 w-10/12" />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
