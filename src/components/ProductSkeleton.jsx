import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ProductSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col">
      
      {/* image skeleton */}
      <Skeleton height={200} />

      <div className="mt-4 flex flex-col gap-2">
        {/* title */}
        <Skeleton height={20} width={`80%`} />

        {/* category */}
        <Skeleton height={15} width={`40%`} />

        {/* price */}
        <Skeleton height={20} width={`30%`} />
      </div>
    </div>
  );
}

export default ProductSkeleton;