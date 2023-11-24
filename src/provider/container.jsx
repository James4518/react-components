import { Component } from "react";
import userContext from "./context/user";

export class container extends Component {
  render() {
    return (
      <div>
        <userContext.Consumer>
          {(value) => {
            return (
              <p>
                container: {value.username} - {value.telephone}
              </p>
            );
          }}
        </userContext.Consumer>
      </div>
    );
  }
}

export default container;
