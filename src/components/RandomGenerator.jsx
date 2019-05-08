import React, { Component } from 'react';
import PhoneNumberGenerator from '../../src/controllers/phoneNumber';

const { GenerateRandomPhoneNumbers, getMaxGenNumber, getMinGenNumber, sortInAscending, sortInDescending } = PhoneNumberGenerator;

class GeneratePhoneNumber extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numbers: [],
      generatedQuantity: 0,
      maxNum: '',
      minNum: '',
      sortOrder: 'ascending'
    };
  }


  componentDidMount() {

  }

  onSortChange = event => {
    const { numbers } = this.state
    const { value } = event.target

    const sortedNumbers = value === "ascending" ? sortInAscending(numbers) : sortInDescending(numbers)

    this.setState({ sortOrder: value, numbers: sortedNumbers })
  }

  onInputChange = event => {
    event.preventDefault();
    const { value } = event.target
    !isNaN(value) && this.setState({ generatedQuantity: value })
  }

  onGenerateRandomNumbersClick = (event) => {
      event.preventDefault();
    const { generatedQuantity, sortOrder } = this.state
    const RandomNumbers = GenerateRandomPhoneNumbers(generatedQuantity)
    const sortedNumbers = sortOrder === 'ascending' ? sortInAscending(RandomNumbers) : sortInDescending(RandomNumbers)
    this.setState({ numbers: sortedNumbers })
  }
  
  render() {
    // console.log(this.state.numbers);

    return (
      <div className="App">
        <header className="App-header">
          <p>
            <label
              className=""
              href="#"
              target=""
              rel=""
            >
              Random PhoneNumberGenerator Generator
        </label>
          </p>
        </header>

        <div>
          <form >

            <input
              className=""
              type="number"
              // name="title"
              placeholder="Enter quantity of number you want to generate"
              value={this.generatedQuantity}
              onChange={this.onInputChange}
            />

            <button
              className=""
              type="submit"
              // value=""
              // name=""
              onClick={this.onGenerateRandomNumbersClick}
            >
              Generate PhoneNumbers
            </button>
            <select onChange={this.onSortChange}>
              <option value="ascending">Sort in ascending order</option>
              <option value="descending">Sort in descending order</option>
            </select>
            <p>
              <label>Max Number: {`0${getMaxGenNumber(this.state.numbers)}`}</label>
              <br/>
              <label>Min Number: {`0${getMinGenNumber(this.state.numbers)}`}</label>
            </p>

          </form>
          <div>
        <ul>
          {(this.state.numbers || []).map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>


        </div>
      </div>
    );
  }
}

export default GeneratePhoneNumber;