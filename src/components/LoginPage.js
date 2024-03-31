import Link from "next/link"

export default function LoginPage() {
   return (
      <>
         <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-5 rounded-lg border-t-4 border-orange-400">
               <h1 className="font-bold text-xl my-4">Enter the Details </h1>

               <form className="flex flex-col gap-3">
                  <input type="text" className=" w-[400px] border border-gray-200 py-2 px-6 bg-zinc-100/40" placeholder="Enter the Email" />
                  <input type="password" className=" w-[400px] border border-gray-200 py-2 px-6 bg-zinc-100/40" placeholder="Enter the Password" />
                  <button className="bg-orange-600 text-white p-2">Login</button>

                  <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">Error Message</div>

                  <Link className ="text-sm mt-3 text-right" href={"/register"}>
                    Already have a acccount? <span className="underline">Register</span>
                  </Link>
               </form>
            </div>
         </div>
      </>
   )
}
