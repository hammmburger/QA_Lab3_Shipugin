/**
 * Базовый класс, представляющий транспортное средство.
 *
 * ![Типы транспорта](../images/vehicle_photo.png)
 *
 * @class Vehicle
 * @abstract
 * @property {string} brand  Производитель
 * @property {number} year   Год выпуска
 */
export default class Vehicle {
  /**
   * @param {string} brand
   * @param {number} year
   */
  constructor(brand, year) {
    /** @type {string} */
    this.brand = brand;
    /** @type {number} */
    this.year = year;
  }

  /**
   * Возвращает строковое описание транспортного средства.
   * @returns {string}
   */
  toString() {
    return `${this.brand} (${this.year})`;
  }
}
