import {Component} from 'react'
import "./index.css"

class GenerateRandomNumber extends Component {
    state = {number: 0}

    generateRandomNumber = () => {
        const digit = Math.ceil(Math.random() * 100)
        this.setState({number: digit})
    }
    render(){
        const {number} = this.state 
        return (
            <div className="app-container">
                <div className="random-number-card">
                    <h1 className="heading">Random Number</h1>
                    <p className="description">Generate a Random Number in the Range of 0 to 100</p>
                    <div>
                        <button onClick={this.generateRandomNumber}>Generate</button>
                    </div>
                    <p className="number">{number}</p>
                </div>
            </div>
        )
    }
}

export default GenerateRandomNumber