import './App.css';
import Navigation from './Components/Navigation';
import Logo from './Components/Logo';
import { Component } from 'react';


class App extends Component {
  constructor(){
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <Navigation />
        jjj
        <Logo />
        {/* <ImageLinkForm/> */}
      </div>
    );
  }
}

export default App;
