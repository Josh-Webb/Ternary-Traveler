import API from "./APICall"



// const clearDom = () => {
//     document.getElementById("output").innerHTML = "";
// }

function getConfirmation(ID) {
    var retVal = confirm("Do you want to continue ?");
    if( retVal === true ) {
         API.delete("http://localhost:8088/interests", ID)
         .then(location.reload(forcedReload))
    }
 }


const domBuilder = {
    outPut() {
        API.getAll("http://localhost:8088/interests")
        .then(interests => 
            interests.forEach(interest => {
                let ID = interest.id
                let output = document.getElementById("output")

                let addInterestBtn = document.createElement("button");
                addInterestBtn.textContent = "Add a New Fun Thing To Do"
                output.appendChild(addInterestBtn)

                let card = document.createElement("div")
                card.setAttribute("id", `interest${ID}`)
                
                let name = document.createElement("h3")
                name.textContent = interest.name
                card.appendChild(name)
               
                let deleteBtn = document.createElement("button")
                deleteBtn.classList.add(`deleteBtn${ID}`)
                deleteBtn.textContent = "Out with the Old!"
                deleteBtn.addEventListener("click", function(){getConfirmation(ID)});
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

    }
                     
             
    }


export default domBuilder