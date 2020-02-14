import React from 'react';
import axios from 'axios';

import './App.css';
import PlayerCard from './components/PlayerCard';
import NavBar from './components/NavBar';


class App extends React.Component{
  constructor(){
    super()
    this.state={
      players:[]
    }
  }
  componentDidMount(){
    axios.get('http://localhost:5000/api/players')
    .then(r =>{  console.log(r.data)
      this.setState({ players: r.data})
    })
    .catch(e => {console.log(e)})
  }
  render(){
    return(
      <div>
        <NavBar />
        <PlayerCard players={this.state.players} />
      </div>
      )
  }
}

export default App;