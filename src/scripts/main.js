import APIManager from "./dbCalls";
import API from "./APICall";
import domBuilder from "./domBuilder"

let placesURL =  "http://localhost:8088/places"

//testing import of dbcalls and calling getAllPlaces
APIManager.getAllPlaces()
    .then((places) => {
        console.log("Oh the places you will go:", places);
    });

let allPlaces = API.getAll(placesURL)

console.log("What the fuuuuuck?")
console.log(allPlaces, "what the fuck?")


const test = API.getOne(placesURL, 1)
console.log(test)


console.log("WHO?")
domBuilder.outPut();
domBuilder.input();

