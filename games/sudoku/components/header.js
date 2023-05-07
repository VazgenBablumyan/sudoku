import { createElement } from "../helper/createElement.js";

 export function Header(){
    const header = createElement("h1",{class: "gameName"}, "Sudoku")
    const head = createElement("header",{class:"header"}, header)
    head.appendChild(header)
    return header
    }