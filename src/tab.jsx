import { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";

export class tab extends Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
    };
  }
  itemClick(index) {
    this.setState({ currentIndex: index });
  }
  render() {
    const { currentIndex } = this.state;
    const { titles } = this.props;
    return (
      <div className="tab-control">
        {titles.map((item, index) => {
          return (
            <div
              key={item}
              onClick={() => this.itemClick(index)}
              className={`item ${currentIndex == index ? "active" : ""}`}
            >
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    );
  }
}
tab.propTypes = {
  titles: PropTypes.array,
  tabClick: PropTypes.func,
  itemType: PropTypes.func,
};
export default tab;
