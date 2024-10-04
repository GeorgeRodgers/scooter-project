```mermaid
---
title: Scooter Project Class Diagram
---
classDiagram
    
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
        $num nextSerial
        +str station
        #num serial
        #obj user: null
        #num charge: 100
        #bool isBroken: false
        +rent(user) null
        +dock(station) null
        +recharge() str
        +requestRepair() str
    }
    class User{
        +str username
        +str password
        +num age
        +bool loggedIn
        +login(password)
        +logout()
    }