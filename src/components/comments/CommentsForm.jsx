"use client";
import React, { useState } from 'react';
import { toast } from 'react-toastify';


const CommentsForm = () => {
    const [text, setText] = useState("");
    const formSubmitHandler = async (e) => {
        e.preventDefault();
        if (text === "") {
            toast.error("no data")
        }
    }

    return (
        <form onSubmit={formSubmitHandler} className='pt-5'>
            <input
                className="w-full p-3 rounded text-xl border-none text-gray-900 border-gray-600"
                type="text"
                placeholder="Enter Your Comments"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button className="bg-green-500 rounded text-xl mt-2 p-2">
                Submit
            </button>
        </form>
    )
}

export default CommentsForm