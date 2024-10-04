const Scooter = require('../src/Scooter')

const {describe, test, expect, beforeAll} = require(`@jest/globals`)

// typeof scooter === object

let scooter1;
let scooter2;

describe('scooter object', () => {
  beforeAll(() => { // Before all of the test initilises two scooters at different stations
    scooter1 = new Scooter(`stationA`)
    scooter2 = new Scooter(`stationB`)
  })
  test('Scooter class should create Scooter instance', () => {// Checks each scooter is an instance of the scooter class
    expect(scooter1).toBeInstanceOf(Scooter);
    expect(scooter2).toBeInstanceOf(Scooter);
  })
  test('Newly created instance of Scooter had the corrrect parameters', () => {
    expect(scooter1.station).toBe(`stationA`);// scooter1 has correct station
    expect(scooter2.station).toBe(`stationB`);// scooter2 has correct station
    expect(scooter1.getUser()).toBe(null);// user property set to null
    expect(scooter1.getSerial()).toBe(1);// scooter1 has correct serial
    expect(scooter2.getSerial()).toBe(2);// scooter2 has correct serial
    expect(scooter1.getCharge()).toBe(100);// Initial charge set to 100
    expect(scooter1.getIsBroken()).toBe(false);// isBroken property set to false
  })
})

// Method tests
describe('scooter methods', () => {
  // tests here!

  // rent method

  // dock method

  // requestRepair method

  // charge method

})
