import React, { Component } from 'react'


class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {term: ''}
  }

  onInputChange(term) {
    this.setState({term})
    this.props.onVideoSearch(term)
  }

  render() {
    return (
      <input type="text" onChange={event => this.onInputChange(event.target.value)} />
    )
  }
}

export default Search
