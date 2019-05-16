import domReset from "./resetDom"
import API from "./APICall.js"
import domBuilder from "./domBuilder"

const call = {
     getConfirmation(ID) {
        var retVal = confirm("Do you want to continue ?")
        if( retVal === true ) {
             API.delete("http://localhost:8088/interests", ID)
             .then(domReset());
        }
    },
    addToAPI() {
           let namev = document.querySelector (".new--interest--name").value;
           let descriptionv = document.querySelector (".new--interest--description").value
           let costv = document.querySelector (".new--interest--cost").value
        //    let interestLocationv = document.querySelector(".new--interest--location").value
           let reviewv = ""
           const interestObj = {
            name: namev,
            description: descriptionv,
            cost: costv,
            review: reviewv,
            // placeId: interestLocationv
        }
        API.save("http://localhost:8088/interests", interestObj)
                .then(domReset());
    }
    }
;

export default call;