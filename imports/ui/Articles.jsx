import React from 'react'
import ArticleList from './ArticleList'

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
  
  render() { 
    const { articles } = this.state
    return (
      <>
        <h2>Articles</h2>
        <ArticleList articles={articles} />
      </>
    );
  }
}
 
export default Articles;