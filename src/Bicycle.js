import Vehicle from './Vehicle.js';

/**
 * Класс велосипеда.
 *
 * @augments Vehicle
 * @class Bicycle
 */
export default class Bicycle extends Vehicle {
  /**
   * @param {string} brand
   * @param {number} year
   * @param {number} gears Количество передач.
   */
  constructor(brand, year, gears = 1) {
    super(brand, year);
    /** @type {number} */
    this.gears = gears;
  }
}
