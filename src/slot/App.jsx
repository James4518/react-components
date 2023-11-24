import { Component } from "react";
import Tab from "./tab";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      titles: ["新款", "推荐", "热销"],
      tabIndex: 0,
    };
  }
  tabClick(tabIndex) {
    this.setState({ tabIndex });
  }
  getItemType(item) {
    if (item === "新款") {
      return <span>{item}</span>;
    } else if (item === "推荐") {
      return <button>{item}</button>;
    } else {
      return <i>{item}</i>;
    }
  }
  render() {
    const { titles, tabIndex } = this.state;
    return (
      <div>
        <Tab
          titles={titles}
          tabClick={(index) => this.tabClick(index)}
          itemType={(item) => this.getItemType(item)}
        ></Tab>
        <h1>{titles[tabIndex]}</h1>
      </div>
    );
  }
}
export default App;
