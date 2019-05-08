import { minPossiblePhoneNumber, maxPossiblePhoneNumber } from '../helpers/constants';

/**
 * @description - PhoneNumber generator class
 * @class PhineNumberGenerator
 */

class PhoneNumberGenerator {
  /**
   * @param {number} number
  * @returns {Object} GenerateRandomPhoneNumbers
  */
  static GenerateRandomPhoneNumbers = (number) => {
      const GeneratedRandomPhoneNumbers = [];
      for(let i=0; i < number; i++  ) {
        GeneratedRandomPhoneNumbers.push(`0${Math.floor(minPossiblePhoneNumber + Math.random() * maxPossiblePhoneNumber)}`)
      }
      return  GeneratedRandomPhoneNumbers;
  }

  /**
  * @param {number} GeneratedRandomPhoneNumbers
  * @returns {Array}
  */
  static getMaxGenNumber = (GeneratedRandomPhoneNumbers) => {
      return Math.max(...GeneratedRandomPhoneNumbers);
  }

  /**
   * @param {number} GeneratedRandomPhoneNumbers
  * @returns {Array} - getMaxGenNumber
  */
  static getMinGenNumber = (GeneratedRandomPhoneNumbers) => {
      return Math.min(...GeneratedRandomPhoneNumbers);
  }

  /**
  * @param {number} numbers in ascending order
  * @returns {Array} - sortAscending
  */
  static sortInAscending = (numbers) => {
      return numbers.sort((a,b) => (a-b));
  }

  /**
  * @param {number} numbers in descending order
  * @returns {Array} - sortDescending
  */
  static sortInDescending = (numbers) => {
    return numbers.sort((a,b) => (b-a)); 
  }
}

export default PhoneNumberGenerator;