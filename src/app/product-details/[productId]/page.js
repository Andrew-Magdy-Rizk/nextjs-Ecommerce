"use client";
import React from "react";
import BreakCrumbs from "../../_components/BreakCrumbs";
import ProductInfo from "../../_components/ProductInfo";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
function ProductDetails({ params }) {
  const pathName = usePathname();
  const modeState = useSelector((state) => state.mode);
  return (
    <div className={modeState && "dark"}>
      <div className="lg:px-20 py-5 px-5 sm:px-10 dark:bg-[#171717]">
        <BreakCrumbs path={pathName} />
        <ProductInfo productId={params.productId} />
      </div>
    </div>
  );
}

export default ProductDetails;
