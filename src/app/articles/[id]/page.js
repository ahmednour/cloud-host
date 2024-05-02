import CommentsForm from "@/components/comments/CommentsForm";
import CommentsItem from "@/components/comments/CommentsItem";

const ArticlesDetailsPage = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const articles = await response.json();
  return (
    <>
      <div className="bg-white shadow rounded-lg p-7">
        <h1 className="text-3xl text-gray-800 font-bold">{articles.title}</h1>
        <div className="text-gray-400">01/02/2024</div>
        <p className="text-xl text-gray-600 mt-3">{articles.body}</p>
      </div>
      <CommentsForm />
      <h3 className="text-xl font-semibold my-5">Comments</h3>
      <CommentsItem />
      <CommentsItem />
      <CommentsItem />
    </>
  );
};

export default ArticlesDetailsPage;
