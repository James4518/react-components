import { Component } from 'react'
import themeContext from './context/theme'

export class homeBanner extends Component {
  render() {
    return (
      <div>
        <p>
          homeBanner: {this.context.color}  -  {this.context.size}
        </p>
      </div>
    )
  }
}
homeBanner.contextType = themeContext;
export default homeBanner