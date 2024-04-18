"use client"

import Link from "next/link"

const error = ({ error, reset }) => {
    return (
        <div className="p-7 text-center">
            <h1 className="text-3xl text-red-600 font-semibold"> Somthing went wrong</h1>
            <h2 className="text-xl text-gray-700 my-3"> Error Message : {error.message} </h2>
            <button onClick={() => reset()} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full">Try Again</button>
            <Link href="./" className="text-xl underline text-blue-700 block mt-6"> Back To Home </Link>
        </div>
    )
}

export default error