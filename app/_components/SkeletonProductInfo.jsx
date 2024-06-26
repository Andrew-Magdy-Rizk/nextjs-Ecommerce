import React from 'react'

function SkeletonProductInfo() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 mx-auto'>
      <div className="py-5 px-5">
      <div>
      <div
        className="lg:mt-[80px] xl:mt-[60px] bg-slate-200 animate-pulse mx-auto w-[80%] h-[400px] rounded-lg mb-[24px]" />
      </div>
    <div className='grid grid-cols-4 gap-4'>
      <div className="bg-slate-200 rounded-xl animate-pulse xl:w-[140px] xl:h-[140px] lg:w-[100px] lg:h-[100px] md:w-[170px] md:h-[170px] w-[65px] h-[65px] mx-auto"></div>
      <div className="bg-slate-200 rounded-xl animate-pulse xl:w-[140px] xl:h-[140px] lg:w-[100px] lg:h-[100px] md:w-[170px] md:h-[170px] w-[65px] h-[65px] mx-auto"></div>
      <div className="bg-slate-200 rounded-xl animate-pulse xl:w-[140px] xl:h-[140px] lg:w-[100px] lg:h-[100px] md:w-[170px] md:h-[170px] w-[65px] h-[65px] mx-auto"></div>
      <div className="bg-slate-200 rounded-xl animate-pulse xl:w-[140px] xl:h-[140px] lg:w-[100px] lg:h-[100px] md:w-[170px] md:h-[170px] w-[65px] h-[65px] mx-auto"></div>
    </div>
  </div>
  <div className='pt-8 w-full max-lg:max-w-[608px] lg:pl-8 xl:pl-16 max-lg:mx-auto max-lg:mt-8'>
    <div className='mb-6 gap-6 flex justify-between items-center'>
      <div className=''>
      <div className='md:w-[250px] w-[180px] h-[36px] bg-slate-200 rounded-xl animate-pulse'></div>
      <div className='md:w-[150px] w-[120px] h-[26px] mt-5 bg-slate-200 rounded-xl animate-pulse'></div>
      </div>
      <div className='w-[60px] h-[60px] mr-5 rounded-full bg-slate-200 animate-pulse'></div>
    </div>
    <div className='mb-8 w-[60%] h-[30px] bg-slate-200 rounded-xl animate-pulse'></div>
    <div className='w-[250px] h-[36px] bg-slate-200 rounded-xl animate-pulse'></div>
    <div className='mb-10 mt-3 w-full h-[170px] bg-slate-200 rounded-xl animate-pulse'></div>
    <div className='mb-10 w-[300px] h-[80px] bg-slate-200 rounded-xl animate-pulse'></div>
    <div className='mb-8 sm:flex justify-between gap-3'>
      <div className='sm:w-[250px] w-full mb-3 sm:mb-0 mx-auto h-[50px] bg-slate-200 rounded-full animate-pulse'></div>
      <div className='sm:w-[300px] w-full mx-auto h-[50px] bg-slate-200 rounded-full animate-pulse'></div>
    </div>
    <div className='mb-10 w-full h-[60px] bg-slate-200 rounded-full animate-pulse'></div>
  </div>
  </div>
  )
}

export default SkeletonProductInfo;