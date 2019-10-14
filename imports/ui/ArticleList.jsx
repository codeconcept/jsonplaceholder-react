import React from 'react'
import ArticleSummary from './ArticleSummary';

const ArticleList = ({articles}) => {
  return (
    <>
      <div>article list works!</div>
      {articles && articles.map((article) => (
        <ArticleSummary article={article} key={article.id} />
      ))}
    </>
  );
}
 
export default ArticleList;