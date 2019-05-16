import domBuilder from "./domBuilder"



const domReset = (nothing) => {
    domBuilder.clearDom()
    .then (domBuilder.outPut(nothing));
}

export default domReset