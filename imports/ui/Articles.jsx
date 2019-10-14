import React from 'react'
import ArticleList from './ArticleList'
import ArticleForm from './ArticleForm'

class Articles extends React.Component {
  state = {
    articles: []
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
    console.log(e, article)
  }
  
  render() { 
    const { articles } = this.state
    return (
      <>
        <h2>Articles</h2>
        <ArticleForm onAdd={(e, article) => this.handleSubmit(e, article)} />
        <ArticleList articles={articles} />
      </>
    );
  }
}
 
export default Articles;