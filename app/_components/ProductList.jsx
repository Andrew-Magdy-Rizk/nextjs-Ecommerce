import { TbCategory2 } from "react-icons/tb";
import { useSelector } from 'react-redux';
import Image from 'next/image';
import Link from "next/link";

function ProductList() {
  const state = useSelector((state) => state.products);
  return (
      // <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
      // {state.map(product => <div  key={product.id}>
      //   <Link href={`/product-details/${product.id}`}>
      //   <div className="hover:border border-primary cursor-pointer rounded p-1 hover:shadow-md" >
      //   <Image className="object-cover w-full h-[350px] rounded-t-lg" src={product?.attributes?.product_Image?.data?.attributes?.url} alt='product' width={350} height={400} />
      //   <div className="p-3 flex items-center justify-between bg-gray-100 rounded-b-lg">
      //     <div>
      //     <h1 className="text-2xl font-medium line-clamp-1">
      //   {product?.attributes?.product_Name}
      //   </h1>
      //   <p className="flex items-center gap-1 text-stone-500 uppercase text-sm">
      //   <TbCategory2/>
      //   {product?.attributes?.product_Category}
      //   </p>
      //     </div>
      //     <div>
      //       <h2 className="font-bold text-secondary">${product?.attributes?.product_Price}</h2>
      //     </div>
      //   </div>
      //   </div>
      //   </Link>
      //   </div>)}
      // </div>
  <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
    {state.map((product) => (
    <div key={product.id} className="bg-white rounded-lg mx-auto transition-all duration-500 overflow-hidden shadow-lg ring-4 ring-secondary hover:shadow-xl hover:ring-primary ring-opacity-40 max-w-sm">
    <div className="relative">
        <Image className="object-cover w-full h-[300px] rounded-t-lg" src={product?.attributes?.product_Image?.data?.attributes?.url} alt='product' width={350} height={400}/>
        <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE
        </div>
    </div>
    <div className="p-4 dark:bg-[#171717]">
        <h3 className="text-lg font-medium mb-2 dark:text-white">{product?.attributes?.product_Name}</h3>
        <p className="text-gray-400 uppercase font-bold text-sm mb-4 dark:text-neutral-300">{product?.attributes?.product_Category}</p>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2 dark:text-neutral-300">{product?.attributes?.product_Description[0].children[0].text}</p>
        <div className="flex items-center justify-between">
            <span className="font-bold text-lg dark:text-white">${product?.attributes?.product_Price}</span>
            <Link href={`/product-details/${product.id}`} className="transition-all duration-500 bg-primary hover:bg-secondary text-black font-bold py-2 px-4 rounded">
                Details
            </Link>
        </div>
    </div>
    </div>
    ))}
    </div>
  )
}

export default ProductList