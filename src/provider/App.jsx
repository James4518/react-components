import { Component } from "react";
import Home from "./home";
import Container from "./container";
import themeContext from "./context/theme";
import UserContext from "./context/user";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      info: {
        name: "aa",
        age: 17,
      },
    };
  }
  render() {
    const { info } = this.state;
    return (
      <div>
        App
        <themeContext.Provider value={{ color: "red", size: 30 }}>
          <Home {...info} />
        </themeContext.Provider>
        <UserContext.Provider value={{ username: "jok", telephone: 111111 }}>
          <Container />
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
