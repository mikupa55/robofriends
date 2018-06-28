import React, {Component} from 'react';
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./App.css"
import Scroll from "./Scroll"

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ""
    }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=> {this.setState({robots: users})});
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});

  }

  render() {
    const filtered_robots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    console.log(filtered_robots);
    if (this.state.robots.length === 0) {
      return <h1 className='tc'>LOADING......</h1>
    } else {
    return (
      <div className='tc'>
        <h1 className="f1">Robot Friends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
        <CardList robots={filtered_robots} />
        </Scroll>
      </div>
      )
    }
  }
  
  
}

export default App;
