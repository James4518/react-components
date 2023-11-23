import { Component } from "react";
import Tab from "./tab";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      titles: ["新款", "推荐", "热销"]
    };
  }
  tabClick(tabIndex) {
    this.setState({ tabIndex });
  }
  render() {
    const { titles } = this.state;
    return (
      <div>
        <Tab
          titles={titles}

        ></Tab>
      </div>
    );
  }
}
export default App;
