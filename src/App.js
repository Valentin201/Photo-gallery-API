import React, { Component } from 'react';
import './App.css';
import ImageGallery from './Components/ImageGallery';
import axios from 'axios';
import SearchBar from './Components/searchBar';
import AnimatedLogo from './assets/AnimatedLogo'





class App extends Component {

    state = {images: []}

  

  

  componentDidMount() {
    this.searchPhotos();
  }


searchPhotos = (research = 'landscape') => {
  
  axios.get(`https://api.unsplash.com/search/photos/?page=1&query=${research}&per_page=21&orientation=landscape&client_id=49e4cea4e5100dafe81efdb38126c18967c654e5a4b9f10c42e3de10c88ee4db`)
  .then(response => {
      this.setState({ images: response.data.results });
    })

    .catch(err => {
      console.log(err);
    });


}

  render() {
    return (
      <div>
        <div className="main-header">

          <div className="inner">

          <SearchBar onSearch={this.searchPhotos}/>
        
             <AnimatedLogo/>
          </div>
        </div>
        <div className="main-content">
          <ImageGallery data={this.state.images} />

        </div>
      </div>
    );
  }
}


export default App;
