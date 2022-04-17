import './App.css';
import Navigation from './Components/Navigation';
import Logo from './Components/Logo';
import ImageLinkForm from './Components/ImageLinkForm';
import { Component } from 'react';
import Rank from './Components/Rank';
import Clarifai from 'clarifai'

const app = new Clarifai.App({
  apiKey: '034b49fff994465a944aa126a4c9ed21'
});
class App extends Component {
  constructor(){
    super();
    this.state = {
      input: [],
    }
  }
  onChangeInput = (event)=>{
    console.log(event.target.value)
  } 
  onClicked = ()=>{
    console.log("Button Clicked")
    
}
  // 
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo/>
        <Rank/>
        <ImageLinkForm buttonClicked={this.onClicked} searchChange={this.onChangeInput}/>
      </div>
    );
  }
}

export default App;
