import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots.js'

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value})
    }


    render(){
        const filteredBots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className='tc'> 
                <h1>RoboFriends</h1>
                <SearchBox SearchChange={this.onSearchChange}/>
                <CardList robots={filteredBots}/>
            </div>
        );
  
    }
}

export default App;
