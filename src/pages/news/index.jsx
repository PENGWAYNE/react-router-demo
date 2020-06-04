import React, { Component } from 'react'

class News extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onClickNews = () => {
    console.log('index');
    this.props.history.push('/index')
  }

  render() {
    return <div onClick={this.onClickNews}>this is news !</div>
  }
}

export default News
