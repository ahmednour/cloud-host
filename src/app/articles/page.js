import ArticlesItem from "@/components/articles/ArticlesItem";
import Pagination from "@/components/articles/Pagination";
import SearchTextInput from "@/components/articles/SearchInputText";
import Link from "next/link";

const Articles = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Couldn't  find articles");
  const articles = await response.json();
  return (
    <>
      <SearchTextInput />
      <div className="flex justify-center flex-wrap items-center gap-7">
        {articles.slice(0, 6).map((post, i) => (
          <ArticlesItem
            title={post.title}
            body={post.body}
            id={post.id}
            key={i}
          />
        ))}
      </div>
      <Pagination />
    </>
  );
};

export default Articles;
