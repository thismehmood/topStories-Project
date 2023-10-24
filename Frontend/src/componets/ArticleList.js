import React from "react";
import ArticleCard from "./ArticleCard";

const ArticleList = ({ articles }) => {
  return (
    <>
      <h1>Top Stories</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {articles.map((article) => (
          <ArticleCard key={article.url} article={article} />
        ))}
      </div>
    </>
  );
};

export default ArticleList;
