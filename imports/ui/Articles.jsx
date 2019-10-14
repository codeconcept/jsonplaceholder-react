import React from 'react'

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
        { articles && (<pre>{JSON.stringify(articles, null, 4)}</pre>) }
      </>
    );
  }
}
 
export default Articles;