import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, bananna: 0}

  banannaCount = () => {
    this.setState(prevState => ({bananna: prevState.bananna + 1}))
  }

  mangoCount = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  render() {
    const {mango, bananna} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="main-heading">
            Bob ate <span className="count-color">{mango}</span> mangoes{' '}
            <span className="count-color">{bananna}</span> bananas
          </h1>
          <div className="fruits-containers">
            <div className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="fruit-img"
              />
              <div>
                <button
                  type="button"
                  className="button"
                  onClick={this.mangoCount}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="fruit-img"
              />
              <div>
                <button
                  type="button"
                  className="button"
                  onClick={this.banannaCount}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
