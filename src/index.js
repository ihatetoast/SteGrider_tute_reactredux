import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//youtube api key:
const API_KEY = 'AIzaSyBhIZo9rj2OkwdZLyMFb0lukOK381a6ZLk';
//pkg for search req npm pkg youtube search
YTSearch({key:API_KEY, term: 'salukis'}, function(data){
  console.log(data);
});

class App extends Component {
	constructor(props){
		super(props);
    this.state={
      videos: [],
      selectedVideo: null
     };
    YTSearch({key:API_KEY, term: 'salukis'}, (videos) =>{
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    });
	}

	render(){
  	return  (
	    <div>
	      <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} />
	    </div>
  	);
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
