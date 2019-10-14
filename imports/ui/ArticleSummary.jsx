import React from 'react'

const ArticleSummary = ({article}) => {
  return (
    <>
      <h3>{article.title}</h3>
      <div>{article.body}</div>
      <hr/>
    </>
  );
}
 
export default ArticleSummary;