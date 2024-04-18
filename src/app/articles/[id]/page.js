const ArticlesDetailsPage = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const articles = await response.json();
  return (
    <div className="bg-white shadow rounded-lg p-7">
      <h1 className="text-3xl text-gray-800 font-bold">{articles.title}</h1>
      <div className="text-gray-400">01/02/2024</div>
      <p className="text-xl text-gray-600 mt-3">{articles.body}</p>
    </div>
  );
};

export default ArticlesDetailsPage;
