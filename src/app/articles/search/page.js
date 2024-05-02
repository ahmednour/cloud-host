const SearchArticlePage = ({ searchParams }) => {
  console.log(searchParams.searchText);
  return <div>{searchParams.searchText} </div>;
};

export default SearchArticlePage;
