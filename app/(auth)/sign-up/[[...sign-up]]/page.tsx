import { SignUp } from "@clerk/nextjs";
import { useSelector } from "react-redux";

export default function Page() {
  return (
    <div className="relative overflow-hidden">
  <div className="mx-auto max-w-screen-md py-12 px-4 sm:px-6 md:max-w-screen-xl md:py-20 lg:py-32 md:px-8">
    <div className="md:pe-8 md:w-1/2 xl:pe-0 xl:w-5/12">
      {/* <!-- Title --> */}
      <h1 className="text-3xl text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight">
        Welcome to Shop <span className="text-blue-600">Market</span>
      </h1>
      <p className="mt-3 text-base text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis possimus exercitationem aperiam alias neque? Explicabo nisi cum suscipit eaque.
      </p>
      {/* <!-- End Title --> */}

      <div className="py-6 flex items-center text-sm text-gray-400 uppercase before:flex-1 before:border-t before:me-6 after:flex-1 after:border-t after:ms-6">Sign In</div>

      {/* <!-- Form --> */}
      <div className="my-8 md:mx-[50px]">
      <SignUp />
      </div>
      {/* <!-- End Form --> */}
    </div>
  </div>

  <div className="hidden md:block md:absolute md:top-0 md:start-1/2 md:end-0 h-full bg-[url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80')] bg-no-repeat bg-center bg-cover"></div>
</div>  

  )
} 