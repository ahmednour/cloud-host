import Link from "next/link"

const NotFoundPage = () => {
    return (
        <div className="text-center p-7">
            <h2 className="text-7xl font-semibold">404</h2>
            <h1>Not Found Page</h1>
            <Link href="/" className="bg-blue-500 hover:bg-blue-700 rounded-full text-white text-xl py-2 px-4 mt-7 inline-block"> Back to Home</Link>
        </div>
    )
}

export default NotFoundPage