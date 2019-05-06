import { maxPhoneNumberQuantity, minPhoneNumber, maxPossiblePhoneNumber } from '../helpers/constants';

/**
 * @description - PhoneNumber generator class
 * @class PhineNumberGenerator
 */

class PhoneNumberGenerator {
  /**
  * @returns {Object} GenerateRandomPhoneNumbers
  * @param {number} number
  * @returns {Array}
  */
  static GenerateRandomPhoneNumbers = (number) => {
      const GeneratedRandomPhoneNumbers = [];
      while(GeneratedRandomPhoneNumbers.length() < number  ) {
        GeneratedRandomPhoneNumbers.push(`0${Math.floor(minPhoneNumber + Math.random() * maxPossiblePhoneNumber)}`)
      }
  }

  /**
  * @returns {Object} maximum number in generated numbers
  * @param {number} GeneratedRandomPhoneNumbers
  * @returns {Array}
  */
  static getMaxGenNumber = (GeneratedRandomPhoneNumbers) => {
      return Math.max(...GeneratedRandomPhoneNumbers);
  }

  /**
  * @returns {Object} Minimum number in generated numbers
  * @param {number} GeneratedRandomPhoneNumbers
  * @returns {Array}
  */
  static getMaxGenNumber = (GeneratedRandomPhoneNumbers) => {
      return Math.min(...GeneratedRandomPhoneNumbers);
  }
}