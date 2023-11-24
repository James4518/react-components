import { Component } from "react";
import HomeBanner from "./homeBanner";

export class home extends Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <p>
          home: {name} - {age}
        </p>
        <HomeBanner />
      </div>
    );
  }
}

export default home;
