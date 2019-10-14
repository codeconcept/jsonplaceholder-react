import React, { useState } from 'react'

const ArticleForm = ({onAdd}) => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  return (
    <>
      <form onSubmit={e => onAdd(e, {title, body})}>
        <label htmlFor="article-title">
          <input type="text" id="article-title" value={title} onChange={e => setTitle(e.target.value)}  onBlur={e => setTitle(e.target.value)}/><br></br>
        </label>
        <label htmlFor="article-body">
          <textarea cols="20" rows="5" id="article-body" value={body} onChange={e => setBody(e.target.value)} onBlur={e => setBody(e.target.value)}></textarea><br></br> 
        </label>
        <button type="submit">submit</button>
      </form>
    </>
  );
}
 
export default ArticleForm;