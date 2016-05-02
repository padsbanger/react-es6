import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
  }
  update(e) {
    this.setState({name: e.target.value})
  }
  render() {
    console.log(this)
    return <div><h1>Hi {this.state.name}</h1> <input type="text" onChange={this.update.bind(this)}></input></div>
  }
}

export default App
