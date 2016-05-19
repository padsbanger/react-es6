import React, {
  Component
} from 'react'
import _ from 'lodash'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import Search from './Search'
import VideoList from './VideoList'
import VideoDetails from './VideoDetails'

const API_KEY = 'AIzaSyD_KH5IrRImKlcgCyLqNgMdCTz0F7lNPmA'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('eve online music')

  }

  videoSearch(term) {
    YTSearch({
      key: API_KEY,
      term: term
    }, (data) => {
      console.log(data)
      this.setState({
        videos: data,
        selectedVideo: data[0]
      })
    })
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 500)
    return(
      <div>
        <Search  onVideoSearch={videoSearch}/>
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo

          })}
          videos={this.state.videos}/>
      </div>
    )
  }
}

export default App
