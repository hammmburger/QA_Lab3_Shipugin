import Car from './Car.js';

/**
 * Класс электрического автомобиля.
 *
 * Энергопотребление рассчитывается по формуле:
 *
 * E = P \ t
 *
 * где **E** — энергия (кВт⋅ч), **P** — мощность (кВт), **t** — время (ч).
 *
 * График ниже демонстрирует типичную кривую разряда аккумулятора:
 *
 * ![Батарея](../images/charge_graph.png)
 *
 * @augments Car
 * @class ElectricCar
 * @property {number} batteryCapacity Ёмкость батареи (кВт⋅ч)
 * @property {number} chargeLevel Уровень заряда (0–100 %)
 */
export default class ElectricCar extends Car {
  /**
   * @param {string} brand
   * @param {number} year
   * @param {number} batteryCapacity
   */
  constructor(brand, year, batteryCapacity = 60) {
    super(brand, year);
    /** @type {number} */
    this.batteryCapacity = batteryCapacity;
    /** @type {number} */
    this.chargeLevel = 100;
  }

  /**
   * Разрядить батарею на percent %.
   * @param {number} percent Значение 0–100.
   * @returns {number} Новый уровень заряда.
   */
  discharge(percent) {
    this.chargeLevel = Math.max(0, this.chargeLevel - percent);
    return this.chargeLevel;
  }

  /**
   * Зарядить батарею до 100 %.
   * @returns {number} Новый уровень заряда (100).
   */
  charge() {
    this.chargeLevel = 100;
    return this.chargeLevel;
  }
}
