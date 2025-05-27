import Vehicle from './Vehicle.js';

/**
 * Класс, описывающий автомобиль.
 *
 * @augments Vehicle
 * @class Car
 * @property {number} speed  Текущая скорость (км/ч)
 */
export default class Car extends Vehicle {
  /**
   * @param {string} brand
   * @param {number} year
   */
  constructor(brand, year) {
    super(brand, year);
    /** @type {number} */
    this.speed = 0;
  }

  /**
   * Ускориться на указанную величину.
   * @param {number} delta Скорость, на которую нужно ускориться.
   * @returns {number} Новая скорость.
   */
  accelerate(delta) {
    this.speed += delta;
    return this.speed;
  }

  /**
   * Остановить автомобиль.
   * @returns {number} Скорость (всегда 0).
   */
  brake() {
    this.speed = 0;
    return this.speed;
  }
}
