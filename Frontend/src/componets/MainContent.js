import React, { useState } from "react";
import DataFetcher from "./DataFetcher";
import ArticleList from "./ArticleList";

const MainContent = () => {
  const [articles, setArticles] = useState([]);

  return (
    <div>
      <DataFetcher setData={setArticles} />
      <ArticleList articles={articles} />
    </div>
  );
};

export default MainContent;
