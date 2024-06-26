import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';

function Cart() {
    const Cartstate = useSelector((state) => state.cart );
  return (
    <div className='h-[350px] md:w-[300px] w-[250px]  bg-gray-100 z-10 rounded-md border shadow-sm absolute mx-10 right-10 top-12 p-5 overflow-auto'>
  <div className="mt-4 space-y-6">
    <ul className="space-y-4">
        {Cartstate.map((product) => (
      <li key={product.id} className="flex items-center gap-4">
        <Image
          src={product?.attributes?.products?.data[0]?.attributes?.product_Image?.data?.attributes?.url} width={100} height={100}
          alt="product"
          className="size-16 rounded object-cover"
        />

        <div>
          <h3 className="text-sm text-gray-900">{product?.attributes?.products?.data[0]?.attributes?.product_Name}</h3>

          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
            <div>
              <dt className="inline">Catrgory: </dt>
              <dd className="inline">{product?.attributes?.products?.data[0]?.attributes?.product_Category}</dd>
            </div>

            <div>
              <dt className="inline">Price: </dt>
              <dd className="inline">${product?.attributes?.products?.data[0]?.attributes?.product_Price}</dd>
            </div>
          </dl>
        </div>
      </li>
        ))}
    </ul>

    <div className="space-y-4 text-center">
      <Link
        href="/Cart"
        className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
      >
        View my cart ({Cartstate.length})
      </Link>

      <Link
        href="/"
        className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
      >
        Continue shopping
      </Link>
    </div>
  </div>
</div>
  )
}

export default Cart;