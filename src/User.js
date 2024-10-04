class User {
  // User code here
  #username // All these properties are protected so they cannot be edited outside of the class
  #password
  #age
  #loggedIn
  constructor(username, password, age){
    this.#username = username;
    this.#password = password;
    this.#age = age;
    this.#loggedIn = false; // When a User class is first created they will not initally be logged in
  }

  getUsername(){ // getter returns username
    return this.#username;
  }

  getPassword(){ // getter returns password
    return this.#password;
  }

  login(password){
    if (password === this.#password){ // checks if the password matches 
      this.#loggedIn = true;
      console.log(`${this.#username} has been logged in`); // Sets login status to true and logs the user has been logged in
    } else {
      console.error(`Error: Password is incorrect`) // Logs error if password is wrong
    }
  }

  logout(){
    if (this.#loggedIn === false){
      console.error(`Error: ${this.#username} is not logged in`) // Checks if user is already logged out and returns error
    } else {
    this.#loggedIn = false;
    console.log(`${this.#username} is logged out`); // Logs user out
    }
  }

}

module.exports = User
