import React, { Component } from "react";
import list from "../list";
import Article from "./Article";

class App extends Component {
  render() {
    return (
      <div>
        {list.map(item => (
          <Article list={item} />
        ))}
      </div>
    );
  }
}

export default App;
