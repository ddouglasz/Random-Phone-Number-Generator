import { expect } from 'chai'
import PhoneNumberGenerator from './phoneNumber.js';

const {
  GenerateRandomPhoneNumbers,
  getMaxGenNumber,
  getMinGenNumber,
  sortInAscending,
  sortInDescending
} = PhoneNumberGenerator;

describe('generateNumbers', () => {
  it('should return an array length 12', () => {
    const numbers = GenerateRandomPhoneNumbers(12)
    expect(numbers).to.be.an('array')
    expect(numbers.length).to.equal(12)
  })
})

describe('getMaxGenNumber', () => {
  it('should return the largest number in an array', () => {
    const arr = [3,44,2,5,6,75]
    expect(getMaxGenNumber(arr)).to.equal(75)
  })
})

describe('getMinGenNumber', () => {
  it('should return the smallest number in an array', () => {
    const arr = [3,44,2,5,6,75]
    expect(getMinGenNumber(arr)).to.equal(2)
  })
})

describe('sortInAscending', () => {
  it('should sort array in ascending order', () => {
    const arr = [3,44,2,5,6,75]
    const sortByAscending = sortInAscending(arr)
    expect(sortByAscending[0]).to.equal(2)
    expect(sortByAscending[sortByAscending.length - 1]).to.equal(75)
  })
})

describe('sortDescending', () => {
  it('should sort array in descending order', () => {
    const arr = [3,44,2,5,6,75]
    const sortByDescending = sortInDescending(arr)
    expect(sortByDescending[0]).to.equal(75)
    expect(sortByDescending[sortByDescending.length - 1]).to.equal(2)
  })
})

