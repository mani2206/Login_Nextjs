"use client"
import Link from "next/link"
import { useState } from "react"

export default function RegisterForm() {

    const [name ,setName] = useState("")
    const [email ,setEmail] = useState("")
    const [password ,setPassword] = useState("")
    const [error ,setError] = useState("")

    const handleSubmit =async(e)=>{
        e.preventDefault();

        if(!name || !email || !password){
            setError("All the fields are mandotory");
            return;
        }

        try {
            const res = await fetch('api/register', {
                method:"POST",
                headers :{
                    "content-type":"application/json"
                },
                body:JSON.stringify({
                    name,
                    email,
                    password
                }),
            });

            if(res.ok){
                const form = e.target;
                form.reset();
            }else{
                console.log("user registeration failed");
            }
        } catch (error) {
            console.log("error during registeration",error);
        }

    }
    return (
        <>
            <div className="grid place-items-center h-screen">
                <div className="shadow-lg p-5 rounded-lg border-t-4 border-orange-400">
                    <h1 className="font-bold text-xl my-4">Register </h1>

                    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                        <input type="text" onChange={(e)=>setName(e.target.value)} className=" w-[400px] border border-gray-200 py-2 px-6 bg-zinc-100/40" placeholder="Full Name" />
                        <input type="text"  onChange={(e)=>setEmail(e.target.value)} className=" w-[400px] border border-gray-200 py-2 px-6 bg-zinc-100/40" placeholder="Enter the Email" />
                        <input type="password"  onChange={(e)=>setPassword(e.target.value)} className=" w-[400px] border border-gray-200 py-2 px-6 bg-zinc-100/40" placeholder="Enter the Password" />
                        <button className="bg-orange-600 text-white p-2">Register</button>
                        
                        {
                            error &&(
                                <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>
                            )
                        }
                       

                        <Link className="text-sm mt-3 text-right" href={"/"}>
                            Don't have a account? <span className="underline">Register</span>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    )
}
