import ArticlesItem from "@/components/articles/ArticlesItem";
import Link from "next/link";

const Articles = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/xcxcposts"
  );
  if (!response.ok) throw new Error("Couldn't  find articles");
  const articles = await response.json();
  return (
    <div className="flex justify-center flex-wrap items-center gap-7">
      {articles.map((post, i) => (
        <ArticlesItem
          title={post.title}
          body={post.body}
          id={post.id}
          key={i}
        />
      ))}
    </div>
  );
};

export default Articles;
