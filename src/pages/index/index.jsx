import React, { Component } from 'react'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onClickIndex = () => {
    this.props.history.push('/news')
  }

  render() {
    return(
      <div onClick={this.onClickIndex}>
        this is index !
      </div>
    )
  }
}

export default Index