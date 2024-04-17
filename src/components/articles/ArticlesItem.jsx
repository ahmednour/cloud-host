import Link from "next/link"

const ArticlesItem = ({ title, body, id }) => {
    return (
        <div className="rounded-lg p-2 border-slate-500 border-2 w-full md:w-2/5 lg:w-1/4 relative" >
            <h2 className="text-2xl text-slate-800 font-bold mb-1 line-clamp-1">
                {title}
            </h2>
            <p className="text-gray-600 line-clamp-2">{body}</p>
            <Link
                href={`/articles/${id}`}
                className="bg-teal-950 text-white text-xl block w-full rounded p-2 text-center mt-2"
            >
                Read More
            </Link>
        </div>
    )
}

export default ArticlesItem