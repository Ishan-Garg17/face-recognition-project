import './App.css';
import Navigation from './Components/Navigation';
import Logo from './Components/Logo';
import ImageLinkForm from './Components/ImageLinkForm';
import { Component } from 'react';
import Rank from './Components/Rank';
import Clarifai from 'clarifai'
import FaceRecognition from './Components/FaceRecognition';
import Signin from './Components/Signin';
import Register from './Components/Register';


// const app = new Clarifai.App({
//   apiKey: '034b49fff994465a944aa126a4c9ed21'
// });


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      image: '',
      route: 'signin',
      isSignedin: false,
      user: {
        id: '',
        name: "",
        email: "",
        password: "",
        entries: 0
      }

    }
  }
  
loadUser =(loadedUser)=>{
  this.setState({
    user: {
      id: loadedUser.id,
      name: loadedUser.name,
      email: loadedUser.email,
      password: loadedUser.password,
      entries: loadedUser.entries
    }
  })
  console.log('loadeduser is: ',loadedUser  )
}


  onChangeInput = (event) => {
    this.setState({ input: event.target.value })
  }

  onClicked = () => {
    this.setState({ image: this.state.input })
  }

  onRouteChange = (route) => {
    
    if (route == 'home') {
      this.setState({ isSignedin: true });
    }
    else {
      this.setState({ isSignedin: false });
    }
    this.setState({ route: route })
  
  }



  render() {
    if (this.state.route === 'home') {
      return (
        <div className="App">
          <Navigation isSignedin={this.state.isSignedin} onRouteChange={this.onRouteChange} />
          <Logo />
          <Rank />
          <ImageLinkForm buttonClicked={this.onClicked} searchChange={this.onChangeInput} />
          <FaceRecognition imageURl={this.state.image} />
        </div>
      )
    }
    else if (this.state.route == 'signin') {
      return (
        <div className="App">
          <Navigation isSignedin={this.state.isSignedin} onRouteChange={this.onRouteChange} />
          <Signin loadUser = {this.loadUser} onRouteChange={this.onRouteChange} />
        </div>
      )
    }
    else {
      return (
        <div className="App">
          <Navigation isSignedin={this.state.isSignedin} onRouteChange={this.onRouteChange} />
          <Register loadUser = {this.loadUser} onRouteChange={this.onRouteChange} />
        </div>
      )
    }
  }
  
}

export default App;
