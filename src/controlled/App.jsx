import { PureComponent } from "react";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      username: "aa",
      password: "",
      isAgree: false,
      hobbies: [
        { name: "sing", text: "唱", isChecked: false },
        { name: "jump", text: "跳", isChecked: false },
        { name: "rap", text: "rap", isChecked: false },
      ],
      fruits: ["apple"],
    };
  }
  handleSubmitClick(event) {
    event.preventDefault();
    console.log(this.state.username, this.state.password, this.state.isAgree);
    const hobbies = this.state.hobbies
      .filter((item) => item.isChecked)
      .map((item) => item.name);
    console.log("hobbies: ", hobbies);
    console.log(this.state.fruits);
  }
  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleIsAgree(event) {
    this.setState({ isAgree: event.target.checked });
  }
  handleHobbiesChange(event, index) {
    const hobbies = [...this.state.hobbies];
    hobbies[index].isChecked = event.target.checked;
    this.setState({ hobbies });
  }
  handleFruitsChange(event) {
    // const options = Array.from(event.target.selectedOptions);
    // const values = options.map(item => item.value);
    const values = Array.from(
      event.target.selectedOptions,
      (item) => item.value
    );
    this.setState({ fruits: values });
  }
  render() {
    const { username, password, isAgree, hobbies, fruits } = this.state;
    return (
      <div>
        <p>your name:{username}</p>
        <form onSubmit={(event) => this.handleSubmitClick(event)}>
          <div>
            <span>name:</span>
            <label htmlFor="username">
              <input
                name="username"
                type="text"
                value={username}
                onChange={(event) => this.handleInputChange(event)}
              />
            </label>
            <label htmlFor="password">
              <span>password:</span>
              <input
                name="password"
                type="password"
                value={password}
                onChange={(event) => this.handleInputChange(event)}
              />
            </label>
          </div>
          <div>
            <span>your hobbies:</span>
            {hobbies.map((item, index) => {
              return (
                <label htmlFor={item.name} key={item.name}>
                  <input
                    type="checkbox"
                    checked={item.isChecked}
                    onChange={(event) => this.handleHobbiesChange(event, index)}
                  />
                  <span>{item.name}</span>
                </label>
              );
            })}
          </div>
          <div>
            <span>favourite fruits:</span>
            <select
              multiple
              value={fruits}
              onChange={(event) => this.handleFruitsChange(event)}
            >
              <option value="apple">apple</option>
              <option value="orange">orange</option>
              <option value="banana">banana</option>
              <option value="mango">mango</option>
            </select>
          </div>
          <div>
            <label htmlFor="isAgree">
              <input
                type="checkbox"
                value={isAgree}
                onChange={(event) => this.handleIsAgree(event)}
              />
            </label>
            <span>Agree to the agreement</span>
          </div>
          <div>
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
