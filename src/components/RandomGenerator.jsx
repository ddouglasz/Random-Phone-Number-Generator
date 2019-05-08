import React from 'react';
import PhoneNumberGenerator from '../../src/controller/phoneNumber';
import fileDownload from 'js-file-download';

import Button from './Button';
import Input from './inputField'

import './RandomGenerator.scss'


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

  onclickDownload = () => {
    const data = this.state.numbers;
    fileDownload(data, 'filename.csv');
  }


  render() {

    const { numbers } = this.state;
    const { onInputChange, onGenerateRandomNumbersClick, onclickDownload, onSortChange } = this;

    const listRandomNumbers = (numbers || []).map(item => (
      <li listStyle="none" key={item}>{`${numbers.indexOf(item) + 1}`}:{item}</li>
    ))

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
              Random Phone Number Generator Generator
        </label>
          </p>
        </header>
        <div>
          <form >
            <Input
              type='number'
              classes='text-input'
              name=''
              placeholder='Enter the quantity of number you want to generate'
              onChange={onInputChange}
            />
            <Button
              classes='btn-generate-random-numbers'
              type='submit'
              onclick={onGenerateRandomNumbersClick}
              name='Generate PhoneNumbers'
            />
            <Button
              classes='btn-download-random-numbers'
              type='submit'
              onclick={onclickDownload}
              name='download'
            />
            <select onChange={onSortChange}>
              <option value="ascending">Sort in ascending order</option>
              <option value="descending">Sort in descending order</option>
            </select>
            <p>
              <label className="max-num">Max Number: {`0${getMaxGenNumber(numbers)}`}</label>
              <label className="min-num">Min Number: {`0${getMinGenNumber(numbers)}`}</label>
            </p>

          </form>
          <div>
            <ul>
              {listRandomNumbers}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default GeneratePhoneNumber;