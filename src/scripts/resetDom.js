import domBuilder from "./domBuilder"


const domReset = () => {
    domBuilder.clearDom()
    .then(domBuilder.outPut());
}

export default domReset