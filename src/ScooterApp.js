// require the User and Scooter classes - see where they can be used in ScooterApp.js
const Scooter = require(`./Scooter`);
const User = require(`./User`);

class ScooterApp {
  // ScooterApp code here
  static #stations = { // Stations objects should be static due to it belonging to the app, it is also protected so it can not be altered with out the correct use of a function
    StationA: [],
    StationB: [],
    StationC: []
  };
  static #registeredUsers = []; // Registered user should be static and protected as well

  static registerUser(username, password, age){
    if (age < 18){
      console.error(`Error: You are too young to register`) // Checks if the user registering is too youg to register and logs an error
    } else if (ScooterApp.getRegisteredUsers().includes(username)){
      console.error(`Error: You have already registered`) // Checks if the user is already register and logs an error
    } else {
      const newUser = new User(username, password, age) // Creates the new user and saves it to a variable 
      ScooterApp.#registeredUsers.push(newUser); // variable is pushed to the static registered users list
      console.log(`${newUser.getUsername()} has been registered as a new user`) // Logs that the new user has been registered
      return newUser; // Returns the new user
    }
  }

  static getRegisteredUsers(){ // Function to create a public array of the usernames to aid other functions 
    const userList = []; // Create the empty array
    for (let i = 0; i < ScooterApp.#registeredUsers.length; i++){
      userList.push(ScooterApp.#registeredUsers[i].getUsername()); // Loops through the registered users and pushes the username into the array
    } return userList // eturns the array
  }

  static getStationsList(){
    return Object.keys(ScooterApp.#stations); // Returns the keys of the station object as an array for searching on other functions
  }

  static loginUser(username, password){
    if (ScooterApp.getRegisteredUsers().includes(username)){ // Uses the array of usernames to check if the user exists
      for (let i = 0; i < ScooterApp.#registeredUsers.length; i++){ // Loops through the the registered user object to find the user
        if ((ScooterApp.#registeredUsers[i].getUsername() === username)){
          ScooterApp.#registeredUsers[i].login(password); // Logins in that user, Error meesgaes provided by user.login() function
        }
      }
    } else {
      console.error(`Error: Username does not exist`) // Logs error is user does not exist
    }
  }

  static logoutUser(username){
    if (ScooterApp.getRegisteredUsers().includes(username)){ // Uses the array of usernames to check if the user exists
      for (let i = 0; i < ScooterApp.#registeredUsers.length; i++){ // Loops through the the registered user object to find the user
        if ((ScooterApp.#registeredUsers[i].getUsername() === username)){
          ScooterApp.#registeredUsers[i].logout(); // Logs that user out, Error meesgaes provided by user.login() function
        }
      }
    } else {
      console.error(`Error: Username is incorrect`) // Logs error is user does not exist
    }
  }

  static createScooter(station){
    if (ScooterApp.getStationsList().includes(station)){ // Checks station provided is in the list
      let newScooter = new Scooter(station); // Creates a new instance of the cooter class and saves it to a variable
      ScooterApp.#stations[station] += newScooter; // Add the new scooter to the stations object array. Could creata statc object the publically stores the serial numbers for the scooter here
      return newScooter; // returns the new scooter
    } else {
      console.error(`Error: Station does not exist`) // Log error if sattion provided does not exist
    }
  }

  static dockScooter(scooter, station){
    if(scooter.station === station){ // Checks if a scooter is already docked at the station
      console.error(`Error: Scooter already docked at this station`) // Logs and error
    } else if (ScooterApp.getStationsList().includes(station)){ // Checks if station exiss
      ScooterApp.#stations[station] += scooter; // Adds the scooter to the stations object array
      scooter.station = station; // Sets the scooter loaction 
      scooter.recharge(); // Begins recharging the scooter
    } else {
      console.error(`Error: Station does not exist`) // Logs error if station does not exist
    }
  }

  //NEED TO FINSH THIS FUNCTION!!!

  static rentScooter(scooter, user){
    if(scooter.getUser != null){
      console.error(`Error: Scooter already rented`)
    }

  }
}

module.exports = ScooterApp
