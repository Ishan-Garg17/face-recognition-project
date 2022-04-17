import './App.css';
import Navigation from './Components/Navigation';
import Logo from './Components/Logo';
import ImageLinkForm from './Components/ImageLinkForm';
import { Component } from 'react';
import Rank from './Components/Rank';
import Clarifai from 'clarifai'
import FaceRecognition from './Components/FaceRecognition';
import Signin from './Components/Signin';

const app = new Clarifai.App({
  apiKey: '034b49fff994465a944aa126a4c9ed21'
});


class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      image: '',
      route: 'signin'
    }
  }
  onChangeInput = (event)=>{
    this.setState( {input: event.target.value})
  } 
  onClicked = ()=>{
    this.setState({image: this.state.input})
}
onRouteChange = (route)=>{
      this.setState({route : route})
}

  render() {
    return (
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange}/>
        {this.state.route === 'signin'?
        <Signin onRouteChange={this.onRouteChange}/>
        :
        <div>
          <Logo/>
        <Rank/>
        <ImageLinkForm buttonClicked={this.onClicked} searchChange={this.onChangeInput}/>
        <FaceRecognition imageURl={this.state.image}/>
        </div>
        }
      </div>
    );
  }
}

export default App;
