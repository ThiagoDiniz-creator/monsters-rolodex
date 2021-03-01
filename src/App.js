import React from "react";
import "./App.css";

//Components
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

//App
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    //When the components are loaded this function is called
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState({ monsters: users, filteredMonsters: users })
      );
  }

  handleChange = (e)  => {
    this.setState({
      searchField: e.target.value,
    });
  }

  updateList() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monsters) => {
      return monsters.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return filteredMonsters;
  }

  render() {
    const filteredMonsters = this.updateList();
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          handleChange={(e) => this.handleChange(e)}
          placeholder="Search for a monster"
          type="search"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
