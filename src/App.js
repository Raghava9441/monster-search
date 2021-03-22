import React, { Component } from 'react'
import './App.css'
import CardList from './components/card-list/CardList'
import SearchField from './components/searchField/SearchField';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: '',
    };
  }
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  onSearchChange = (e) =>{
    this.setState({
      searchField:e.target.value
    })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="">
          Monsters Search
        </h1>
        <SearchField
          placeholder="search monster"
          onsearch={this.onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
