import {Component} from 'react'
import './index.css'
// Write your code here

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    const {count} = this.state
    if (count >= 0 && count < 200) {
      this.setState(prevState => {
        console.log(`${prevState.count}`)
        return {
          count: prevState.count + 10,
        }
      })
    }
  }

  onApplyBrake = () => {
    const {count} = this.state
    if (count <= 200 && count > 0) {
      this.setState(prevState => {
        console.log(`${prevState.count}`)
        return {
          count: prevState.count - 10,
        }
      })
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="heading">Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="speedometer"
          alt="speedometer"
        />
        <h1 className="small-heding">Speed is {count} mph</h1>
        <p className="speed-para">Min limit is 0 mph.Max Limit is 200 mph</p>
        <div className="button-container">
          <button className="button1" type="submit" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button className="button2" type="submit" onClick={this.onApplyBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
