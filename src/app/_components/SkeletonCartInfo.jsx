import React from 'react'

function SkeletonCartInfo() {
  return (
    <>
    <div
    className="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4 "
  >
    <div className="col-span-12 lg:col-span-2 img box">
      <div
        // src={
        //   product?.attributes?.products?.data[0]?.attributes
        //     ?.product_Image?.data?.attributes?.url
        // }
        className="max-lg:w-full h-[400px] lg:h-[150px] bg-slate-200 animate-pulse rounded-lg lg:w-[180px] "
      />
    </div>
    <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
      <div className="flex items-center justify-between w-full mb-4">
        <h5 className="bg-slate-200 animate-pulse h-[35px] w-[30%] rounded-2xl">
          {/* {
            product?.attributes?.products?.data[0]?.attributes
              ?.product_Name
          } */}
        </h5>
        <div
        //   onClick={() => dispatch(removeFromCart(product))}
          className="bg-slate-200 animate-pulse w-[30px] h-[30px] rounded-full"
        >
        </div>
      </div>
      <p className=" bg-slate-200 animate-pulse w-full h-[56px] rounded-2xl mb-6">
        {/* {
          product?.attributes?.products?.data[0]?.attributes
            ?.product_Description[0]?.children[0].text
        } */}
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="bg-slate-100 animate-pulse rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5">
          </div>
          <div
            className=" bg-slate-200 animate-pulse border border-gray-200 rounded-full w-10 aspect-square py-1.5"
            // placeholder={product?.attributes?.quantity}
          />
          <div className="bg-slate-100 animate-pulse rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5">
          </div>
        </div>
        <h6 className="bg-slate-200 animate-pulse h-[36px] w-[100px] rounded-2xl">
          {/* $
          {
            product?.attributes?.products?.data[0]?.attributes
              ?.product_Price
          } */}
        </h6>
      </div>
    </div>
  </div>
    <div
    className="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4 "
  >
    <div className="col-span-12 lg:col-span-2 img box">
      <div
        // src={
        //   product?.attributes?.products?.data[0]?.attributes
        //     ?.product_Image?.data?.attributes?.url
        // }
        className="max-lg:w-full h-[400px] lg:h-[150px] bg-slate-200 animate-pulse rounded-lg lg:w-[180px] "
      />
    </div>
    <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
      <div className="flex items-center justify-between w-full mb-4">
        <h5 className="bg-slate-200 animate-pulse h-[35px] w-[30%] rounded-2xl">
          {/* {
            product?.attributes?.products?.data[0]?.attributes
              ?.product_Name
          } */}
        </h5>
        <div
        //   onClick={() => dispatch(removeFromCart(product))}
          className="bg-slate-200 animate-pulse w-[30px] h-[30px] rounded-full"
        >
        </div>
      </div>
      <p className=" bg-slate-200 animate-pulse w-full h-[56px] rounded-2xl mb-6">
        {/* {
          product?.attributes?.products?.data[0]?.attributes
            ?.product_Description[0]?.children[0].text
        } */}
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="bg-slate-100 animate-pulse rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5">
          </div>
          <div
            className=" bg-slate-200 animate-pulse border border-gray-200 rounded-full w-10 aspect-square py-1.5"
            // placeholder={product?.attributes?.quantity}
          />
          <div className="bg-slate-100 animate-pulse rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5">
          </div>
        </div>
        <h6 className="bg-slate-200 animate-pulse h-[36px] w-[100px] rounded-2xl">
          {/* $
          {
            product?.attributes?.products?.data[0]?.attributes
              ?.product_Price
          } */}
        </h6>
      </div>
    </div>
  </div>
    <div
    className="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4 "
  >
    <div className="col-span-12 lg:col-span-2 img box">
      <div
        // src={
        //   product?.attributes?.products?.data[0]?.attributes
        //     ?.product_Image?.data?.attributes?.url
        // }
        className="max-lg:w-full h-[400px] lg:h-[150px] bg-slate-200 animate-pulse rounded-lg lg:w-[180px] "
      />
    </div>
    <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
      <div className="flex items-center justify-between w-full mb-4">
        <h5 className="bg-slate-200 animate-pulse h-[35px] w-[30%] rounded-2xl">
          {/* {
            product?.attributes?.products?.data[0]?.attributes
              ?.product_Name
          } */}
        </h5>
        <div
        //   onClick={() => dispatch(removeFromCart(product))}
          className="bg-slate-200 animate-pulse w-[30px] h-[30px] rounded-full"
        >
        </div>
      </div>
      <p className=" bg-slate-200 animate-pulse w-full h-[56px] rounded-2xl mb-6">
        {/* {
          product?.attributes?.products?.data[0]?.attributes
            ?.product_Description[0]?.children[0].text
        } */}
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="bg-slate-100 animate-pulse rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5">
          </div>
          <div
            className=" bg-slate-200 animate-pulse border border-gray-200 rounded-full w-10 aspect-square py-1.5"
            // placeholder={product?.attributes?.quantity}
          />
          <div className="bg-slate-100 animate-pulse rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5">
          </div>
        </div>
        <h6 className="bg-slate-200 animate-pulse h-[36px] w-[100px] rounded-2xl">
          {/* $
          {
            product?.attributes?.products?.data[0]?.attributes
              ?.product_Price
          } */}
        </h6>
      </div>
    </div>
  </div>
    </>
  )
}

export default SkeletonCartInfo