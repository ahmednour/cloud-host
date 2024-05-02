import { BiSolidCommentEdit, BiSolidCommentX } from "react-icons/bi";

const CommentsItem = () => {
    return (
        <div className="bg-white border-2 border-gray-300 rounded-lg shadow mb-3 p-6 relative">
            <h2 className="text-xl font-semibold">User Name</h2>
            <span className="text-gray-400">1/1/2024</span>
            <p className="text-xl text-gray-700 mt-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque maiores molestias? Ab mollitia dicta rem ducimus perferendis ex eius, soluta inventore. Magni commodi ea, harum vero sit asperiores doloribus! </p>
            <div className="absolute right-4 top-4">
                <BiSolidCommentEdit className="text-xl cursor-pointer text-green-500" />
                <BiSolidCommentX className="text-xl cursor-pointer text-red-500" />
            </div>
        </div>
    )
}
export default CommentsItem