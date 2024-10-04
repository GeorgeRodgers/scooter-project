```mermaid
---
title: Scooter Project
---
classDiagram
    
    Scooter --* ScooterApp
    User --* ScooterApp
    
    class ScooterApp{
            +obj stations
            +obj registeredUsers
            +registerUser(username, password, age)
            +loginUser(username, password)
            +logoutUser(username)
            +createScooter(station)
            +dockScooter(scooter, station)
            +rentScooter(scooter, user)
            +print()
        }

    class Scooter{
        +str station
        +obj user
        +num serial
        +num charge
        +bool isBroken
        +rent(user)
        +dock(station)
        +recharge()
        +requestRepair()
    }
    class User{
        +str username
        +str password
        +num age
        +bool loggedIn
        +login(password)
        +logout()
    }