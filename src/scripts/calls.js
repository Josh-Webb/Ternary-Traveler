import domReset from "./resetDom"
import API from "./APICall.js"

const call = {
     getConfirmation(ID) {
        var retVal = confirm("Do you want to continue ?")
        if( retVal === true ) {
             API.delete("http://localhost:8088/interests", ID)
             .then(domReset());
        }
    }
}

export default call;