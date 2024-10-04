class Scooter {
  // scooter code here
  static nextSerial = 1; // nextSerial set to 1 so that first scooter is always 1. This is a static property as it keeps track of the scooters created
  #user // All these properties are protected so they cannot be edited outside of the class
  #serial
  #charge
  #isBroken
  constructor(station){ // Only the station property is provided to the constructor
    this.station = station;
    this.#user = null; // A scooter does not have a user when it is first created
    this.#serial = Scooter.nextSerial; // Sets the scooter serial
    Scooter.nextSerial++; // Incriments the static property
    this.#charge = 100; // Initialise with charge set to 100
    this.#isBroken = false; // Initialise as not broken
  }

  getUser(){ // getter return user
    return this.#user;
  }

  getSerial(){ // getter returns serial number
    return this.#serial
  }

  getCharge(){ // gettter returns charge
    return this.#charge
  }

  setCharge(charge){ // setter allows changing of charge for testing, checks input is a number and not greater than 100
    if (typeof charge != `number`){
      console.error(`Error: Input must be a number`)
    } else if (charge <= 100){
      this.#charge = charge;
    } else {
      console.error(`Error: Input must be less than 100`)
    }
  }

  getIsBroken(){ // getter returns isBroken
    return this.#isBroken;
  }

  setIsBroken(boolean){ // setter allows changing of Broken status for testing, checks input is a boolean
    if (typeof boolean != `boolean`){
      console.error(`Error: Input must be a boolean`)
    } else {
      this.#isBroken = boolean;
    }
  }

  rent(user){
    if (this.#isBroken === true){ // Checks if the scooter is broken
      console.error(`Error: scooter needs repair`)
    }else if(this.#charge > 20){ // Checks scooter has enough charge to rented
      this.station = null;
      this.#user = user;
    } else {
      console.error(`Error: scooter needs to charge`) // If other condition are not met, the scooter must not have enough charge
    }
  }

  async recharge() {
    console.log(`Scooter${this.#serial} is charging`); // Logs which scooter is charging
    this.#user = null;
    
    while(this.#charge < 100){
      await new Promise(resolve => setTimeout(resolve, 100)); // Waits tennth of second before incrimenting charge
      this.#charge++;
      if (this.#charge % 20 === 0 && this.#charge != 100){ // logs the scooter charge every 20% interval but not when 100%
        console.log(`Scooter${this.#serial} current charge level is ${this.#charge}%`)
      }
    }
    console.log(`Scooter${this.#serial} is fully charged`); // Logs that the scooter is fully charged
  }

  async requestRepair(){
    console.log(`Scooter${this.#serial} is undergoing repair`); // Logs which scooter is undergoing repair
    await new Promise(resolve => setTimeout(resolve, 5000)); // Waits 5 seconds before before setting isBroken to false
      this.#isBroken = false; // The scooter is no longer broken
    console.log(`Scooter${this.#serial} has been repaired`); // Logs that the scooter has been repaired
  }
}

module.exports = Scooter
