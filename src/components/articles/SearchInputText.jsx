"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchTextInput = () => {
    const router = useRouter();
    const [searchText, setSearchText] = useState("");
    const formSubmitHandler = async (e) => {
        e.preventDefault();
        console.log(searchText);
        router.replace(`/articles/search?searchText=${searchText}`);
    }

    return (
        <form onSubmit={formSubmitHandler} className="my-5 w-full md:w-2/3 m-auto">
            <input
                className="w-full p-3 rounded text-xl border-none text-gray-900"
                type="search"
                placeholder="Enter Your Email"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
        </form>
    )
}

export default SearchTextInput