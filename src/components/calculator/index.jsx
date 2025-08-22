import { Component } from "react"
import "./index.css"
class Calculator extends Component {
  state = {
    input: ""
  }
  handlebtn = (value) => {
    const operators = ["+", "-", "*", "/","="];
    let { input } = this.state;
    console.log(input)
    if (operators.includes(value)) {
      if (input === "") return; // don’t allow operator at start
      if (operators.includes(input[input.length - 1])) {
        // Replace last operator with new one
        input = input.slice(0, -1);
      }
    }
    this.setState({
      input: input + value
    })
    if (value == "=") {
      this.setState({
        input: eval(input)
      })
    }
    if (value == "ac") {
      this.setState({
        input: ""
      })
    }
    if (value == "del") {
      this.setState({
        input: input.slice(0, -1)
      })
    }
  }
  render() {
    let { input } = this.state;
    console.log(input)
    return (
      <div className='calc'>
        <div className='calc_A'>
          <div>
            <input type="text" readOnly value={input} />
          </div>
          <div className='calc_A1'>
            <button onClick={() => { this.handlebtn("ac") }} className='acbtn'>Ac</button>
            <button onClick={() => { this.handlebtn("del") }} className='delbtn'>Del</button>
          </div>
          <div className='calc_A2'>
            <button onClick={() => { this.handlebtn("1") }}>1</button>
            <button onClick={() => { this.handlebtn("2") }}>2</button>
            <button onClick={() => { this.handlebtn("3") }}>3</button>
            <button onClick={() => { this.handlebtn("+") }}>+</button>
            <button onClick={() => { this.handlebtn("4") }}>4</button>
            <button onClick={() => { this.handlebtn("5") }}>5</button>
            <button onClick={() => { this.handlebtn("6") }}>6</button>
            <button onClick={() => { this.handlebtn("-") }}>-</button>
            <button onClick={() => { this.handlebtn("7") }}>7</button>
            <button onClick={() => { this.handlebtn("8") }}>8</button>
            <button onClick={() => { this.handlebtn("9") }}>9</button>
            <button onClick={() => { this.handlebtn("*") }}>*</button>
            <button onClick={() => { this.handlebtn("/") }}>/</button>
            <button onClick={() => { this.handlebtn("0") }}>0</button>
            <button onClick={() => { this.handlebtn("=") }}>=</button>
          </div>
        </div>
      </div>
    )
  }
}
export { Calculator }