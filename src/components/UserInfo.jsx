import React from 'react'

function UserInfo() {
  return (
    <div className="grid place-items-center h-screen">
        <div className="shadow-lg p-8 bg-zinc-300/20 flex flex-col gap-2 my-6">
            <div>Name: <span className="font-bold">Mani</span></div>
            <div>Email:<span className="font-bold">mani220696@gmail.com</span></div>
            <button className="bg-red-500 text-white px-6 py-2 font-bold mt-3">Logout</button>
        </div>
    </div>
  )
}

export default UserInfo