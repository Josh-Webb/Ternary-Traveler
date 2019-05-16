import API from "./APICall"
import call from "./calls"
import domReset from "./resetDom"



// const clearDom = () => {
//     document.getElementById("output").innerHTML = "";
// }

// function getConfirmation(ID) {
//     var retVal = confirm("Do you want to continue ?")
//     if( retVal === true ) {
//          API.delete("http://localhost:8088/interests", ID)
//          domReset()
//     }
//  };


const domBuilder = {
    outPut() {
        API.getAll("http://localhost:8088/interests")
        .then(interests => 
            interests.forEach(interest => {
                let ID = interest.id
                let output = document.getElementById("output")

                

                let card = document.createElement("div")
                card.setAttribute("id", `interest${ID}`)
                
                let name = document.createElement("h3")
                name.textContent = interest.name
                card.appendChild(name)
               
                let deleteBtn = document.createElement("button")
                deleteBtn.classList.add(`deleteBtn${ID}`)
                deleteBtn.textContent = "Out with the Old!"
                deleteBtn.addEventListener("click", function(){call.getConfirmation(ID)});
                card.appendChild(deleteBtn)
                
                let description = document.createElement("h4")
                description.textContent = interest.description
                card.appendChild(description)

                let cost = document.createElement("h5")
                cost.textContent = interest.cost
                card.appendChild(cost)

                

                let editBtn = document.createElement("button")
                editBtn.textContent = "Adjust Cost and Put in Your Review. :)"
                card.appendChild(editBtn)
// IT's gonna get weird as I make an API call to get the name of the location using it's ID number
                // let locationId = interest.placeId
                // let placeObj = API.getOne("http://localhost:8088/places", locationId)
                // let locationName = document.createElement("h5")
                // locationName.textContent = placeObj.name
                // card.appendChild(locationName)
                //Gotta move on

                // if (interest.review !== " ") {
                //     let review = document.createElement("p")
                //     review.textContent = interest.review
                //     card.appendChild(review)
                //     return card
                // }
                let review = document.createElement("p")
                review.textContent = interest.review
                card.appendChild(review)                

                output.appendChild(card)
                
                })
                )

    },
    input(){
        let inputContainer = document.getElementById("input");

        // create form HTML elements
        let newInterestDiv = document.createElement("div");
        let newInterestName = document.createElement("input");
        newInterestName.placeholder = "Where are we going?"
        let newInterestDescription = document.createElement("input");
        newInterestDescription.placeholder = "What's gonna be there?"
        let newInterestCost = document.createElement("input");
        newInterestCost.placeholder = "What's your expected budget there?"
        let saveInterestButton = document.createElement("button");
        saveInterestButton.classList.add("btn-outline-info")
        // let location = document.createElement("select")
        
        //         let locationOption1 = document.createElement("option")
        //         locationOption1.setAttribute("value", 1)
        //         locationOption1.textContent("Italy")
        
        //         let locationOption2 = document.createElement("option")
        //         locationOption2.setAttribute("value", 2)
        //         locationOption2.textContent("Switzerland")
        
        //         let locationOption3 = document.createElement("option")
        //         locationOption3.setAttribute("value", 3)
        //         locationOption3.textContent("New Orleans")
        
        //         // let locationOption4 = document.createElement("option")
        //         // locationOption4.setAttribute("New Orleans", "4")

        //         let locationOption5 = document.createElement("option")
        //         locationOption5.setAttribute("value", 5)
        //         locationOption5.textContent("Wisconsin")
        
        
        saveInterestButton.textContent = "Save It!"
        
        newInterestDiv.classList.add("add--interest--form");
        saveInterestButton.classList.add("interest--save--button");
        newInterestName.classList.add("new--interest--name");
        newInterestDescription.classList.add("new--interest--description");
        newInterestCost.classList.add("new--interest--cost");
        saveInterestButton.addEventListener("click", call.addToAPI)
        
        // add text to button
        
        // define input attributes
        newInterestName.setAttribute("type", "text");
        newInterestDescription.setAttribute("type", "text");
        newInterestCost.setAttribute("type", "text");

        // append input fields to the form container
        newInterestDiv.appendChild(newInterestName);
        // location.appendChild(locationOption1)
        // location.appendChild(locationOption2)
        // location.appendChild(locationOption3)
        // // newInterestDiv.appendChild(locationOption4)
        // location.appendChild(locationOption5)
        // newInterestDiv.appendChild(location)
        newInterestDiv.appendChild(newInterestDescription);
        newInterestDiv.appendChild(newInterestCost);
        newInterestDiv.appendChild(saveInterestButton);
        
        // append form container to event container (temporarily)
        inputContainer.appendChild(newInterestDiv);
    } ,
            clearDom(nothing){
                let output = document.getElementById("output");
                output.innerHTML = nothing
            }
    
    
    }

;

export default domBuilder