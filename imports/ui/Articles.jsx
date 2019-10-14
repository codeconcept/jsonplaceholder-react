import React from 'react'
import ArticleList from './ArticleList'
import ArticleForm from './ArticleForm'

class Articles extends React.Component {
  state = {
    articles: [],
    response: null
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(data => data.json())
      .then(jsonData => {
        this.setState({
          articles: jsonData
        })
      })
  }

  handleSubmit = (e, article) => {
    e.preventDefault()
    fetch('https://jsonplaceholder.typicode.com/posts', { method: 'POST', body: article})
      .then(res => res.json())
      .then(res => {
        this.setState({
          response: res
        })
      })
  }
  
  render() { 
    const { articles, response } = this.state
    return (
      <>
        <h2>Articles</h2>
        <ArticleForm onAdd={(e, article) => this.handleSubmit(e, article)} />
        <div>
          {(response && response.id) ? (<span>{`Article with ${response.id} ID created`}</span>) : (<span></span>)}
        </div>
        <ArticleList articles={articles} />
      </>
    );
  }
}
 
export default Articles;